export type CaseStudy = {
  slug: string;
  title: string;
  /** Shorter title for the <title> tag, kept under ~60 chars. Falls back to `title`. */
  metaTitle?: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  services: string[];
};

/**
 * Illustrative sample projects describing how Nuj Studios approaches common
 * SME briefs. These are not completed client engagements, replace with real,
 * named case studies as they become available.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fnb-multi-outlet-booking-system",
    title: "Unifying reservations across a multi-outlet F&B brand",
    metaTitle: "F&B Multi-Outlet Booking Case Study",
    industry: "Food & Beverage",
    summary:
      "Consolidating five separate outlet pages into one fast, mobile-first site with a shared booking flow and automated confirmations.",
    challenge:
      "A growing F&B brand had opened five outlets, but each had its own outdated page and manual, phone-based reservation process. Staff spent hours each day confirming bookings by hand, and there was no consistent brand presence tying the outlets together online.",
    approach: [
      "Audited the existing outlet pages and booking workflow to map every manual step",
      "Designed and built a single, fast, mobile-first site covering all outlets under one brand system",
      "Built a shared booking flow with outlet-specific availability",
      "Wired up automated confirmation and reminder messages, removing manual back-and-forth",
      "Added local SEO foundations (structured data, per-outlet landing sections) for map and search visibility",
    ],
    outcome:
      "The brand moved from five disconnected pages and phone-based bookings to one coherent site with a self-service reservation flow. Staff time previously spent on manual confirmations was redirected to service, and the brand gained a single, consistent presence across all outlets.",
    services: ["web-development", "ai-automation"],
  },
  {
    slug: "professional-services-seo-overhaul",
    title: "Giving an established firm the online visibility its reputation already earned",
    metaTitle: "Professional Services SEO Case Study",
    industry: "Professional Services",
    summary:
      "A technical SEO audit, on-page overhaul and ongoing content system for a firm with strong offline reputation but almost no organic search presence.",
    challenge:
      "A professional services firm had built a strong reputation through referrals over a decade, but their website was effectively invisible in search: slow, thin on content, and missing the technical foundations search engines need to index and trust a site.",
    approach: [
      "Ran a full technical SEO audit covering crawlability, indexation, and site speed",
      "Rebuilt on-page foundations: title tags, meta descriptions, heading structure, internal linking",
      "Implemented structured data so search engines and AI answer engines could understand the firm's services and credentials",
      "Set up an ongoing content system to publish on the topics their clients actually search for",
      "Established monthly reporting tied to visibility and inquiries rather than vanity metrics",
    ],
    outcome:
      "The firm went from being effectively unindexed for its core services to having a technically sound, content-backed site actively targeting the searches its ideal clients run. Visibility work continues month to month as part of an ongoing SEO engagement.",
    services: ["seo", "content-marketing"],
  },
  {
    slug: "retail-ai-lead-qualification",
    title: "Freeing up a sales team from manual lead triage",
    metaTitle: "Retail AI Lead Qualification Case Study",
    industry: "Retail",
    summary:
      "An AI-assisted lead-qualification agent wired directly into the existing CRM, cutting out hours of manual enquiry sorting each week.",
    challenge:
      "A retail SME's sales team was manually reading and triaging every website enquiry before deciding who to follow up with, a repetitive, rule-based task eating hours each week that could otherwise go toward actually closing deals.",
    approach: [
      "Mapped the existing enquiry-to-follow-up workflow to find where the manual bottleneck actually was",
      "Built an AI agent to read incoming enquiries, apply the team's existing qualification criteria, and tag leads accordingly",
      "Wired the agent directly into their existing CRM, with no platform migration required",
      "Documented the workflow so the team could adjust qualification rules themselves",
      "Set up monitoring so misclassified leads could be caught and corrected quickly",
    ],
    outcome:
      "Manual lead triage was replaced with an automated first pass, freeing the sales team to spend their time on qualified conversations instead of sorting enquiries. The workflow remains owned and adjustable by the client's own team.",
    services: ["ai-automation"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
