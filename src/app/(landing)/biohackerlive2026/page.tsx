import { readFileSync } from "fs";
import { join } from "path";

export const metadata = {
  title: "BioHacker Live 2026 - Sponsorship Pitch Deck",
  description:
    "Put your brand in front of 10,000+ biohacking and longevity buyers. July 14-15, 2026.",
};

export default function PitchDeckPage() {
  const html = readFileSync(
    join(process.cwd(), "public", "biohackerlive2026", "index.html"),
    "utf-8"
  );

  // Extract just the body and style content from the full HTML
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);

  return (
    <>
      {styleMatch && (
        <style dangerouslySetInnerHTML={{ __html: styleMatch[1] }} />
      )}
      {bodyMatch && (
        <div dangerouslySetInnerHTML={{ __html: bodyMatch[1] }} />
      )}
    </>
  );
}
