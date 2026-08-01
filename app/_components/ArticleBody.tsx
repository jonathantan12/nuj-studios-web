import type { BlogBlock } from "@/lib/blog-posts";

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
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
          default:
            return null;
        }
      })}
    </div>
  );
}
