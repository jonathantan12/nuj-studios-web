# Services Map

Internal reference for matching a prospect's problem to the right nuj studios
service during a coffee chat, scope call, or proposal. Not published on the
site.

**Source of truth for public copy:** `lib/services.ts` (service names,
descriptions, deliverables, FAQs shown on the site) and `lib/case-studies.ts`
(illustrative project write-ups). This doc adds a sales layer on top: the
customer-facing signals and problem-to-service mapping that don't belong in
the website copy itself.

Keep this in sync manually. If a service's name or scope changes in
`lib/services.ts`, update the matching entry here too.

---

## How to use this doc

1. Listen for the customer's problem in their own words.
2. Scan the **Customer says...** column in the quick-reference table below.
3. Open the matching service section for talking points and what's actually
   included, so you're not promising anything outside scope.
4. Check **Use Cases** for a similar situation you can reference.
5. Most engagements bundle two services. See **Common bundles** before you
   scope a single-service project.

---

## Quick reference: problem → service

| Customer says... | Likely service |
| --- | --- |
| "We spend hours a week on manual admin, invoicing, or data entry" | AI Solutions & Automation |
| "We get leads but can't respond fast enough / sales team is buried in enquiries" | AI Solutions & Automation |
| "We keep hearing about AI but don't know where to start" | AI Solutions & Automation |
| "We're too small to hire an ops or IT person" | AI Solutions & Automation |
| "Our website looks outdated / doesn't convert visitors" | Web Development |
| "We don't have a website yet" | Web Development |
| "We're stuck on Wix/WordPress, it's slow or hard to change" | Web Development |
| "Our own developer/agency is slow or expensive for small changes" | Web Development |
| "We don't have time to post content consistently" | Content Marketing & Management |
| "We don't know what to write about" | Content Marketing & Management |
| "Our content sounds generic, not like us" | Content Marketing & Management |
| "We want a newsletter but no one owns it" | Content Marketing & Management |
| "We're invisible on Google despite a strong reputation" | Google SEO Optimization |
| "Competitors outrank us" | Google SEO Optimization |
| "We get traffic but no enquiries" | Google SEO Optimization |
| "We want to show up in AI answers (ChatGPT, Google AI overviews), not just search" | Google SEO Optimization |

---

## AI Solutions & Automation

**What it is:** Finding where AI genuinely helps a business, then building
and wiring in the automation. Agents for CRM, invoicing, scheduling and
lead-gen tools, so the team spends less time on repetitive operational work.

**Customer signals:**
- Manual, repetitive, rule-based work (data entry, invoicing reminders, lead
  triage, FAQ handling)
- High enquiry volume, slow response time
- Curious about AI, no clear starting point
- No in-house engineer to build or maintain automations

**What's actually delivered:**
- A working session to find where AI genuinely helps, not where it's trendy
- Custom AI solutions and automations wired into tools already in use
  (no platform migration)
- AI agents for lead qualification, FAQ handling, or internal operations
- Documentation the client's own team can maintain
- Ongoing monitoring and adjustment as workflows change

**Good first project:** lead intake and qualification, or invoicing
reminders. Repetitive and rule-based, with an immediate, measurable time
saving.

---

## Web Development

**What it is:** Fast, accessible, conversion-focused websites built on
modern infrastructure. Designed, coded and shipped by the same in-house team
that maintains them afterward.

**Customer signals:**
- No website, or one that's actively costing them customers
- Site is slow, not mobile-friendly, or hard to update
- Stuck on a page builder (Wix) and outgrowing it
- Rebrand, new location, or new service line needs a new site
- Price-sensitive, comparing against the cost of hiring an intern or junior staff

**What's actually delivered:**
- Custom-designed, responsive site on WordPress or custom code, whichever fits
- Core Web Vitals-optimized performance out of the box
- On-page SEO foundations: clean URLs, semantic HTML, structured data
- Google Analytics and Google Search Console set up and connected from day one
- A content system the client's own team can actually update
- Launch support and post-launch fixes included in the handover

**Pricing (published, use this in scoping calls):**
- **S$800** one-time setup fee
- **S$50/month** after that, covering hosting, the .com domain (we register
  and renew it), and ongoing maintenance
