import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import AgendaTable from "@/components/AgendaTable";
import PersonCard from "@/components/PersonCard";
import Cta from "@/components/Cta";
import {
  about,
  agenda,
  event,
  highlights,
  partners,
  speakers,
  venue,
} from "@/content/event";

export default function HomePage() {
  const featured = speakers.filter((s) => s.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="grid-veil bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-accent-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
              {event.chapter}
            </span>
            <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
              {event.format}
            </span>
            <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
              {event.kind}
            </span>
          </div>

          <h1 className="rise mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {event.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {event.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="rounded-md bg-white px-7 py-3 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-white/90"
            >
              Register now
            </Link>
            <Link
              href="/agenda"
              className="rounded-md border border-white/25 px-7 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Explore the programme
            </Link>
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <section className="border-y border-line bg-sand-100">
        <div className="mx-auto grid max-w-6xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            { label: "Date", value: event.date },
            { label: "Time", value: event.time },
            { label: "Entry", value: event.price },
          ].map((fact) => (
            <div key={fact.label} className="py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-950/45">
                {fact.label}
              </p>
              <p className="mt-1.5 text-[15px] font-semibold text-navy-950">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <SectionHeading eyebrow="About the event" title={about.heading} />
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-lg font-medium text-navy-950"
                    : "text-[15px] text-navy-950/65"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-white p-6">
              <p className="text-3xl font-bold tracking-tight text-accent-600">
                {h.value}
              </p>
              <p className="mt-2 text-[15px] font-semibold text-navy-950">
                {h.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-950/55">
                {h.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda preview */}
      <section className="border-y border-line bg-sand-100">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Programme"
              title="A full day, lorem ipsum dolor"
              lede="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Link
              href="/agenda"
              className="text-sm font-semibold text-accent-600 hover:underline"
            >
              View full agenda →
            </Link>
          </div>
          <div className="mt-10">
            <AgendaTable items={agenda.slice(0, 5)} />
          </div>
        </div>
      </section>

      {/* Featured speakers */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Speakers"
            title="Lorem ipsum speakers and panelists"
            lede="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip."
          />
          <Link
            href="/speakers"
            className="text-sm font-semibold text-accent-600 hover:underline"
          >
            All speakers →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-line bg-sand-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-950/40">
            Supported by lorem ipsum partners
          </p>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p}
                className="grid min-h-20 place-items-center bg-white px-4 text-center text-xs font-semibold uppercase tracking-wide text-navy-950/45"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Lorem ipsum dolor venue"
              lede="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />
            <address className="mt-6 space-y-1 text-[15px] not-italic leading-relaxed text-navy-950/70">
              <div className="font-semibold text-navy-950">{venue.room}</div>
              <div>{venue.street}</div>
              <div>{venue.city}</div>
              <div>{venue.country}</div>
            </address>
            <Link
              href="/venue"
              className="mt-6 inline-block text-sm font-semibold text-accent-600 hover:underline"
            >
              Getting there →
            </Link>
          </div>
          <div className="grid-veil grid aspect-[4/3] place-items-center rounded-xl border border-line bg-navy-900 text-sm uppercase tracking-[0.16em] text-white/35">
            Map placeholder
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
