import type { Content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header({ lang, t }: { lang: Locale; t: Content }) {
  return (
    <header className="sticky top-0 z-50 border-b border-coal-700/60 bg-coal-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="text-3xl md:text-4xl font-bold tracking-tight text-white hover:text-ember-600 transition-all duration-300 rtl:tracking-normal">
          {t.brand.name}
          <span className="text-ember-500">.</span>
        </a>

        <nav className="hidden md:block" aria-label={t.ui.mainNav}>
          <ul className="flex items-center gap-8">
            {t.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-neutral-300 hover:text-ember-400 transition-all duration-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} label={t.ui.switchLabel} ariaLabel={t.ui.switchAria} />
          <MobileMenu links={t.nav} openLabel={t.ui.openMenu} closeLabel={t.ui.closeMenu} />
        </div>
      </div>
    </header>
  );
}
