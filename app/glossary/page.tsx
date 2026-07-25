import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-config";

const TITLE = "Glossary";
const DESCRIPTION =
  "Plain-English definitions for the SEO, AI search and web terms we use, from Core Web Vitals to structured data to the PSG grant.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/glossary",
    type: "website",
  },
};

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Nuj Studios AI SEO and Web Glossary",
    description: DESCRIPTION,
    url: `${SITE_URL}/glossary`,
    hasDefinedTerm: GLOSSARY_TERMS.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
    })),
  };

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Glossary" },
        ]}
      />
      <PageHero
        eyebrow="GLOSSARY"
        title="SEO and AI search terms, in plain English."
        intro="Reference definitions for the terms we use across our services and blog. No jargon left unexplained."
      />

      <section>
        <dl className="glossary-list reveal">
          {GLOSSARY_TERMS.map((item) => (
            <div key={item.term} className="glossary-item">
              <dt className="glossary-term">{item.term}</dt>
              <dd className="glossary-definition">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cta-band">
        <div className="reveal">
          <h2>Want this handled instead of DIY?</h2>
          <p>We build these fundamentals into every project by default.</p>
          <Link className="btn btn-dark" href="/services/seo">
            See our SEO service →
          </Link>
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
