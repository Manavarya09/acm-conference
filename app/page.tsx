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
  type Person,
} from "@/content/event";

/** Placeholder standing in for a portrait photograph. */
function ProfilePhoto() {
  return (
    <div
      aria-hidden
      className="photo-placeholder h-[52px] w-[52px] shrink-0 rounded-full"
    />
  );
}

/** One sidebar entry: photo left, linked name and role stacked beside it. */
function PersonRow({ person }: { person: Person }) {
  return (
    <li className="flex items-start gap-3">
      <ProfilePhoto />
      <div>
        <a
          href="#"
          className="text-[15px] font-bold leading-[1.3] text-brand underline underline-offset-2"
        >
          {person.name}
        </a>
        <p className="mt-0.5 text-[14px] leading-[1.35] text-ink">
          {person.role}
        </p>
      </div>
    </li>
  );
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-condensed text-[25px] font-medium leading-tight text-black">
      {children}
    </h2>
  );
}

export default function EventPage() {
  return (
    <>
      {/* Banner */}
      <section className="event-banner">
        <div className="mx-auto max-w-[1500px] px-8 pb-9 pt-24">
          <h1 className="max-w-4xl font-condensed text-[30px] font-bold leading-[1.15] text-white sm:text-[46px]">
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
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-x-12 gap-y-3 px-8 py-5">
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

      {/* Body: content left, speakers sidebar right */}
      <div className="mx-auto grid max-w-[1500px] gap-x-8 gap-y-12 px-8 py-12 lg:grid-cols-[minmax(0,1fr)_390px]">
        <div>
          <div className="max-w-[1000px] space-y-6">
            {intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-condensed text-[22px] font-bold leading-[1.35] text-black"
                    : "text-[17px] leading-[1.65] text-ink"
                }
              >
                {p}
              </p>
            ))}
          </div>

          <h2 className="mt-12 font-condensed text-[30px] font-bold text-black">
            Agenda
          </h2>
          <table className="mt-5 w-full max-w-[1020px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[22%] border-b border-rule bg-grey-head px-[18px] py-[14px] text-[16px] font-bold text-ink-soft">
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

          {/* Location */}
          <h2 className="mt-12 font-condensed text-[30px] font-bold text-black">
            Location
          </h2>
          <address className="mt-4 space-y-1 text-[17px] not-italic leading-[1.7] text-ink">
            {venue.lines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <div className="photo-placeholder mt-6 grid h-[380px] max-w-[1020px] place-items-center text-[15px] uppercase tracking-wide text-ink-soft">
            Map placeholder
          </div>

          {/* Share */}
          <h2 className="mt-12 font-condensed text-[30px] font-bold text-black">
            Share this event
          </h2>
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
        </div>

        {/* Sidebar */}
        <aside className="bg-grey-soft p-7 lg:self-start">
          <SidebarHeading>Speakers and Panelists</SidebarHeading>
          <ul className="mt-5 space-y-4">
            {speakers.map((p) => (
              <PersonRow key={p.name} person={p} />
            ))}
          </ul>

          <div className="mt-10">
            <SidebarHeading>Event Conveners</SidebarHeading>
            <ul className="mt-5 space-y-4">
              {conveners.map((p) => (
                <PersonRow key={p.name} person={p} />
              ))}
            </ul>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <ProfilePhoto />
            <a
              href="#"
              className="text-[15px] font-bold text-brand underline underline-offset-2"
            >
              {partner}
            </a>
          </div>
        </aside>
      </div>

      {/* Audience link band */}
      <section className="bg-grey-band">
        <div className="mx-auto flex max-w-[1500px] flex-wrap justify-center gap-x-9 gap-y-2 px-8 py-4">
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
    </>
  );
}
