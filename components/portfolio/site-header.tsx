import { Menu } from "lucide-react";
import { navigation, profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground text-copy">
      <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href={assetPath("/")}
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, home`}
        >
          <span className="instrument-readout grid size-9 place-items-center rounded-full border border-line-strong group-hover:border-signal group-hover:bg-signal group-hover:text-ground">
            SSW
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            Sarfaraz Singh Wahad
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={assetPath(item.href)}
              className="py-2 text-[13px] text-copy-muted hover:text-copy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={assetPath("/recruiter")}
            className="hidden min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold hover:border-signal hover:text-signal sm:inline-flex"
          >
            Recruiter brief
          </a>

          <details className="group relative lg:hidden">
            <summary
              className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-line-strong [&::-webkit-details-marker]:hidden"
              aria-label="Toggle navigation"
            >
              <Menu className="size-4" />
            </summary>
            <nav
              className="absolute right-0 top-[calc(100%+14px)] grid w-[min(88vw,380px)] border border-line bg-ground p-4"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={assetPath(item.href)}
                  className="border-b border-line py-3 text-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={assetPath("/recruiter")}
                className="mt-4 rounded-full bg-signal px-4 py-3 text-center text-sm font-semibold text-ground"
              >
                Open recruiter brief
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
