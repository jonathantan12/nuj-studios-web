# Graph Report - .  (2026-07-26)

## Corpus Check
- Corpus is ~10,845 words - fits in a single context window. You may not need a graph.

## Summary
- 195 nodes · 279 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.75)
- Token cost: 40,005 input · 0 output

## Community Hubs (Navigation)
- Site Chrome & Layout
- Static Pages & Glossary
- Case Studies & Services Data
- TypeScript Compiler Options
- Blog System
- Dev Dependencies
- Core Dependencies & Scripts
- llms.txt Site Map
- TS Config Includes/Refs
- Project Docs (AGENTS/CLAUDE/README)
- FAQ Section
- ESLint Config
- Next.js Config
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `PageHero()` - 12 edges
3. `Nuj Studios` - 9 edges
4. `getService()` - 7 edges
5. `include` - 7 edges
6. `SERVICES` - 6 edges
7. `getBlogPost()` - 5 edges
8. `getSortedBlogPosts()` - 5 edges
9. `CASE_STUDIES` - 5 edges
10. `getCaseStudy()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getBlogPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/blog-posts.ts
- `BlogPostPage()` --calls--> `getBlogPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/blog-posts.ts
- `BlogIndexPage()` --calls--> `getSortedBlogPosts()`  [EXTRACTED]
  app/blog/page.tsx → lib/blog-posts.ts
- `generateStaticParams()` --calls--> `getAllCaseStudySlugs()`  [EXTRACTED]
  app/case-studies/[slug]/page.tsx → lib/case-studies.ts
- `generateMetadata()` --calls--> `getCaseStudy()`  [EXTRACTED]
  app/case-studies/[slug]/page.tsx → lib/case-studies.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Nuj Studios Service Offerings** — public_llms_web_development, public_llms_content_marketing, public_llms_seo_optimization, public_llms_ai_workflow_automation [EXTRACTED 1.00]
- **Nuj Studios Company Info Pages** — public_llms_about, public_llms_case_studies, public_llms_clients, public_llms_contact [EXTRACTED 1.00]
- **Nuj Studios Resource Hub Pages** — public_llms_resources, public_llms_blog, public_llms_faq, public_llms_glossary [EXTRACTED 1.00]

## Communities (14 total, 3 thin omitted)

### Community 0 - "Site Chrome & Layout"
Cohesion: 0.09
Nodes (16): Footer(), NavMenuItem, ScrollReveal(), CASE_STUDY_ITEMS, RESOURCE_ITEMS, SERVICE_ITEMS, ibmPlexMono, inter (+8 more)

### Community 1 - "Static Pages & Glossary"
Cohesion: 0.10
Nodes (12): metadata, PRINCIPLES, metadata, INDUSTRIES, metadata, Crumb, PageHero(), metadata (+4 more)

### Community 2 - "Case Studies & Services Data"
Cohesion: 0.16
Nodes (17): CaseStudyDetailPage(), generateMetadata(), generateStaticParams(), DeployConsole(), LINES, generateMetadata(), generateStaticParams(), ServiceDetailPage() (+9 more)

### Community 3 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 4 - "Blog System"
Cohesion: 0.20
Nodes (13): BlogIndexPage(), metadata, BlogPostPage(), generateMetadata(), generateStaticParams(), ArticleBody(), ResourcesPage(), BLOG_POSTS (+5 more)

### Community 5 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 6 - "Core Dependencies & Scripts"
Cohesion: 0.12
Nodes (15): next, dependencies, next, react, react-dom, name, private, scripts (+7 more)

### Community 7 - "llms.txt Site Map"
Cohesion: 0.15
Nodes (13): About Page, AI Workflow Automation Service, Blog, Case Studies Page, Clients Page, Contact Page, Content Marketing Service, FAQ Page (+5 more)

### Community 8 - "TS Config Includes/Refs"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 9 - "Project Docs (AGENTS/CLAUDE/README)"
Cohesion: 0.29
Nodes (7): AGENTS.md: Next.js Breaking-Changes Notice, node_modules/next/dist/docs (Custom Next.js Docs Guide), CLAUDE.md (Project Instructions), README.md (create-next-app Project Guide), create-next-app, Geist Font (next/font optimization), Vercel Platform Deployment

### Community 10 - "FAQ Section"
Cohesion: 0.33
Nodes (4): FAQ, FAQSection(), FAQS, metadata

## Knowledge Gaps
- **88 isolated node(s):** `Crumb`, `FAQ`, `SERVICE_ITEMS`, `CASE_STUDY_ITEMS`, `RESOURCE_ITEMS` (+83 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `PageHero()` connect `Static Pages & Glossary` to `Site Chrome & Layout`, `Case Studies & Services Data`, `FAQ Section`, `Blog System`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Core Dependencies & Scripts`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TS Config Includes/Refs`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `Crumb`, `FAQ`, `SERVICE_ITEMS` to the rest of the system?**
  _88 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site Chrome & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.0896551724137931 - nodes in this community are weakly interconnected._
- **Should `Static Pages & Glossary` be split into smaller, more focused modules?**
  _Cohesion score 0.10317460317460317 - nodes in this community are weakly interconnected._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._