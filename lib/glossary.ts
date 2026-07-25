export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "AEO (Answer Engine Optimization)",
    definition:
      "Optimizing content so it can be directly cited or quoted by AI systems like ChatGPT, Perplexity and Google AI Overviews, rather than just ranked in a list of links.",
  },
  {
    term: "Backlink",
    definition:
      "A link from another website pointing to yours. Search engines treat backlinks from credible sites as a signal of trust and authority.",
  },
  {
    term: "Canonical URL",
    definition:
      "The version of a page's URL that a site owner wants search engines to treat as the primary one, used to avoid duplicate-content confusion when several URLs show similar content.",
  },
  {
    term: "Core Web Vitals",
    definition:
      "Google's set of metrics for measuring a page's loading speed, interactivity and visual stability, used as one input into search ranking.",
  },
  {
    term: "Crawlability",
    definition:
      "How easily search engine and AI bots can discover, access and read the content on a site. Poor crawlability means content can exist but never get indexed.",
  },
  {
    term: "Featured Snippet",
    definition:
      "A highlighted answer box shown at the top of some Google search results, pulled directly from the content of a ranking page.",
  },
  {
    term: "Indexation",
    definition:
      "The process by which a search engine adds a page to its searchable database after crawling it. A page can be crawled but still not indexed.",
  },
  {
    term: "JSON-LD",
    definition:
      "A structured data format used to describe page content, such as an Organization, Article or FAQ, in a way machines can parse directly rather than inferring it from prose.",
  },
  {
    term: "Keyword Difficulty",
    definition:
      "An estimate of how hard it would be to rank for a given search term, based on the strength of the pages already ranking for it.",
  },
  {
    term: "llms.txt",
    definition:
      "An emerging convention, similar in spirit to robots.txt, that gives AI systems a plain-text summary of a website's key pages and purpose.",
  },
  {
    term: "On-Page SEO",
    definition:
      "Optimizing individual page elements, such as title tags, headings, content and internal links, to help that specific page rank for relevant searches.",
  },
  {
    term: "PSG (Productivity Solutions Grant)",
    definition:
      "A Singapore government grant, administered through the Business Grants Portal, that can subsidize part of the cost of eligible pre-approved digital solutions for qualifying local SMEs.",
  },
  {
    term: "Robots.txt",
    definition:
      "A file at the root of a website that tells search engine and AI crawlers which parts of the site they're allowed to access.",
  },
  {
    term: "Structured Data",
    definition:
      "A standardized format, most commonly schema.org, for labeling page content so search engines and AI systems can understand it precisely instead of reading it as plain text.",
  },
  {
    term: "Technical SEO",
    definition:
      "The behind-the-scenes work, such as site speed, crawlability, structured data and indexation, that lets search engines properly access and understand a site in the first place.",
  },
];
