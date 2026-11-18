import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";
import { locales } from "@/lib/i18n";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`]));
  return locales.map((l) => ({
    url: `${siteUrl}/${l}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: { languages },
  }));
}
