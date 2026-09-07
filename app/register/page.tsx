import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { event, tickets } from "@/content/event";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure your place"
        title="Register"
        lede="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Places are limited, lorem ipsum registration required."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {tickets.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col rounded-xl border p-7 ${
                t.featured
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white"
              }`}
            >
              {t.featured && (
                <span className="mb-4 w-fit rounded-full bg-accent-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  Most popular
                </span>
              )}
              <h3
                className={`text-[15px] font-semibold uppercase tracking-[0.14em] ${
                  t.featured ? "text-white/60" : "text-navy-950/50"
                }`}
              >
                {t.name}
              </h3>
              <p className="mt-3 text-4xl font-bold tracking-tight">{t.price}</p>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  t.featured ? "text-white/65" : "text-navy-950/55"
                }`}
              >
                {t.note}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {t.perks.map((perk) => (
                  <li key={perk} className="flex gap-2.5">
                    <span
                      className={t.featured ? "text-accent-400" : "text-accent-600"}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className={t.featured ? "text-white/80" : "text-navy-950/70"}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={event.registerHref}
                className={`mt-8 rounded-md px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  t.featured
                    ? "bg-white text-navy-900 hover:bg-white/90"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                Select {t.name}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-sand-100">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading
            eyebrow="Included"
            title="What your ticket covers"
            lede="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Lorem ipsum dolor sit",
              "Consectetur adipiscing",
              "Sed do eiusmod tempor",
              "Incididunt ut labore",
            ].map((item, i) => (
              <div
                key={item}
                className="rounded-xl border border-line bg-white p-6"
              >
                <p className="text-sm font-semibold text-accent-600">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-[15px] font-semibold text-navy-950">
                  {item}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/55">
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-navy-950">
          Lorem ipsum dolor sit amet?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-navy-950/60">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Contact lorem@ipsum.example for assistance.
        </p>
      </section>
    </>
  );
}
