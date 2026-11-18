import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Cairo } from "next/font/google";
import "../globals.css";
import { content, siteUrl } from "@/lib/content";
import { dirOf, isLocale, locales } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = content[lang];

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.title, template: `%s | ${t.brand.name}` },
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: t.brand.name,
      title: t.meta.title,
      description: t.brand.intro,
      locale: lang === "ar" ? "ar_AR" : "en_US",
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar_AR"],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0a09",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} dir={dirOf(lang)} className={`${inter.variable} ${cairo.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
