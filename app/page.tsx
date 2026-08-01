import Link from "next/link";
import DeployConsole from "./_components/DeployConsole";
import { SERVICES } from "@/lib/services";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow mono">
            <span className="dot"></span>AI SOLUTIONS FOR SINGAPORE SMES
          </span>
          <h1>AI-powered systems your business actually runs on.</h1>
          <p className="hero-sub">
            A boutique, in-house team in Singapore since 2023. Custom AI solutions, website
            development, content management, Google SEO and digital solutions consulting, all
            handled by one accountable team.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-dark" href="#contact">
              Book a call →
            </a>
            <a className="btn btn-outline" href="#process">
              See how we work
            </a>
          </div>
        </div>

        <div className="console-shell">
          <div className="console">
            <div className="console-head">
              <div className="console-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mono console-title">deploy.log</span>
            </div>
            <DeployConsole />
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="cap-inner reveal">
          <div className="cap">
            <span className="mono">{"// ai first"}</span>
            <p>We find where AI genuinely helps your business, before we build anything.</p>
          </div>
          <div className="cap">
            <span className="mono">{"// ownership"}</span>
            <p>Every system, AI workflow and line of code handled in-house.</p>
          </div>
          <div className="cap">
            <span className="mono">{"// scope"}</span>
            <p>AI, web, content, SEO and automation, under one team.</p>
          </div>
        </div>
      </section>

      <section id="why-us">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>WHO WE ARE
          </span>
          <h2>One in-house team. Six ways we help you grow.</h2>
        </div>
        <div className="prose reveal">
          <p>
            Most SMEs are priced out of proper AI and digital work, or sold tools nobody on their
            team understands. nuj studios has been the in-house alternative for Singapore SMEs
            since 2023: one small team with backgrounds in software engineering, cloud solutions
            and artificial intelligence, working directly with you from strategy to
            implementation.
          </p>
          <ul>
            <li>
              <strong>Custom AI solutions.</strong> We find where AI genuinely helps your
              business, then build and wire it in.
            </li>
            <li>
              <strong>Website development, content management and Google SEO.</strong> Built and
              managed by the same team, not handed off between vendors.
            </li>
            <li>
              <strong>Digital solutions consulting.</strong> Honest advice on what your business
              actually needs, not the biggest package we can sell.
            </li>
            <li>
              <strong>No lock-in.</strong> Simple monthly fees, and you only keep paying if
              you&apos;re happy with the work.
            </li>
          </ul>
        </div>
      </section>

      <section id="services">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>WHAT WE DO
          </span>
          <h2>AI, web, content and SEO. One accountable team.</h2>
        </div>
        <div className="service-grid reveal">
          {SERVICES.map((service) => (
            <Link key={service.slug} className="service-card" href={`/services/${service.slug}`}>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
        <div className="section-cta reveal">
          <Link className="btn btn-outline" href="/services">
            Explore all services →
          </Link>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>HOW WE WORK
          </span>
          <h2>From scope call to a system you own.</h2>
        </div>
        <ol className="process-list reveal">
          <li>
            <span className="mono step">01</span>
            <div>
              <h3>Scope call</h3>
              <p>We map what your business actually needs, not a generic package.</p>
            </div>
          </li>
          <li>
            <span className="mono step">02</span>
            <div>
              <h3>Build sprint</h3>
              <p>Our engineers build the site, content system and AI automations in parallel.</p>
            </div>
          </li>
          <li>
            <span className="mono step">03</span>
            <div>
              <h3>Ship and launch</h3>
              <p>Live in days, reviewed and tested by the people who built it.</p>
            </div>
          </li>
          <li>
            <span className="mono step">04</span>
            <div>
              <h3>Ongoing management</h3>
              <p>We keep it running: content, Google SEO and AI automation, managed month to month.</p>
            </div>
          </li>
        </ol>
      </section>

      <section id="proof">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>PROOF OF WORK
          </span>
          <h2>See how it comes together.</h2>
          <p>
            Illustrative case studies showing how we approach AI, web, content and automation
            projects for Singapore SMEs.
          </p>
        </div>
        <div className="section-cta reveal">
          <Link className="btn btn-outline" href="/case-studies">
            View case studies →
          </Link>
        </div>
      </section>

      <section className="cta-band" id="contact">
        <div className="reveal">
          <h2>Let&apos;s build the system your business runs on.</h2>
          <p>No outsourcing, no handoffs. Talk directly to the team that builds it.</p>
          <a className="btn btn-dark" href="mailto:hello@nujstudios.com">
            Book a call →
          </a>
        </div>
      </section>
    </main>
  );
}
