import type { BlogBlock, BlogPost } from "./blog-posts";
import { SITE_URL } from "./site-config";

/** `headingLevel` is the markdown level for the post title; body h2/h3 blocks nest one and two below it. */
export function blockToMarkdown(block: BlogBlock, headingLevel: number): string {
  const h2 = "#".repeat(headingLevel + 1);
  const h3 = "#".repeat(headingLevel + 2);

  switch (block.type) {
    case "p":
      return block.text;
    case "h2":
      return `${h2} ${block.text}`;
    case "h3":
      return `${h3} ${block.text}`;
    case "ul":
      return block.items.map((item) => `- ${item}`).join("\n");
    case "ol":
      return block.items.map((item, i) => `${i + 1}. ${item}`).join("\n");
    case "quote":
      return `> ${block.text}${block.source ? `\n>\n> — ${block.source}` : ""}`;
    case "link":
      return `[${block.text}](${block.href})`;
    default:
      return "";
  }
}

/**
 * Serializes a post to markdown. `headingLevel` sets the post title's heading level
 * (default 1, for standalone use); pass a higher level when embedding inside a larger document
 * so the post's internal h2/h3 blocks nest correctly instead of colliding with the parent's structure.
 */
export function blogPostToMarkdown(post: BlogPost, headingLevel = 1): string {
  const titleMark = "#".repeat(headingLevel);

  const frontMatter = [
    `${titleMark} ${post.title}`,
    "",
    `*${post.category} · ${post.readTime} · ${post.date} · ${post.author}*`,
    "",
    post.description,
  ].join("\n");

  const body = post.content.map((block) => blockToMarkdown(block, headingLevel)).join("\n\n");

  const footer = [
    "---",
    "",
    `Source: [${post.title}](${SITE_URL}/blog/${post.slug}) — nuj studios`,
  ].join("\n");

  return [frontMatter, body, footer].join("\n\n");
}
