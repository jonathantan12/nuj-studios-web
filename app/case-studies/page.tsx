import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { CASE_STUDIES } from "@/lib/case-studies";

const TITLE = "Case Studies";
const DESCRIPTION =
  "How nuj studios approaches web development, SEO and AI automation briefs for Singapore SMEs, plus real, in-house builds like our own AI agent harness.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `${TITLE} | nuj studios`,
    description: DESCRIPTION,
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
      <PageHero
        eyebrow="PROOF OF WORK"
        title="How we approach real SME briefs."
        intro="Most of these are illustrative sample projects, not completed client engagements: a preview of how we'd approach briefs like these. A few are real, in-house builds, labeled as such. Ask us for references on a call."
      />
      <section>
        <div className="card-grid reveal">
          {CASE_STUDIES.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="card">
              <div className="card-meta">
                <span className="card-tag">{study.industry}</span>
              </div>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
