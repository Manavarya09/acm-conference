import Link from "next/link";
import { event, nav, venue } from "@/content/event";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-[13px] font-bold text-navy-900">
              A
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              ACM<span className="text-accent-400">·</span>W
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {event.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Venue
          </h3>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed">
            <div>{venue.room}</div>
            <div>{venue.street}</div>
            <div>{venue.city}</div>
            <div>{venue.country}</div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Lorem Ipsum Dolor. All rights reserved.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
}
