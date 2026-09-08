import { Reveal } from "@/components/portfolio/reveal";

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 dark:border-paper/10">
      <div className="absolute inset-0 blueprint-grid opacity-50 dark:opacity-25" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              {title}
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-steel">{description}</p>
            {aside && (
              <p className="mt-7 border-t border-ink/10 pt-4 font-mono text-[10px] leading-5 tracking-[0.12em] text-steel dark:border-paper/10">
                {aside}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
