"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground text-copy">
      <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, home`}
        >
          <span className="instrument-readout grid size-9 place-items-center rounded-full border border-line-strong group-hover:border-signal group-hover:bg-signal group-hover:text-ground">
            SSW
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            Sarfaraz Singh Wahad
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-[13px] text-copy-muted hover:text-copy",
                  active && "text-copy",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-signal" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/recruiter"
            className="hidden min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold hover:border-signal hover:text-signal sm:inline-flex"
          >
            Recruiter brief
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-line-strong lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-ground px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-[1600px] gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/recruiter"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-signal px-4 py-3 text-center text-sm font-semibold text-ground"
            >
              Open recruiter brief
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
