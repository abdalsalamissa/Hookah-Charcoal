import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "alt";
};

export default function Section({ id, eyebrow, title, children, tone = "default" }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-20 sm:py-28 ${tone === "alt" ? "bg-coal-900" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-500 rtl:tracking-normal">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl rtl:tracking-normal rtl:leading-snug">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
