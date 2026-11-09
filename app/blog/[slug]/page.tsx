import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../_components/Breadcrumbs";
import ArticleBody from "../../_components/ArticleBody";
import CopyMarkdownButton from "../../_components/CopyMarkdownButton";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
import { blogPostToMarkdown } from "@/lib/blog-markdown";
import { richTextToPlain } from "@/lib/blog-rich-text";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.metaTitle ?? post.title;

  return {
    // seoTitle is a complete <title> (already contains the brand), so skip the layout's suffix template.
    title: post.seoTitle ? { absolute: post.seoTitle } : title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      ...(post.updated ? { modifiedTime: post.updated } : {}),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(post.updated ? { dateModified: post.updated } : {}),
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "nuj studios" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  // FAQPage JSON-LD is built from the same faq blocks that are rendered, so they always match.
  const faqItems = post.content.flatMap((block) => (block.type === "faq" ? block.items : []));
  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: richTextToPlain(item.answer) },
          })),
        }
      : null;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" });

  const formattedDate = new Date(post.date).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <article>
        <header className="page-hero">
          <div className="page-hero-inner">
            <span className="eyebrow mono">
              <span className="dot"></span>
              {post.category}
            </span>
            <h1>{post.title}</h1>
            <p className="page-hero-intro">{post.description}</p>
            <p className="page-hero-meta mono">
              {post.updated ? (
                `By ${post.author} · Updated ${formatDate(post.updated)} · ${post.readTime}`
              ) : (
                <>
                  {formattedDate} · {post.readTime}
                </>
              )}
            </p>
            <CopyMarkdownButton markdown={blogPostToMarkdown(post)} />
          </div>
        </header>
        <section>
          <ArticleBody blocks={post.content} />
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </main>
  );
}
