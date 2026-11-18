import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = { lang: Locale; label: string; ariaLabel: string };

export default function LanguageSwitcher({ lang, label, ariaLabel }: Props) {
  const other: Locale = lang === "en" ? "ar" : "en";

  return (
    <Link
      href={`/${other}`}
      hrefLang={other}
      lang={other}
      aria-label={ariaLabel}
      className="rounded-full border border-coal-700 px-4 py-1.5 text-sm font-semibold text-neutral-200 transition hover:border-ember-500 hover:text-ember-400 duration-300"
    >
      {label}
    </Link>
  );
}
