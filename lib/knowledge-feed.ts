import { SERVICES } from "./services";
import { CASE_STUDIES } from "./case-studies";
import { getVisibleBlogPosts, getSortedBlogPosts } from "./blog-posts";
import { SITE_FAQS } from "./faqs";
import { CLIENT_INDUSTRIES } from "./clients";
import { HOW_WE_OPERATE, WHY_HIRE_US } from "./company";
import { GLOSSARY_TERMS } from "./glossary";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "./site-config";

/**
 * Short index for AI agents, following the llms.txt spec (llmstxt.org): an H1 title, a
 * blockquote summary, prose context with no headings, then H2 sections that are pure
 * markdown link lists (`[name](url): notes`), ending with a spec-convention "Optional"
 * section for links that can be skipped under a tighter context budget.
 */
export function buildLlmsTxt(): string {
  const webDev = SERVICES.find((s) => s.slug === "web-development");
  const pricingNote = webDev?.pricing
    ? ` Website development pricing is published (${webDev.pricing.setupFee.display} setup, ${webDev.pricing.monthly.display} after), see /services/web-development for the full breakdown.`
    : "";

  const lines: string[] = [];

  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push(`> ${SITE_TAGLINE}`);
  lines.push("");
  lines.push(
    `${SITE_DESCRIPTION} ${SITE_NAME} is a boutique, in-house digital studio serving Singapore SMEs since 2023.${pricingNote}`
  );
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const service of SERVICES) {
    lines.push(`- [${service.name}](${SITE_URL}/services/${service.slug}): ${service.short}`);
  }
  lines.push("");

  lines.push("## Company");
  lines.push("");
  lines.push(`- [About](${SITE_URL}/about): Why ${SITE_NAME} exists and how the team operates.`);
  lines.push(
    `- [Work With Us](${SITE_URL}/work-with-us): Why Singapore SMEs hire ${SITE_NAME}, and how a first coffee chat works.`
  );
  lines.push(
    `- [Case Studies](${SITE_URL}/case-studies): Mostly illustrative sample projects showing our approach; a few entries are real, in-house builds, labeled as such.`
  );
  lines.push(`- [Clients](${SITE_URL}/clients): Industries and business types we're built for.`);
  lines.push(
    `- [Contact](${SITE_URL}/contact): ${CONTACT_EMAIL}, WhatsApp +65 ${formatSgPhone(WHATSAPP_NUMBER)}, Singapore.`
  );
  lines.push("");

  lines.push("## Resources");
  lines.push("");
  lines.push(`- [Resources](${SITE_URL}/resources): Hub linking to the blog, FAQ and glossary.`);
  lines.push(
    `- [Blog](${SITE_URL}/blog): Practical writing on AI, web development, SEO and running a lean digital operation.`
  );
  lines.push(
    `- [FAQ](${SITE_URL}/faq): Answers to common questions about pricing, contracts and timelines.`
  );
  lines.push(`- [Glossary](${SITE_URL}/glossary): Plain-English definitions for SEO and AI search terms.`);
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(
    `- [Full knowledge base](${SITE_URL}/llms-full.txt): Every blog post listed as a manifest (title, topic, description) with a link to its full Markdown text at /md/blog/{slug}. Services and case studies included in full, each also individually available at /md/services/{slug} and /md/case-studies/{slug}.`
  );

  return lines.join("\n");
}

function formatSgPhone(number: string): string {
  // "6589791210" -> "8979 1210" (strip leading 65 country code, space the rest)
  const local = number.startsWith("65") ? number.slice(2) : number;
  return `${local.slice(0, 4)} ${local.slice(4)}`;
}

