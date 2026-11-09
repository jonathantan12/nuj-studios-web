#!/usr/bin/env node
// Converts reviewed Markdown article drafts into lib/blog-posts-cross-site.ts.
// Usage: node scripts/import-cross-site-articles.mjs "<drafts dir>"
// Text is converted programmatically, never rewritten. Unsupported constructs throw.
// Drafts are emitted with `draft: true`; remove that flag per post to publish.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = process.argv[2];
if (!dir) throw new Error('Usage: node scripts/import-cross-site-articles.mjs "<drafts dir>"');

// Category is not in the front matter; mapped by article number prefix.
const CATEGORY = { "01": "SEO", "02": "SEO", "03": "SEO", "04": "SEO", "05": "SEO", "06": "Web Development", "07": "AI Automation", "08": "AI Automation", "09": "SEO" };

function parseFrontMatter(raw, file) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) throw new Error(`${file}: no front matter`);
  const fm = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!kv) throw new Error(`${file}: bad front matter line: ${line}`);
    let v = kv[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = JSON.parse(v);
    fm[kv[1]] = v;
  }
  return { fm, body: raw.slice(m[0].length) };
}

/** Inline Markdown -> string, or InlineNode[] when it has links/bold. Throws on unsupported syntax. */
function inline(src, file) {
  const nodes = [];
  let rest = src;
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/;
  while (rest.length) {
    const m = re.exec(rest);
    if (!m) { nodes.push({ type: "text", text: rest }); break; }
    if (m.index > 0) nodes.push({ type: "text", text: rest.slice(0, m.index) });
    if (m[1] !== undefined) {
      if (/[\[\]`_]/.test(m[1])) throw new Error(`${file}: nested markup in bold: ${m[0]}`);
      nodes.push({ type: "strong", text: m[1] });
    } else {
      if (/[*`]/.test(m[2])) throw new Error(`${file}: markup inside link text: ${m[0]}`);
      nodes.push({ type: "link", text: m[2], href: m[3] });
    }
    rest = rest.slice(m.index + m[0].length);
  }
  const plain = nodes.map((n) => n.text).join("");
  if (/\*\*|`|(^|\s)\*[^\s]|\]\(|<[a-z/]/.test(plain)) throw new Error(`${file}: unconverted markup left in: ${plain.slice(0, 80)}`);
  if (nodes.every((n) => n.type === "text")) return nodes.map((n) => n.text).join("");
  return nodes;
}

function convert(raw, file) {
  const { fm, body } = parseFrontMatter(raw, file);
  const lines = body.replace(/\r/g, "").split("\n");
  let i = 0;
  const skipBlank = () => { while (i < lines.length && lines[i].trim() === "") i++; };

  skipBlank();
  if (lines[i] !== `# ${fm.title}`) throw new Error(`${file}: H1 does not equal title`);
  i++; skipBlank();
  const byline = `*By ${fm.author}. Last updated: ${fm.last_updated}.*`;
  if (lines[i] !== byline) throw new Error(`${file}: unexpected byline: ${lines[i]}`);
  i++;

  const blocks = [];
  let faq = null; // collecting FAQ items after "## Frequently asked questions"
  let curQ = null;

  const flushQ = () => { if (curQ) { faq.items.push(curQ); curQ = null; } };

  while (true) {
    skipBlank();
    if (i >= lines.length) break;
    const line = lines[i];

    if (line === "---") { i++; if (faq) flushQ(); continue; }
    if (line.startsWith("# ")) { throw new Error(`${file}: extra H1`); }

    if (line.startsWith("## ")) {
      flushQ();
      const text = line.slice(3).trim();
      if (faq) { blocks.push(faq); faq = null; }
      blocks.push({ type: "h2", text });
      if (text === "Frequently asked questions") faq = { type: "faq", items: [] };
      i++; continue;
    }
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      i++;
      if (faq) { flushQ(); curQ = { question: text, answer: null }; }
      else blocks.push({ type: "h3", text });
      continue;
    }
    if (line.startsWith("#### ")) throw new Error(`${file}: H4 not supported`);

    if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items = [];
      while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i]) : /^[-*] /.test(lines[i]))) {
        let item = lines[i].replace(ordered ? /^\d+\. / : /^[-*] /, "");
        i++;
        while (i < lines.length && /^ {2,}\S/.test(lines[i])) throw new Error(`${file}: nested/continued list item`);
        items.push(inline(item, file));
      }
      blocks.push({ type: ordered ? "ol" : "ul", items });
      continue;
    }

    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) { rows.push(lines[i]); i++; }
      const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const header = cells(rows[0]);
      if (!cells(rows[1]).every((c) => /^:?-{3,}:?$/.test(c))) throw new Error(`${file}: bad table separator`);
      const data = rows.slice(2).map(cells);
      for (const r of data) if (r.length !== header.length) throw new Error(`${file}: ragged table row`);
      blocks.push({ type: "table", headers: header.map((c) => inline(c, file)), rows: data.map((r) => r.map((c) => inline(c, file))) });
      continue;
    }

    if (line.startsWith(">")) throw new Error(`${file}: blockquote not handled`);

    // paragraph: consecutive non-blank, non-structural lines
    const para = [];
    while (i < lines.length && lines[i].trim() !== "" && !/^(#|---$|\||[-*] |\d+\. )/.test(lines[i])) { para.push(lines[i].trim()); i++; }
    const text = para.join(" ");
    if (curQ) {
      if (curQ.answer !== null) throw new Error(`${file}: multi-paragraph FAQ answer under "${curQ.question}"`);
      curQ.answer = inline(text, file);
    } else if (faq) {
      throw new Error(`${file}: text inside FAQ section outside a question: ${text.slice(0, 60)}`);
    } else blocks.push({ type: "p", text: inline(text, file) });
  }
  flushQ();
  if (faq) blocks.push(faq);
  for (const b of blocks) if (b.type === "faq") for (const q of b.items) if (q.answer === null) throw new Error(`${file}: FAQ question without answer: ${q.question}`);

  // readTime from visible words
  const plainOf = (v) => (typeof v === "string" ? v : v.map((n) => n.text).join(""));
  const words = blocks.flatMap((b) => {
    switch (b.type) {
      case "p": return [plainOf(b.text)];
      case "h2": case "h3": return [b.text];
      case "ul": case "ol": return b.items.map(plainOf);
      case "table": return [...b.headers, ...b.rows.flat()].map(plainOf);
      case "faq": return b.items.flatMap((q) => [q.question, plainOf(q.answer)]);
      default: return [];
    }
  }).join(" ").split(/\s+/).length;

  return {
    slug: fm.slug,
    title: fm.title,
    seoTitle: fm.seo_title,
    description: fm.meta_description,
    date: fm.last_updated,
    updated: fm.last_updated,
    readTime: `${Math.max(1, Math.round(words / 220))} min read`,
    category: CATEGORY[path.basename(file).slice(0, 2)] ?? "SEO",
    tags: fm.secondary_keywords.split(",").map((t) => t.trim()).filter(Boolean),
    author: fm.author,
    draft: true,
    content: blocks,
    _words: words,
  };
}

const files = fs.readdirSync(dir).filter((f) => /^0[1-9]-.*\.md$/.test(f)).sort();
const posts = files.map((f) => convert(fs.readFileSync(path.join(dir, f), "utf8"), f));
for (const p of posts) { console.error(`${p.slug}: ${p._words} words, ${p.content.length} blocks`); delete p._words; }

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, "..", "lib", "blog-posts-cross-site.ts");
const header = `// GENERATED by scripts/import-cross-site-articles.mjs from the reviewed Markdown drafts. Do not hand-edit text here;
// re-run the script instead. Every post is \`draft: true\` (visible only in \`next dev\`). Remove the flag to publish.
import type { BlogPost } from "./blog-posts";

export const CROSS_SITE_POSTS: BlogPost[] = `;
fs.writeFileSync(out, header + JSON.stringify(posts, null, 2) + ";\n");
console.error(`wrote ${out}`);
