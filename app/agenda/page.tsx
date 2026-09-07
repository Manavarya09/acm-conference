import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AgendaTable from "@/components/AgendaTable";
import Cta from "@/components/Cta";
import { agenda, event } from "@/content/event";

export const metadata: Metadata = { title: "Agenda" };

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Programme"
        title="Agenda"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-navy-950/60">
          <span>
            <span className="font-semibold text-navy-950">Date:</span>{" "}
            {event.date}
          </span>
          <span>
            <span className="font-semibold text-navy-950">Time:</span>{" "}
            {event.time}
          </span>
          <span>
            <span className="font-semibold text-navy-950">Sessions:</span>{" "}
            {agenda.length}
          </span>
        </div>

        <AgendaTable items={agenda} />

        <p className="mt-6 text-sm leading-relaxed text-navy-950/50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. The programme
          is indicative and subject to change.
        </p>
      </section>

      <Cta />
    </>
  );
}
