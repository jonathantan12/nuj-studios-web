import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { CASE_STUDIES } from "@/lib/case-studies";

const TITLE = "Case Studies";
const DESCRIPTION =
  "Illustrative sample projects showing how Nuj Studios approaches web development, SEO and AI automation briefs for Singapore SMEs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
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
        intro="These are illustrative sample projects, not completed client engagements — a preview of how we'd approach briefs like these. Ask us for references on a call."
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
