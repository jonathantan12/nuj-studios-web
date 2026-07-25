import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../_components/PageHero";
import Breadcrumbs from "../_components/Breadcrumbs";
import { SERVICES } from "@/lib/services";

const TITLE = "Services";
const DESCRIPTION =
  "Web development, content marketing, SEO and AI workflow automation: four disciplines, one accountable team, for Singapore SMEs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${TITLE} | Nuj Studios`,
    description: DESCRIPTION,
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <PageHero
        eyebrow="WHAT WE DO"
        title="Four disciplines. One accountable team."
        intro="Most agencies hand you between specialists and subcontractors. We keep web development, content, SEO and automation under one in-house team, so nothing gets lost in translation."
      />
      <section>
        <div className="card-grid reveal">
          {SERVICES.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="card">
              <h3>{service.name}</h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
