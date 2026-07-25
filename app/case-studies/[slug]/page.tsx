import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../_components/Breadcrumbs";
import PageHero from "../../_components/PageHero";
import { CASE_STUDIES, getAllCaseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { getService } from "@/lib/services";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = study.metaTitle ?? study.title;

  return {
    title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${title} | Nuj Studios`,
      description: study.summary,
      url: `/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const otherStudies = CASE_STUDIES.filter((s) => s.slug !== study.slug);
  const relatedServices = study.services
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => Boolean(service));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    about: study.industry,
    publisher: { "@type": "Organization", name: "Nuj Studios" },
    mainEntityOfPage: `${SITE_URL}/case-studies/${study.slug}`,
  };

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.title },
        ]}
      />
      <PageHero eyebrow={study.industry} title={study.title} intro={study.summary}>
        <p className="notice mono">
          Illustrative sample project — this shows how we&apos;d approach a brief like this, not a
          completed client engagement.
        </p>
      </PageHero>

      <section>
        <div className="prose reveal">
          <h2>The challenge</h2>
          <p>{study.challenge}</p>
          <h2>Our approach</h2>
          <ul>
            {study.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>The outcome</h2>
          <p>{study.outcome}</p>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="process">
          <div className="section-head reveal">
            <span className="eyebrow mono">
              <span className="dot"></span>RELATED SERVICES
            </span>
            <h2>Services used in this project</h2>
          </div>
          <div className="card-grid reveal">
            {relatedServices.map((service) => (
              <Link key={service!.slug} href={`/services/${service!.slug}`} className="card">
                <h3>{service!.name}</h3>
                <p>{service!.short}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {otherStudies.length > 0 && (
        <section>
          <div className="section-head reveal">
            <span className="eyebrow mono">
              <span className="dot"></span>MORE CASE STUDIES
            </span>
            <h2>Other sample projects</h2>
          </div>
          <div className="card-grid reveal">
            {otherStudies.map((s) => (
              <Link key={s.slug} href={`/case-studies/${s.slug}`} className="card">
                <div className="card-meta">
                  <span className="card-tag">{s.industry}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="reveal">
          <h2>Have a similar project in mind?</h2>
          <p>Tell us what you&apos;re working with — we&apos;ll scope it on the first call.</p>
          <a className="btn btn-dark" href="mailto:hello@nujstudios.com">
            Book a call →
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
