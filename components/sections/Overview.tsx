import Section from "../Section";
import type { Content } from "@/lib/content";

export default function Overview({ t }: { t: Content }) {
  const { overview, sections } = t;

  return (
    <Section id="overview" eyebrow={sections.overview.eyebrow} title={sections.overview.title}>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-neutral-400">
          {overview.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="grid grid-cols-3 gap-4">
          {overview.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-coal-700 bg-coal-900 p-5 hover:border-ember-500 hover:-translate-y-1 transition-all duration-300">
              <dd className="text-xl md:text-2xl font-bold text-ember-500">
                {h.value}
                <span className="ms-1 text-base font-medium text-neutral-400">{h.unit}</span>
              </dd>
              <dt className="mt-2 text-sm text-neutral-400">{h.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
