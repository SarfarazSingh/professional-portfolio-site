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
    <section className="relative border-b border-line bg-ground/96">
      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="section-label">{eyebrow}</p>
            <h1 className="mt-7 max-w-5xl text-balance text-[clamp(4rem,9vw,9rem)] leading-[0.84] tracking-[-0.05em]">
              {title}
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-steel">{description}</p>
            {aside && (
              <p className="instrument-readout mt-7 border-t border-line pt-4 leading-5">
                {aside}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
