import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
      <p className="eyebrow">404 · OUTSIDE OPERATING BOUNDARY</p>
      <h1 className="mt-7 max-w-4xl font-serif text-7xl leading-[0.88] tracking-[-0.06em] sm:text-8xl">
        This route is
        <br />
        <span className="text-steel">not on the map.</span>
      </h1>
      <Link
        href="/"
        className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-paper dark:bg-paper dark:text-ink"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        Return home
      </Link>
    </section>
  );
}
