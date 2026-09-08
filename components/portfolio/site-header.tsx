"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-[#07131d]/92 text-paper backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, home`}
        >
          <span className="grid size-9 place-items-center rounded-full border border-paper/20 font-mono text-[10px] tracking-[-0.08em] transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-white">
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
                  "relative py-2 text-[13px] text-paper/50 transition-colors hover:text-paper",
                  active && "text-paper",
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
            className="hidden rounded-full border border-paper/15 px-4 py-2 font-mono text-[10px] tracking-[0.16em] transition-colors hover:border-signal hover:text-signal sm:block"
          >
            RECRUITER BRIEF
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-9 place-items-center rounded-full border border-paper/10 transition-colors hover:border-signal hover:text-signal"
            aria-label="Toggle colour theme"
          >
            <Moon className="size-4 dark:hidden" />
            <Sun className="hidden size-4 dark:block" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-9 place-items-center rounded-full border border-paper/10 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-paper/10 bg-[#07131d] px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-paper/8 py-3 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/recruiter"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-signal px-4 py-3 text-center font-mono text-xs tracking-[0.15em] text-white"
            >
              OPEN RECRUITER BRIEF
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
