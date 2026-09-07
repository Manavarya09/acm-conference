import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import Cta from "@/components/Cta";
import { faq, venue } from "@/content/event";

export const metadata: Metadata = { title: "Venue" };

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="Getting there"
        title="Venue & travel"
        lede="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Address" title="Lorem ipsum dolor venue" />
            <address className="mt-6 space-y-1 text-[15px] not-italic leading-relaxed text-navy-950/70">
              <div className="text-lg font-semibold text-navy-950">
                {venue.room}
              </div>
              <div>{venue.street}</div>
              <div>{venue.city}</div>
              <div>{venue.country}</div>
            </address>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-navy-950/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam.
            </p>
          </div>
          <div className="grid-veil grid aspect-[4/3] place-items-center rounded-xl border border-line bg-navy-900 text-sm uppercase tracking-[0.16em] text-white/35">
            Map placeholder
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {venue.directions.map((d) => (
            <div
              key={d.heading}
              className="rounded-xl border border-line bg-white p-6"
            >
              <h3 className="text-[15px] font-semibold text-navy-950">
                {d.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-950/60">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-sand-100">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
            align="center"
          />
          <div className="mt-10">
            <Accordion items={faq} />
          </div>
        </div>
      </section>

      <div className="pt-16">
        <Cta />
      </div>
    </>
  );
}
