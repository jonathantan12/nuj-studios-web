import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { RESOURCE_LINKS } from "@/lib/site-config";
import { getSortedBlogPosts } from "@/lib/blog-posts";

const TITLE = "Resources";
const DESCRIPTION =
  "Blog posts, FAQs and a plain-English glossary covering web development, SEO and AI search for Singapore SMEs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/resources" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  const recentPosts = getSortedBlogPosts().slice(0, 3);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      <PageHero
        eyebrow="RESOURCES"
        title="Everything we've written down."
        intro="Blog posts, answers to common questions, and a glossary of the terms we use, all in one place."
      />

      <section>
        <div className="card-grid reveal">
          {RESOURCE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card">
              <h3>{link.label}</h3>
              <p>{link.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>LATEST
          </span>
          <h2>From the blog</h2>
        </div>
        <div className="card-grid reveal">
          {recentPosts.map((post) => (
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
        <div className="section-cta reveal">
          <Link className="btn btn-outline" href="/blog">
            View all posts →
          </Link>
        </div>
      </section>
    </main>
  );
}
