import { TrackSensePoster } from "./tracksense-poster";
import { TrackSenseSimulationShell } from "./tracksense-simulation-shell";

export function TrackSenseSection() {
  return (
    <section id="tracksense-live" className="station bg-ground/96">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-label">TrackSense · Try the demo</p>
            <p className="instrument-readout mt-3 text-signal">
              Processed locally · operator decides
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl [font-size:var(--type-h2)] leading-[0.86] tracking-[-0.045em]">
              Watch a small change become an alert.
            </h2>
            <p className="mt-6 max-w-[68ch] text-lg leading-8 text-copy-muted">
              This is a simple simulation, not live railway data. Five trackside
              sensors show vibration, sound, and heat. One begins to behave
              differently, the model flags it, and then the demo waits for you
              to decide what happens next.
            </p>
          </div>
        </div>

        <div data-tracksense-host>
          <TrackSensePoster />
          <TrackSenseSimulationShell />
        </div>

        <div className="mt-8 grid gap-6 border-l-2 border-signal pl-6 lg:grid-cols-[1.2fr_.8fr]">
          <blockquote className="font-serif [font-size:var(--type-h3)] leading-[1.05] tracking-[-0.035em]">
            “I do not assume systems are infallible. I design for the moment
            technology is wrong.”
          </blockquote>
          <p className="self-end leading-7 text-copy-muted">
            I built the pause into the demo on purpose. The model can point to a
            problem, but the person responsible for the railway must still make
            the call.
          </p>
        </div>
      </div>
    </section>
  );
}
