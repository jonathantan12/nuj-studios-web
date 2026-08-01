import type { CaseStudy } from "./case-studies";
import { SITE_URL } from "./site-config";

export function caseStudyToMarkdown(study: CaseStudy): string {
  const lines: string[] = [
    `# ${study.title}`,
    "",
    `*${study.industry} · Illustrative sample project, not a verified completed client engagement*`,
    "",
    study.summary,
    "",
    "## The challenge",
    "",
    study.challenge,
    "",
    "## Our approach",
    "",
  ];

  for (const step of study.approach) {
    lines.push(`- ${step}`);
  }

  lines.push("");
  lines.push("## The outcome");
  lines.push("");
  lines.push(study.outcome);
  lines.push("");
  lines.push(`Services used: ${study.services.join(", ")}`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(`Source: [${study.title}](${SITE_URL}/case-studies/${study.slug}) — nuj studios`);

  return lines.join("\n");
}
