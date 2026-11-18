import Image from "next/image";
import type { Content } from "@/lib/content";

export default function Hero({ t }: { t: Content }) {
  const { brand } = t;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 end-0 h-[32rem] w-[32rem] rounded-full bg-ember-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <p className="animate-fade-up motion-reduce:animate-none text-sm font-semibold uppercase tracking-[0.2em] text-ember-500 rtl:tracking-normal">
            {brand.product}
          </p>
          <h1
            className="animate-fade-up motion-reduce:animate-none mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl rtl:tracking-normal rtl:leading-tight"
            style={{ animationDelay: "0.15s" }}
          >
            {brand.tagline}
          </h1>
          <p
            className="animate-fade-up motion-reduce:animate-none mt-6 max-w-xl text-lg leading-relaxed text-neutral-400"
            style={{ animationDelay: "0.3s" }}
          >
            {brand.intro}
          </p>
          <div
            className="animate-fade-up motion-reduce:animate-none mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#contact"
              className="rounded-full bg-ember-600 px-6 py-3 font-semibold text-coal-950 transition hover:bg-ember-400 duration-300"
            >
              {brand.ctaLabel}
            </a>
            <a
              href="#features"
              className="rounded-full border border-coal-700 px-6 py-3 font-semibold text-neutral-200 transition hover:border-ember-500 hover:text-ember-400 duration-300"
            >
              {brand.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="animate-glow motion-reduce:animate-none absolute inset-8 -z-10 rounded-full bg-ember-500/30 blur-3xl" />
          <div className="animate-float motion-reduce:animate-none">
            <Image
              src="/images/hero.svg"
              alt={brand.imageAlt}
              width={800}
              height={800}
              priority
              sizes="(min-width: 768px) 448px, 90vw"
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
