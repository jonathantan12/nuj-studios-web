export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  pricing?: {
    setupFee: { amount: number; display: string };
    monthly: { amount: number; display: string };
    monthlyIncludes: string[];
    notes: string[];
  };
  /** SEO-optimized overrides. Falls back to `name` / `summary` if omitted. */
  metaTitle?: string;
  metaDescription?: string;
  /** Persuasive, keyword-rich context shown between the hero and deliverables. */
  context?: {
    heading: string;
    body: string[];
    linkHref?: string;
    linkLabel?: string;
  };
};

export const SERVICES: Service[] = [
  {
    slug: "ai-automation",
    name: "AI Solutions & Automation",
    short:
      "Custom AI solutions: agents for CRM, invoicing, scheduling and lead generation, wired into how your business already runs.",
    summary:
      "Custom AI solutions, from working out where AI actually fits your business to building and wiring the automation in. Agents for your CRM, invoicing, scheduling and lead-gen tools, so your team spends less time on repetitive operational work.",
    context: {
      heading: "AI built to be efficient, not impressive",
      body: [
        "Most businesses only ever encounter one shape of \"AI\": a chatbot bolted onto a website. Our work covers more of the actual AI ecosystem than that: AI agents that take real actions instead of just describing what they'd do, workflow automation that connects the tools you already run, sovereign deployment options that keep your data and models under your own control, model evaluation that checks a solution is actually reliable before it goes live, retrieval-augmented generation that grounds answers in your own business documents, and fine-tuning or model customization when a general-purpose model isn't specific enough for what you need.",
        "We're also not reflexively reaching for the biggest, most expensive model for every problem. A lot of what actually works well in production is a traditional machine learning model, for forecasting, classification, or anomaly detection, doing the part of the job it's genuinely better and cheaper at, paired with an LLM only where language understanding is actually the bottleneck. That combination is usually what keeps a solution efficient, effective, and low-cost, instead of over-engineered for the sake of using the newest thing.",
      ],
    },
    deliverables: [
      "A working session to find where AI genuinely helps your business, not where it's just trendy",
      "AI agents that take real actions, for lead qualification, FAQ handling, or internal operations, not chatbots that just describe what they'd do",
      "Workflow automation wired into the CRM, invoicing, scheduling or lead-gen tools you already use, no platform migration required",
      "Sovereign deployment options, so your data and models can stay under your own control instead of defaulting to a third-party API",
      "Model evaluation and testing before anything goes live, so a solution is proven accurate and reliable, not just impressive in a demo",
      "Retrieval-augmented generation (RAG) that grounds AI answers in your actual business documents and data",
      "Traditional machine learning, like forecasting, classification and anomaly detection, combined with LLMs wherever that's the more efficient and accurate tool for the job",
      "Documentation your team can maintain without an engineer on staff, and ongoing monitoring as your workflows change",
    ],
    faqs: [
      {
        question: "We don't know where to start with AI. Can you help?",
        answer:
          "Yes, that's exactly what we help with. We look at how your business actually runs and tell you honestly where AI will save time or money, and where it won't.",
      },
      {
        question: "Do we need to replace our existing tools?",
        answer:
          "Usually not. Custom AI solutions are wired into what you already use, like your CRM, invoicing, or scheduling, rather than requiring a platform migration.",
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
  {
    slug: "web-development",
    name: "Web Development",
    short: "SEO-ready website development, built and shipped from concept to live in days.",
    summary:
      "Fast, accessible, conversion-focused websites built on modern infrastructure. Designed, coded and shipped by the same in-house team that maintains them.",
    metaTitle: "Website Development Singapore for SMEs",
    metaDescription:
      "Website development for Singapore SMEs from S$800, plus S$50/month hosting and maintenance. Fast, SEO-ready sites built and managed in-house, no lock-in.",
    context: {
      heading: "Why website development matters for a Singapore SME",
      body: [
        "Most SMEs lose customers to their website, not their product. A slow homepage, a site that's hard to read on a phone, or a design that hasn't changed in five years all quietly push visitors to a competitor before they see what you actually offer.",
        "Google notices the same problems. Search engines rank fast, mobile-friendly, well-structured sites higher, so a website built on shaky foundations makes every other marketing dollar you spend work harder than it needs to.",
        "A website built right does the opposite: it loads fast, ranks on Google, and gives every visitor a clear reason to get in touch.",
      ],
      linkHref: "/blog/signs-your-sme-website-is-costing-you-customers",
      linkLabel: "See the 5 most common ways an SME website quietly costs its business customers",
    },
    deliverables: [
      "Custom-designed, responsive site built on WordPress or custom code, whichever is right for your business",
      "Core Web Vitals-optimized performance out of the box",
      "On-page SEO foundations: clean URLs, semantic HTML, structured data",
      "Google Analytics and Google Search Console set up and connected from day one",
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
        question: "Do you build on WordPress or custom code?",
        answer:
          "Either, depending on what's best for your business. Tell us your preference and we'll build on that. Otherwise we'll recommend WordPress or custom code based on what your business actually needs, not a one-size-fits-all default. We don't build on drag-and-drop site builders like Wix, since they limit speed and control long term.",
      },
      {
        question: "What happens after launch?",
        answer:
          "The same team that built your site keeps it updated month to month. Content changes, performance, and fixes are part of the ongoing engagement, not a separate support ticket queue.",
      },
      {
        question: "Can you set up analytics and tracking?",
        answer:
          "Google Analytics and Google Search Console are set up as part of every build. If you also want a heatmap or user session tracking, we can add that on as well.",
      },
      {
        question: "Do I need to sign a long-term contract?",
        answer:
          "No. It's a one-time S$800 setup fee, then S$50 a month with no lock-in. Cancel any time, and we'll help transfer your domain and website back to you.",
      },
      {
        question: "I already have a website or developer. Can you take over?",
        answer:
          "Yes. We'll review what you have and tell you honestly whether it makes more sense to take over hosting and maintenance as-is, or rebuild it properly. Either way, that's a decision we make with you on the first call, not before.",
      },
    ],
    pricing: {
      setupFee: { amount: 800, display: "S$800" },
      monthly: { amount: 50, display: "S$50/month" },
      monthlyIncludes: [
        "Hosting",
        "Your .com domain name, registered and renewed for you",
        "Web maintenance, so everything keeps running smoothly",
      ],
      notes: [
        "Need something extra, like a heatmap or user tracking? Add-on services are priced separately.",
        "No lock-in. Cancel any time if you're not happy, and we'll help transfer your domain and website back to you.",
      ],
    },
  },
  {
    slug: "content-marketing",
    name: "Content Marketing & Management",
    short:
      "Content management for blogs, social media and email newsletters, produced through automated content pipelines your team doesn't have to run.",
    summary:
      "Content management and editorial systems that keep your brand publishing consistently: blog posts, social content and newsletters produced through a repeatable pipeline, not one-off freelance briefs.",
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
    name: "Google SEO Optimization",
    short:
      "Technical audits, keyword strategy and on-page work that gets your site found on Google, not just built.",
    summary:
      "Technical SEO, keyword strategy, on-page optimization and structured data, built for Google search and AI answer engines alike.",
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
          "Yes. That means structured data and answer-first content structure designed to help AI answer engines understand and cite your site, alongside traditional Google ranking work.",
      },
      {
        question: "Do you also write the content, or just optimize what exists?",
        answer:
          "Both. Google SEO and content management are usually bundled, since the two feed each other directly.",
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
