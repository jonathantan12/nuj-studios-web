import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../_components/Breadcrumbs";
import PageHero from "../../_components/PageHero";
import FAQSection from "../../_components/FAQSection";
import { SERVICES, getAllServiceSlugs, getService } from "@/lib/services";
import { SITE_URL } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | Nuj Studios`,
      description: service.summary,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "Organization", name: "Nuj Studios", url: SITE_URL },
    areaServed: "SG",
    description: service.summary,
    url: `${SITE_URL}/services/${service.slug}`,
  };

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <PageHero eyebrow="SERVICE" title={service.name} intro={service.summary} />

      <section>
        <div className="section-head reveal">
          <h2>What&apos;s included</h2>
        </div>
        <div className="prose reveal">
          <ul>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />

      <section className="process">
        <div className="section-head reveal">
          <span className="eyebrow mono">
            <span className="dot"></span>OTHER SERVICES
          </span>
          <h2>Explore the rest of what we do.</h2>
        </div>
        <div className="card-grid reveal">
          {otherServices.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card">
              <h3>{s.name}</h3>
              <p>{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="reveal">
          <h2>Ready to talk about {service.name.toLowerCase()}?</h2>
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
