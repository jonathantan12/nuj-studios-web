export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; source?: string }
  | { type: "link"; text: string; href: string };

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
      "Most small business websites don't fail loudly. They just quietly lose inquiries. Here's what to check before you assume your site is fine.",
    date: "2026-06-02",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["Web Design", "Conversion", "SME"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "Most small business websites were built once, launched, and never revisited. That's not automatically a problem, but it means the cost of an underperforming site is usually invisible. Nobody files a complaint when a visitor leaves without calling. They just leave. Here are five signs worth checking for.",
      },
      { type: "h2", text: "1. It takes more than a couple of seconds to feel responsive" },
      {
        type: "p",
        text: "Speed is a trust signal before it's a technical metric. A slow first paint tells a visitor the business behind the site might be slow to respond too. If you're on a shared hosting plan running a page builder with a dozen plugins, that's usually where the drag comes from, not your internet connection.",
      },
      { type: "h2", text: "2. Your contact info requires more than one tap to find" },
      {
        type: "p",
        text: "On mobile especially, if a visitor has to hunt through a menu to find a phone number or WhatsApp link, most won't bother. Contact details, like call, message, or email, should be reachable from any page in one or two taps, not buried at the bottom of a 'Contact Us' page nobody clicked into.",
      },
      { type: "h2", text: "3. There's no clear next step above the fold" },
      {
        type: "p",
        text: "A visitor should know within a few seconds what you do and what to do next. If the homepage opens with a large slideshow and no clear call to action, you're asking visitors to do the work of figuring out your business instead of guiding them.",
      },
      { type: "h2", text: "4. It looks the same today as it did three years ago" },
      {
        type: "p",
        text: "Design trends move, but more importantly, your business has probably changed: new services, new positioning, new proof points. A site that hasn't been touched since launch usually isn't just visually dated, it's also not saying what's actually true about the business anymore.",
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
          "Load your homepage on mobile data, not office wifi. Does it feel instant or sluggish?",
          "Time how long it takes to find your phone number or booking link from the homepage.",
          "Ask someone outside the business what you do, based only on the homepage.",
          "Check the copyright year in the footer. Is it still accurate?",
          "Confirm someone on your team actually has login access and knows how to use it.",
        ],
      },
      {
        type: "p",
        text: "None of this requires a full rebuild to fix, but it does require someone to actually look. That's the audit we run at the start of every engagement, before we touch a single line of code.",
      },
    ],
  },
  {
    slug: "seo-vs-ai-search-what-singapore-smes-need-to-know",
    title: "SEO vs AI Search: What Singapore SMEs Need to Know in 2026",
    metaTitle: "SEO vs AI Search for Singapore SMEs (2026)",
    description:
      "Google isn't the only place customers look anymore. Here's how ranking for AI answer engines differs from traditional SEO, and why you need both.",
    date: "2026-06-18",
    readTime: "8 min read",
    category: "SEO",
    tags: ["SEO", "AI Search", "Structured Data"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "For twenty years, 'SEO' meant one thing: rank in the ten blue links on Google. That's no longer the whole picture. A growing share of research and purchase-decision queries now get answered directly by AI systems, such as Google's AI Overviews, ChatGPT, and Perplexity, often without the user ever clicking through to a website.",
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
          "Structured data (schema.org markup) that explicitly tells crawlers what an entity is, such as an Organization, a Service, an Article, or a FAQ, rather than making them infer it from prose.",
          "Answer-first writing: state the direct answer to a likely question in the first sentence or two of a section, then explain. AI systems extract the answer, not the build-up.",
          "Genuinely crawlable HTML. If your key content only renders after heavy client-side JavaScript, some AI crawlers may never see it. Server-rendered content is safer.",
          "A robots.txt that explicitly allows the AI crawlers you want indexing you (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) rather than silently blocking them by default.",
          "Consistent facts about your business across your site, directories, and social profiles. AI systems cross-reference for confidence before citing a source.",
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
        text: "You don't need a separate 'AI SEO' strategy bolted onto your existing site. You need the same fundamentals, done properly, plus structured data and answer-first content that make it easy for both a search engine and a language model to understand exactly what your business does and why it's a credible source.",
      },
      {
        type: "quote",
        text: "If a machine can't parse what you do in the first two sentences, neither can a distracted human. Fix it for one, and you've usually fixed it for both.",
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
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "The traditional digital agency retainer looks something like this: a 12-month contract, a scope document nobody reads again after signing, and a project that gets handed between three different specialists (a designer, a developer, a copywriter), none of whom talk to each other directly.",
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
        text: "A month-to-month engagement with a small, accountable team flips the incentive. The team has to keep earning the work every month, which means the work has to keep being useful, not just billable.",
      },
      {
        type: "p",
        text: "It also removes the handoff problem. When the person who built your site is the same person who's improving your SEO and wiring up your automations, there's no translation layer where context gets lost.",
      },
      { type: "h2", text: "What to ask before signing with any agency" },
      {
        type: "ol",
        items: [
          "Who is actually doing the work? Is it in-house, or subcontracted out after the sale?",
          "What happens if you want to pause or leave after month two?",
          "Can you talk directly to the person building your site, not just an account manager?",
          "What does 'done' look like for this month, specifically?",
        ],
      },
      {
        type: "p",
        text: "None of this means every retainer is bad or every month-to-month engagement is good. The structure matters less than the accountability behind it. But if you can't answer those four questions about your current setup, it's worth finding out why.",
      },
    ],
  },
  {
    slug: "why-most-ai-agents-break-in-production",
    title: "Why Most AI Agents Break the Moment You Actually Rely on Them",
    metaTitle: "Why Most AI Agents Break When You Rely on Them",
    description:
      "A slick AI demo and an AI system your business can actually depend on are two very different things. Here's the gap most vendors don't mention.",
    date: "2026-08-01",
    readTime: "7 min read",
    category: "AI Automation",
    tags: ["AI Agents", "AI Automation", "AI Solutions"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "A lot of businesses see an AI demo, get impressed, and assume it's ready to run part of their operations. In practice, there's a big gap between an AI that can hold a conversation and an AI system you can actually trust to handle real work, unattended, every single day. We recently watched a LangChain engineering talk that lays this gap out clearly, and it's worth translating into plain terms for anyone thinking about bringing AI into their business.",
      },
      { type: "h2", text: "An AI agent usually means less than you'd think" },
      {
        type: "p",
        text: "Most people picture an AI agent as a chatbot that can also take actions: send an email, update a spreadsheet, look something up. That's true, but it's only the visible part. The AI model itself, the part that actually \"thinks,\" is really only half the story. Everything built around that model, the rules, the memory, the error handling, the guardrails, is what decides whether the agent is actually dependable or just impressive in a demo.",
      },
      {
        type: "p",
        text: "The talk put it simply:",
      },
      {
        type: "quote",
        text: "If you're not the model, you're the harness.",
        source: "LangChain, \"Building Deep Agents and Deploying in Production\"",
      },
      {
        type: "p",
        text: "That surrounding system is called a \"harness,\" and it's a bigger deal than the name suggests. As one example from the talk: the tooling behind Claude Code, a well-known AI coding tool, runs to roughly 500,000 lines of code. Almost none of that is the AI model itself. It's all the scaffolding that makes the model reliable enough to actually use.",
      },
      { type: "h2", text: "The real risk: an agent that works in testing but fails on real work" },
      {
        type: "p",
        text: "Here's the scenario that matters for a business. Say you have an AI agent working through a genuinely multi-step task: following up with a batch of leads, processing a stack of invoices, or qualifying enquiries as they come in. That's not one action, it's dozens of small steps in sequence.",
      },
      {
        type: "p",
        text: "Now say something goes wrong on step 40 of 60. A cheaply built agent has no memory of what it already did. It either stops entirely, or worse, starts over from step one, potentially double-emailing leads or re-processing invoices it already handled. A properly built agent picks up exactly where it left off. That difference sounds small until it's your customer data or your invoicing on the line.",
      },
      { type: "h2", text: "What to actually check before you trust an AI agent with real work" },
      {
        type: "p",
        text: "Based on what the talk covers, here's a plain-language checklist worth applying to any AI agent, whether you're building one or being sold one:",
      },
      {
        type: "ul",
        items: [
          "Can it recover from a failure partway through, without restarting the whole task or repeating actions it already took?",
          "Does it have clear limits on what it's allowed to do on your behalf? An agent sending one email for you is fine. An agent that could silently send a thousand without anyone noticing is a different problem entirely.",
          "Does it keep a human in the loop for anything that actually matters, rather than running quietly in the background and telling you after the fact?",
          "Does it remember relevant context over time, like your preferences or past conversations, instead of starting from zero every session?",
        ],
      },
      { type: "h2", text: "Why this matters if you're considering AI for your business" },
      {
        type: "p",
        text: "None of this means AI agents aren't ready for SMEs. The opposite, actually: the underlying technology has gotten reliable enough that, built properly, an AI agent can genuinely take repetitive work off your team's plate. But \"built properly\" is doing a lot of work in that sentence. If someone pitches you an AI agent for your business, the four questions above are a reasonable way to tell a serious build from a demo that hasn't been stress-tested yet.",
      },
      {
        type: "link",
        text: "Watch the full talk: \"Building Deep Agents and Deploying in Production\" (LangChain)",
        href: "https://www.youtube.com/watch?v=IZabCqyBJLg",
      },
    ],
  },
  {
    slug: "why-we-test-ai-skills-before-using-them",
    title: "Why We Test Every AI 'Skill' Before It Touches Client Work",
    metaTitle: "Why We Test AI Skills Before Using Them",
    description:
      "Most teams bolt AI \"skills\" onto their coding agents and trust the output. Here's why we test ours first, and how we use AI agents day to day.",
    date: "2026-08-02",
    readTime: "7 min read",
    category: "AI Automation",
    tags: ["AI Agents", "AI Skills", "AI Automation"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "We recently watched a talk from Philip, an engineer on Google DeepMind's Gemini API and Agents team, about a problem that's becoming common as more teams, including ours, lean on coding agents like Claude Code and Gemini CLI: everyone is writing \"skills\" for their AI agents, and almost nobody is testing whether those skills actually help. His framing stuck with us, because it's exactly the gap we've had to close in our own workflow.",
      },
      { type: "h2", text: "What an AI \"skill\" actually is" },
      {
        type: "p",
        text: "If you're not deep in this world, a skill is essentially a folder of instructions an AI coding agent can read when it needs to do something specific, like generate code for an API it wasn't trained on, follow a team's coding style, or run a recurring task the same way every time. Agents don't load every skill into every conversation. They work on what's called progressive disclosure: a short title and description sit in the agent's context at all times so it knows when a skill might be relevant, and only if it decides to use that skill does it go and read the fuller instructions, digging into deeper reference files only if it needs more detail. It's designed to be cheap most of the time and thorough when it counts.",
      },
      {
        type: "p",
        text: "The talk drew a useful line between two kinds of skills. Capability skills teach an agent something it can't yet do reliably, like writing correct code against a brand-new API. Those are temporary; as models improve, you retire them. Preference skills encode something specific to how a team works, coding conventions, a client's brand voice, a QA process. Those last much longer, because a general-purpose model has no way of knowing those preferences on its own.",
      },
      { type: "h2", text: "The part almost everyone skips" },
      {
        type: "p",
        text: "Here's the number that stood out from the talk: SkillBench, an open benchmark that's evaluated tens of thousands of published skills, found that skills genuinely do work, improving agent performance by roughly 15% on average. But it also found that almost none of those skills had been tested, most were AI-generated rather than written by a person, and AI-generated skills actually hurt performance more often than they helped.",
      },
      {
        type: "quote",
        text: "Human-written skills are the best we can provide. AI-generated skills can impact performance negatively.",
        source: "Philip, Google DeepMind (Gemini API & Agents team)",
      },
      {
        type: "p",
        text: "That tracks with something we'd noticed ourselves: it's very easy to ask a coding agent to write its own skill file after a session, skim it, and accept it because it roughly covers what happened. The problem is you can't tell from reading it whether it'll actually help next time, because agents are non-deterministic. If a task fails, you don't automatically know whether the skill was bad or the task was just genuinely hard for the model. The only way to know the difference is to test it, more than once.",
      },
      { type: "h2", text: "How we use AI agents and skills at nuj studios" },
      {
        type: "p",
        text: "This isn't an abstract concern for us. Coding agents are part of how we build and maintain client sites, run SEO and structured-data checks, and manage recurring operational work, so a skill that quietly underperforms doesn't just waste our time, it can ship into a client's site. A few ways this shows up day to day:",
      },
      {
        type: "ul",
        items: [
          "Workflow skills for repeatable dev tasks: opening pull requests, writing release notes, running our pre-deploy checklist. If a process is genuinely the same every time, we'd rather script it and let the agent trigger the script than re-explain the steps in prose and hope it follows them correctly.",
          "Preference skills for client standards: house coding conventions, a client's brand voice for AI-generated copy, our structured-data and accessibility baseline. These encode things a general model has no way of knowing on its own, so we treat them as durable and keep them tight.",
          "Capability skills for anything new: a framework update, a new API, a platform change we haven't fully absorbed yet. We expect to retire most of these within a few months, once the underlying models catch up.",
        ],
      },
      {
        type: "p",
        text: "This is also where a lot of our actual problem-solving happens. When something breaks in a client automation, a lead form that stopped notifying the right inbox, a scraper that silently changed behaviour after a site update, the fastest path back to a fix is usually an agent working through the codebase with the right skill loaded, rather than us tracing it manually line by line. The skill doesn't do the thinking for us, it just means the agent starts from the right context instead of guessing.",
      },
      { type: "h2", text: "What we check before a skill goes near client work" },
      {
        type: "p",
        text: "Taking the talk's advice and applying it to how we actually ship things, here's roughly what we hold a skill to before we trust it:",
      },
      {
        type: "ul",
        items: [
          "The description earns its keep. It has to say why the agent should use the skill, how, and when, in plain directives, not a soft suggestion. A weak description is the single biggest reason skills get skipped when they're needed or triggered when they're not.",
          "Short body, deep references. The main instructions stay lean because the agent pays that cost on every use. Anything client- or platform-specific lives in a reference file the agent only opens if it actually needs it.",
          "Goals, not scripts, unless it really is a script. If a task is genuinely the same steps every time, we write an actual script and have the agent run it. If it needs judgment, we describe the outcome we want and leave the steps to the agent.",
          "Negative cases, not just positive ones. We write a handful of prompts where the skill should not trigger, so we can catch a skill that's too eager and starts firing on unrelated work.",
          "Run it more than once. One good result doesn't mean much given how non-deterministic these agents are. We want to see it hold up across a handful of runs before we trust it.",
          "Revisit, don't assume it's permanent. Every few months we check whether a skill is still pulling its weight, or whether the model has gotten good enough to not need it anymore.",
        ],
      },
      { type: "h2", text: "The takeaway if you're using AI anywhere in your business" },
      {
        type: "p",
        text: "If you're already using AI agents for content, support, or internal workflows, and you've built anything resembling a \"skill\" or a custom instruction set for it, this is worth five minutes of honesty: has anyone actually tested whether it helps, or did it get written once, look reasonable, and get left alone? The gap between a demo that looks convincing and a system you can actually rely on for client work is almost always in that untested middle ground. It's a small amount of upfront work, and it's the difference between an AI agent that quietly makes mistakes and one you can actually trust with real work.",
      },
      {
        type: "link",
        text: "Watch the full talk: \"Don't Ship Skills Without Evals\" (Philip, Google DeepMind)",
        href: "https://www.youtube.com/watch?v=0vphxNt4wyk",
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
