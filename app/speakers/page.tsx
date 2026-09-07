import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PersonCard from "@/components/PersonCard";
import Cta from "@/components/Cta";
import { conveners, partners, speakers } from "@/content/event";

export const metadata: Metadata = { title: "Speakers" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Who you'll meet"
        title="Speakers & panelists"
        lede="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Keynote & panel"
          title="Lorem ipsum speakers"
          lede="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-sand-100">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading
            eyebrow="Organising team"
            title="Event conveners"
            lede="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conveners.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Collaboration"
          title="Partners & supporters"
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className="grid min-h-24 place-items-center bg-white px-4 text-center text-xs font-semibold uppercase tracking-wide text-navy-950/45"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
