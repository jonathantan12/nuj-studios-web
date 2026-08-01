import { buildLlmsFullTxt } from "@/lib/knowledge-feed";

export const dynamic = "force-static";

export async function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
