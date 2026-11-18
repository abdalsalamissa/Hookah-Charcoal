import Section from "../Section";
import type { Content } from "@/lib/content";

export default function Contact({ t }: { t: Content }) {
  const { contact, sections, ui } = t;

  return (
    <Section id="contact" eyebrow={sections.contact.eyebrow} title={sections.contact.title} tone="alt">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <ul className="space-y-4 text-lg">
            <li>
              <span className="block text-sm text-neutral-500">{ui.email}</span>
              {/* dir="ltr" keeps emails and phone numbers readable inside Arabic text */}
              <a dir="ltr" className="inline-block text-white hover:text-ember-400" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <span className="block text-sm text-neutral-500">{ui.phone}</span>
              <a
                dir="ltr"
                className="inline-block text-white hover:text-ember-400"
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <span className="block text-sm text-neutral-500">{ui.hours}</span>
              <span className="text-white">{contact.hours}</span>
            </li>
          </ul>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block rounded-full bg-ember-600 px-6 py-3 font-semibold text-coal-950 transition hover:bg-ember-400 duration-300"
          >
            {ui.sendEmail}
          </a>
        </div>
        <div className="space-y-4">
          {contact.locations.map((l) => (
            <div key={l.name} className="rounded-2xl border border-coal-700 bg-coal-950 p-5 hover:border-ember-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-white">{l.name}</h3>
              <address className="mt-1 not-italic text-neutral-400">{l.address}</address>
              <a
                href={l.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-ember-400 hover:underline"
              >
                {ui.viewOnMap}
              </a>
            </div>
          ))}
          <p className="pt-2 text-sm text-neutral-500">
            {contact.company.legalName} · {contact.company.registration}
          </p>
        </div>
      </div>
    </Section>
  );
}
