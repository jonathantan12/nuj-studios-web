export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Shorter title for the <title> tag, kept under ~60 chars. Falls back to `title`. */
  metaTitle?: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
  content: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-your-sme-website-is-costing-you-customers",
    title: "5 Signs Your SME Website Is Costing You Customers",
    metaTitle: "5 Signs Your SME Website Is Losing Sales",
    description:
      "Most small business websites don't fail loudly — they just quietly lose inquiries. Here's what to check before you assume your site is fine.",
    date: "2026-06-02",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["Web Design", "Conversion", "SME"],
    author: "Nuj Studios Team",
    content: [
      {
        type: "p",
        text: "Most small business websites were built once, launched, and never revisited. That's not automatically a problem — but it means the cost of an underperforming site is usually invisible. Nobody files a complaint when a visitor leaves without calling. They just leave. Here are five signs worth checking for.",
      },
      { type: "h2", text: "1. It takes more than a couple of seconds to feel responsive" },
      {
        type: "p",
        text: "Speed is a trust signal before it's a technical metric. A slow first paint tells a visitor the business behind the site might be slow to respond too. If you're on a shared hosting plan running a page builder with a dozen plugins, that's usually where the drag comes from — not your internet connection.",
      },
      { type: "h2", text: "2. Your contact info requires more than one tap to find" },
      {
        type: "p",
        text: "On mobile especially, if a visitor has to hunt through a menu to find a phone number or WhatsApp link, most won't bother. Contact details — call, message, email — should be reachable from any page in one or two taps, not buried at the bottom of a 'Contact Us' page nobody clicked into.",
      },
      { type: "h2", text: "3. There's no clear next step above the fold" },
      {
        type: "p",
        text: "A visitor should know within a few seconds what you do and what to do next. If the homepage opens with a large slideshow and no clear call to action, you're asking visitors to do the work of figuring out your business instead of guiding them.",
      },
      { type: "h2", text: "4. It looks the same today as it did three years ago" },
      {
        type: "p",
        text: "Design trends move, but more importantly, your business has probably changed — new services, new positioning, new proof points. A site that hasn't been touched since launch usually isn't just visually dated, it's also not saying what's actually true about the business anymore.",
      },
      { type: "h2", text: "5. Nobody on your team can update it without calling a developer" },
      {
        type: "p",
        text: "If every price change, new testimonial, or seasonal promotion requires an email to a freelancer and a two-week wait, the site is a liability, not an asset. A website should be something your team can keep current, not something you're afraid to touch.",
      },
      { type: "h2", text: "What to check this week" },
      {
        type: "ul",
        items: [
          "Load your homepage on mobile data, not office wifi — does it feel instant or sluggish?",
          "Time how long it takes to find your phone number or booking link from the homepage.",
          "Ask someone outside the business what you do, based only on the homepage.",
          "Check the copyright year in the footer — is it still accurate?",
          "Confirm someone on your team actually has login access and knows how to use it.",
        ],
      },
      {
        type: "p",
        text: "None of this requires a full rebuild to fix — but it does require someone to actually look. That's the audit we run at the start of every engagement, before we touch a single line of code.",
      },
    ],
  },
  {
    slug: "seo-vs-ai-search-what-singapore-smes-need-to-know",
    title: "SEO vs AI Search: What Singapore SMEs Need to Know in 2026",
    metaTitle: "SEO vs AI Search for Singapore SMEs (2026)",
    description:
      "Google isn't the only place customers look anymore. Here's how ranking for AI answer engines differs from traditional SEO — and why you need both.",
    date: "2026-06-18",
    readTime: "8 min read",
    category: "SEO",
    tags: ["SEO", "AI Search", "Structured Data"],
    author: "Nuj Studios Team",
    content: [
      {
        type: "p",
        text: "For twenty years, 'SEO' meant one thing: rank in the ten blue links on Google. That's no longer the whole picture. A growing share of research and purchase-decision queries now get answered directly by AI systems — Google's AI Overviews, ChatGPT, Perplexity, and similar tools — often without the user ever clicking through to a website.",
      },
      {
        type: "p",
        text: "This doesn't replace traditional SEO. It sits alongside it, with a different set of rules for what gets surfaced and cited. Here's what's actually different, and what to do about it.",
      },
      { type: "h2", text: "Traditional SEO optimizes for ranking. AI search optimizes for citation." },
      {
        type: "p",
        text: "A search engine ranks pages and lets the user decide which to click. An AI answer engine reads multiple sources, synthesizes an answer, and decides which sources are worth citing or quoting. That means clarity and extractability matter more than keyword density ever did.",
      },
      { type: "h2", text: "What actually helps you get cited by AI systems" },
      {
        type: "ul",
        items: [
          "Structured data (schema.org markup) that explicitly tells crawlers what an entity is — an Organization, a Service, an Article, a FAQ — rather than making them infer it from prose.",
          "Answer-first writing: state the direct answer to a likely question in the first sentence or two of a section, then explain. AI systems extract the answer, not the build-up.",
          "Genuinely crawlable HTML. If your key content only renders after heavy client-side JavaScript, some AI crawlers may never see it. Server-rendered content is safer.",
          "A robots.txt that explicitly allows the AI crawlers you want indexing you (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) rather than silently blocking them by default.",
          "Consistent facts about your business across your site, directories, and social profiles — AI systems cross-reference for confidence before citing a source.",
        ],
      },
      { type: "h2", text: "What still matters exactly as much as before" },
      {
        type: "p",
        text: "Core technical SEO hasn't gone anywhere. Fast pages, clean URL structure, working internal links, accurate title tags and meta descriptions, and a real XML sitemap are still the foundation both traditional search engines and AI crawlers rely on to find and trust your content in the first place.",
      },
      { type: "h2", text: "The practical takeaway for SMEs" },
      {
        type: "p",
        text: "You don't need a separate 'AI SEO' strategy bolted onto your existing site. You need the same fundamentals — done properly — plus structured data and answer-first content that make it easy for both a search engine and a language model to understand exactly what your business does and why it's a credible source.",
      },
      {
        type: "quote",
        text: "If a machine can't parse what you do in the first two sentences, neither can a distracted human — fix it for one, and you've usually fixed it for both.",
      },
    ],
  },
  {
    slug: "managed-month-to-month-vs-agency-retainer",
    title: "Why 'Managed Month-to-Month' Beats the Traditional Agency Retainer",
    metaTitle: "Month-to-Month vs Agency Retainer Model",
    description:
      "Long lock-in contracts and layered subcontractors used to be the default agency model. Here's why more SMEs are pushing back on both.",
    date: "2026-07-05",
    readTime: "5 min read",
    category: "Working With an Agency",
    tags: ["Agency Model", "SME Strategy"],
    author: "Nuj Studios Team",
    content: [
      {
        type: "p",
        text: "The traditional digital agency retainer looks something like this: a 12-month contract, a scope document nobody reads again after signing, and a project that gets handed between three different specialists — a designer, a developer, a copywriter — none of whom talk to each other directly.",
      },
      {
        type: "p",
        text: "For a large enterprise with a dedicated marketing team to manage that coordination, it can work. For most SMEs, it's the opposite of what they need.",
      },
      { type: "h2", text: "The problems with the classic retainer" },
      {
        type: "ul",
        items: [
          "Lock-in without proof: you commit for a year before you've seen a single result.",
          "Layered handoffs: your brief passes through account managers before it reaches the person actually doing the work, and feedback has to travel back the same way.",
          "Opaque scope: 'digital marketing services' can mean almost anything, which makes it hard to know what you're actually paying for month to month.",
          "Misaligned incentives: a long contract is sold on the relationship, not necessarily on results you can point to.",
        ],
      },
      { type: "h2", text: "What a managed, month-to-month model changes" },
      {
        type: "p",
        text: "A month-to-month engagement with a small, accountable team flips the incentive. The team has to keep earning the work every month, which means the work has to keep being useful — not just billable.",
      },
      {
        type: "p",
        text: "It also removes the handoff problem. When the person who built your site is the same person who's improving your SEO and wiring up your automations, there's no translation layer where context gets lost.",
      },
      { type: "h2", text: "What to ask before signing with any agency" },
      {
        type: "ol",
        items: [
          "Who is actually doing the work — is it in-house, or subcontracted out after the sale?",
          "What happens if you want to pause or leave after month two?",
          "Can you talk directly to the person building your site, not just an account manager?",
          "What does 'done' look like for this month, specifically?",
        ],
      },
      {
        type: "p",
        text: "None of this means every retainer is bad or every month-to-month engagement is good — the structure matters less than the accountability behind it. But if you can't answer those four questions about your current setup, it's worth finding out why.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
