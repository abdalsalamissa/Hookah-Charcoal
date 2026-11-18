import Section from "../Section";
import type { Content } from "@/lib/content";

export default function About({ t }: { t: Content }) {
  const { about, sections } = t;

  return (
    <Section id="about" eyebrow={sections.about.eyebrow} title={sections.about.title}>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-neutral-400">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="divide-y divide-coal-700 self-start rounded-2xl border border-coal-700 bg-coal-900">
          {about.facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 px-5 py-4 text-sm">
              <dt className="text-neutral-400">{f.label}</dt>
              <dd className="font-medium text-neutral-100">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
