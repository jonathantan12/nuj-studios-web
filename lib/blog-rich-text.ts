import type { RichText } from "./blog-posts";

/** Markdown for a paragraph or list item (links and bold kept). */
export function richTextToMarkdown(value: RichText): string {
  if (typeof value === "string") return value;
  return value
    .map((node) => {
      switch (node.type) {
        case "strong":
          return `**${node.text}**`;
        case "link":
          return `[${node.text}](${node.href})`;
        default:
          return node.text;
      }
    })
    .join("");
}

/** Plain text with no markup, for JSON-LD and any place that must not contain markdown. */
export function richTextToPlain(value: RichText): string {
  if (typeof value === "string") return value;
  return value.map((node) => node.text).join("");
}
