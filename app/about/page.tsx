import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { HOW_WE_OPERATE } from "@/lib/company";

const TITLE = "About";
const DESCRIPTION =
  "nuj studios is a boutique, in-house team building web, content, SEO and automation systems for Singapore SMEs, with no subcontractors and no handoffs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${TITLE} | nuj studios`,
    description: DESCRIPTION,
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <PageHero
        eyebrow="ABOUT NUJ STUDIOS"
        title="A boutique team, not an outsourced pipeline."
        intro="Most SMEs end up choosing between an expensive full-service agency that routes their project through account managers, or a string of freelancers with nobody accountable for the whole picture. We built a third option, and we've been doing it for Singapore SMEs since 2023."
      />

      <section>
        <div className="prose reveal">
          <h2>Why we exist</h2>
          <p>
            A website, a content calendar, search visibility, and internal automations are usually
            treated as four separate purchases from four separate vendors: a web developer, a
            content freelancer, an SEO consultant, and, increasingly, someone bolting on AI tools
            nobody fully understands.
          </p>
          <p>
            That fragmentation is where most SME digital budgets quietly leak. nuj studios keeps all
            four disciplines under one small, in-house team that treats them as one connected
            system, because a website that ranks but doesn&apos;t convert, or content that
            publishes but isn&apos;t found, both fail for the same reason: nobody owned the whole
            picture.
          </p>
          <p>
            We started nuj studios because we wanted to change how digital solutions are sold to
            SMEs. Good work shouldn&apos;t come with a high agency price tag. We keep our costs low
            and pass that saving on to you, while still delivering work built to an enterprise
            standard.
          </p>
        </div>
      </section>

      <section className="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>HOW WE OPERATE
          </span>
          <h2>What that looks like in practice</h2>
        </div>
        <div className="card-grid reveal">
          {HOW_WE_OPERATE.map((principle) => (
            <div key={principle.title} className="card">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>THE TEAM
          </span>
          <h2>Small on purpose.</h2>
          <p>
            We&apos;re a young, hands-on studio, and full team bios are coming soon as we grow. Every
            project is handled by a team of professionals with backgrounds in software
            engineering, cloud solutions and artificial intelligence, working fully in-house with
            zero outsourcing. Every engagement starts with a direct call with the people
            who&apos;ll actually do the work, not a salesperson.
          </p>
        </div>
        <div className="card-grid reveal">
          <div className="card card-placeholder">
            <h3>Web &amp; Systems</h3>
            <p>Bio coming soon</p>
          </div>
          <div className="card card-placeholder">
            <h3>Content &amp; SEO</h3>
            <p>Bio coming soon</p>
          </div>
          <div className="card card-placeholder">
            <h3>Automation</h3>
            <p>Bio coming soon</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="reveal">
          <h2>Want to talk to the actual team?</h2>
          <p>No account managers in between. Book a call and speak directly with us.</p>
          <Link className="btn btn-dark" href="/contact">
            Book a call →
          </Link>
        </div>
      </section>
    </main>
  );
}
