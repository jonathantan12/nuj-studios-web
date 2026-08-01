import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../_components/Breadcrumbs";
import PageHero from "../../_components/PageHero";
import FAQSection from "../../_components/FAQSection";
import { SERVICES, getAllServiceSlugs, getService } from "@/lib/services";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SITE_URL, WHATSAPP_URL } from "@/lib/site-config";

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

  const title = service.metaTitle ?? service.name;
  const description = service.metaDescription ?? service.summary;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${title} | nuj studios`,
      description,
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
  const relatedCaseStudies = CASE_STUDIES.filter((cs) => cs.services.includes(service.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "Organization", name: "nuj studios", url: SITE_URL },
    areaServed: "SG",
    description: service.summary,
    url: `${SITE_URL}/services/${service.slug}`,
    ...(service.pricing
      ? {
          offers: [
            {
              "@type": "Offer",
              name: `${service.name} setup fee`,
              price: service.pricing.setupFee.amount,
              priceCurrency: "SGD",
            },
            {
              "@type": "Offer",
              name: `${service.name} monthly maintenance`,
              priceCurrency: "SGD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: service.pricing.monthly.amount,
                priceCurrency: "SGD",
                unitText: "MONTH",
              },
            },
          ],
        }
      : {}),
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

      {service.context && (
        <section>
          <div className="section-head reveal">
            <h2>{service.context.heading}</h2>
          </div>
          <div className="prose reveal">
            {service.context.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {service.context.linkHref && service.context.linkLabel && (
              <p>
                <Link href={service.context.linkHref}>{service.context.linkLabel} →</Link>
              </p>
            )}
          </div>
        </section>
      )}

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

      {service.pricing && (
        <section>
          <div className="section-head reveal">
            <span className="eyebrow mono">
              <span className="dot"></span>PRICING
            </span>
            <h2>Cheaper than hiring an intern, built to an enterprise standard.</h2>
          </div>
          <div className="card-grid card-grid-2 reveal">
            <div className="card">
              <h3>{service.pricing.setupFee.display}</h3>
              <p>One-time setup fee to design, build and launch your site.</p>
            </div>
            <div className="card">
              <h3>{service.pricing.monthly.display}</h3>
              <p>Covers, every month:</p>
              <ul>
                {service.pricing.monthlyIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="prose reveal">
            <ul>
              {service.pricing.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {relatedCaseStudies.length > 0 && (
        <section className="process">
          <div className="section-head reveal">
            <span className="eyebrow mono">
              <span className="dot"></span>PROOF OF WORK
            </span>
            <h2>See it in action.</h2>
          </div>
          <div className="card-grid reveal">
            {relatedCaseStudies.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card">
                <h3>{cs.title}</h3>
                <p>{cs.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

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
          <p>Tell us what you&apos;re working with, and we&apos;ll scope it on the first call.</p>
          <a className="btn btn-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
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
