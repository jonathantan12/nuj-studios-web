import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import FAQSection from "../_components/FAQSection";

const TITLE = "FAQ";
const DESCRIPTION =
  "Answers to the questions we get asked most before a project starts, from pricing to contracts to the PSG grant.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/faq",
    type: "website",
  },
};

const FAQS = [
  {
    question: "How is Nuj Studios different from a typical agency?",
    answer:
      "One small, in-house team owns your website, content, SEO and automation as a single connected system. No subcontractors, no account managers relaying your feedback, and no handoffs between departments.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. Engagements run month to month after the initial build. We keep earning the work every month rather than locking you into a 12-month agreement upfront.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We're built for founder-led Singapore SMEs, particularly in food and beverage, professional services, retail and e-commerce, healthcare and wellness, trades and home services, and education. See our Clients page for more detail.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope. A five-page brochure site and a booking-enabled, multi-outlet site cost very differently, so we scope pricing precisely on the first call rather than publishing generic package prices that don't reflect real work.",
  },
  {
    question: "Can my project use the PSG (Productivity Solutions Grant)?",
    answer:
      "PSG can offset part of the cost of eligible digital projects for qualifying Singapore SMEs. Eligibility depends on your business's registration and the specific solution. We're happy to talk through whether your project might qualify as part of your scope call.",
  },
  {
    question: "Do you only build websites, or can you help with content and SEO too?",
    answer:
      "All four disciplines, web development, content marketing, SEO and AI workflow automation, are handled by the same team, so they can be engaged together or separately depending on what you actually need.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most SME sites go from kickoff to live in days to a few weeks, depending on scope. Ongoing work like content and SEO runs monthly rather than as a one-off delivery.",
  },
  {
    question: "Can you show me examples of past work?",
    answer:
      "Our Case Studies page currently shows illustrative sample projects rather than completed client engagements, since we're a young studio. As we complete real projects, we'll publish them there. Ask us directly for references in the meantime.",
  },
  {
    question: "What happens if I'm not happy with the work?",
    answer:
      "Because engagements are month to month, you're never locked into work that isn't landing. We'd rather hear that early and adjust than have you stay quiet until a contract renewal.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the Contact page or email us directly. We'll set up a short call to understand what you need before proposing anything.",
  },
];

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
        <FAQSection faqs={FAQS} />
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
