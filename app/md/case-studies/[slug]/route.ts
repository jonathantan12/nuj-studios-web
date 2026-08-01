import { notFound } from "next/navigation";
import { getAllCaseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { caseStudyToMarkdown } from "@/lib/case-study-markdown";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return new Response(caseStudyToMarkdown(study), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
