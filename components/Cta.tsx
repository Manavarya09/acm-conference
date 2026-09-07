import Link from "next/link";
import { event } from "@/content/event";

export default function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid-veil overflow-hidden rounded-2xl bg-navy-900 px-8 py-14 text-center text-white sm:px-14">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
          Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Places are limited.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/register"
            className="w-full rounded-md bg-white px-7 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-white/90 sm:w-auto"
          >
            Register now
          </Link>
          <Link
            href="/agenda"
            className="w-full rounded-md border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View full agenda
          </Link>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/45">
          {event.date} · {event.time}
        </p>
      </div>
    </section>
  );
}
