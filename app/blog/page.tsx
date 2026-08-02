import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { getSortedBlogPosts } from "@/lib/blog-posts";

const TITLE = "Blog";
const DESCRIPTION =
  "Practical guidance on web development, SEO, AI search and running a lean digital operation, from the team at nuj studios.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${TITLE} | nuj studios`,
    description: DESCRIPTION,
    url: "/blog",
    type: "website",
  },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const posts = getSortedBlogPosts();
  const { category } = await searchParams;

  const categories = Array.from(new Set(posts.map((post) => post.category))).sort((a, b) =>
    a.localeCompare(b)
  );
  const activeCategory = category && categories.includes(category) ? category : null;
  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog" },
        ]}
      />
      <PageHero
        eyebrow="INSIGHTS"
        title="Ideas for running a sharper digital operation."
        intro="Practical write-ups on web development, SEO, AI search and how we work with Singapore SMEs."
      />
      <section>
        <nav className="blog-filters" aria-label="Filter posts by topic">
          <Link
            href="/blog"
            className={`blog-filter${!activeCategory ? " is-active" : ""}`}
          >
            All topics
            <span className="blog-filter-count">{posts.length}</span>
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`blog-filter${activeCategory === cat ? " is-active" : ""}`}
            >
              {cat}
              <span className="blog-filter-count">
                {posts.filter((post) => post.category === cat).length}
              </span>
            </Link>
          ))}
        </nav>

        {filteredPosts.length > 0 ? (
          <div className="card-grid reveal">
            {filteredPosts.map((post) => (
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
        ) : (
          <p className="blog-empty">No posts in this topic yet. Check back soon.</p>
        )}
      </section>
    </main>
  );
}
