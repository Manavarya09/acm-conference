import {
  CalendarIcon,
  ClockIcon,
  FacebookIcon,
  LinkedInIcon,
  MailIcon,
  TicketIcon,
  XIcon,
} from "@/components/icons";
import {
  agenda,
  conveners,
  event,
  intro,
  partner,
  speakers,
  utilityLinks,
  venue,
} from "@/content/event";

/** Placeholder standing in for a portrait photograph. */
function ProfilePhoto() {
  return (
    <div
      aria-hidden
      className="photo-placeholder h-[86px] w-[86px] shrink-0 rounded-full"
    />
  );
}

/** Photo on the left, linked name and role stacked beside it — one per row. */
function PersonList({ people }: { people: { name: string; role: string }[] }) {
  return (
    <div className="mt-5 space-y-4">
      {people.map((p) => (
        <div key={p.name} className="flex items-start gap-5">
          <ProfilePhoto />
          <div className="pt-2">
            <a
              href="#"
              className="font-body text-[17px] font-bold text-brand underline underline-offset-2"
            >
              {p.name}
            </a>
            <p className="mt-1 max-w-[640px] text-[16px] leading-[1.5] text-ink">
              {p.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventPage() {
  return (
    <>
      {/* Banner */}
      <section className="event-banner">
        <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-20">
          <h1 className="max-w-4xl font-condensed text-[28px] font-bold leading-[1.2] text-white sm:text-[44px] sm:leading-[1.15]">
            {event.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="bg-brand px-[10px] py-1.5 text-xs uppercase tracking-wide text-white">
              {event.tags[0]}
            </span>
            {event.tags.slice(1).map((tag) => (
              <span
                key={tag}
                className="px-[10px] py-1.5 text-xs uppercase tracking-wide text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Date / time / price strip */}
      <section className="border-b border-rule bg-grey-band">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-10 gap-y-3 px-5 py-5">
          {[
            { Icon: CalendarIcon, value: event.date },
            { Icon: ClockIcon, value: event.time },
            { Icon: TicketIcon, value: event.price },
          ].map(({ Icon, value }) => (
            <div key={value} className="flex items-center gap-3">
              <Icon className="h-[22px] w-[22px] text-brand" />
              <span className="font-condensed text-[19px] uppercase tracking-wide text-ink">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro copy */}
      <section className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="max-w-[820px] space-y-5">
          {intro.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-condensed text-[21px] font-bold leading-[1.35] text-black"
                  : "text-[16px] leading-[1.7] text-ink-soft"
              }
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14">
        <h2 className="font-condensed text-[22px] font-bold text-black">
          Agenda
        </h2>
        <div className="mt-4">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[26%] border-b border-rule bg-grey-head px-[18px] py-[14px] text-[16px] font-bold text-ink-soft">
                  Time
                </th>
                <th className="border-b border-rule bg-grey-head px-[18px] py-[14px] text-[16px] font-bold text-ink-soft">
                  Programme
                </th>
              </tr>
            </thead>
            <tbody>
              {agenda.map((item) => (
                <tr key={item.time + item.title}>
                  <td className="border-b border-rule px-[18px] py-[14px] align-top text-[16px] text-ink-soft">
                    {item.time}
                  </td>
                  <td className="border-b border-rule px-[18px] py-[14px] align-top text-[16px] text-ink-soft">
                    <span className="block">{item.title}</span>
                    {item.detail && (
                      <em className="mt-0.5 block text-[16px] italic leading-[1.5] text-ink-soft">
                        {item.detail}
                      </em>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Audience link band */}
      <section className="bg-grey-band">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-x-8 gap-y-2 px-5 py-4">
          {utilityLinks.map((link) => (
            <span
              key={link}
              className="font-condensed text-[15px] uppercase tracking-wide text-brand"
            >
              {link}
            </span>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="mx-auto max-w-[1200px] px-5 py-14">
        <h3 className="font-condensed text-[21px] font-medium text-black">
          Speakers and Panelists
        </h3>
        <PersonList people={speakers} />
      </section>

      {/* Conveners */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14">
        <h3 className="font-condensed text-[21px] font-medium text-black">
          Event Conveners
        </h3>
        <PersonList people={conveners} />
      </section>

      {/* Partner */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14">
        <div className="flex items-start gap-5">
          <ProfilePhoto />
          <div className="pt-2">
            <a
              href="#"
              className="font-body text-[17px] font-bold text-brand underline underline-offset-2"
            >
              {partner}
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14">
        <h3 className="font-condensed text-[21px] font-medium text-black">
          Location
        </h3>
        <address className="mt-4 space-y-1 text-[16px] not-italic leading-[1.7] text-ink-soft">
          {venue.lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
        <div className="photo-placeholder mt-6 grid h-[320px] max-w-[820px] place-items-center rounded-sm text-[15px] uppercase tracking-wide text-ink-soft">
          Map placeholder
        </div>
      </section>

      {/* Share */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16">
        <h3 className="font-condensed text-[21px] font-medium text-black">
          Share this event
        </h3>
        <div className="mt-4 flex gap-[2px]">
          {[
            { label: "Facebook", Icon: FacebookIcon, bg: "#3b5996" },
            { label: "X", Icon: XIcon, bg: "#000000" },
            { label: "LinkedIn", Icon: LinkedInIcon, bg: "#1b3d66" },
            { label: "Email", Icon: MailIcon, bg: "#8a8a8a" },
          ].map(({ label, Icon, bg }) => (
            <a
              key={label}
              href="#"
              aria-label={`Share on ${label}`}
              style={{ backgroundColor: bg }}
              className="grid h-[58px] w-[58px] place-items-center text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
