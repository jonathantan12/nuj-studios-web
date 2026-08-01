import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { SERVICES } from "@/lib/services";
import { WHATSAPP_URL } from "@/lib/site-config";
import { WHY_HIRE_US } from "@/lib/company";

const TITLE = "Work With Us";
const DESCRIPTION =
  "Why Singapore SMEs hire nuj studios for AI solutions, websites, content and SEO. Founder-led, in-house, and built for businesses that were priced out before.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/work-with-us" },
  openGraph: {
    title: `${TITLE} | nuj studios`,
    description: DESCRIPTION,
    url: "/work-with-us",
    type: "website",
  },
};

export default function WorkWithUsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Work With Us" }]} />
      <PageHero
        eyebrow="WORK WITH US"
        title="Let's build something worth paying for."
        intro="A boutique, in-house team helping Singapore SMEs with AI solutions, websites, content and SEO. Have a coffee chat with us. We'll get to know your business and figure out, honestly, where we can help."
      >
        <div className="hero-ctas">
          <a className="btn btn-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Book a coffee chat →
          </a>
        </div>
      </PageHero>

      <section id="services">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>SERVICES PROVIDED
          </span>
          <h2>Everything under one roof.</h2>
          <p>
            One in-house team covers all of it, so nothing gets lost between vendors or
            handed off between departments.
          </p>
        </div>
        <div className="service-grid reveal">
          {SERVICES.map((service) => (
            <Link key={service.slug} className="service-card" href={`/services/${service.slug}`}>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>WHERE WE&apos;D START
          </span>
          <h2>We map your business before we pitch anything.</h2>
          <p>
            Every business is different, so we don&apos;t lead with a generic package. Here&apos;s
            what happens on the first coffee chat or call.
          </p>
        </div>
        <ol className="process-list reveal">
          <li>
            <span className="mono step">01</span>
            <div>
              <h3>We learn your business</h3>
              <p>Your goals, your bottlenecks, and what&apos;s not working today.</p>
            </div>
          </li>
          <li>
            <span className="mono step">02</span>
            <div>
              <h3>A clear starting point</h3>
              <p>
                We tell you, honestly, the one service we think would add the most value for
                you right now.
              </p>
            </div>
          </li>
          <li>
            <span className="mono step">03</span>
            <div>
              <h3>The bigger picture</h3>
              <p>
                We also show you other ways we could help you grow, so you know what&apos;s
                possible even if it&apos;s not the first project.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="why-us">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>WHY HIRE US
          </span>
          <h2>Reasons SMEs choose to work with us.</h2>
        </div>
        <ol className="process-list reveal">
          {WHY_HIRE_US.map((reason, i) => (
            <li key={reason.title}>
              <span className="mono step">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta-band" id="contact">
        <div className="reveal">
          <h2>Have a coffee chat with us.</h2>
          <p>
            Let us get to know your business and figure out, honestly, how we can help solve
            your problems. We aim to over deliver on value.
          </p>
          <a className="btn btn-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Book a coffee chat →
          </a>
        </div>
      </section>
    </main>
  );
}