- Add-ons priced separately: e.g. heatmap or user session tracking
- No lock-in: cancel any time, we help transfer the domain and site back
- Build platform: WordPress or custom code. Ask the client's preference
  first; otherwise recommend based on what the business actually needs
- Positioning line: "cheaper than hiring an intern, built to an enterprise
  standard"

**Good first project:** full site rebuild, or a fast-turnaround launch site
for a new location/service.

**Not yet priced:** AI Solutions & Automation, Content Marketing &
Management, and Google SEO still vary too much by scope to publish a flat
rate. Continue scoping those on the first call.

---

## Content Marketing & Management

**What it is:** Editorial systems that keep a brand publishing consistently:
blog posts, social content and newsletters through a repeatable pipeline,
not one-off freelance briefs.

**Customer signals:**
- No time or ownership for consistent posting
- Doesn't know what to write about or how it connects to SEO
- Content feels generic, doesn't sound like the business
- Wants a newsletter or social presence but no one's driving it

**What's actually delivered:**
- Editorial calendar aligned to services and target audience
- Blog posts on a consistent, agreed cadence
- Social content adapted from core long-form pieces
- Email newsletters reusing the same pipeline
- Reporting tied to actual traffic and inquiries, not vanity metrics

**Note:** usually bundled with Google SEO. See **Common bundles** below.

---

## Google SEO Optimization

**What it is:** Technical SEO, keyword strategy, on-page optimization and
structured data, built for Google search and AI answer engines alike.

**Customer signals:**
- Not showing up on Google despite a good offline reputation
- Competitors rank higher for the same searches
- Gets traffic but it doesn't convert to enquiries
- Wants visibility in AI answer engines, not just classic search

**What's actually delivered:**
- Technical SEO audit: crawlability, site speed, indexation issues
- Keyword strategy mapped to real buyer intent, not just volume
- On-page optimization: title tags, meta descriptions, headings, internal
  linking
- Structured data (schema.org) for rich results and AI citation
- Monthly reporting tied to visibility and inquiries, not just rankings

**Timeline expectation:** technical fixes show up within weeks; meaningful
ranking and traffic gains build over 3 to 6 months. Set this expectation
early.

---

## Common bundles

- **SEO + Content Marketing.** The two feed each other directly: content
  gives SEO something to rank, SEO gives content a distribution strategy.
  Default to pitching these together unless the client explicitly only
  wants one.
- **Web Development + AI Solutions & Automation.** New site launches are a
  natural point to also wire up lead capture into a CRM or automate
  enquiry handling from day one.

---

## Use cases

Format: **Industry / Problem / Service(s) / What we did / Outcome.**

The three entries below are the illustrative examples already published at
`/case-studies` (see `lib/case-studies.ts`). Replace or append with real,
named engagements as they close.

### Food & Beverage: five outlets, one manual booking process
- **Problem:** five outlet pages, no shared brand presence, staff manually
  confirming every reservation by phone.
- **Service(s):** Web Development, AI Solutions & Automation
- **What we did:** one fast, mobile-first site across all outlets, shared
  booking flow, automated confirmations and reminders.
- **Outcome:** manual confirmation time redirected to service; one
  consistent presence across outlets.

### Professional Services: strong reputation, invisible on search
- **Problem:** decade of referral-driven reputation, but the site was slow,
  thin on content, and effectively unindexed.
- **Service(s):** Google SEO Optimization, Content Marketing & Management
- **What we did:** technical SEO audit, on-page rebuild, structured data,
  ongoing content system, monthly reporting tied to inquiries.
- **Outcome:** went from unindexed for core services to actively targeting
  the searches ideal clients run.

### Retail: sales team buried in manual lead triage
- **Problem:** every website enquiry manually read and triaged before
  follow-up, eating hours a week.
- **Service(s):** AI Solutions & Automation
- **What we did:** AI agent applying the team's existing qualification
  criteria, wired into their existing CRM, no migration required.
- **Outcome:** automated first pass on triage; sales team freed up for
  qualified conversations; workflow stayed owned by the client's team.

### [Add the next one here]
- **Problem:**
- **Service(s):**
- **What we did:**
- **Outcome:**
