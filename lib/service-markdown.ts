import type { Service } from "./services";
import { SITE_URL } from "./site-config";

export function serviceToMarkdown(service: Service): string {
  const lines: string[] = [
    `# ${service.name}`,
    "",
    service.summary,
    "",
    "## Deliverables",
    "",
  ];

  for (const item of service.deliverables) {
    lines.push(`- ${item}`);
  }

  if (service.pricing) {
    lines.push("");
    lines.push("## Pricing");
    lines.push("");
    lines.push(
      `${service.pricing.setupFee.display} one-time setup fee, then ${service.pricing.monthly.display} covering:`
    );
    for (const item of service.pricing.monthlyIncludes) {
      lines.push(`- ${item}`);
    }
    lines.push("");
    for (const note of service.pricing.notes) {
      lines.push(`- ${note}`);
    }
  }

  lines.push("");
  lines.push("## FAQs");
  lines.push("");
  for (const faq of service.faqs) {
    lines.push(`**${faq.question}**`);
    lines.push(faq.answer);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push(`Source: [${service.name}](${SITE_URL}/services/${service.slug}) — nuj studios`);

  return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}
