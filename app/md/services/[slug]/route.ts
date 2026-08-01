import { notFound } from "next/navigation";
import { getAllServiceSlugs, getService } from "@/lib/services";
import { serviceToMarkdown } from "@/lib/service-markdown";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return new Response(serviceToMarkdown(service), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
