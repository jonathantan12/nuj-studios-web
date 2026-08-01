import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import FAQSection from "../_components/FAQSection";
import { SITE_FAQS } from "@/lib/faqs";

const TITLE = "FAQ";
const DESCRIPTION =
  "Answers to the questions we get asked most before a project starts, from pricing to contracts to the PSG grant.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${TITLE} | nuj studios`,
    description: DESCRIPTION,
    url: "/faq",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "FAQ" },
        ]}
      />
      <PageHero
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Questions we get asked before a project starts."
        intro="General questions about working with us. For service-specific questions, check the FAQ on each service page."
      />

      <section>
        <FAQSection faqs={SITE_FAQS} />
      </section>

      <section className="cta-band">
        <div className="reveal">
          <h2>Still have a question?</h2>
          <p>Ask us directly, no contact form queue.</p>
          <Link className="btn btn-dark" href="/contact">
            Get in touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
