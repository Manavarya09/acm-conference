"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-[15px] font-semibold text-navy-950">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-xl leading-none text-accent-600 transition-transform ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {open && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-navy-950/65">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
