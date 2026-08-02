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
        text: "Most small business websites were built once, launched, and never revisited. That's not automatically a problem, but it means the cost of an underperforming site is usually invisible. Nobody files a complaint when a visitor leaves without calling. They just leave, and they leave for one of your competitors, whose site happened to load faster or make the phone number easier to find.",
      },
      {
        type: "p",
        text: "That's what makes this different from a broken product feature. A checkout error gets reported within a day. A slow, confusing, or outdated website just quietly loses a few inquiries a week, forever, until someone actually goes looking for the problem. Here are five signs worth checking for, and why each one costs you more than it looks like it does.",
      },
      { type: "h2", text: "1. It takes more than a couple of seconds to feel responsive" },
      {
        type: "p",
        text: "Speed is a trust signal before it's a technical metric. A slow first paint tells a visitor the business behind the site might be slow to respond too, and on mobile data rather than office wifi, that gap is where most sites actually get judged. If you're on a shared hosting plan running a page builder with a dozen plugins, that's usually where the drag comes from, not your internet connection.",
      },
      {
        type: "p",
        text: "The slowdown is rarely one big problem. It's usually years of small additions nobody ever audited: a chat widget from a tool you stopped using, a tracking pixel from a campaign that ended two years ago, uncompressed photos uploaded straight from a phone, a plugin installed for one feature and never removed. Each one adds a little weight. None of them individually feel worth fixing, which is exactly why they never get fixed.",
      },
      { type: "h2", text: "2. Your contact info requires more than one tap to find" },
      {
        type: "p",
        text: "On mobile especially, if a visitor has to hunt through a menu to find a phone number or WhatsApp link, most won't bother. Contact details, like call, message, or email, should be reachable from any page in one or two taps, not buried at the bottom of a \"Contact Us\" page nobody clicked into.",
      },
      {
        type: "p",
        text: "This matters more for SMEs than it looks like it should, because a lot of local buying decisions happen in a short window: someone compares two or three businesses in separate browser tabs and reaches out to whichever one made contacting them effortless. A visible phone number, a sticky WhatsApp button, and consistent contact details in the footer of every page aren't decoration. They're what turns a visitor mid-comparison into an actual enquiry before they move on to the next tab.",
      },
      { type: "h2", text: "3. There's no clear next step above the fold" },
      {
        type: "p",
        text: "A visitor should know within a few seconds what you do and what to do next. If the homepage opens with a large slideshow and no clear call to action, you're asking visitors to do the work of figuring out your business instead of guiding them.",
      },
      {
        type: "p",
        text: "This is one of the most common patterns we see on older SME sites, usually inherited from a template: a rotating banner of stock photography, a vague headline like \"Welcome to [Business Name]\", and the actual call to action, if there is one, buried below several scrolls. Replace the slideshow with one clear headline that says what you do, for whom, and one obvious next step, whether that's a call button, a booking link, or a form, and the homepage stops being a puzzle.",
      },
      { type: "h2", text: "4. It looks the same today as it did three years ago" },
      {
        type: "p",
        text: "Design trends move, but more importantly, your business has probably changed: new services, new positioning, new proof points. A site that hasn't been touched since launch usually isn't just visually dated, it's also not saying what's actually true about the business anymore.",
      },
      {
        type: "p",
        text: "This is worth taking literally, not just aesthetically. Discontinued services still listed as offerings. A phone number or address from before you moved. Testimonials from clients you haven't worked with in years. Pricing that changed eighteen months ago but was never updated on the page. None of these are cosmetic. Each one is the site actively telling a visitor something false about your business right now, at the exact moment they're deciding whether to trust it.",
      },
      { type: "h2", text: "5. Nobody on your team can update it without calling a developer" },
      {
        type: "p",
        text: "If every price change, new testimonial, or seasonal promotion requires an email to a freelancer and a two-week wait, the site is a liability, not an asset. A website should be something your team can keep current, not something you're afraid to touch.",
      },
      {
        type: "p",
        text: "This is usually a symptom of how the site was originally built, not a fixable setting. A fully custom site with no content management layer, or one built by a freelancer who never handed over real admin access, leaves you dependent on one person indefinitely. The fix isn't necessarily a rebuild. Sometimes it's as simple as making sure someone on your team actually has login credentials and thirty minutes of training on how to use them.",
      },
      { type: "h2", text: "Why this adds up faster than it looks" },
      {
        type: "p",
        text: "Any one of these five problems on its own might cost you a handful of inquiries a month. Put together, and it's common to see two or three of them on the same site at once, they compound: a slow, confusing site with no clear call to action and an owner who's afraid to touch it doesn't just underperform once. It underperforms every single day it stays live, silently, with no error message and no support ticket to flag it.",
      },
      { type: "h2", text: "A quick gut-check: pretend you're a first-time visitor" },
      {
        type: "p",
        text: "It helps to actually walk through this once, from the outside. Open your homepage on your phone, on mobile data, the way most of your customers will. Time how long it takes to feel usable. Then try to find your phone number without using the menu. Then try to figure out, in the first five seconds, what your business actually does and what you're supposed to do next.",
      },
      {
        type: "p",
        text: "Most business owners haven't done this in months, sometimes years, because they already know what the business does and where everything is. That familiarity is exactly what makes it hard to see the site the way a stranger does. A five-minute walkthrough, done honestly, usually surfaces two or three of the five signs above without needing any tools or technical knowledge at all.",
      },
      { type: "h2", text: "What to check this week" },
      {
        type: "ul",
        items: [
          "Load your homepage on mobile data, not office wifi. Does it feel instant or sluggish?",
          "Time how long it takes to find your phone number or booking link from the homepage.",
          "Ask someone outside the business what you do, based only on the homepage.",
          "Check the copyright year in the footer. Is it still accurate?",
          "Scan the site for any service, price, or testimonial that's no longer true.",
          "Confirm someone on your team actually has login access and knows how to use it.",
        ],
      },
      {
        type: "p",
        text: "None of this requires a full rebuild to fix, but it does require someone to actually look. That's the audit we run at the start of every engagement, before we touch a single line of code, because fixing the wrong problem first is its own way of losing another few months of quiet, invisible drop-off.",
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
    readTime: "6 min read",
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
        text: "This doesn't replace traditional SEO. It sits alongside it, with a different set of rules for what gets surfaced and cited. For an SME, the stakes are direct: someone searching \"best accountant near me\" through an AI assistant might get a synthesized answer naming two or three firms, with no list of ten links to scroll through and no guarantee your firm, however well-established offline, is one of the two named. Here's what's actually different, and what to do about it.",
      },
      { type: "h2", text: "Traditional SEO optimizes for ranking. AI search optimizes for citation." },
      {
        type: "p",
        text: "A search engine ranks pages and lets the user decide which to click. An AI answer engine reads multiple sources, synthesizes an answer, and decides which sources are worth citing or quoting. That means clarity and extractability matter more than keyword density ever did.",
      },
      {
        type: "p",
        text: "This changes what \"winning\" even looks like. Ranking first no longer guarantees a click, because the AI Overview or chat answer sitting above the results can fully satisfy the query without anyone scrolling further. The page that gets cited inside that answer, even if it isn't the top organic result, is often the one that actually gets seen and remembered.",
      },
      { type: "h2", text: "How an AI answer engine actually decides what to cite" },
      {
        type: "p",
        text: "The mechanics are different enough from classic search ranking that it's worth walking through in plain terms. When a query comes in, the system pulls a set of candidate pages, extracts the parts of each page that look like they answer the question, and evaluates those candidates on how clear, well-labeled, and consistent they are, not just how relevant the general topic is. It then picks a small number of sources to cite or quote directly, usually far fewer than the ten results a traditional search page would show.",
      },
      {
        type: "p",
        text: "The practical effect is that a page buried in dense, unstructured prose can lose out to a shorter, more clearly labeled page on the same topic, even if the dense page technically covers more ground. Extractability, not thoroughness, decides who gets quoted.",
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
      {
        type: "p",
        text: "None of these work in isolation. Structured data tells a crawler what your page is about; answer-first writing gives it something clean to extract; consistent facts elsewhere on the web give it a reason to trust what it extracted. Do one of these well and you might get crawled correctly. Do all of them together and you start showing up as a cited source instead of just an indexed page.",
      },
      { type: "h2", text: "A common instinct worth resisting: blocking AI crawlers outright" },
      {
        type: "p",
        text: "Some businesses, understandably wary of AI, block every AI crawler in robots.txt on principle. That protects nothing meaningful for a public-facing business website, your service pages and pricing aren't proprietary content someone's stealing, and it guarantees you're invisible in a channel more customers are starting to research through before they ever type a query into Google. The more useful move is selective: allow the crawlers that can cite you as a source, and reserve blocking for content you genuinely don't want indexed anywhere.",
      },
      { type: "h2", text: "What still matters exactly as much as before" },
      {
        type: "p",
        text: "Core technical SEO hasn't gone anywhere, and it's still the foundation both traditional search engines and AI crawlers rely on to find and trust your content in the first place.",
      },
      {
        type: "ul",
        items: [
          "Fast-loading pages, since both Google and AI crawlers deprioritize slow, resource-heavy sites.",
          "Clean, descriptive URL structure rather than auto-generated strings of numbers and parameters.",
          "Working internal links between related pages, which help a crawler understand how your content fits together.",
          "Accurate, specific title tags and meta descriptions on every page, not a copy-pasted template.",
          "A real, current XML sitemap that reflects the pages that actually exist today.",
        ],
      },
      { type: "h2", text: "What this looks like for a real SME query" },
      {
        type: "p",
        text: "Take a renovation contractor in Singapore. A traditional search for \"HDB renovation contractor\" returns ten links, and the business's job is to be one of them, then win the click with a good title tag. An AI-assisted search for \"which renovation contractors handle HDB permits for me\" behaves differently: the system reads several contractor sites, looks for pages that clearly and specifically answer that exact question, and names two or three in its response.",
      },
      {
        type: "p",
        text: "The contractor with a vague \"Our Services\" page listing renovation types in no particular structure loses to the one with a clearly labeled FAQ entry stating, in the first sentence, that they handle HDB permit applications as part of the package. Same underlying capability, different odds of being the one actually named in the answer.",
      },
      { type: "h2", text: "The practical takeaway for SMEs" },
      {
        type: "p",
        text: "You don't need a separate \"AI SEO\" strategy bolted onto your existing site. You need the same fundamentals, done properly, plus structured data and answer-first content that make it easy for both a search engine and a language model to understand exactly what your business does and why it's a credible source.",
      },
      {
        type: "p",
        text: "If you're deciding where to start, work in this order: check whether your robots.txt is silently blocking the AI crawlers you'd actually want indexing you, add or fix structured data on your core service and FAQ pages, then rewrite the opening two sentences of each key page so they directly answer the question a visitor, human or AI, actually came with.",
      },
      { type: "h2", text: "How to tell if it's actually working" },
      {
        type: "p",
        text: "Unlike traditional rankings, which you can check with a keyword tool, there's no single dashboard that reliably tells you whether an AI system is citing your site. The closest practical signal is to run your own likely customer queries through the major AI search tools yourself every so often and see who gets named. It's manual, and it won't cover every possible query, but it's the most direct way to see whether the changes you made actually changed the outcome.",
      },
      {
        type: "p",
        text: "It's also worth checking your server logs periodically for AI crawler activity, GPTBot, ClaudeBot, PerplexityBot, and similar, to confirm they're actually reaching your site rather than being silently blocked somewhere in your hosting configuration. Being crawlable is the precondition for being cited. If the crawler traffic isn't showing up at all, nothing else in this list will matter until that's fixed.",
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
    readTime: "6 min read",
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
      { type: "h2", text: "Where the 12-month retainer actually came from" },
      {
        type: "p",
        text: "The model isn't arbitrary, it's built around a real cost. Agencies staffed with separate specialists need predictable revenue to justify keeping that headcount on payroll, and onboarding a new client, ramping up context, aligning departments, is expensive enough that a 12-month term is what makes the arithmetic work on their end. For a large enterprise with its own procurement cycle and a marketing team used to managing vendors, that structure is a reasonable fit.",
      },
      {
        type: "p",
        text: "The mismatch happens when that same structure gets sold to an SME with none of that context: no dedicated marketing hire to manage the relationship, no year-long budget cycle, and a genuine need to see whether the work is helping before committing further. The contract isn't wrong for what it was built for. It's just being applied to a business it was never designed around.",
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
      {
        type: "p",
        text: "The layered handoff problem is worth sitting with, because it's the one that quietly costs the most. A brief goes to an account manager, who summarizes it for a strategist, who passes direction to a designer or developer who never spoke to you directly. Every one of those handoffs is a place where a small piece of context, why a particular feature actually matters to your business, gets lost or flattened into something generic. By the time work comes back for review, it's often answering a slightly different question than the one you asked.",
      },
      {
        type: "p",
        text: "Opaque scope causes a quieter kind of damage. \"Digital marketing services\" on an invoice can mean anything from a single social post to a full SEO overhaul, and without a specific, itemized description of what's being delivered that month, there's no real way to check whether you're getting your money's worth. It's not usually deliberate. It's just easier for an agency to sell a broad category than to commit to specifics that can be checked.",
      },
      {
        type: "p",
        text: "Misaligned incentives are the structural root of both. Once a client has signed a 12-month contract, the commercial pressure to keep proving value every single month drops, because the money is already committed regardless. That doesn't make every agency lazy, most genuinely try to deliver, but it does mean the contract itself removes the one incentive that reliably keeps quality up: the possibility that the client could walk.",
      },
      { type: "h2", text: "What this actually looks like in practice" },
      {
        type: "p",
        text: "Picture two versions of the same request: you want your homepage headline changed to reflect a new service you just started offering. Under a traditional retainer, that goes through a support portal or an account manager, gets triaged against a sprint backlog, and might land in two to three weeks depending on where it falls in the queue. Under a managed month-to-month setup with a small team, it's a message to the person who actually maintains the site, and it's usually live the same day or the next.",
      },
      {
        type: "p",
        text: "That speed isn't a minor convenience. It's the difference between your website reflecting your business as it actually is right now, versus reflecting whatever was true when the last sprint got around to it.",
      },
      { type: "h2", text: "What a managed, month-to-month model changes" },
      {
        type: "p",
        text: "A month-to-month engagement with a small, accountable team flips the incentive. The team has to keep earning the work every month, which means the work has to keep being useful, not just billable.",
      },
      {
        type: "p",
        text: "It also removes the handoff problem entirely. When the person who built your site is the same person who's improving your SEO and wiring up your automations, there's no translation layer where context gets lost, and no account manager relaying feedback secondhand. You describe the actual problem once, to the person who's going to solve it.",
      },
      {
        type: "p",
        text: "There's a second, less obvious effect: the relationship stays a live conversation instead of a signed document you both refer back to. Scope adjusts as your business does, month to month, instead of waiting for a renewal date to renegotiate what's actually needed now versus what was guessed at a year ago.",
      },
      { type: "h2", text: "Where a traditional retainer still makes sense" },
      {
        type: "p",
        text: "None of this means every retainer is a bad structure. A large, multi-year engagement involving several internal stakeholders, a formal procurement process, and coordination across departments genuinely benefits from the predictability a longer contract provides on both sides. The issue isn't retainers as a concept, it's applying an enterprise-shaped agency structure to a business that doesn't have enterprise-shaped problems.",
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
        text: "Each of these is really asking the same underlying question in a different way: is there a real, accountable person behind this contract, or a layer of process between you and whoever's actually doing the work? A vague or evasive answer to any one of them, \"we have a great network of partners,\" \"let's discuss that after onboarding,\" is usually the answer itself.",
      },
      { type: "h2", text: "What switching actually costs you, if it comes to that" },
      {
        type: "p",
        text: "One reason SMEs stay in a retainer that isn't working is a fear that switching agencies means starting over: rebuilding the site, losing historical SEO data, re-explaining the business from scratch. That fear is mostly a symptom of the same problem described above, an agency that hasn't documented its work clearly or handed over real ownership of the assets it built for you.",
      },
      {
        type: "p",
        text: "A properly run engagement, retainer or month-to-month, should leave you owning your domain, your hosting account, and your analytics regardless of who's currently managing them. If switching would mean losing access to your own website, that's worth addressing immediately, independent of whether you're planning to leave.",
      },
      {
        type: "p",
        text: "None of this means every retainer is bad or every month-to-month engagement is good. The structure matters less than the accountability behind it. But if you can't answer those four questions about your current setup, it's worth finding out why, before your next renewal date arrives and answers them for you.",
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
    readTime: "6 min read",
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
      {
        type: "p",
        text: "Concretely, that scaffolding is things like: retry logic for when a step fails partway through, rate limiting so a runaway loop can't rack up an unbounded bill or spam an external system, validation that checks the model's output is actually structured the way the next step expects, sandboxing so an action can't touch more than it's supposed to, and logging detailed enough that someone can reconstruct exactly what the agent did after the fact. None of that is glamorous. All of it is the difference between a demo and something you'd trust with real customer data.",
      },
      {
        type: "p",
        text: "That ratio, a small model wrapped in a large amount of scaffolding, is roughly what to expect from any agent built seriously. If a vendor's entire pitch is \"we connected model X to your CRM,\" with nothing said about failure handling, permissions, or logging, that's usually a sign the harness hasn't been built yet, and you're being sold the 5% that's easy to demo.",
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
      {
        type: "p",
        text: "There's a quieter version of this failure that's arguably worse: an agent that doesn't stop or restart, but silently retries the same failing step in a loop. Nothing looks broken from the outside. The task just never finishes, and depending on what that step touches, it might be quietly running up an API bill, hammering an external system, or sending the same message repeatedly, until someone happens to notice, usually from a complaint or an invoice, not a warning from the agent itself.",
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
      {
        type: "p",
        text: "Notice that none of these four questions are really about the model. They're all about the boundaries around it: how it recovers, what it's allowed to touch, when it stops for a human, and what it remembers. That's a useful shortcut when you're evaluating a pitch, ask about the boundaries first, since that's what most sales conversations skip straight past on the way to the demo.",
      },
      { type: "h2", text: "What \"built properly\" actually costs" },
      {
        type: "p",
        text: "It's worth being clear that \"built properly\" doesn't mean the most expensive model or the most infrastructure. Often the opposite is true: a narrowly scoped agent running on a modest, cheaper model, with clear guardrails, solid error handling, and a human checkpoint where it actually matters, will outperform an expensive model wrapped carelessly around a task it was never scoped for. The spend that actually buys reliability goes into the harness, not into upgrading the model for its own sake.",
      },
      {
        type: "p",
        text: "This is also why scoping matters more than model choice. An agent asked to handle \"customer service\" end to end, with no defined boundaries, is set up to fail somewhere eventually, simply because the surface area is too large to guard properly. An agent asked to handle one specific thing, tag incoming leads by urgency, draft (not send) a reply for review, flag anything it isn't confident about, is small enough that every one of the four checklist questions above can actually be answered with a yes, not a shrug.",
      },
      { type: "h2", text: "A pattern worth recognizing: the demo-to-production gap" },
      {
        type: "p",
        text: "It's worth naming why this gap exists in the first place, since it explains a lot of disappointing AI rollouts. A demo only has to work once, in front of an audience, on inputs the presenter already knows will behave well. Production has to work correctly on the hundredth run, the thousandth, including the malformed input, the API that times out, the edge case nobody thought to test. Almost every part of the harness described above exists specifically to close that gap, and almost none of it is visible in a five-minute demo, which is exactly why it's so easy to sell around.",
      },
      { type: "h2", text: "Why this matters if you're considering AI for your business" },
      {
        type: "p",
        text: "None of this means AI agents aren't ready for SMEs. The opposite, actually: the underlying technology has gotten reliable enough that, built properly, an AI agent can genuinely take repetitive work off your team's plate. But \"built properly\" is doing a lot of work in that sentence. If someone pitches you an AI agent for your business, the four questions above are a reasonable way to tell a serious build from a demo that hasn't been stress-tested yet, and the honest answer to some of them, at least at first, might simply be \"not yet, here's what that would take.\"",
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
  {
    slug: "openvpn-vs-wireguard-vs-tailscale",
    title: "OpenVPN vs WireGuard vs Tailscale: Which One Actually Fits Your Business",
    metaTitle: "OpenVPN vs WireGuard vs Tailscale for SMEs",
    description:
      "All three let your team reach internal systems securely from anywhere. They're built very differently, and that difference decides how much setup and upkeep you're signing up for.",
    date: "2026-08-02",
    readTime: "6 min read",
    category: "IT & Security",
    tags: ["VPN", "Remote Work", "Networking"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "\"VPN\" gets used as a catch-all term, but the three tools people usually mean when they say it, OpenVPN, WireGuard, and Tailscale, solve the same underlying problem in genuinely different ways. Picking one isn't really a matter of taste. It's a matter of how much networking you want to own versus how much you want handled for you.",
      },
      { type: "h2", text: "What problem a VPN is actually solving" },
      {
        type: "p",
        text: "Most business systems, a file server, an admin dashboard, a database, an internal tool, were never designed to be exposed directly to the public internet. A VPN creates a private, encrypted path into that internal network so the right people can reach those systems from outside the office, without putting them in front of every scanner and bot on the internet.",
      },
      {
        type: "ul",
        items: [
          "Staff working from home or a coffee shop need to reach internal tools that only exist on the office network.",
          "A business with more than one location, an office and a warehouse, for example, wants both to behave as one private network.",
          "A contractor or freelancer needs access to one specific server or tool, not a free pass onto your entire network.",
          "You want internal systems to be invisible to the open internet instead of sitting behind a public IP and a firewall rule.",
        ],
      },
      { type: "h2", text: "Same goal, three very different tools" },
      {
        type: "p",
        text: "OpenVPN and WireGuard are protocols and software you run yourself, on your own server, with your own configuration. Tailscale is a managed product built on top of WireGuard's encryption, but with a coordination layer on top that handles the parts most people find painful about running a VPN in the first place.",
      },
      { type: "h2", text: "OpenVPN: the incumbent" },
      {
        type: "p",
        text: "OpenVPN has been the default choice for close to two decades. It's an SSL/TLS-based VPN that runs as software on a server you control, authenticating users with certificates or credentials, and it's supported by nearly every router, firewall, and operating system in existence.",
      },
      { type: "h3", text: "Strengths" },
      {
        type: "ul",
        items: [
          "Extremely mature and battle-tested, with support baked into almost any router or firewall on the market.",
          "Highly configurable: fine-grained access rules, multiple authentication methods, and routing behaviour you can tune in detail.",
          "Can run over port 443, the same port as normal web traffic, which lets it get through restrictive networks that block most VPN traffic outright.",
        ],
      },
      { type: "h3", text: "Weaknesses" },
      {
        type: "ul",
        items: [
          "A much larger codebase than the alternatives, which means a larger attack surface and more history of vulnerabilities to patch.",
          "Noticeably slower than WireGuard-based options, especially on lower-powered devices, due to older cryptography and a heavier connection process.",
          "Configuration files are dense and unforgiving. Getting client certificates, routing, and firewall rules right usually needs someone who's done it before.",
        ],
      },
      { type: "h2", text: "WireGuard: the modern protocol" },
      {
        type: "p",
        text: "WireGuard was built from scratch to fix what OpenVPN gets wrong: it's a fraction of the code (roughly 4,000 lines, versus OpenVPN's several hundred thousand), uses modern, fast cryptography, and is now built directly into the Linux kernel. On paper, it's simply a better tunnel.",
      },
      { type: "h3", text: "Strengths" },
      {
        type: "ul",
        items: [
          "Significantly faster and lighter on battery and CPU, which matters a lot on phones and laptops moving between networks.",
          "A tiny, auditable codebase that's easier to trust and easier to patch than a legacy VPN stack.",
          "Connections re-establish almost instantly after a network change, like switching from wifi to mobile data.",
        ],
      },
      { type: "h3", text: "Weaknesses" },
      {
        type: "ul",
        items: [
          "It's a protocol, not a product. Out of the box there's no user management, access policy, or admin dashboard, you build or bolt on all of that yourself.",
          "Authentication is just a static public/private keypair. There's no built-in way to revoke a single device without editing server config directly.",
          "No native handling for devices with changing IPs sitting behind NAT trying to reach each other directly. You're responsible for that plumbing.",
        ],
      },
      { type: "h2", text: "Tailscale: the managed mesh" },
      {
        type: "p",
        text: "Tailscale uses WireGuard for the actual encrypted tunnel, but wraps it in a coordination service that handles everything WireGuard leaves out: authentication through your existing Google, Microsoft, or Okta login, automatic key rotation, NAT traversal so devices connect directly without port forwarding, and access rules written as a simple policy file instead of firewall commands.",
      },
      { type: "h3", text: "Strengths" },
      {
        type: "ul",
        items: [
          "Setup is close to instant: install it, log in with your work account, and a device is on the network in minutes, no server to stand up.",
          "Every device connects directly to every other authorized device (a mesh), not through a single choke-point server, which keeps performance close to WireGuard's.",
          "Access policy is per-user and per-device, so a contractor can be scoped to exactly one internal tool instead of the whole network.",
          "Key rotation, device removal, and audit logs are handled for you, which removes most of the ongoing admin overhead of the other two options.",
        ],
      },
      { type: "h3", text: "Weaknesses" },
      {
        type: "ul",
        items: [
          "It's a third-party SaaS product: your access policy and device coordination depend on Tailscale's control plane being reachable, even though the actual data stays peer-to-peer.",
          "The free tier caps out on users and devices, and per-user pricing adds up for larger teams.",
          "Less low-level control than running your own OpenVPN or WireGuard server, which matters if you have very specific routing or compliance requirements.",
        ],
      },
      { type: "h2", text: "If vendor lock-in worries you: self-hosting the coordination layer" },
      {
        type: "p",
        text: "The dependency on Tailscale's control plane is the main objection technical teams raise, and it's a fair one. The answer, if it matters enough to you, is Headscale: an open-source, self-hosted reimplementation of Tailscale's coordination server. It speaks the same protocol, so the same client apps and the same mesh networking behaviour work, but the piece that decides who's authorized and how devices find each other runs on infrastructure you control instead of a third party's.",
      },
      {
        type: "p",
        text: "Running Headscale isn't free in terms of effort, you're back to maintaining a server, which is part of what Tailscale exists to avoid. But it's worth knowing this middle ground exists: you can get most of Tailscale's operational simplicity without depending entirely on Tailscale as a company, which matters if your compliance requirements are strict about where control and metadata live.",
      },
      { type: "h2", text: "Performance in practice, not just on paper" },
      {
        type: "p",
        text: "The speed difference between WireGuard-based tunnels and OpenVPN is easiest to notice on a mobile device switching networks, walking from a wifi-covered office into a lift, then onto mobile data outside. OpenVPN typically needs to renegotiate the connection from scratch, which can take several seconds and sometimes drops the tunnel entirely until you manually reconnect. WireGuard-based tools, including Tailscale, tend to resume near-instantly, because the protocol was designed around exactly that kind of network change rather than treating it as an edge case.",
      },
      {
        type: "p",
        text: "For a desk-bound server-to-server connection, that difference barely matters. For staff who are actually moving around, between client sites, out in the field, on a phone between wifi and mobile data all day, it's the difference between a VPN that quietly stays connected and one that needs to be manually poked back to life several times a day.",
      },
      { type: "h2", text: "Which one fits your business" },
      {
        type: "p",
        text: "In practice, the decision usually comes down to how much networking work you actually want to take on.",
      },
      {
        type: "ol",
        items: [
          "Small team, no in-house network engineer, need staff and contractors to reach internal tools quickly: Tailscale. The setup time alone pays for the per-user cost.",
          "Legacy or on-prem infrastructure that needs granular firewall rules, or a network team that already knows how to run one: OpenVPN, especially where it needs to blend in as normal web traffic.",
          "You're building your own infrastructure and want the leanest, fastest tunnel with full control over every setting: WireGuard, self-managed.",
        ],
      },
      {
        type: "quote",
        text: "The best VPN for a small business is rarely the most powerful one. It's the one someone will actually keep patched and configured correctly six months from now.",
      },
      {
        type: "p",
        text: "For most SMEs without a dedicated IT team, that tips the decision toward Tailscale by default, and toward OpenVPN or self-managed WireGuard only when there's a specific technical reason to run the infrastructure yourself. Secure remote access is a small piece of the broader digital operation, but it's the kind of thing that's invisible when it works and a real liability when it doesn't.",
      },
    ],
  },
  {
    slug: "repurpose-content-with-instagram-trial-reels",
    title: "The Smart Way to Repurpose Content Using Instagram Trial Reels",
    metaTitle: "Repurpose Content with Instagram Trial Reels",
    description:
      "Reposting the same clip used to be a free growth hack. In 2026, Instagram's Originality Score flags exact duplicates and tanks their reach. Here's how to turn one video into several algorithm-friendly variations instead.",
    date: "2026-08-02",
    readTime: "6 min read",
    category: "Social Media",
    tags: ["Instagram", "Content Strategy", "Social Media"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "Posting the exact same video over and over used to be a quick shortcut for growth. In 2026, Instagram's algorithm runs an Originality Score that flags exact duplicates and quietly tanks their reach. If you want to squeeze more views out of your best video assets without annoying your followers or triggering a shadowban, Instagram Trial Reels are the tool to build that into your workflow.",
      },
      {
        type: "p",
        text: "Here's how to build a high-yield content loop by turning your top video clips into infinite, algorithm-friendly variations.",
      },
      {
        type: "p",
        text: "This matters for a business page just as much as a personal creator account, arguably more. Most SME social content stays thin because whoever's running it is guessing at what will land, posting once, and moving on without ever finding out why something did or didn't work. Trial Reels turn that guessing into a private, low-stakes test you can actually learn from, without risking the account's main audience on an experiment that might flop.",
      },
      { type: "h2", text: "What is an Instagram Trial Reel?" },
      {
        type: "p",
        text: "Trial Reels publish video content exclusively to non-followers. The video doesn't appear on your main feed or your profile grid, which makes it a low-risk testing ground. If a video flops, your existing community never sees it. If it takes off, you can push it to your main feed or let it keep gathering views from strangers for months.",
      },
      {
        type: "p",
        text: "The practical effect is that your main grid stops being the place where you find out what works. It becomes the place where you show what's already proven to work. The testing happens somewhere your existing followers, and potential customers who already know your business, never see the losing variations at all.",
      },
      { type: "h2", text: "The rule: tweak, don't duplicate" },
      {
        type: "p",
        text: "You can't simply upload the exact same file five times. Instagram's systems detect identical metadata and restrict the video's reach. Instead, run a \"test and learn\" loop: make small, strategic edits to the same core clip and let each variation compete on its own merit.",
      },
      {
        type: "p",
        text: "The Originality Score exists for a straightforward reason: an unchecked feed of recycled reposts is a worse experience for everyone using the platform, so the algorithm is tuned to reward genuine iteration and quietly suppress lazy duplication. That's actually useful information, because it means the goal isn't to trick the algorithm, it's to make a version of the clip that's genuinely testing a different idea, a different hook, a different pacing, a different opening claim, not just a cosmetically altered copy of the same one.",
      },
      { type: "h3", text: "1. The hook swap" },
      {
        type: "p",
        text: "The first three seconds decide whether the rest of the video gets watched. Keep the body the same, but change the opening text or visual.",
      },
      {
        type: "ul",
        items: [
          "Version A: a pain-point hook, for example \"Stop wasting hours editing video.\"",
          "Version B: a desire-focused hook, for example \"How I edit my videos in 60 seconds.\"",
        ],
      },
      { type: "h3", text: "2. The audio pivot" },
      {
        type: "p",
        text: "Audio sets the mood and changes how long people stay watching.",
      },
      {
        type: "ul",
        items: [
          "Version A: a fast-paced trending audio track to match quick cuts.",
          "Version B: strip the background music and use a direct voiceover instead.",
        ],
      },
      { type: "h3", text: "3. Visual distortions" },
      {
        type: "p",
        text: "Small edits to the frame itself are enough to make Instagram treat the file as fresh, unique media.",
      },
      {
        type: "ul",
        items: [
          "Slightly crop or zoom in on the video canvas.",
          "Flip or mirror the video horizontally.",
          "Tweak the colour saturation or add a subtle filter.",
        ],
      },
      { type: "h3", text: "4. The caption and CTA swap" },
      {
        type: "p",
        text: "The caption and on-screen call to action are part of what's being tested too, not just the video itself. A caption phrased as a question invites comments in a way a statement doesn't, and \"DM me for the link\" produces a different response than \"link in bio.\" Varying this alongside, or instead of, the hook is a cheap way to test a different angle without touching the footage at all.",
      },
      {
        type: "ul",
        items: [
          "Version A: a caption that poses a direct question to invite comments.",
          "Version B: a caption that states a bold claim and points to a specific, single call to action.",
        ],
      },
      { type: "h2", text: "The step-by-step testing workflow" },
      {
        type: "p",
        text: "Create core video → duplicate into 3 variations → toggle Trial on → analyze insights (48h) → push the winner to your grid.",
      },
      {
        type: "ol",
        items: [
          "Keep a master file: edit your main video in an external app like CapCut or the native Instagram Edits app, then export it without watermarks. A watermark from another platform is itself a duplicate-content signal, and it looks unpolished to a fresh, non-follower audience who has no context for it.",
          "Create your variations: build two or three versions using different hooks, on-screen font styles, or audio. Change one variable at a time between versions where possible, otherwise you won't know which change actually caused the difference in performance.",
          "Turn on Trial Mode: on the final sharing screen, tap Audience, select Trial, and schedule or publish the post.",
          "Wait 48 to 72 hours: let the algorithm push the video out to a fresh batch of non-followers before you judge it. Reach to a cold, non-follower audience ramps on a different timeline than reach to people who already follow you, and judging too early usually just means judging on a sample that's too small to mean anything.",
        ],
      },
      { type: "h2", text: "Stop looking at views: the metrics that actually matter" },
      {
        type: "p",
        text: "Most creators check their view count after a day and call a video a success or a failure. That's the wrong metric. When you're testing with Trial Reels, evaluate watch time alongside views, not instead of it. There are really four outcomes worth knowing how to read.",
      },
      { type: "h3", text: "High views, low watch time" },
      {
        type: "p",
        text: "Your hook successfully stopped the scroll, but the body of the video didn't hold attention. Next action: keep the hook, and re-edit the middle of the video to be faster or higher value.",
      },
      { type: "h3", text: "Low views, high watch time" },
      {
        type: "p",
        text: "The content itself is genuinely engaging, but the hook failed to grab people in the first place. Next action: keep the video, and swap out the first three seconds for a bolder hook.",
      },
      { type: "h3", text: "High views, high watch time" },
      {
        type: "p",
        text: "Both the hook and the body are working. This is your clear winner, don't keep testing variations against it out of habit. Push it to the main grid and start building the next core video off whatever made this one land.",
      },
      { type: "h3", text: "Low views, low watch time" },
      {
        type: "p",
        text: "Neither the hook nor the body is working, and no amount of re-editing the opening three seconds is likely to fix that. This is a signal to reconsider the concept itself, not just the execution of it, before spending another round of variations on it.",
      },
      {
        type: "p",
        text: "When you find the variation that maintains high watch time and pulls in shares or saves, that's the one you push to your main profile grid.",
      },
      { type: "h2", text: "Mistakes that quietly waste a test" },
      {
        type: "ul",
        items: [
          "Changing more than one variable at once, so a strong or weak result can't actually be traced back to what caused it.",
          "Judging a Trial Reel's performance before the 48-hour window has passed, when reach to a cold audience is still ramping up.",
          "Running a test, finding a clear winner, and never actually pushing it to the main grid, which wastes the entire point of testing in the first place.",
          "Making changes so small between \"variations\" that they're not really testing anything different, just risking the same duplicate-content penalty the whole approach is meant to avoid.",
        ],
      },
      {
        type: "quote",
        text: "Trial Reels aren't a shortcut around originality. They're a private lab for finding it, one small edit at a time.",
      },
      {
        type: "p",
        text: "Used this way, Trial Reels protect your main feed from underperforming content while constantly mining your best assets for the next hit, without ever putting a flop in front of the people who already follow you. For a business account specifically, that means your grid can stay a consistent, on-brand showcase, while the actual experimentation, the part every content strategy needs but most SMEs never have the appetite to do publicly, happens somewhere your existing customers never see it.",
      },
    ],
  },
  {
    slug: "vps-security-vpn-plus-app-auth",
    title: "The Bulletproof Self-Hosting Stack: Securing Your VPS with a VPN and App-Level Auth",
    metaTitle: "Secure Your VPS: VPN + App-Level Auth",
    description:
      "Hiding a self-hosted app behind a VPN feels like enough. Stacking app-level authentication on top of it is what actually makes the setup hard to break into. Here's how the two layers work together.",
    date: "2026-08-03",
    readTime: "6 min read",
    category: "IT & Security",
    tags: ["VPN", "Self-Hosting", "Security"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "So you have a VPS running a private web app, maybe a personal dashboard, a custom API gateway, or a dev environment, and you want to be sure nobody else can touch it. The question that usually comes up: if I put my app behind a private VPN, and then add a login screen on top of that, is it actually safe?",
      },
      {
        type: "p",
        text: "Short answer: yes. That combination is defense-in-depth, a security approach where you layer multiple independent defenses instead of relying on any single one. Here's why this stack works, how it fits together, and a few pitfalls worth knowing about before you build it.",
      },
      {
        type: "p",
        text: "This isn't just theory for hobby projects, either. The same pattern, network-level access control plus an independent application login, is standard practice behind most internal business tools too: the admin panel your team uses, the database dashboard, the internal API nobody outside the company should ever be able to reach. If you're self-hosting anything with real data behind it, this is close to the minimum bar worth aiming for.",
      },
      { type: "h2", text: "The blueprint: how the layers work together" },
      {
        type: "p",
        text: "This setup creates two distinct checkpoints. An attacker coming from the public internet has to get through both to do any damage.",
      },
      {
        type: "p",
        text: "Public internet → blocked by a strict firewall → Layer 1: the VPN (only authenticated VPN clients get through) → Layer 2: app-level auth (username, password, or MFA) → your application.",
      },
      { type: "h2", text: "Layer 1: the network perimeter (the moat)" },
      {
        type: "p",
        text: "By default, when you host an application it listens on a public IP address, which means anyone, including automated bots, can see your login page. Configure your VPS firewall (ufw on Ubuntu, for example) to block all public web traffic and only allow traffic through your VPN interface, and your application effectively disappears from the public internet. A bot scanning your IP sees a closed port, not a login form.",
      },
      {
        type: "link",
        text: "Haven't picked a VPN yet? See our comparison of OpenVPN, WireGuard, and Tailscale to decide which fits this layer.",
        href: "/blog/openvpn-vs-wireguard-vs-tailscale",
      },
      { type: "h2", text: "Layer 2: application authentication (the front door)" },
      {
        type: "p",
        text: "Say an attacker somehow gets onto your VPN network. If there's no application login behind it, they now have instant, unrestricted access to your app. An independent app-level authentication layer, OAuth, OpenID Connect, or plain username and password with MFA, means being \"on the network\" still isn't enough. Users have to prove who they are a second time, to a system that has nothing to do with the VPN.",
      },
      {
        type: "p",
        text: "The word \"independent\" is doing real work in that sentence. If your VPN and your application share the same credentials, or worse, the same password reused across both, you've effectively built one layer wearing two hats instead of two actual layers. The whole point of stacking these is that compromising one shouldn't automatically hand over the other, which means separate credential stores, and ideally separate authentication methods entirely, VPN keys on one side, app-level MFA on the other.",
      },
      { type: "h2", text: "What an attacker actually experiences trying to get in" },
      {
        type: "p",
        text: "It's worth walking through this from the outside, because it makes the value of each layer concrete. An automated bot scanning the internet for exposed services hits your IP address and finds nothing: the port that would normally serve your app simply doesn't respond, indistinguishable from a machine that's off entirely. That's Layer 1 doing its job before an attacker even knows there's anything worth attacking.",
      },
      {
        type: "p",
        text: "Now say a more targeted attacker somehow gets hold of valid VPN credentials, through a phishing attempt, a leaked config file, or a compromised laptop. They connect, and for the first time they can actually reach your application's login screen. But it's still a login screen, not the application itself, and they now need working credentials for a completely separate system, one that was never exposed to whatever compromised the VPN access in the first place. Each layer independently stops a different category of attacker, which is the entire premise of defense-in-depth.",
      },
      { type: "h2", text: "Why this setup is inherently safe" },
      {
        type: "ul",
        items: [
          "Zero public exposure: automated bots can't brute-force a login page they can't see, which eliminates the vast majority of random internet attacks before they start.",
          "Protection against app exploits: even if your app has an undiscovered vulnerability, an attacker can't reach the server to exploit it if the port isn't visible in the first place.",
          "Blast radius control: if your application password is ever cracked or stolen, it's useless on its own. Whoever has it still needs an active connection to your private VPN to do anything with it.",
        ],
      },
      {
        type: "p",
        text: "That third point is the one people underestimate. Password leaks happen constantly, through breached third-party services, phishing, or plain reuse, and largely outside your control. What is within your control is making sure a leaked password alone is never enough on its own to reach anything sensitive.",
      },
      { type: "h2", text: "Potential pitfalls to watch out for" },
      {
        type: "p",
        text: "This setup is robust, but no system is entirely flawless. Keep these three in mind.",
      },
      {
        type: "ul",
        items: [
          "The castle-and-moat trap: traditional VPNs grant broad network access. If someone steals a user's VPN keys, they're now \"inside the castle\" and can potentially scan your entire VPS or local Docker network.",
          "Key management overhead: distributing and revoking VPN configuration profiles (.ovpn or .conf files) gets tedious fast once you're sharing access with more than one or two people.",
          "The pull toward Zero Trust: once managing the VPN itself starts feeling heavier than the app it protects, most teams eventually move to Zero Trust Network Access (ZTNA) tools, which expose the app to specific authenticated users without managing a traditional network tunnel at all.",
        ],
      },
      {
        type: "p",
        text: "The castle-and-moat trap is the one worth taking most seriously as your setup grows beyond a single personal project. A mesh VPN like Tailscale addresses this directly with per-device access control lists, so a compromised device only reaches what it's explicitly authorized to reach, rather than the entire private network by default. That's a meaningful upgrade over a traditional VPN's all-or-nothing network access once you have more than a couple of services or people involved.",
      },
      { type: "h2", text: "How to get started" },
      {
        type: "p",
        text: "To build this stack today on an Ubuntu VPS, the path looks roughly like this.",
      },
      {
        type: "ol",
        items: [
          "Deploy your app locally on the VPS, for example via Docker listening only on 127.0.0.1, so it's never bound to a publicly reachable interface in the first place.",
          "Install a modern VPN such as WireGuard, or a mesh VPN such as Tailscale, on the VPS, and connect the devices that should have access.",
          "Configure your firewall (ufw) to deny incoming traffic on your app's web ports from the public internet, allowing access only from your VPN interface, then verify from an outside network that the port genuinely shows as closed.",
          "Implement app-level auth so users must log in with a strong password or token before they can view any data, independent of the VPN connection and using its own separate credential store.",
        ],
      },
      {
        type: "p",
        text: "That verification step in the third item is easy to skip and worth not skipping. Firewall rules are simple to get subtly wrong, an extra allow rule left over from testing, a Docker network configuration that bypasses ufw entirely. Actually checking from outside your VPN that the port isn't reachable is the difference between assuming the moat is there and confirming it.",
      },
      {
        type: "quote",
        text: "Being on the network should never be the same thing as being logged in. Treat the VPN as a locked gate, not a bypass.",
      },
      {
        type: "p",
        text: "It takes an extra hour to set up both layers instead of one. That hour is what moves a self-hosted setup from a vulnerable public target to something closer to a private, enterprise-grade digital fortress, and it's an hour that scales: the same pattern protects one personal dashboard just as well as it protects a dozen internal tools a small team depends on.",
      },
    ],
  },
  {
    slug: "building-a-multilingual-ai-assistant-with-n8n-and-sea-lion",
    title: "How We Built a Multilingual AI Assistant Using n8n and a Southeast Asia-Trained LLM",
    metaTitle: "Multilingual AI Assistant with n8n and SEA-LION",
    description:
      "Most off-the-shelf AI assistants default to models trained mostly on English, Western data. Here's how we wired a Southeast Asia-trained LLM into a Telegram assistant using no-code automation instead of a custom backend.",
    date: "2026-08-04",
    readTime: "6 min read",
    category: "AI Automation",
    tags: ["AI Agents", "Automation", "n8n"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "Most AI assistant tutorials point you at a general-purpose model and call it done. That's fine until the people you're actually building for speak and write in a way those models weren't trained to handle well, mixing English with Malay, Mandarin, or Singlish in the same sentence, using local shorthand for places and services that a Western-trained model has never seen. We wanted to test what it takes to build something that starts from the opposite assumption: a model trained with Southeast Asian language and context in mind, wired into a chat interface people already use.",
      },
      { type: "h2", text: "The problem: most AI assistants aren't built for how Singapore actually talks" },
      {
        type: "p",
        text: "The default AI stack most teams reach for assumes an English-first, Western-context model, accessed through a paid API, with a custom backend written to hold everything together. That's a lot of engineering overhead for a small team, real ongoing API costs per message, and it still misses the mark on regional context, code-switching between languages, and the tone local customers actually use. Answers can come back grammatically correct and still feel slightly foreign, missing the register a local business would actually use with its own customers.",
      },
      {
        type: "p",
        text: "We wanted a version of this that a small team could realistically stand up and maintain without a dedicated backend engineer on staff, and without committing to per-message API costs before knowing whether the thing was even useful.",
      },
      { type: "h2", text: "What we built" },
      {
        type: "p",
        text: "We used Telegram as the interface, since it's something most people already have installed rather than a separate app to download, and its bot API is built specifically for exactly this kind of integration, no app store approval process, no custom mobile app to maintain. The reasoning ran on SEA-LION, an open language model built by AI Singapore specifically with Southeast Asian languages and context in mind, and made available through a generous free-tier API, which mattered for a project that started as a test, not a funded product. Connecting the two was n8n, a no-code automation platform, so the whole thing didn't need a custom backend written from scratch.",
      },
      {
        type: "p",
        text: "The choice of n8n over a hand-written backend wasn't just about saving time upfront. A visual workflow is something a non-engineer on a small team can actually open, read, and modify later, change which model handles a message, adjust a prompt, add a new step, without needing to touch code or redeploy anything. For a small business, that maintainability matters more in month six than the initial build speed does in week one.",
      },
      {
        type: "p",
        text: "The interesting technical wrinkle was that n8n had no built-in support for this particular model. Rather than building a custom connector from scratch, we used the fact that the model exposes an OpenAI-compatible API, meaning it accepts requests in the same shape OpenAI's own API expects. That let us plug it straight into n8n's existing OpenAI integration node, just pointed at a different address with different credentials, instead of writing and maintaining custom integration code.",
      },
      {
        type: "p",
        text: "Two smaller problems took more effort than the core integration. First, Telegram delivers messages to a public HTTPS webhook, but a workflow running locally during development has no public address, so we tunneled the local endpoint out to a temporary public URL to receive messages while building and testing. Second, the shape of a Telegram message and the shape of input the AI workflow expected weren't identical, so a chunk of the actual build work was just careful field mapping, making sure the right text landed in the right place before it ever reached the model.",
      },
      { type: "h2", text: "What we'd change for a production deployment" },
      {
        type: "p",
        text: "A temporary tunnel is fine for testing and wrong for anything meant to run continuously, since it depends on a session that isn't guaranteed to stay up. For a real deployment, that webhook endpoint belongs on a small, properly secured VPS with a stable address, not a laptop with a tunnel open. We'd also add proper logging so a failed message doesn't just silently vanish, and basic rate limiting so a burst of messages, accidental or malicious, can't run up the model API bill or overwhelm the workflow.",
      },
      { type: "h2", text: "Checking the answers were actually good, not just fast" },
      {
        type: "p",
        text: "A working pipeline that returns a response quickly isn't the same as one giving a customer a correct or appropriately toned answer, and it's worth being explicit that these are two separate things to verify. Before treating anything like this as usable, we ran a batch of realistic questions through it, the kind of mixed-language, locally phrased queries a real customer would actually send, and checked the responses by hand for accuracy and tone, not just whether the pipeline technically completed without erroring out.",
      },
      {
        type: "p",
        text: "That distinction matters more than it sounds. A response can be fluent, confident, and completely wrong, or technically correct but delivered in a tone that would read as strange coming from a real local business. Catching that requires someone actually reading the outputs, not just confirming the workflow ran end to end.",
      },
      { type: "h2", text: "What it can't do yet" },
      {
        type: "p",
        text: "It's worth being honest about scope. This build handles text conversation, in the languages and tone it was set up for, and nothing more. It doesn't process voice messages, it doesn't have access to a knowledge base of the business's actual policies or inventory, and it can't take actions beyond replying, it can't check a booking system or update a record. Every one of those is a realistic next step, and none of them are free: each one is its own integration, its own testing pass, and its own new way for something to go wrong if it's rushed.",
      },
      { type: "h2", text: "Why this matters beyond the demo" },
      {
        type: "p",
        text: "This is the same shape as the FAQ bots, lead-intake assistants, and internal ops tools we build for clients, just pointed at whichever model and messaging channel actually fits the business, rather than defaulting to whatever's most talked about. The specific pieces, Telegram, SEA-LION, n8n, aren't the point. The pattern underneath them is: a messaging channel customers already use, a model chosen for fit rather than fame, and an automation layer a small team can actually maintain.",
      },
      {
        type: "ul",
        items: [
          "Handling repetitive customer questions in the language and tone your customers actually use, instead of a technically correct but slightly foreign-sounding reply.",
          "Triaging enquiries before a human ever needs to look at them, so your team's time goes to the conversations that actually need a person.",
          "Giving a small team an always-on first response without hiring anyone, across whatever hours your customers are actually messaging you.",
          "Sitting on top of tools you already use instead of requiring a platform migration or a rebuild of your existing workflow.",
        ],
      },
      { type: "h2", text: "The result" },
      {
        type: "p",
        text: "A working, 24/7 assistant answering through Telegram, with the underlying pieces, the model, the channel, and the automation layer, all swappable depending on what a given business actually needs. That flexibility, not any single tool, is the part worth taking away: the right assistant for a Singapore F&B business messaging customers in Singlish looks different from the right assistant for a B2B firm handling enquiries in formal English, and the same underlying pattern can be pointed at either.",
      },
    ],
  },
  {
    slug: "ai-agent-for-scheduling-google-calendar",
    title: "Teaching an AI Agent to Actually Manage a Calendar",
    metaTitle: "AI Agent for Calendar Scheduling",
    description:
      "Scheduling is simple to describe and tedious to actually do. Here's how we built an AI agent that reads a plain-language request and creates the calendar event itself, instead of just describing what it would do.",
    date: "2026-08-04",
    readTime: "6 min read",
    category: "AI Automation",
    tags: ["AI Agents", "Automation", "Scheduling"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "Scheduling is one of those tasks that's trivial to explain and mildly annoying to actually do: check availability, pick a slot, create the event, don't double-book. Most \"AI scheduling\" products bolt a separate paid tool onto your calendar, which means learning another dashboard and still doing the actual data entry yourself once the tool has suggested a time. We wanted to test something narrower: could an AI agent read a normal, plain-language request and just act directly on the calendar itself, using its real API, no separate app involved?",
      },
      { type: "h2", text: "The problem: scheduling is simple to describe and tedious to do" },
      {
        type: "p",
        text: "A calendar request like \"put a call with the vendor at 3pm Thursday\" is easy for a person to understand and slightly tedious to actually execute correctly, especially across a busy week. Switch to the calendar app, check for conflicts, type the title, set the time, add any relevant notes, save. None of that is hard on its own. It's the accumulation, doing that ten or twenty times a week across every small request that comes in, that turns into real time lost to low-value clicking.",
      },
      {
        type: "p",
        text: "That gap between understanding a request and actually executing it correctly is exactly what an AI agent, as opposed to a chatbot that just talks about scheduling, is supposed to close.",
      },
      { type: "h2", text: "What we built" },
      {
        type: "p",
        text: "The agent has three parts working together: a reasoning model that decides what needs to happen based on the request, an agent framework built around the ReAct pattern, reason, then act, then observe the result, then reason again, that lets it choose and call specific actions rather than just generating text, and a calendar tool, authorized against a real calendar account, that the agent can actually invoke to create the event.",
      },
      {
        type: "p",
        text: "We picked this framework specifically because the reason-act-observe loop maps cleanly onto how a person actually handles a slightly ambiguous request: think about what's being asked, take a step, look at what came back, then decide whether that's enough or another step is needed. A simpler approach, one that tries to produce the finished action in a single pass, tends to do worse exactly where scheduling requests get interesting, when the first read of the request isn't quite enough to act on safely.",
      },
      {
        type: "p",
        text: "The distinction that matters here is \"tool calling.\" Instead of the model just describing what it would do in a sentence, it decides when to hand off structured details, like a title, a time, and a duration, to a specific action that actually executes. The model reasons; the tool does the work. That separation matters because it keeps the two failure modes independent: if the tool call fails, say the calendar API is temporarily unreachable, that's a clean, catchable error, not a case where the model has to guess whether something happened and improvise from there.",
      },
      {
        type: "p",
        text: "Authorization was its own piece of the build, and worth being deliberate about. Rather than a static API key, the agent authenticates against the calendar account through OAuth 2.0, the same standard used when you click \"Sign in with Google\" on a normal app. That matters because it's scoped and revocable: access can be limited to calendar actions specifically, and pulled at any point, without needing to rotate some shared secret buried in a config file somewhere.",
      },
      {
        type: "p",
        text: "The interface itself, for this build, was a terminal, plain text in, plain text out. That's a deliberate simplification. The interesting part of the project was never the chat window, it was whether the reasoning-plus-tool pattern actually worked reliably against a real calendar. A polished interface on top of an unreliable core isn't worth building first.",
      },
      { type: "h2", text: "What happens when the request is ambiguous" },
      {
        type: "p",
        text: "\"Put a call with the vendor at 3pm Thursday\" is clean. \"Move my call with the vendor to sometime next week\" is not, which Thursday is \"next week,\" and does the agent silently pick one, or ask? This is where a poorly scoped agent quietly becomes a liability instead of a convenience: it's technically capable of creating an event, so it does, just possibly the wrong one, confidently and without flagging the ambiguity at all.",
      },
      {
        type: "p",
        text: "The agent is built to treat missing or ambiguous information as a reason to ask a clarifying question rather than guess, which sounds like an obvious design choice until you've seen an agent that doesn't do it. A scheduling mistake made confidently, silently, and never surfaced is worse than one made slowly with a follow-up question, because at least the second kind gets caught before it costs anyone a missed meeting.",
      },
      { type: "h2", text: "What we tested before trusting it with a real calendar" },
      {
        type: "p",
        text: "Before letting this touch an actual calendar with real events on it, we ran it against a batch of deliberately awkward requests: overlapping times, vague dates, requests referencing an event that didn't exist yet, requests to double-book a slot on purpose. The goal wasn't to see if it handled the easy cases, any agent handles the easy cases, it was to see what it did when the input was messy in the ways real requests actually are messy. A handful of those runs surfaced cases where the agent needed a clearer instruction about when to ask versus when to assume, which fed directly back into how the reasoning step was scoped.",
      },
      { type: "h2", text: "Why this is the useful part of \"AI agents\" for a business" },
      {
        type: "p",
        text: "The same pattern applies well beyond a calendar. Updating a CRM record, sending an invoice reminder, or logging a new lead are all small, well-defined actions with the same shape: a plain-language trigger, a moment of reasoning about what's actually being asked, and a narrow tool that executes exactly one thing correctly. The \"agent\" part is just deciding when and how to trigger that tool from a request, rather than requiring someone to open the right system and do it by hand every time.",
      },
      {
        type: "p",
        text: "What makes this different from a general-purpose chatbot bolted onto a business is the scoping. An agent that can only create, move, and check calendar events is much easier to trust than one that's vaguely empowered to \"help with admin,\" because its entire failure surface is contained to one well-understood action. That's a deliberate constraint, not a limitation we'd remove given the chance. A narrower agent is a more trustworthy one, and trust is the actual bottleneck standing between a business and letting an agent touch anything that matters.",
      },
      { type: "h2", text: "The result" },
      {
        type: "p",
        text: "A working agent that takes a natural-language scheduling request and creates the real calendar event, handling authentication, ambiguity, and error cases along the way, rather than just describing what it would do and leaving the actual work to a human. The underlying pattern, reasoning plus a narrow, well-defined tool, is what we reuse whenever a client's actual bottleneck is a repetitive action sitting behind a request someone has to interpret by hand.",
      },
      {
        type: "p",
        text: "The obvious next step, wrapping this in a proper chat interface instead of a terminal, is deliberately the easy part we saved for last. Once the reasoning and the tool behind it are trustworthy, the interface on top is a comparatively small amount of work, a Telegram bot, a web chat widget, or wiring it into an existing internal tool. Building the interface first and hoping the reliability follows tends to go the other way around.",
      },
    ],
  },
  {
    slug: "always-on-ai-agent-for-daily-operations",
    title: "What Happens When You Give an AI Agent a Memory and a Schedule",
    metaTitle: "Giving an AI Agent Memory and a Schedule",
    description:
      "A stateless chatbot forgets everything the moment the conversation ends. We built a persistent AI agent that remembers, runs on its own schedule, and checks in without being asked, then looked at where that pattern actually earns its keep in a business.",
    date: "2026-08-04",
    readTime: "5 min read",
    category: "AI Automation",
    tags: ["AI Agents", "Automation", "Case Study"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "Most chatbots are stateless: every conversation starts from zero, with no memory of what happened yesterday and no ability to act unless someone asks first. This project started as a low-stakes experiment, essentially a digital pet that happened to be useful, but the actual question behind it was serious: what changes once an agent has persistent memory and a schedule of its own, running quietly in the background rather than only responding when spoken to?",
      },
      { type: "h2", text: "The problem with most \"AI assistants\"" },
      {
        type: "p",
        text: "An assistant that forgets everything between conversations can't build on past context. Ask it about a project today, and tomorrow you're re-explaining it from scratch, because as far as the assistant is concerned, today is the first day it's ever existed. Most people who've used a chatbot for more than a few sessions have run into this without necessarily naming it: the mild irritation of repeating yourself, or the assistant confidently contradicting something it already told you last week because it never actually retained it in the first place. And one that only ever responds can't proactively flag something that needs attention, it can't notice a deadline approaching or a task going stale, because it's not running at all until someone opens a chat and types something.",
      },
      {
        type: "p",
        text: "Both limits come from the same underlying design choice, not two separate problems: no persistent state, and no way to run on a timer instead of a prompt. Fix both, and the assistant stops being a tool you operate and starts being closer to something that operates alongside you.",
      },
      { type: "h2", text: "What we built" },
      {
        type: "p",
        text: "We gave the agent a small database so it remembers context between conversations instead of starting fresh each time. Concretely, that means relevant facts and past exchanges get written down and pulled back in as context the next time the agent responds, so it can reference what was discussed yesterday instead of asking to be caught up again.",
      },
      {
        type: "p",
        text: "We also gave it a set of scheduled routines, cron-style jobs that fire at set times, so it can act on a timer rather than only on request. That's the piece that turns it from reactive to proactive: instead of waiting to be asked for a status update, it generates and sends one on its own every morning, because a job told it to, not because anyone prompted it.",
      },
      {
        type: "p",
        text: "An agent framework sat on top of both, giving the agent a consistent structure for how it behaves and responds across sessions, so its \"personality\" and decision-making don't drift or reset between one interaction and the next. Telegram served as the always-reachable interface, for the same reasons as our other Telegram-based builds, no separate app to install, and its native authentication was more than sufficient here since this was a single-user personal tool rather than something needing multi-user access control. The entire system ran on a small, inexpensive VPS rather than anything resembling heavy infrastructure.",
      },
      { type: "h2", text: "Why memory changes what \"automation\" can mean" },
      {
        type: "p",
        text: "There's a real qualitative shift between an AI that answers and an AI that manages, and it isn't about the model getting smarter. A more capable model with no memory and no schedule is still just a better version of the same reactive tool. Memory plus a schedule is what actually crosses the line into something that can carry a thread forward and initiate action on its own, which is a lot closer to what people actually picture when they imagine an \"AI assistant\" versus what most chatbot integrations actually deliver.",
      },
      { type: "h2", text: "The actual lesson: it doesn't take much infrastructure" },
      {
        type: "p",
        text: "The headline finding was almost anticlimactic: you don't need a large, complex stack to build a genuinely useful, persistent AI agent. A small server, a lightweight database, and a scheduling job are enough to get from \"chatbot that answers when asked\" to \"agent that checks in and remembers.\" That matters commercially as much as technically, an SME doesn't need to budget for enterprise-scale infrastructure to get a genuinely persistent, proactive assistant. The cost of the pattern is closer to a cheap VPS and a modest API bill than anything resembling a platform investment.",
      },
      { type: "h2", text: "What memory actually needs to store" },
      {
        type: "p",
        text: "It's worth being specific about what \"remembers\" means in practice, since it's easy to picture something more elaborate than it needs to be. The database isn't storing a full transcript of every conversation forever, that would get unwieldy and mostly irrelevant fast. It's storing a smaller set of durable facts and recent context: what was discussed recently, any standing preferences, and the state of anything ongoing, like a task that's still open. That distinction, between everything that was ever said and the smaller set of things actually worth remembering, is most of what makes the memory useful instead of just large.",
      },
      { type: "h2", text: "Getting the schedule right without becoming annoying" },
      {
        type: "p",
        text: "A proactive agent that fires too often stops being useful and starts being noise someone eventually mutes entirely, which defeats the purpose. Tuning how often it checks in, and under what conditions it's actually worth interrupting someone versus quietly logging something for later, mattered as much as building the scheduling mechanism itself. The technical part, running a job on a timer, is genuinely simple. Deciding when that job should actually produce a message worth sending is the part that takes iteration.",
      },
      { type: "h2", text: "Where this applies to a business" },
      {
        type: "ul",
        items: [
          "A daily operations briefing pushed to a manager automatically, instead of being pulled together by hand each morning.",
          "A project tracker that nudges the team about outstanding items on its own, rather than relying on someone to chase it manually.",
          "A lead follow-up reminder that fires on its own schedule instead of depending on someone remembering to check.",
          "A customer support assistant that recalls a customer's previous issue instead of asking them to repeat themselves on every new message.",
        ],
      },
      {
        type: "p",
        text: "None of these need a large system. They need the same two ingredients: somewhere for the agent to remember what's already happened, and a schedule that lets it act without being asked first. Everything else, the specific model, the specific channel, the specific database, is a detail that gets chosen based on what a given business already uses, not a hard requirement of the pattern itself.",
      },
      {
        type: "p",
        text: "What we'd add before putting any of this in front of a client is a clear way to override or pause it, a single command that stops the scheduled routines without needing to touch the underlying server. An agent that proactively messages people is genuinely useful right up until someone wants a quiet week, and building in an easy off switch from day one is cheaper than retrofitting it after the first time someone actually needs it.",
      },
    ],
  },
  {
    slug: "building-ai-products-on-regional-llms-not-just-openai",
    title: "Why We Don't Default to OpenAI for Every AI Feature We Build",
    metaTitle: "Building AI Products on Regional LLMs, Not Just OpenAI",
    description:
      "Most AI development tooling assumes you'll use a handful of major providers and stops there. Here's what it actually takes to plug a different model, like a Southeast Asia-trained LLM, into a real product instead.",
    date: "2026-08-04",
    readTime: "5 min read",
    category: "AI Automation",
    tags: ["AI Agents", "LLM Integration", "Automation"],
    author: "nuj studios team",
    content: [
      {
        type: "p",
        text: "Most AI development frameworks quietly assume you'll be using one of a handful of major providers, and some actively reject anything else with validation errors, even when the alternative model speaks the exact same API format under the hood. Concretely: a framework's default provider often checks the requested model name against an internal list of ones it recognizes, and simply refuses to send the request if the name doesn't match, regardless of whether the endpoint you're pointing at would actually respond correctly. We wanted to know what it actually takes to get past that and plug in a different model on purpose.",
      },
      { type: "h2", text: "The problem: most AI frameworks assume there's only one kind of model worth using" },
      {
        type: "p",
        text: "The \"best\" model for a given business isn't always the most talked-about one. Sometimes it's a regional model trained with more relevant local context, sometimes it's a self-hosted model chosen for cost or data residency reasons, since keeping data within a specific jurisdiction can be a genuine compliance requirement, not just a preference. Sometimes it's simply cheaper per token for the volume a business actually needs, without a meaningful drop in quality for the specific task at hand. Standard AI SDK tooling often doesn't expect that choice and blocks it by default, not out of malice, but because supporting every possible model isn't where a framework's maintainers focus their testing effort.",
      },
      {
        type: "p",
        text: "This isn't a hypothetical concern. A business handling customer data under Singapore's PDPA, or one that's simply promised clients their information stays within a specific region, can find that the most convenient default provider is quietly the wrong choice on compliance grounds alone, independent of how good the model itself is.",
      },
      { type: "h2", text: "Why frameworks default to lock-in in the first place" },
      {
        type: "p",
        text: "It's worth being fair to the framework here. Defaulting to a small set of well-tested, heavily used providers is a reasonable trade-off for the majority of developers who just want something that works reliably out of the box, and validating the model name catches a whole category of accidental misconfiguration before it becomes a confusing runtime error. The friction only shows up for the smaller group of people who have a deliberate reason to point somewhere else, and for them, the default protection becomes the obstacle.",
      },
      { type: "h2", text: "What we built" },
      {
        type: "p",
        text: "Rather than forcing an alternative model through a framework's default assumptions, we built a small custom configuration layer that explicitly told the framework where to send requests and how to authenticate, bypassing the built-in restrictions entirely. Concretely, that meant configuring a base URL, the authentication headers, and the model identifier by hand instead of letting the framework infer or validate them against its own internal list, using a compatibility layer designed for exactly this purpose rather than fighting the default provider directly.",
      },
      {
        type: "p",
        text: "That layer sat underneath a normal chat interface with streaming responses, meaning text appears token by token as the model generates it, the way most people now expect a chat product to feel, rather than waiting for a full response to arrive all at once. Getting streaming to keep working correctly regardless of which model was actually answering was the part that mattered: the rest of the application, the interface, the conversation history, the UI state, didn't need to know or care which model was behind the response.",
      },
      {
        type: "p",
        text: "The approach generalizes further than just one model. Any model server that speaks the same OpenAI-compatible request and response shape, whether that's a hosted regional model, a self-hosted model running through a serving layer, or a local model running through something like Ollama, can be plugged into the same override, changing only the address and the credentials, not the surrounding application code.",
      },
      { type: "h2", text: "What actually broke while we were testing this" },
      {
        type: "p",
        text: "Bypassing the framework's validation removes a safety net along with the restriction, and it's worth being honest that this cuts both ways. Without the framework checking things on your behalf, small mistakes, a slightly wrong header, a mistyped model identifier, an authentication token in the wrong format, surface as confusing errors from the model server instead of a clear, early warning from the framework itself. Most of the actual debugging time on this project went into working through those unclear failures one at a time, not into the override mechanism itself, which was comparatively simple once it was working.",
      },
      { type: "h2", text: "Why this matters for a business choosing AI tools" },
      {
        type: "p",
        text: "The same approach works for any model that follows a compatible API shape, which means a business isn't locked into a single AI provider by default. Picture a realistic path: a product gets prototyped quickly against a well-known global provider because it's the fastest way to validate the idea, and later, once it's live, the business wants to move to a regional model for cost reasons, or needs to satisfy a data residency requirement that the original provider can't meet. With this pattern, that's a configuration change, not a rebuild of the application around a new SDK.",
      },
      {
        type: "p",
        text: "That optionality has a real cost implication too. Being able to compare providers on price and performance for your actual workload, instead of being structurally stuck with whichever one you happened to start with, is part of what keeps an AI feature's ongoing running cost in check rather than locked to whatever a single vendor decides to charge. It's the same efficiency-first thinking behind pairing a smaller, traditional machine learning model with an LLM only where language understanding is genuinely the bottleneck: use the tool that actually fits the job and its cost, not whichever one is easiest to reach for by default.",
      },
      { type: "h2", text: "The result" },
      {
        type: "p",
        text: "A working chat application answering through a Southeast Asia-trained model instead of a default global provider, with streaming responses working exactly as they would with any major provider, using an approach general enough to apply to any similarly compatible model. That's the actual point: not one specific model, but not being structurally stuck with whichever one happens to be the default.",
      },
      {
        type: "p",
        text: "The broader habit this reflects is one we apply before any AI feature gets built for a client: pick the model based on what the task, the budget, and any data residency requirements actually demand, then build the integration to fit that choice, rather than defaulting to whichever provider happens to have the most name recognition and adjusting the business requirements to match it afterward.",
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
