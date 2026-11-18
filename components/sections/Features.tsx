import Section from "../Section";
import type { Content } from "@/lib/content";

export default function Features({ t }: { t: Content }) {
  const { features, specs, sections, ui } = t;

  return (
    <Section id="features" eyebrow={sections.features.eyebrow} title={sections.features.title} tone="alt">
      <div className="grid gap-12 lg:grid-cols-5">
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {features.map((f, i) => (
            <li key={f.title} className="rounded-2xl border border-coal-700 bg-coal-950 p-6 hover:border-ember-500 hover:-translate-y-1 transition-all duration-300">
              <span className="text-sm font-semibold text-ember-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.text}</p>
            </li>
          ))}
        </ul>
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white">{ui.specsTitle}</h3>
          <dl className="mt-4 divide-y divide-coal-700 rounded-2xl border border-coal-700 bg-coal-950">
            {specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                <dt className="text-neutral-400">{s.label}</dt>
                <dd className="text-end font-medium text-neutral-100">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
