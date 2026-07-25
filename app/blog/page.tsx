import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { getSortedBlogPosts } from "@/lib/blog-posts";

const TITLE = "Blog";
const DESCRIPTION =
  "Practical guidance on web development, SEO, AI search and running a lean digital operation — from the team at Nuj Studios.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <PageHero
        eyebrow="INSIGHTS"
        title="Ideas for running a sharper digital operation."
        intro="Practical write-ups on web development, SEO, AI search and how we work with Singapore SMEs."
      />
      <section>
        <div className="card-grid reveal">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
              <div className="card-meta">
                <span className="card-tag">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
