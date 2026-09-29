import {
  CalendarIcon,
  ClockIcon,
  FacebookIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  TicketIcon,
  XIcon,
} from "@/components/icons";
import {
  academicPanel,
  agenda,
  committee,
  event,
  faq,
  getInvolved,
  industryPanel,
  intro,
  partner,
  scholarIntro,
  scholarQuote,
  scholars,
  socials,
  utilityLinks,
  venue,
  wicode,
  type Person,
} from "@/content/event";

const wrap = "mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-20";

/* Speakers, after Grace Hopper Celebration: serif heading, "See all" link,
   large photo cards in a row that scrolls sideways. */
function SpeakerRow({ title, people }: { title: string; people: Person[] }) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <h3 className="font-serif text-[36px] leading-[1.1] text-black sm:text-[46px]">
          Meet the {title}
        </h3>
        <a href="#" className="text-[15px] text-brand underline underline-offset-4">
          See all speakers -&gt;
        </a>
      </div>
      <ul className="no-scrollbar mt-7 flex snap-x gap-6 overflow-x-auto pb-2">
        {people.map((p) => (
          <li key={p.name} className="w-[280px] shrink-0 snap-start">
            <div aria-hidden className="photo-placeholder aspect-square w-full" />
            <p className="mt-3 font-display text-[17px] font-semibold leading-snug text-black">
              {p.name}
            </p>
            <p className="mt-1 text-[13px] leading-[18px] text-ink-soft">{p.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Venue artwork, after CHI 2026's city mosaic: stained-glass triangles with
   a Dubai skyline silhouette in front. Deterministic so it renders the same
   on every build. */
const tileColours = ["#006dae", "#2f6cb3", "#c47a60", "#e7f3fe", "#003c5f", "#f0b35a", "#7fb3d5"];

function Mosaic() {
  const size = 60;
  const cols = 26;
  const rows = 5;
  const tiles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * size;
      const y = r * size;
      const a = tileColours[(c * 7 + r * 13 + ((c * r) % 5)) % tileColours.length];
      const b = tileColours[(c * 11 + r * 5 + 3) % tileColours.length];
      const flip = (c + r * 3) % 2 === 0;
      tiles.push(
        <g key={`${r}-${c}`}>
          <polygon
            points={flip ? `${x},${y} ${x + size},${y} ${x},${y + size}` : `${x},${y} ${x + size},${y} ${x + size},${y + size}`}
            fill={a}
          />
          <polygon
            points={flip ? `${x + size},${y} ${x + size},${y + size} ${x},${y + size}` : `${x},${y} ${x + size},${y + size} ${x},${y + size}`}
            fill={b}
          />
        </g>,
      );
    }
  }
  // [x, width, height] for each tower, standing on the bottom edge (y = 300).
  const towers = [
    [60, 70, 90], [140, 50, 130], [200, 80, 70], [300, 60, 150], [370, 45, 110],
    [430, 90, 80], [560, 55, 170], [630, 70, 120], [860, 60, 140], [930, 85, 95],
    [1030, 50, 160], [1090, 75, 105], [1180, 60, 135], [1250, 90, 85], [1350, 55, 150],
    [1410, 70, 100],
  ];
  return (
    <svg
      viewBox="0 0 1560 300"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <g stroke="#0d2c4a" strokeWidth="3" strokeLinejoin="round">
        {tiles}
      </g>
      <g fill="#0d2c4a">
        {towers.map(([x, w, h]) => (
          <rect key={x} x={x} y={300 - h} width={w} height={h} />
        ))}
        {/* Burj Khalifa */}
        <polygon points="720,300 720,170 735,170 735,110 748,110 748,40 755,0 762,40 762,110 775,110 775,170 790,170 790,300" />
      </g>
    </svg>
  );
}

const configTiles = [
  { colour: "#f0b35a", pattern: "config-tile" },
  { colour: "#7fb3d5", pattern: "config-tile-dots" },
  { colour: "#c47a60", pattern: "config-tile" },
  { colour: "#e7f3fe", pattern: "config-tile-dots" },
  { colour: "#006dae", pattern: "config-tile" },
];

const typeLabel = {
  Keynote: "Keynote",
  Panel: "Panel",
  Talk: "Talk",
  WiCode: "WiCode 27",
  Break: "Break",
} as const;

export default function EventPage() {
  return (
    <>
      {/* Banner: title, tags, key details and the two main actions */}
      <section id="top" className="event-banner">
        <div className={`${wrap} pb-14 pt-24`}>
          <h1 className="max-w-4xl font-condensed text-[34px] font-bold leading-[1.1] text-white sm:text-[56px]">
            {event.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
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
          <ul className="mt-9 flex flex-wrap gap-x-9 gap-y-3">
            {[
              { Icon: CalendarIcon, value: event.date },
              { Icon: ClockIcon, value: event.time },
              { Icon: PinIcon, value: venue.lines[0] },
              { Icon: TicketIcon, value: event.price },
            ].map(({ Icon, value }) => (
              <li key={value} className="flex items-center gap-2.5">
                <Icon className="h-5 w-5 text-white/80" />
                <span className="font-condensed text-[18px] uppercase tracking-wide text-white">
                  {value}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#register"
              className="bg-brand px-7 py-3.5 font-condensed text-[16px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy"
            >
              Register now
            </a>
            <a
              href="#schedule"
              className="border border-white/60 px-7 py-3.5 font-condensed text-[16px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              View schedule
            </a>
          </div>
        </div>
      </section>

      {/* About, after GitHub Universe: bordered grid, big statement, mono details */}
      <section id="about" className="bg-grey-soft">
        <div className={`${wrap} py-16`}>
          <div className="grid border border-rule bg-white lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <p className="border-b border-rule p-8 font-display text-[32px] font-medium leading-[1.1] tracking-tight text-black sm:text-[46px] lg:border-b-0 lg:border-r">
              {event.tagline}
            </p>
            <div className="p-8 font-mono text-[15px] leading-[1.7] text-ink">
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{venue.lines[0]}</p>
              <p className="mt-4 flex items-center gap-2">
                in-person &amp; {event.price.toLowerCase()}
                <span aria-hidden className="inline-block h-2.5 w-2.5 bg-brand" />
              </p>
            </div>
            <div className="border-t border-rule p-8 lg:col-span-2">
              <div className="gap-10 space-y-4 text-[16px] leading-[24px] text-ink md:columns-2 md:space-y-0">
                {intro.map((p, i) => (
                  <p key={i} className="md:mb-4 md:break-inside-avoid">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers, after Grace Hopper Celebration */}
      <section id="speakers">
        <div className={`${wrap} space-y-16 py-20`}>
          <SpeakerRow title="Industry Panel" people={industryPanel} />
          <SpeakerRow title="Academic Panel" people={academicPanel} />
        </div>
      </section>

      {/* Schedule, after Next.js Conf: big heading, ruled rows, mono details */}
      <section id="schedule" className="border-y border-rule bg-grey-soft">
        <div className={`${wrap} py-20`}>
          <h2 className="font-display text-[56px] font-medium leading-none tracking-tight text-black sm:text-[80px]">
            Schedule
          </h2>
          <div className="mt-12 hidden grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] gap-8 pb-4 font-mono text-[13px] uppercase tracking-wide text-ink-soft md:grid">
            <span>Time</span>
            <span>Session</span>
            <span>Details</span>
          </div>
          <ol className="mt-6 md:mt-0">
            {agenda.map((item) => (
              <li
                key={item.time}
                className="grid gap-x-8 gap-y-2 border-t border-rule py-6 md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] md:items-center"
              >
                <div className="flex items-center gap-3 md:block">
                  <p className="font-mono text-[15px] text-ink">{item.time}</p>
                  <span className="inline-block border border-rule px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft md:mt-2">
                    {typeLabel[item.type]}
                  </span>
                </div>
                <p
                  className={
                    item.type === "Break"
                      ? "font-display text-[20px] text-ink-soft"
                      : "font-display text-[24px] leading-[1.2] tracking-tight text-black sm:text-[28px]"
                  }
                >
                  {item.title}
                </p>
                {item.detail ? (
                  <p className="font-mono text-[13px] uppercase leading-[1.5] tracking-wide text-ink">
                    {item.detail}
                  </p>
                ) : (
                  <span className="hidden md:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WiCode 27, after Figma Config: purple field, dark panel linking to its own site */}
      <section id="wicode" className="blob-field">
        <div className={`${wrap} py-20`}>
          <p className="font-display text-[15px] font-semibold uppercase tracking-[0.2em] text-white">
            The hackathon
          </p>
          <h2 className="mt-2 font-display text-[64px] font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-[110px]">
            {wicode.name}
          </h2>
          <div className="mt-10 max-w-[900px] bg-wicode-deep p-6 text-white sm:p-8">
            <p className="text-[19px] leading-[1.5] sm:text-[21px]">{wicode.summary}</p>
            <a
              href={wicode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-baseline justify-between gap-6 border-y border-white/25 py-5 hover:text-wicode-light"
            >
              <span className="font-display text-[24px] uppercase leading-tight sm:text-[30px]">
                Visit the WiCode 27 website
              </span>
              <span aria-hidden className="text-[28px]">
                &#8599;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Scholar cohort: OCWiC's gradient quote, then Smashing-style tinted cards */}
      <section id="scholars">
        <div className={`${wrap} py-20`}>
          <h2 className="font-display text-[40px] font-semibold leading-tight tracking-tight text-black sm:text-[52px]">
            Scholar Cohort
          </h2>
          <p className="mt-4 max-w-[70ch] text-[17px] leading-[26px] text-ink">{scholarIntro}</p>
          <figure className="quote-gradient mt-10 px-6 py-10 text-center text-white sm:px-16">
            <blockquote className="mx-auto max-w-[900px] text-[20px] leading-[1.8] sm:text-[23px]">
              &ldquo;{scholarQuote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-[18px]">
              ~ <span className="underline underline-offset-2">{scholarQuote.name}</span>,{" "}
              {scholarQuote.cohort}
            </figcaption>
          </figure>
          <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {scholars.map((s, i) => {
              const warm = i % 2 === 1;
              return (
                <li
                  key={s.name}
                  className={`relative rounded-xl border p-5 ${warm ? "border-warm/30 bg-gradient-to-br from-warm-soft to-white" : "border-brand/20 bg-gradient-to-br from-blue-pale to-white"}`}
                >
                  {i < 3 && (
                    <span
                      className={`absolute -top-3 left-5 z-10 rounded-md px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white ${warm ? "bg-warm" : "bg-brand"}`}
                    >
                      2026 Cohort
                    </span>
                  )}
                  <div aria-hidden className="photo-placeholder aspect-square w-full" />
                  <p
                    className={`mt-5 font-display text-[26px] font-bold leading-[1.15] ${warm ? "text-warm" : "text-brand"}`}
                  >
                    {s.name}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="font-serif text-[18px] text-ink">{s.institution}</span>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[12px] font-bold uppercase text-white ${warm ? "bg-warm" : "bg-brand"}`}
                    >
                      #Scholar
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Organising committee and partner, after SIGGRAPH's sponsor tiers */}
      <section id="committee" className="bg-sand">
        <div className={`${wrap} space-y-14 py-20`}>
          {[...committee, { role: "Partner", members: [partner] }].map((group) => (
            <div key={group.role} className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
              <div>
                <p className="font-display text-[16px] font-semibold text-navy">Thanks to our</p>
                <h2 className="font-display text-[30px] font-bold leading-tight text-navy">
                  {group.role}
                </h2>
              </div>
              <ul className="flex flex-wrap gap-6">
                {group.members.map((m) => (
                  <li
                    key={m}
                    className="w-[200px] bg-white p-4"
                  >
                    {group.role === "Partner" ? (
                      <span className="grid aspect-square w-full place-items-center bg-grey-soft p-4 text-center font-condensed text-[20px] font-bold uppercase text-navy">
                        {m}
                      </span>
                    ) : (
                      <>
                        <span aria-hidden className="photo-placeholder block aspect-square w-full" />
                        <span className="mt-3 block text-[15px] font-semibold leading-tight text-navy">
                          {m}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Venue, after CHI 2026: city artwork band, key info list, map */}
      <section id="venue">
        <div className="relative h-[240px] overflow-hidden bg-navy-bar">
          <Mosaic />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-bar/90 via-navy-bar/30 to-transparent" />
          <div className={`${wrap} relative flex h-full flex-col justify-end pb-8`}>
            <p className="font-display text-[15px] font-semibold uppercase tracking-[0.2em] text-white/85">
              Venue
            </p>
            <h2 className="mt-1 font-display text-[36px] font-bold leading-tight text-white sm:text-[48px]">
              {venue.lines[0]}
            </h2>
          </div>
        </div>
        <div className={`${wrap} grid gap-10 py-14 lg:grid-cols-[360px_minmax(0,1fr)]`}>
          <div>
            <h3 className="font-display text-[24px] font-semibold text-black">Getting there</h3>
            <div className="mt-5 bg-grey-head px-4 py-3 text-[15px] font-bold text-ink">Address</div>
            <address className="px-4 py-3 text-[15px] not-italic leading-[22px] text-ink">
              {venue.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
            <div className="mt-2 bg-grey-head px-4 py-3 text-[15px] font-bold text-ink">
              Directions
            </div>
            <p className="px-4 py-3 text-[15px] leading-[22px] text-ink">
              Lorem ipsum dolor sit amet: parking and metro details to be added.
            </p>
            <a
              href={venue.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-brand"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title={`Map of ${venue.lines[0]}`}
            src={venue.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border border-rule lg:h-full lg:min-h-[420px]"
          />
        </div>
      </section>

      {/* FAQ, after GitHub Universe: full-width wordmark, bordered rows */}
      <section id="faq" className="border-t border-rule bg-grey-soft">
        <div className={`${wrap} py-16`}>
          <h2 className="font-display text-[96px] font-extrabold leading-[0.85] tracking-tighter text-black sm:text-[180px]">
            FAQ
          </h2>
          <div className="mt-10 border-t border-l border-rule bg-white">
            {faq.map((item) => (
              <details key={item.q} className="group border-r border-b border-rule">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[19px] font-medium text-black">
                  {item.q}
                  <span aria-hidden className="font-mono text-[22px] text-brand group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 font-mono text-[14px] leading-[1.7] text-ink">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved, after Demuxed: big headline, three bordered cards */}
      <section id="register" className="border-t border-rule">
        <div className={`${wrap} py-20`}>
          <h2 className="max-w-4xl font-display text-[40px] font-bold leading-[1.05] tracking-tight text-black sm:text-[60px]">
            Be part of the {event.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[18px] leading-[28px] text-ink-soft">{intro[3]}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {getInvolved.map((card) => (
              <div key={card.title} className="flex flex-col border border-black p-6">
                <h3 className="font-display text-[26px] font-bold text-black">{card.title}</h3>
                <p className="mt-3 flex-1 text-[16px] leading-[24px] text-ink">{card.text}</p>
                <a
                  href={card.href}
                  {...(card.href === wicode.url && { target: "_blank", rel: "noopener noreferrer" })}
                  className={`mt-6 self-start px-4 py-2 font-semibold text-white ${card.href === wicode.url ? "bg-wicode hover:bg-wicode-deep" : "bg-black hover:bg-brand"}`}
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <span className="font-condensed text-[19px] font-bold text-black">Share this event</span>
            <div className="flex gap-[2px]">
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
                  className="grid h-[46px] w-[46px] place-items-center text-white"
                >
                  <Icon className="h-[19px] w-[19px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing band, after Figma Config's footer: wordmark on black, colour tiles */}
      <section className="bg-black text-white">
        <div className={`${wrap} py-14`}>
          <p className="font-display text-[56px] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-[120px]">
            Women in
            <br />
            Computing
          </p>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
            <ul className="space-y-1 text-[15px] uppercase">
              {socials.map((s) => (
                <li key={s}>
                  <a href="#" className="hover:underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-right text-[26px]">{venue.lines[0]}</p>
          </div>
        </div>
        <div aria-hidden className="grid h-[140px] grid-cols-5">
          {configTiles.map((t, i) => (
            <div
              key={i}
              className={t.pattern}
              style={{ backgroundColor: t.colour }}
            />
          ))}
        </div>
      </section>

      {/* Audience link band */}
      <section className="bg-grey-band">
        <div className="mx-auto flex max-w-[1500px] flex-wrap justify-center gap-x-9 gap-y-2 px-6 sm:px-12 lg:px-20 py-4">
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