/** Complete site content in one markdown document, for a harness to ingest in a single fetch. */
export function buildLlmsFullTxt(): string {
  const sections: string[] = [];

  sections.push(
    [
      `# ${SITE_NAME}: full knowledge base`,
      "",
      `> ${SITE_TAGLINE}`,
      "",
      SITE_DESCRIPTION,
      "",
      `This file is generated directly from ${SITE_NAME}' live site data and reflects the current state of the business: services, pricing, case studies, blog posts, FAQs and glossary. For a short index instead, see ${SITE_URL}/llms.txt.`,
    ].join("\n")
  );

  // Company
  const companyLines: string[] = ["## Company", ""];
  companyLines.push(`${SITE_NAME} (${SITE_URL}) is a boutique, in-house digital studio based in Singapore, serving SMEs since 2023.`);
  companyLines.push("");
  companyLines.push("### How we operate");
  companyLines.push("");
  for (const point of HOW_WE_OPERATE) {
    companyLines.push(`- **${point.title}.** ${point.description}`);
  }
  companyLines.push("");
  companyLines.push("### Why SMEs hire us");
  companyLines.push("");
  for (const point of WHY_HIRE_US) {
    companyLines.push(`- **${point.title}.** ${point.description}`);
  }
  companyLines.push("");
  companyLines.push("### Industries we work with");
  companyLines.push("");
  for (const industry of CLIENT_INDUSTRIES) {
    companyLines.push(`- **${industry.name}:** ${industry.description}`);
  }
  companyLines.push("");
  companyLines.push("### Contact");
  companyLines.push("");
  companyLines.push(`- Email: ${CONTACT_EMAIL}`);
  companyLines.push(`- WhatsApp: +65 ${formatSgPhone(WHATSAPP_NUMBER)}`);
  companyLines.push("- Location: Singapore, working with SMEs across the island");
  sections.push(companyLines.join("\n"));

  // Services
  const serviceLines: string[] = ["## Services", ""];
  for (const service of SERVICES) {
    serviceLines.push(`### ${service.name}`);
    serviceLines.push("");
    serviceLines.push(`URL: ${SITE_URL}/services/${service.slug}`);
    serviceLines.push(`Markdown: ${SITE_URL}/md/services/${service.slug}`);
    serviceLines.push("");
    serviceLines.push(service.summary);
    serviceLines.push("");
    serviceLines.push("Deliverables:");
    for (const item of service.deliverables) {
      serviceLines.push(`- ${item}`);
    }
    if (service.pricing) {
      serviceLines.push("");
      serviceLines.push(
        `Pricing: ${service.pricing.setupFee.display} one-time setup fee, then ${service.pricing.monthly.display} covering ${service.pricing.monthlyIncludes.join(", ").toLowerCase()}.`
      );
      for (const note of service.pricing.notes) {
        serviceLines.push(`- ${note}`);
      }
    }
    serviceLines.push("");
    serviceLines.push("FAQs:");
    for (const faq of service.faqs) {
      serviceLines.push(`- Q: ${faq.question}`);
      serviceLines.push(`  A: ${faq.answer}`);
    }
    serviceLines.push("");
  }
  sections.push(serviceLines.join("\n").trimEnd());

  // Case studies
  const caseStudyLines: string[] = [
    "## Case studies",
    "",
    "Mostly illustrative sample projects, not verified completed client engagements. Entries marked \"Real build\" are genuine, in-house work.",
    "",
  ];
  for (const study of CASE_STUDIES) {
    caseStudyLines.push(`### ${study.title}`);
    caseStudyLines.push("");
    caseStudyLines.push(`URL: ${SITE_URL}/case-studies/${study.slug}`);
    caseStudyLines.push(`Markdown: ${SITE_URL}/md/case-studies/${study.slug}`);
    caseStudyLines.push(`Type: ${study.kind === "internal" ? "Real, in-house build" : "Illustrative sample project"}`);
    caseStudyLines.push(`Industry: ${study.industry}`);
    caseStudyLines.push(`Services used: ${study.services.join(", ")}`);
    caseStudyLines.push("");
    caseStudyLines.push(`**Challenge:** ${study.challenge}`);
    caseStudyLines.push("");
    caseStudyLines.push("**Approach:**");
    for (const step of study.approach) {
      caseStudyLines.push(`- ${step}`);
    }
    caseStudyLines.push("");
    caseStudyLines.push(`**Outcome:** ${study.outcome}`);
    caseStudyLines.push("");
  }
  sections.push(caseStudyLines.join("\n").trimEnd());

  // Blog posts: a manifest entry per post (title, topic, description, date, both URLs),
  // not the full article text. This is the part of the site that grows without bound,
  // so keeping it to metadata-only means this file stays a cheap single fetch no matter
  // how many posts get published. Read the entries below, then fetch the Markdown URL
  // for any specific post whose title and description look relevant, the same way an
  // MCP client reads a tool's name and description before deciding whether to call it.
  const blogLines: string[] = [
    "## Blog posts",
    "",
    "Each entry below is a manifest, not the article. Decide relevance from the title, " +
      "topic and description, then fetch the Markdown URL for the full text.",
    "",
  ];
  for (const post of getSortedBlogPosts()) {
    blogLines.push(`### ${post.title}`);
    blogLines.push(`Topic: ${post.category} (${post.tags.join(", ")})`);
    blogLines.push(`Date: ${post.date} · ${post.readTime}`);
    blogLines.push(`Description: ${post.description}`);
    blogLines.push(`URL: ${SITE_URL}/blog/${post.slug}`);
    blogLines.push(`Markdown: ${SITE_URL}/md/blog/${post.slug}`);
    blogLines.push("");
  }
  sections.push(blogLines.join("\n").trimEnd());

  // FAQ
  const faqLines: string[] = ["## Frequently asked questions", ""];
  for (const faq of SITE_FAQS) {
    faqLines.push(`- Q: ${faq.question}`);
    faqLines.push(`  A: ${faq.answer}`);
  }
  sections.push(faqLines.join("\n"));

  // Glossary
  const glossaryLines: string[] = ["## Glossary", ""];
  for (const term of GLOSSARY_TERMS) {
    glossaryLines.push(`- **${term.term}:** ${term.definition}`);
  }
  sections.push(glossaryLines.join("\n"));

  // Full page index
  const pageLines: string[] = ["## All pages", ""];
  pageLines.push(`- ${SITE_URL}`);
  for (const path of [
    "/about",
    "/work-with-us",
    "/services",
    "/case-studies",
    "/clients",
    "/blog",
    "/faq",
    "/glossary",
    "/resources",
    "/contact",
  ]) {
    pageLines.push(`- ${SITE_URL}${path}`);
  }
  for (const service of SERVICES) {
    pageLines.push(`- ${SITE_URL}/services/${service.slug}`);
  }
  for (const study of CASE_STUDIES) {
    pageLines.push(`- ${SITE_URL}/case-studies/${study.slug}`);
  }
  for (const post of getVisibleBlogPosts()) {
    pageLines.push(`- ${SITE_URL}/blog/${post.slug}`);
  }
  sections.push(pageLines.join("\n"));

  return sections.join("\n\n---\n\n");
}
