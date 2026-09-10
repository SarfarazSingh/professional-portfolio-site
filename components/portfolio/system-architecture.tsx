import { ArrowDown, ArrowRight } from "lucide-react";

type ArchitectureStep = {
  label: string;
  detail: string;
};

type SystemArchitectureProps = {
  eyebrow: string;
  title: string;
  steps: readonly ArchitectureStep[];
  note: string;
};

export function SystemArchitecture({
  eyebrow,
  title,
  steps,
  note,
}: SystemArchitectureProps) {
  return (
    <figure className="border border-line bg-surface p-5 sm:p-7">
      <figcaption>
        <p className="instrument-readout text-signal">{eyebrow}</p>
        <h3 className="mt-3 text-xl tracking-[-0.025em]">{title}</h3>
      </figcaption>

      <div
        className="mt-7 grid items-stretch gap-3 md:grid-flow-col md:grid-cols-[repeat(5,minmax(0,1fr))]"
        role="list"
        aria-label={`${title} architecture`}
      >
        {steps.map((step, index) => (
          <div className="contents" key={step.label}>
            <div
              className="min-w-0 border border-line-strong bg-ground p-4"
              role="listitem"
            >
              <span className="instrument-readout text-signal">
                0{index + 1}
              </span>
              <p className="mt-4 font-semibold leading-6">{step.label}</p>
              <p className="mt-2 text-sm leading-6 text-copy-muted">
                {step.detail}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className="grid min-h-8 place-items-center text-signal"
                aria-hidden="true"
              >
                <ArrowDown className="size-4 md:hidden" />
                <ArrowRight className="hidden size-4 md:block" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 border-l-2 border-signal pl-4 text-sm leading-6 text-copy-muted">
        {note}
      </p>
    </figure>
  );
}
