import type { CaseStudy } from "./case-studies";
import { blockToMarkdown } from "./blog-markdown";
import { SITE_URL } from "./site-config";

export function caseStudyToMarkdown(study: CaseStudy): string {
  const disclosure =
    study.kind === "internal"
      ? "Real build: a genuine, in-house project we've shipped, described honestly, without client-confidential specifics."
      : "Illustrative sample project, not a verified completed client engagement.";

  const lines: string[] = [
    `# ${study.title}`,
    "",
    `*${study.industry} · ${disclosure}*`,
    "",
    study.summary,
    "",
  ];

  if (study.content) {
    lines.push(study.content.map((block) => blockToMarkdown(block, 1)).join("\n\n"));
    lines.push("");
  } else {
    lines.push("## The challenge", "", study.challenge, "", "## Our approach", "");
    for (const step of study.approach) {
      lines.push(`- ${step}`);
    }
    lines.push("");
    lines.push("## The outcome");
    lines.push("");
    lines.push(study.outcome);
    lines.push("");
  }

  lines.push(`Services used: ${study.services.join(", ")}`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(`Source: [${study.title}](${SITE_URL}/case-studies/${study.slug}) — nuj studios`);

  return lines.join("\n");
}
