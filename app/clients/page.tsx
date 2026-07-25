import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";

const TITLE = "Clients";
const DESCRIPTION =
  "Who Nuj Studios is built for — Singapore SMEs across F&B, professional services, retail, healthcare, trades and education.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/clients" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/clients",
    type: "website",
  },
};

const INDUSTRIES = [
  {
    name: "Food & Beverage",
    description:
      "Multi-outlet booking, delivery integrations, and local SEO for restaurants, cafes and F&B brands.",
  },
  {
    name: "Professional Services",
    description:
      "Legal, accounting and consulting firms that have the reputation but not yet the online visibility to match.",
  },
  {
    name: "Retail & E-commerce",
    description:
      "Storefronts that need a fast, conversion-ready site and automated order or lead handling.",
  },
  {
    name: "Healthcare & Wellness",
    description: "Clinics and wellness practices that need booking systems and content that builds trust.",
  },
  {
    name: "Trades & Home Services",
    description:
      "Contractors and home service businesses that need to be found locally and follow up on leads fast.",
  },
  {
    name: "Education & Training",
    description: "Schools and training providers that need clear enrolment funnels and consistent content.",
  },
];

export default function ClientsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Clients" }]} />
      <PageHero
        eyebrow="WHO WE'RE BUILT FOR"
        title="Singapore SMEs who want to own their systems, not rent them."
        intro="We work best with founder-led and small teams who want one accountable partner across web, content, SEO and automation — not a rotating cast of subcontractors."
      />

      <section>
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>INDUSTRIES
          </span>
          <h2>Industries we build for</h2>
        </div>
        <div className="card-grid reveal">
          {INDUSTRIES.map((industry) => (
            <div key={industry.name} className="card">
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>CLIENT LOGOS
          </span>
          <h2>Coming soon.</h2>
          <p>
            We&apos;re a young studio — client logos and testimonials will go here as engagements
            complete. Ask us directly for references in the meantime.
          </p>
        </div>
        <div className="logo-placeholder-grid reveal">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="logo-placeholder mono">
              Your logo
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="reveal">
          <h2>Think you&apos;d be a good fit?</h2>
          <p>Tell us about your business — we&apos;ll tell you honestly if we&apos;re the right partner.</p>
          <Link className="btn btn-dark" href="/contact">
            Book a call →
          </Link>
        </div>
      </section>
    </main>
  );
}
