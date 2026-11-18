import type { Content } from "@/lib/content";

export default function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-coal-700 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {t.contact.company.legalName}. {t.ui.rights}
        </p>
        <p>
          {t.brand.name} · {t.brand.product}
        </p>
      </div>
    </footer>
  );
}
