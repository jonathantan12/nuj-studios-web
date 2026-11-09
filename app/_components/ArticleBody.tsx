import Link from "next/link";
import type { BlogBlock, RichText } from "@/lib/blog-posts";

/** Plain strings render as before; inline nodes render links (internal via next/link, external as normal followable anchors) and bold. */
function renderRich(value: RichText) {
  if (typeof value === "string") return value;
  return value.map((node, i) => {
    if (node.type === "strong") return <strong key={i}>{node.text}</strong>;
    if (node.type === "link") {
      return node.href.startsWith("/") ? (
        <Link key={i} href={node.href} className="inline-link">
          {node.text}
        </Link>
      ) : (
        <a key={i} href={node.href} className="inline-link">
          {node.text}
        </a>
      );
    }
    return node.text;
  });
}

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{renderRich(block.text)}</p>;
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{renderRich(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{renderRich(item)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <p>{block.text}</p>
                {block.source && <cite>{block.source}</cite>}
              </blockquote>
            );
          case "link":
            return (
              <p key={i}>
                <a href={block.href} target="_blank" rel="noopener noreferrer">
                  {block.text} ↗
                </a>
              </p>
            );
          case "table":
            return (
              <div key={i} className="prose-table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((cell, j) => (
                        <th key={j} scope="col">
                          {renderRich(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, j) => (
                          <td key={j}>{renderRich(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faq":
            return (
              <div key={i} className="prose-faq">
                {block.items.map((item, j) => (
                  <div key={j} className="prose-faq-item">
                    <h3>{item.question}</h3>
                    <p>{renderRich(item.answer)}</p>
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
