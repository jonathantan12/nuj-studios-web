import type { BlogBlock } from "./blog-posts";

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
  /**
   * "illustrative" (default) = a sample brief showing how we'd approach a project,
   * not a completed client engagement. "internal" = a real, in-house build we've
   * actually shipped (e.g. our own product infrastructure), described honestly
   * without client-confidential specifics.
   */
  kind?: "illustrative" | "internal";
  /**
   * Optional long-form body, rendered instead of challenge/approach/outcome on the
   * detail page. challenge/approach/outcome still populate cards, the markdown
   * mirror's summary line, and the llms-full.txt manifest.
   */
  content?: BlogBlock[];
};

/**
 * Most entries here are illustrative sample projects describing how Nuj Studios
 * approaches common SME briefs (not completed client engagements). Entries with
 * `kind: "internal"` are real, in-house builds, labeled as such.
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
  {
    slug: "nuj-studios-ai-agent-harness",
    title: "Building the Harness: The Reusable Engine Behind Every AI Agent We Ship",
    metaTitle: "The Harness Behind Every AI Agent We Build",
    industry: "AI Product Engineering",
    kind: "internal",
    summary:
      "Instead of building a new AI integration from scratch for every product, we built one reusable backend, our own agent harness, that owns the reasoning loop, tools, memory and safety checks every AI agent we ship runs on.",
    challenge:
      "Every AI feature we'd shipped before this had its own bespoke integration: its own way of talking to a model, its own memory (or none), its own ad hoc handling of tool calls and failures. That meant slower delivery on every new AI idea, an inconsistent reliability bar from one product to the next, and any bug fix or safety improvement benefiting exactly one product instead of all of them.",
    approach: [
      "Separated the concerns properly: one FastAPI backend owns the reasoning loop, tool and skill registry, and conversation history; every product frontend is a thin Next.js UI over it, not a separate integration",
      "Standardized tools behind a single validated interface (typed input models, a generic run() contract) so adding a capability is a small, contained change instead of touching the core loop",
      "Made every tool call pause for human approval by default, with narrow, deliberate exceptions for tools that are structurally read-only, and made re-running an approved call idempotent instead of risking a double-execution",
      "Gave the agent one persistent identity plus a cross-session memory graph that compacts itself under a token budget instead of growing without bound",
      "Gave the agent its own private, sandboxed database it can create tables in and query freely, completely separate from the harness's own conversation storage",
      "Built a self-monitoring eval pass that reads back the agent's own audit trail on demand and flags patterns that suggest it's gone off the rails, not just whether it technically ran",
    ],
    outcome:
      "One backend now powers every AI product we build instead of a pile of one-off integrations. A new AI product is a new Skill, a system prompt and a scoped tool list, not a new backend from scratch. Session resumability, memory, approval gating and self-monitoring are solved once, centrally, and every product inherits the fix. It's already the reference architecture we're rolling out across our own AI products as they launch.",
    services: ["ai-automation", "web-development"],
    content: [
      {
        type: "p",
        text: "Ask most vendors what's behind their \"AI agent\" and you'll get an answer that's really just the name of a model. That's not a complete answer, and it's not really an honest one either. A model is raw reasoning capacity, nothing more. What decides whether an AI agent is something you can actually trust with real work is everything built around that model: the rules about what it's allowed to do without asking first, the memory that lets it pick up where it left off, the checks that catch it when it starts behaving strangely, and the plumbing that makes all of that consistent across every product it powers. We call that surrounding system the harness, and this is the story of why we built our own instead of wrapping a chat window around whichever model happened to be popular that month.",
      },
      {
        type: "h2",
        text: "The problem: every new AI idea meant rebuilding the same plumbing",
      },
      {
        type: "p",
        text: "We build AI features for clients and for ourselves, and for a while, each one started from a blank page. A new AI-powered feature meant a new way of calling a model, a new (or nonexistent) way of remembering anything across turns, and a new, usually thinner, way of handling what happens when a tool call fails or the model asks to do something it probably shouldn't do unsupervised. None of that is glamorous work, so it tended to get built just well enough to demo, which is a very different bar from built well enough to leave running unattended.",
      },
      {
        type: "p",
        text: "The actual symptoms showed up exactly where you'd expect: a chat session that couldn't be resumed after a page refresh, a model that silently lost track of tool calls it had made earlier in the same conversation, no consistent record of what an agent had actually done versus what it merely claimed to have done in its own reply. Individually, each of those is a small bug. Together, across several products each with their own version of the same missing plumbing, they're the reason a lot of \"AI agents\" work fine in a five-minute demo and quietly misbehave the first time someone actually depends on one. We wrote about that gap in general terms in a separate piece on why most AI agents break the moment you rely on them; building our own harness was us taking our own advice.",
      },
      {
        type: "h2",
        text: "The core idea: an AI agent is not a model. It's AI Agent = LLM + Harness.",
      },
      {
        type: "p",
        text: "Once you separate those two things, a lot of decisions get simpler. The model is talent: it can reason about an ambiguous request, draft a reply, decide which tool would help. It has no memory of its own, no sense of what it's allowed to touch, and no way to tell you when something's gone wrong unless you built a system around it that watches for that. The harness is that system. It's the part that decides which tools the model can even see this turn, what happens when it asks for one it needs a human to approve first, what gets remembered after the conversation ends, and what a monitoring pass should flag as a warning sign after the fact.",
      },
      {
        type: "p",
        text: "The analogy we keep coming back to internally: think of the AI agent, the thing a customer or a teammate actually talks to, as a right hand man. Capable, always on, works from the same playbook every time, doesn't forget what you told it last week, and knows exactly which few things it's allowed to do without checking in first. None of that comes from the talent alone. A brilliant hire with no onboarding, no defined authority, and no manager checking in is a liability, not an asset, no matter how capable they are individually. What makes a right hand man trustworthy enough to actually hand real work to is the system they're operating inside, not the raw talent underneath it. Same logic applies to an AI agent, just with a harness standing in for the onboarding, the authority limits, and the manager.",
      },
      {
        type: "p",
        text: "That's also why we built the harness to be usable like software, not like a one-off integration you rebuild every time you have a new AI idea. You don't hand-roll a new operating system for every app you write; you write the app on top of one you trust. We wanted the same relationship between our AI products and the thing running underneath them: define a new Skill, a system prompt plus a scoped set of tools, and you have a new AI agent product, without touching the reasoning loop, the approval logic, or the memory system underneath it.",
      },
      {
        type: "h2",
        text: "What we actually built",
      },
      {
        type: "p",
        text: "Structurally, it's one backend and many thin frontends. A single FastAPI service owns the reasoning loop, the tool and skill registry, and conversation history in a database. Every product we ship, a client-facing assistant, an internal ops tool, this website's own future AI surfaces, is a Next.js app that talks to that one backend over a standard streaming chat protocol. The frontend never talks to a model directly. It talks to the harness, and the harness talks to the model.",
      },
      {
        type: "p",
        text: "What actually differentiates one product from another isn't a forked copy of the backend, it's a Skill: a named bundle of a system prompt and a specific list of tools that skill is allowed to use. A customer-support agent and an internal scheduling assistant can run on the exact same reasoning loop, the exact same approval logic, the exact same memory system, and differ only in what their Skill tells them to do and what they're allowed to touch. That's the entire point of separating the two: the expensive, hard-to-get-right engineering lives in one place and gets reused, while the part that's genuinely specific to a given product, its job description, stays small and easy to change.",
      },
      {
        type: "ul",
        items: [
          "A reasoning loop that calls the model, hands it a scoped set of tools, and keeps looping until it has a final answer or needs a human",
          "A tool interface with validated, typed inputs, so a tool either receives well-formed data or fails loudly before it ever runs, not silently on bad input",
          "A persistence layer that records every message and tool call incrementally, so a mid-stream crash never loses history that already reached the client",
          "A persona, one identity across every product, plus a memory graph the agent can write to and search across sessions, not just within one conversation",
          "A private, sandboxed database the agent can create its own tables in for a task, completely separate from the harness's own conversation storage",
          "A self-monitoring pass that reads the agent's own audit trail on a schedule and flags patterns that suggest something's actually wrong, not just whether a call technically succeeded",
        ],
      },
      {
        type: "h2",
        text: "How a request actually moves through the system",
      },
      {
        type: "p",
        text: "Walk through what happens when someone sends a message. The frontend hands it to the harness along with which Skill is active for that product. The harness loads that session's history from the database, not from anything the client claims about it, since the database is the only source of truth for what actually happened. It builds a system prompt from three layers stacked together: the harness's own persistent identity, standing instructions about when and how to use memory, and the active Skill's own job description. Then it calls the model with that context and the Skill's scoped list of tools, and starts streaming the response back token by token as it's generated, the same live-typing feel you'd expect from any modern chat product.",
      },
      {
        type: "p",
        text: "If the model asks to use a tool, the harness doesn't just run it. It checks whether that specific tool is one that's allowed to execute on its own or one that needs a human to say yes first, a distinction we set per tool, not globally. Nearly everything defaults to requiring approval; a small, deliberate set of read-only tools, ones that can only look something up and can't change anything, are the exceptions, because requiring a human to approve every single lookup would make an agent unusable without actually making it safer. Once a call is approved and executed, the harness records both the call and its result, then loops back into the model with that result added to the conversation, and keeps going until the model has a final answer with nothing left pending.",
      },
      {
        type: "p",
        text: "A few details in that loop exist specifically because we found real failure modes while building it, not because they sounded like good ideas in the abstract. A session can only have one turn actually generating at a time, so a second message sent while the first is still in flight surfaces as \"still working on it\" instead of quietly starting a second, independent run that piles up alongside the first. Approving a tool call twice, say a retry after a flaky connection, replays the already-recorded result instead of executing the action again, so a network hiccup can never turn into a duplicate charge, a duplicate message, or a duplicate anything. And if a tool call is left waiting on approval and the conversation is picked back up later, possibly by a different request entirely, the harness reattaches to the exact run it paused, rebuilding the model's context straight from what's actually stored in the database rather than trusting anything the client sends about what supposedly happened.",
      },
      {
        type: "h2",
        text: "Memory that doesn't grow without bound",
      },
      {
        type: "p",
        text: "Two tools, remember and recall, are available to every Skill automatically, not opted into per product. The model decides on its own what's worth keeping and goes looking for it later, and we've verified this genuinely works across sessions, not just within a single long conversation: a fact saved in one session was later retrieved from a brand-new session that shared no prior history at all.",
      },
      {
        type: "p",
        text: "The part that took more thought was what happens once that memory store actually grows. A naive version of long-term memory either grows forever, quietly eating more and more of the context budget on every single turn, or gets brutally pruned and loses things a future conversation genuinely needed. We built a compactor that runs automatically once the store crosses a rough token budget: it asks the model to merge, deduplicate, and summarize everything it's saved into a smaller set of entries that still contain every distinct fact, denser, not thinner. And because an LLM summarizing its own memory can, in principle, produce something broken or badly compressed, the compactor refuses to apply a result that came back empty, malformed, or that didn't actually shrink the store. A failed compaction just leaves memory exactly as it was rather than risking the alternative: an agent that quietly starts forgetting things because a summarization pass went wrong.",
      },
      {
        type: "h2",
        text: "An agent with its own database, safely",
      },
      {
        type: "p",
        text: "Some tasks genuinely need the agent to keep structured state across a task, a running list, a set of records it's building up over several turns, not just prose memory. Rather than letting an agent anywhere near production data for that, we gave it its own private SQLite database, a completely separate file from the harness's own conversation and session storage, that it can create tables in and read from and write to freely. Reads are unrestricted and don't require approval, since a SELECT statement can't damage anything and requiring a human to bless every lookup would make the tool pointless. Writes, creating a table, inserting a row, dropping something, go through the same approval gate as any other consequential action. The tool's own instructions explicitly tell the agent to check what tables already exist before creating a new one, so it doesn't quietly accumulate five near-duplicate tables for the same data under slightly different names, and every query goes through parameterized values rather than string-built SQL, the same discipline you'd want from a human-written backend.",
      },
      {
        type: "h2",
        text: "How we evaluate the harness before we trust it with anything",
      },
      {
        type: "p",
        text: "We take the same position here that we take in a separate piece about testing AI skills before they touch client work: an AI system that hasn't been checked isn't proven, it's just unrefuted. That shows up at two different levels for the harness itself.",
      },
      {
        type: "p",
        text: "At the code level, an automated test suite drives the entire reasoning loop and its streaming protocol against a fake, scripted model, no live API calls, no cost, no network dependency, so basic correctness is checked on every change. That suite specifically exercises the failure modes described above: that an approved tool call only ever executes once even if approval is submitted twice, that a run correctly reattaches to the same paused state after approval instead of starting fresh, that a run gets marked failed rather than hanging forever when something throws partway through, and that a session genuinely rejects a second message while the first is still generating instead of silently starting a parallel run.",
      },
      {
        type: "p",
        text: "At the behavior level, once the agent is actually running, we don't just assume it's staying on the rails, we check. A self-monitoring pass reads back the audit trail the harness already keeps, every tool call, every run and its outcome, and flags patterns that suggest something's actually wrong: tables that look like near-duplicates of each other under slightly different names, a tool that's been failing repeatedly, memory lookups that keep coming back empty, runs that failed outright or have been stuck mid-turn for far longer than a real response ever takes. None of that requires a human to comb through raw logs looking for trouble. It surfaces the trouble.",
      },
      {
        type: "h2",
        text: "What we haven't built yet, on purpose",
      },
      {
        type: "p",
        text: "We'd rather say plainly what's still ahead than pretend a skeleton is more finished than it is. Every tool today runs with the same permissions as the backend process itself, fine while every tool is one we've written and reviewed ourselves, not fine the moment that stops being true, so sandboxing tool execution is next before anything less trusted runs through it. Authentication and rate limiting aren't wired in yet either, deliberately deferred while the focus has been proving the harness itself locally, but both are on the list before any product built on it goes fully public. And memory search today is straightforward keyword matching; upgrading that to something more semantic is the natural next step as the memory graph grows past what keyword matching can reliably find.",
      },
      {
        type: "h2",
        text: "Why this matters beyond our own engineering",
      },
      {
        type: "p",
        text: "The practical payoff of building it this way is that a new AI product for a client stops being a new backend project. It's a new Skill, a job description and a scoped tool list, sitting on top of a reasoning loop, an approval system, a memory system, and a self-monitoring pass that already exist and are already proven. A bug fix or a safety improvement made once benefits every product running on the harness, instead of needing to be re-discovered and re-patched separately in each one. That's the actual difference between an AI feature that was bolted on for a demo and one that was built to be depended on, and it's the standard we're holding our own products to before we'd ever recommend it to a client's.",
      },
    ],
  },
  {
    slug: "nuj-studios-ai-marketing-skill",
    title: "The Marketing Skill: Turning Saved Inspiration Into Grounded Content Ideas",
    metaTitle: "Our AI Marketing Content Idea Generator",
    industry: "Marketing & Content",
    kind: "internal",
    summary:
      "A real Skill running on our harness that turns a folder of saved Instagram, YouTube and TikTok references into concrete video ideas, grounded in what's actually performing, not generic content-creator advice.",
    challenge:
      "Ask any general-purpose AI chatbot for \"viral video ideas\" and it reaches for the same generic content-creator advice everyone else gets: post consistently, hook them in three seconds, use trending audio. None of that is wrong, and none of it is useful, because it isn't grounded in anything specific to a business's actual audience, brand, or the kind of content that's already resonating in its niche. We wanted an AI brainstorming tool that couldn't do that, one that's structurally incapable of answering from generic advice because it's required to look at real evidence first.",
    approach: [
      "Built a Marketing Skill on top of our existing harness rather than a standalone tool, so it inherits the same memory, approval and reliability infrastructure as everything else we run",
      "Gave it one tool, a reference lookup, that pulls every video a user has saved as inspiration, Instagram, YouTube and TikTok links plus directly uploaded clips",
      "Captured more than just the link: on-screen text and a description pulled from actually analyzing the saved video, plus real platform stats, uploader, likes, comments, views, and which audio track was used",
      "Wrote the Skill's instructions to require that lookup before any brainstorming happens at all, so it can't fall back on generic advice even if asked to",
      "Structured the output format itself: a hook, a beat-by-beat outline, and which specific saved reference each idea draws from and why, so every suggestion is traceable back to real evidence",
      "Kept the tool strictly read-only and approval-free, since it can only look at what's already saved and can't publish, post, or change anything on its own",
    ],
    outcome:
      "A working Skill that generates content ideas explainable in terms of a business's own saved taste and real, verifiable performance data, not a black box. It's ideation only today, deliberately: it drafts ideas for a human to act on, and doesn't post or publish anything itself. It runs on the same harness as everything else we build, so any reliability or safety improvement made elsewhere in the harness benefits it automatically.",
    services: ["content-marketing", "ai-automation"],
    content: [
      {
        type: "p",
        text: "Ask a general-purpose AI chatbot for video content ideas and you'll get something confident, well-formatted, and almost useless: post consistently, hook viewers in the first three seconds, ride trending audio. Every point true, none of it specific to the business asking. That's the ceiling of ungrounded brainstorming, and it's the ceiling we built our Marketing Skill specifically to break through, by making it structurally incapable of answering without looking at real evidence first.",
      },
      {
        type: "h2",
        text: "The problem: generic advice dressed up as a suggestion",
      },
      {
        type: "p",
        text: "The actual failure mode of most AI content brainstorming tools isn't that they're wrong, it's that they're untethered. A model with no grounding will happily generate ten video ideas that read like a content marketing 101 checklist, because that's exactly what its training data is full of: generic, widely repeated advice about what tends to work in general. What it can't do on its own is know what's actually working for one specific business, in one specific niche, with one specific audience's taste, because that information was never in its training data to begin with. It lives somewhere else: in what that business's own team has already noticed resonating.",
      },
      {
        type: "h2",
        text: "What we built: a Skill that has to look before it speaks",
      },
      {
        type: "p",
        text: "The pattern we've used across every product on our harness applies directly here: a Skill is a system prompt plus a scoped set of tools, and this one gets exactly one tool, a reference lookup. The idea is straightforward: as someone comes across Instagram, YouTube or TikTok videos they find genuinely interesting, on brand, or worth learning from, they save them. The Skill's entire job is to turn that growing pile of saved taste into concrete new ideas, and its instructions are explicit that it has to call the lookup tool and actually look at what's saved before it's allowed to brainstorm anything, never falling back on generic content-creator advice as a substitute.",
      },
      {
        type: "p",
        text: "What the lookup actually returns is more than a list of links. For directly uploaded or downloaded reference videos, it includes a description and the on-screen text pulled from genuinely analyzing the video content, not just its caption. And for every reference, it surfaces real platform data: who posted it, how many likes, comments and views it has, and which audio track it uses when the platform exposes one. That last detail matters more than it might seem. Recurring music or audio choices across several saved references are themselves a signal, a pattern in what's resonating that a human skimming a folder of saved links might not consciously notice, but that becomes visible once it's laid out data point by data point.",
      },
      {
        type: "h2",
        text: "Why grounding beats a generic list",
      },
      {
        type: "p",
        text: "The instructions push the Skill to look for what its saved references actually have in common, format, hook style, pacing, topic, tone, and use those specific patterns to shape its suggestions, rather than reaching for a generic content playbook. That's a meaningfully different task than \"give me ten ideas.\" It's closer to \"look at what this business has already told you it likes, and its audience has already told the algorithm it engages with, and extend that pattern forward,\" which produces suggestions that feel like a natural next step for a specific brand rather than something that could have been generated for literally anyone in any niche.",
      },
      {
        type: "h2",
        text: "What the output actually looks like",
      },
      {
        type: "p",
        text: "The Skill's instructions require a specific shape for every idea it proposes: a hook, the first one to two seconds that has to earn the rest of the video's watch time, a short beat-by-beat outline of how it plays out, and, critically, which saved reference or references it drew the idea from and why. That last part is what keeps the tool honest and useful rather than a black box. If a suggestion doesn't trace back to something real, a genuine pattern across saved references, it doesn't get generated in the first place, and if it does, the person reading it can immediately see the actual evidence behind the suggestion rather than having to trust the AI's judgment on faith.",
      },
      {
        type: "h2",
        text: "Read-only, and deliberately so",
      },
      {
        type: "p",
        text: "The reference lookup tool needs no approval before it runs, the same reasoning we apply to every structurally read-only tool across the harness: it can only look at what's already saved, it can't change or delete anything, so requiring a human to approve every single lookup would add friction without adding any actual safety. That's what lets the Skill's instructions demand it call the lookup before every single brainstorming request without that becoming annoying to actually use.",
      },
      {
        type: "h2",
        text: "How this connects to the rest of a real content workflow",
      },
      {
        type: "p",
        text: "This Skill isn't meant to be the entire marketing operation, it's the ideation layer feeding into a workflow we've written about separately: testing new content safely before committing it to a main channel. Once this Skill produces a grounded idea, tied to a real hook style or pacing pattern that's already resonating, that idea becomes a candidate for the kind of structured testing we describe in our piece on using Instagram Trial Reels to test content variations without risking a main feed. The loop closes naturally: save what performs, ground new ideas in it, test the variations privately, and whatever wins becomes tomorrow's new reference to save and learn from. Ideation without a testing step is a guess with extra confidence. Testing without grounded ideation is throwing content at a wall. Neither is complete alone, which is part of why we treat them as one continuous pipeline rather than two separate tools.",
      },
      {
        type: "h2",
        text: "What it deliberately doesn't do yet",
      },
      {
        type: "p",
        text: "It's worth being precise about scope rather than overstating what's built. This Skill generates ideas for a human to act on. It doesn't draft captions on its own initiative, schedule posts, or touch any social platform's publishing API, and that boundary is deliberate, not a gap we haven't gotten to. Every other Skill on our harness that can take a consequential action, sending a message, writing to a database, has that action gated behind human approval by default; a Skill whose only tool is a read-only lookup simply hasn't been extended into that territory yet. The natural next step, if a client wanted it, would be adding a tool that drafts a caption or a shot list for a chosen idea, still stopping short of anything that publishes without a person reviewing it first, consistent with how every other write-capable tool on the harness already works.",
      },
      {
        type: "h2",
        text: "Why this runs on the harness instead of as a standalone tool",
      },
      {
        type: "p",
        text: "We could have built this as a small, standalone script bolted onto a chat interface, and it would have worked for a demo. We built it as a Skill on our existing harness instead, which means it inherited a working memory system, a database its future write-capable tools could safely use, and a self-monitoring pass, all proven elsewhere, on day one rather than needing to be built or debugged again from scratch. If this Skill grows into something that drafts captions or schedules posts, the approval gating and reliability guarantees that would need to sit around those actions already exist and are already tested. That's the entire point of building one harness instead of one-off tools: the marketing Skill got that infrastructure for free, the same way the tutoring Skill and every future product will.",
      },
      {
        type: "h2",
        text: "A concrete example of grounded versus generic",
      },
      {
        type: "p",
        text: "Say a business has saved a handful of reference videos, several of them short, fast-cut clips using a specific trending audio track, high engagement, comments mostly asking a follow-up question rather than just reacting. A generic brainstorming request produces the usual list: post more, use trending sounds, ask questions in captions. This Skill, grounded in the actual saved data, produces something narrower and more useful: an idea explicitly built around that same fast-cut pacing and that specific audio track, with a hook styled to prompt the same kind of follow-up-question comment its references are already getting, and a note explaining that's exactly why, pointing at the specific saved videos the pattern came from.",
      },
      {
        type: "p",
        text: "The difference isn't that the second version is more creative. It's that it's falsifiable, someone can check whether the pattern it's pointing at is actually real by looking at the same saved references, and disagree with the read if it doesn't hold up. A generic suggestion can't be checked against anything, because it wasn't built from anything specific in the first place.",
      },
      {
        type: "h2",
        text: "Why this matters for how we do content work for SMEs",
      },
      {
        type: "p",
        text: "The actual value for a business isn't that an AI generates ideas faster than a person could, plenty of tools do that. It's that the ideas it generates are explainable and specific rather than generic and unfalsifiable. A business owner reviewing this Skill's output can see exactly why an idea was suggested, which of their own saved references it's built on, and judge for themselves whether that reasoning holds up, the same way they'd judge a suggestion from a human strategist who could point to specific evidence rather than gut feeling. That's the bar we hold AI-assisted content work to across every client engagement: useful because it's grounded, not just because it's fast.",
      },
    ],
  },
  {
    slug: "nuj-studios-ai-tutor-tuition-buddy",
    title: "Building an AI Tutor That Refuses to Teach From Its Own Memory",
    metaTitle: "Our AI Tutor: Curriculum-Grounded, Not Guessing",
    industry: "Education / EdTech",
    kind: "internal",
    summary:
      "A real Skill running on our harness, built to tutor secondary school students, that's structurally required to look up the actual syllabus and the actual worked solution before it ever teaches or grades, rather than trusting its own training data.",
    challenge:
      "A general-purpose AI model asked to tutor a student on a specific syllabus will confidently answer from its own training data, formulas, worked examples, explanations, all generated from what it learned in general, not from what that specific curriculum actually teaches or how that specific exam board phrases a question. For a subject like physics or math, a confidently wrong formula or a mismatched method is worse than no answer at all, since a student has no way to tell a fluent, wrong explanation from a correct one. We needed a tutor that couldn't do that: one that's structurally required to check real curriculum content and real worked solutions before it teaches or grades anything, not one that's merely instructed to and might not.",
    approach: [
      "Built a dedicated Tutoring Skill on the same harness every other product runs on, rather than a bespoke one-off system",
      "Gave it a curriculum lookup tool that returns a real syllabus unit's teaching notes and available practice questions, prompts only, no answers, so it's safe to browse before deciding what to teach",
      "Gave it a separate solution-lookup tool it must call before grading any answer, returning the actual step-by-step worked solution to compare a student's answer against, rather than letting the model reconstruct one from memory",
      "Wrote the Skill's instructions to explicitly forbid inventing formulas, numbers or question text from its own knowledge, grounding every lesson and every grading decision in what the tools actually return",
      "Built a quiz-attempt tool that records every graded attempt per named student, so progress is trackable across sessions and consistent with a separate, non-chat assessment surface tracking the same student record",
      "Wired weak-spot detection through the harness's existing memory tools, so a recurring mistake pattern gets saved and surfaces automatically at the start of a future session on the same topic",
    ],
    outcome:
      "A working tutoring Skill where every formula, every worked solution, and every grading decision traces back to real, stored curriculum content rather than the model's own training data. Progress is tracked per student across sessions, and recurring mistakes are remembered and surfaces itself at the start of a relevant future lesson. The Skill and its tools are built and working against real curriculum data today; a dedicated student-facing frontend for it is the next step, not yet shipped.",
    services: ["ai-automation"],
    content: [
      {
        type: "p",
        text: "The single scariest failure mode for an AI tutor isn't that it gets something wrong, it's that it gets something wrong fluently. A student has no reliable way to tell a confident, well-explained, completely incorrect method from a correct one; that's precisely why they need a tutor in the first place. So before we'd let anything resembling an AI tutor near a real student, we built it around one non-negotiable rule: it is not allowed to teach or grade from its own memory. Every formula, every worked example, every judgment about whether an answer is right has to trace back to something real that was actually looked up, not generated from the model's general training.",
      },
      {
        type: "h2",
        text: "The problem with a tutor that just \"knows\" the syllabus",
      },
      {
        type: "p",
        text: "A general-purpose model has seen an enormous amount of physics and math content during training, which makes it dangerously plausible-sounding on exactly the subjects where precision matters most. Ask it to explain a syllabus topic and it will, fluently, using whichever version of the method it happens to have absorbed most strongly from its training data, which may not match the specific curriculum, exam board phrasing, or worked-solution method a specific school actually teaches. A student following along has no way to catch the mismatch. They're relying entirely on the tutor being right, and \"probably right, drawing on a general sense of the subject\" isn't the same guarantee as \"grounded in the actual syllabus unit assigned.\"",
      },
      {
        type: "h2",
        text: "What we built: teaching and grading gated behind real lookups",
      },
      {
        type: "p",
        text: "The Skill's instructions are direct about this and structured around two separate tools that have to be used in sequence. Before teaching or quizzing any topic, it has to call a curriculum lookup tool, which returns that syllabus unit's actual teaching notes and a list of available practice questions, prompts only, deliberately no answers included at this stage, so it's safe for the tutor to browse a whole unit's worth of questions without accidentally seeing solutions ahead of when a student needs to attempt them. Once a student actually answers a question, the tutor has to call a second, separate tool to fetch that specific question's real worked solution, step by step, before it's allowed to grade the student's answer. The model still makes the actual grading judgment, comparing the student's answer against the real solution, but it's never allowed to grade from a solution it invented or half-remembered.",
      },
      {
        type: "p",
        text: "The instructions are explicit that the reasoning steps in the fetched solution are the actual teaching content, not just a way to check the final number. The tutor is told to walk through the same steps the real worked solution does, first find this, then apply that, rather than jumping straight to a verdict, and if a student gets something wrong, to point at the specific step where their reasoning diverged instead of just restating the correct answer. That mirrors how a good human tutor actually teaches: the method matters more than the final number, and pointing at exactly where the reasoning went sideways is what actually helps a student improve.",
      },
      {
        type: "h2",
        text: "Grading stays with the model, grounding comes from the tool",
      },
      {
        type: "p",
        text: "It's worth being precise about the division of labor here, since it's a design choice we'd defend directly. The solution-lookup tool doesn't grade the answer itself, it returns the real solution and lets the model make the actual judgment call by comparing the student's answer against it. That's deliberate: grading a free-form answer against a worked solution genuinely needs language understanding, recognizing that a student expressed the right method in different words, or made a specific, nameable error partway through, which is exactly the kind of judgment a model is good at and a rigid string-match wouldn't capture. What the tool guarantees isn't the grading judgment itself, it's that the judgment is being made against something real, not something invented.",
      },
      {
        type: "h2",
        text: "Progress that survives across sessions, and across a separate assessment page",
      },
      {
        type: "p",
        text: "After grading any attempt, the tutor records it through a dedicated tool, tagged to a specific student by name, so a student's history persists across separate conversations rather than resetting every time they open a new chat. That record is also designed to be shared with a separate, non-chat assessment surface tracking the same students, meaning a student's attempts, whether made while chatting with the tutor or working through a standalone quiz page, add up to one continuous history rather than two disconnected ones. Getting a student's name right early in a conversation matters enough that the Skill's instructions call it out directly: ask if it isn't already known, or check memory first, rather than guessing or leaving it blank, since every recorded attempt depends on being tied to the right student.",
      },
      {
        type: "h2",
        text: "Remembering how a student actually struggles, not just whether they got it right",
      },
      {
        type: "p",
        text: "The most interesting piece, and the one that turns this from a grading tool into something closer to an actual tutor, is what happens when the same kind of mistake shows up more than once. The Skill is instructed to notice a recurring pattern, consistently reaching for the wrong formula in a certain type of problem, for instance, and save that specific pattern using the harness's general-purpose memory tool, the same remember/recall system every product on the harness shares. At the start of a future session on a related topic, it's instructed to check that memory for a known weak spot before diving in, so a student doesn't have to re-explain what they struggle with every single session, and the tutoring can actually start from where a real tutor with a good memory would start: not from zero, but from what it already knows about this specific student.",
      },
      {
        type: "h2",
        text: "Why the read/write split still applies here",
      },
      {
        type: "p",
        text: "The same approval logic that runs through every product on our harness applies to a tutoring session too, just tuned to what a normal quiz actually requires. Looking up curriculum content and worked solutions is read-only and needs no approval, the same reasoning as any other lookup tool elsewhere in the harness. Recording a quiz attempt is technically a write, but it's exempted from approval for a specific, deliberate reason: it fires once per answered question, and pausing a live quiz session to ask a human to approve every single graded attempt would make an ordinary tutoring session unusable. That's the same judgment call behind exempting the memory tools themselves, some writes happen so routinely, and carry so little risk, that gating every one of them defeats the purpose of the tool that's writing them.",
      },
      {
        type: "h2",
        text: "Why grounding matters more in education than almost anywhere else",
      },
      {
        type: "p",
        text: "A generic AI answer in most contexts is a minor inconvenience, you notice it's off and move on. In education specifically, the cost of an ungrounded answer is different in kind, not just degree: a student being taught the wrong method, or graded against a solution the tutor half-remembered instead of one that was actually verified, doesn't just get bad output, they walk away having practiced the wrong thing and possibly graded themselves confident in a mistake. That asymmetry, a wrong answer costing more here than in almost any other AI use case, is exactly why we treated grounding as the one requirement that couldn't be negotiated on, before anything else about this Skill got built.",
      },
      {
        type: "h2",
        text: "What a real session actually looks like",
      },
      {
        type: "p",
        text: "Walk through a realistic exchange. A student says they're stuck on a physics unit about circuits. Before saying anything about the topic, the tutor calls the curriculum lookup tool for that exact subject, level and unit, gets back the real teaching notes and a list of available practice questions, and teaches from that content, not from its own general sense of circuit theory. It offers a practice question. The student attempts it, gets the method partly right but applies the wrong formula partway through. Before saying whether the student was right or wrong, the tutor calls the solution lookup tool for that specific question, gets back the real step-by-step answer, and only then compares the student's work against it, pointing at the exact step where the reasoning diverged rather than just marking it wrong.",
      },
      {
        type: "p",
        text: "The attempt gets recorded against the student's name. If this is the second or third time the same student has reached for the wrong formula in a similar problem, that pattern gets saved to memory. Next week, a new session on a related topic starts with the tutor already aware of that specific weak spot, checked from memory before the lesson even begins, rather than the student needing to re-explain what they struggle with from scratch. Nothing in that sequence depended on the model's own general knowledge of physics being reliable. Every substantive fact came from a real lookup.",
      },
      {
        type: "h2",
        text: "What's built, and what's honestly still ahead",
      },
      {
        type: "p",
        text: "The Skill and its three tools, curriculum lookup, solution lookup, and attempt recording, are real, working code running against real stored curriculum data today, not a mockup or a plan. What doesn't exist yet is a dedicated, polished student-facing frontend for it; today it's exercised the same way every Skill on the harness can be, through the same general chat interface the rest of the harness uses, formatting math in LaTeX as the instructions require. Building a purpose-built tutoring interface on top is genuinely the easier half of this project. Getting the tutor to actually refuse to teach from its own memory, reliably, was the part worth building first and getting right before anything else.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
