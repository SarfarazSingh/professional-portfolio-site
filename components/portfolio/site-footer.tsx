import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 dark:border-paper/10">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <p className="font-serif text-3xl tracking-[-0.035em]">
            Complex technology.
            <br />
            <span className="text-steel">Made operational.</span>
          </p>
          <p className="mt-5 max-w-lg text-sm leading-6 text-steel">
            Public case studies intentionally omit client-confidential and
            operationally sensitive information.
          </p>
        </div>
        <div className="grid content-start gap-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-10 border-b border-ink/10 py-2 dark:border-paper/10"
          >
            Email <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-10 border-b border-ink/10 py-2 dark:border-paper/10"
          >
            LinkedIn <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/recruiter"
            className="group flex items-center justify-between gap-10 border-b border-ink/10 py-2 dark:border-paper/10"
          >
            Recruiter brief <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 font-mono text-[10px] tracking-[0.12em] text-steel dark:border-paper/10 md:col-span-2">
          <span>© {new Date().getFullYear()} SARFARAZ SINGH WAHAD</span>
          <span>MADRID · SPAIN</span>
          <span>BUILT FOR CLARITY, ACCESS, AND SPEED</span>
        </div>
      </div>
    </footer>
  );
}
