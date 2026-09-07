"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { event, nav } from "@/content/event";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-sand-50/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-navy-900 text-[13px] font-bold tracking-tight text-white">
            A
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-navy-900">
            ACM<span className="text-accent-600">·</span>W
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.slice(0, 4).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "font-semibold text-navy-900"
                    : "text-navy-900/65 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/register"
            className="ml-2 rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Register
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-md border border-line md:hidden"
        >
          <span className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-navy-900 transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy-900 transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-sand-50 px-5 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line/70 py-3 text-[15px] ${
                pathname === item.href
                  ? "font-semibold text-navy-900"
                  : "text-navy-900/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={event.registerHref}
            className="mt-4 block rounded-md bg-navy-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Register now
          </a>
        </nav>
      )}
    </header>
  );
}
