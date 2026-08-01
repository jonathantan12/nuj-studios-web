import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
import { blogPostToMarkdown } from "@/lib/blog-markdown";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return new Response(blogPostToMarkdown(post), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
