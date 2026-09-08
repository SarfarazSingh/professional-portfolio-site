import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
      <p className="section-label">404 · Outside operating boundary</p>
      <h1 className="mt-7 max-w-4xl text-[clamp(4rem,10vw,10rem)] leading-[0.82] tracking-[-0.055em]">
        This route is
        <br />
        not on the map.
      </h1>
      <Link
        href="/"
        className="group mt-10 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-signal px-5 text-sm font-semibold text-ground"
      >
        <ArrowLeft className="size-4" />
        Return home
      </Link>
    </section>
  );
}
