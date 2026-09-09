import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ground">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <p className="font-serif [font-size:var(--type-h3)] leading-none tracking-[-0.035em]">
            Complex technology.
            <br />
            Made operational.
          </p>
          <p className="mt-5 max-w-lg leading-7 text-copy-muted">
            Public case studies intentionally omit client-confidential and
            operationally sensitive information.
          </p>
        </div>
        <div className="grid content-start gap-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="group flex min-h-11 items-center justify-between gap-10 border-b border-line py-2"
          >
            Email <ArrowUpRight className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-11 items-center justify-between gap-10 border-b border-line py-2"
          >
            LinkedIn <ArrowUpRight className="size-4" />
          </a>
          <a
            href={assetPath("/recruiter")}
            className="group flex min-h-11 items-center justify-between gap-10 border-b border-line py-2"
          >
            Recruiter brief <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="instrument-readout flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 md:col-span-2">
          <span>© {new Date().getFullYear()} SARFARAZ SINGH WAHAD</span>
          <span>MADRID · SPAIN</span>
          <span>BUILT FOR CLARITY, ACCESS, AND SPEED</span>
        </div>
      </div>
    </footer>
  );
}
