import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../_components/Breadcrumbs";
import ArticleBody from "../../_components/ArticleBody";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
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

  const title = post.metaTitle ?? post.title;

  return {
    title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
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
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "nuj studios" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

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
              {formattedDate} · {post.readTime}
            </p>
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
    </main>
  );
}
