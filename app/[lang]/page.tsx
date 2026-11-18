import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { content, siteUrl } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = content[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: t.brand.product,
        description: t.brand.intro,
        brand: { "@type": "Brand", name: t.brand.name },
        image: `${siteUrl}/images/hero.svg`,
        inLanguage: lang,
      },
      {
        "@type": "Organization",
        name: t.contact.company.legalName,
        url: siteUrl,
        email: t.contact.email,
        telephone: t.contact.phone,
      },
    ],
  };

  return (
    <>
      <Header lang={lang} t={t} />
      <main>
        <Hero t={t} />
        <Overview t={t} />
        <Features t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
