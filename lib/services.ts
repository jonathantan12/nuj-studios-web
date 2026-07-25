export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "SEO-ready websites, built and shipped from concept to live in days.",
    summary:
      "Fast, accessible, conversion-focused websites built on modern infrastructure. Designed, coded and shipped by the same in-house team that maintains them.",
    deliverables: [
      "Custom-designed, responsive site built on modern web infrastructure, not a page builder template",
      "Core Web Vitals-optimized performance out of the box",
      "On-page SEO foundations: clean URLs, semantic HTML, structured data",
      "A content system your own team can actually update",
      "Launch support and post-launch fixes included in the handover",
    ],
    faqs: [
      {
        question: "How long does a typical website take to build?",
        answer:
          "Most SME sites go from kickoff to live in days to a few weeks, depending on scope, not months. We scope this precisely on the first call.",
      },
      {
        question: "Do you build on website builders like Wix or WordPress?",
        answer:
          "No. We build on modern web infrastructure for speed, security and control, and still hand you a site your team can edit without touching code.",
      },
      {
        question: "What happens after launch?",
        answer:
          "The same team that built your site keeps it updated month to month. Content changes, performance, and fixes are part of the ongoing engagement, not a separate support ticket queue.",
      },
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    short:
      "Blogs, social media and email newsletters, produced through automated content pipelines your team doesn't have to run.",
    summary:
      "Editorial systems that keep your brand publishing consistently: blog posts, social content and newsletters produced through a repeatable pipeline, not one-off freelance briefs.",
    deliverables: [
      "An editorial calendar aligned to your services and target audience",
      "Blog posts written and published on a consistent, agreed cadence",
      "Social media content adapted from your core long-form pieces",
      "Email newsletters that reuse the same content pipeline",
      "Reporting tied to actual traffic and inquiries, not vanity metrics",
    ],
    faqs: [
      {
        question: "Who actually writes the content?",
        answer:
          "Our in-house team, working from your actual business context, not a rotating pool of anonymous freelancers who've never spoken to you.",
      },
      {
        question: "How often will you publish?",
        answer:
          "We agree a cadence upfront based on your goals and our capacity, then hold to it. Consistent monthly output beats sporadic bursts for both SEO and audience trust.",
      },
      {
        question: "Can you work within our existing brand voice?",
        answer:
          "Yes. Every engagement starts with learning how you already talk to customers, so the content sounds like you, not like a generic agency template.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO Optimization",
    short:
      "Technical audits, keyword strategy and on-page work that gets your site found, not just built.",
    summary:
      "Technical SEO, keyword strategy, on-page optimization and structured data, built for both traditional search engines and AI answer engines.",
    deliverables: [
      "A technical SEO audit covering crawlability, site speed and indexation issues",
      "Keyword strategy mapped to real buyer intent, not just search volume",
      "On-page optimization: title tags, meta descriptions, heading structure, internal linking",
      "Structured data (schema.org) implementation for rich results and AI citation",
      "Monthly reporting tied to visibility and inquiries, not just rankings",
    ],
    faqs: [
      {
        question: "How long until we see SEO results?",
        answer:
          "Technical fixes can show up within weeks. Meaningful ranking and traffic gains typically build over 3-6 months. SEO compounds, it doesn't spike.",
      },
      {
        question: "Do you optimize for AI search tools, not just Google?",
        answer:
          "Yes. That means structured data and answer-first content structure designed to help AI answer engines understand and cite your site, alongside traditional ranking work.",
      },
      {
        question: "Do you also write the content, or just optimize what exists?",
        answer:
          "Both. SEO and content marketing are usually bundled, since the two feed each other directly.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Workflow Automation",
    short:
      "Custom agents for CRM, invoicing, scheduling and lead generation, wired into how your business already runs.",
    summary:
      "Custom automations and AI agents wired into your CRM, invoicing, scheduling and lead-gen tools, so your team spends less time on repetitive operational work.",
    deliverables: [
      "A process audit to find where manual work is actually repeatable",
      "Custom automations wired into the CRM, invoicing or scheduling tools you already use",
      "AI agents for lead qualification, FAQ handling, or internal operations",
      "Documentation your team can maintain without an engineer on staff",
      "Ongoing monitoring and adjustment as your workflows change",
    ],
    faqs: [
      {
        question: "Do we need to replace our existing tools?",
        answer:
          "Usually not. Automations are wired into what you already use, like CRM, invoicing, or scheduling, rather than requiring a platform migration.",
      },
      {
        question: "Is this only for teams with in-house engineers?",
        answer:
          "No, it's built for teams without one. The goal is less manual work for your team, not another tool your team has to learn to maintain.",
      },
      {
        question: "What's a typical first automation to start with?",
        answer:
          "Often lead intake and qualification, or invoicing reminders: repetitive, rule-based tasks with an immediate, measurable time saving.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}
