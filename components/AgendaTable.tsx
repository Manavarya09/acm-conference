import type { AgendaItem } from "@/content/event";

/**
 * Renders as a two-column time/programme grid. Rows stack on narrow screens
 * rather than using a real <table>, so nothing overflows on mobile.
 */
export default function AgendaTable({ items }: { items: AgendaItem[] }) {
  return (
    <ul className="overflow-hidden rounded-xl border border-line bg-white">
      <li className="hidden grid-cols-[140px_1fr] gap-6 border-b border-line bg-sand-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-950/55 sm:grid">
        <span>Time</span>
        <span>Programme</span>
      </li>

      {items.map((item) => (
        <li
          key={item.time + item.title}
          className="grid gap-1 border-b border-line/70 px-6 py-5 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-6"
        >
          <span className="text-sm font-semibold tabular-nums text-accent-600">
            {item.time}
          </span>
          <div>
            <h3 className="text-[15px] font-semibold text-navy-950">
              {item.title}
            </h3>
            {item.presenter && (
              <p className="mt-1 text-sm font-medium text-navy-950/75">
                {item.presenter}
              </p>
            )}
            {item.detail && (
              <p className="mt-1 text-sm leading-relaxed text-navy-950/55">
                {item.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
