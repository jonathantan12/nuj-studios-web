import type { Metadata } from "next";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { CONTACT_EMAIL } from "@/lib/site-config";

const TITLE = "Contact";
const DESCRIPTION =
  "Get in touch with Nuj Studios, a boutique digital team based in Singapore, working with SMEs on web, content, SEO and automation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's talk about what you're building."
        intro="Singapore-based, working with SMEs across the island. Tell us what you're working with and we'll scope it honestly, even if that means telling you what you don't need."
      >
        <div className="hero-ctas">
          <a className="btn btn-dark" href={`mailto:${CONTACT_EMAIL}`}>
            Email {CONTACT_EMAIL} →
          </a>
        </div>
      </PageHero>

      <section>
        <div className="card-grid reveal">
          <div className="card">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>The fastest way to reach us directly, no contact form queue.</p>
          </div>
          <div className="card">
            <h3>Location</h3>
            <p>Singapore</p>
            <p>Working with SMEs across the island, remote-friendly for everything after kickoff.</p>
          </div>
          <div className="card">
            <h3>Response time</h3>
            <p>Within one business day</p>
            <p>We reply personally. You won&apos;t hear from a bot or a ticket system.</p>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>WHAT HAPPENS NEXT
          </span>
          <h2>Three steps, no sales deck.</h2>
        </div>
        <ol className="process-list reveal">
          <li>
            <span className="mono step">01</span>
            <div>
              <h3>You tell us what you need</h3>
              <p>A quick email or call about what you&apos;re working with and what&apos;s not working today.</p>
            </div>
          </li>
          <li>
            <span className="mono step">02</span>
            <div>
              <h3>We scope it honestly</h3>
              <p>A clear, specific proposal, not a generic package, and not upsold beyond what you actually need.</p>
            </div>
          </li>
          <li>
            <span className="mono step">03</span>
            <div>
              <h3>We get to work</h3>
              <p>Direct access to the people building your systems, from kickoff through ongoing management.</p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
}
