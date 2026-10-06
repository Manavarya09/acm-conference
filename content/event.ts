/**
 * All copy for the page. Speaker, organiser and chapter details come from the
 * conference organisers; anything still marked "to be announced" is waiting
 * on them. Edit this file and no component needs to change.
 */

export const org = {
  name: "ACM-W Dubai Professional Chapter",
  sub: "with ACM Dubai Professional Chapter",
  region: "BITS Pilani, Dubai Campus",
  regionHref: "https://www.bits-pilani.ac.in/dubai/",
};

/** Two-line lockup shown beside the mark in the header. */
export const brand = { name: "Women in Computing", sub: "Conference" };

export const event = {
  title: "Women in Computing Conference",
  tags: ["ACM-W Dubai Professional Chapter", "Face-To-Face", "Conference"],
  date: "Date to be announced",
  time: "9 AM - 5 PM (GST)",
  price: "Paid",
  tagline: "Talks, two expert panels and a hackathon for women in computing.",
};

export const intro = [
  "The Women in Computing Conference brings students, researchers and professionals together at BITS Pilani, Dubai Campus for a day of talks, panels and hands-on building. It is organised by the ACM-W Dubai Professional Chapter and the ACM Dubai Professional Chapter, with student chapters from universities across Dubai.",
  "ACM-W leaders from Asia Pacific, Europe and around the world join us to share how their careers and research took shape, and how the global ACM-W community supports women at every stage of a computing career.",
  "Industry experts from Dubai and the wider UAE bring the view from practice, from building AI products to the ethics of AI and the arrival of quantum technologies. Alongside the talks, WiCode 27 gives teams the day to build and present their own prototypes.",
  "Places are limited, so registration is required to secure your spot.",
];

export type SessionType = "Keynote" | "Panel" | "Talk" | "WiCode" | "Break";

export type AgendaItem = {
  time: string;
  title: string;
  type: SessionType;
  detail?: string;
};

/** Draft running order. Times and session leads are still to be confirmed. */
export const agenda: AgendaItem[] = [
  { time: "9.00am", type: "Break", title: "Registration & Refreshments" },
  {
    time: "9.30am", type: "Talk",
    title: "Welcome address",
    detail: "From the organising chapters, ACM-W Dubai and ACM Dubai",
  },
  {
    time: "9.45am", type: "Keynote",
    title: "Keynote speech",
    detail: "Speaker to be announced",
  },
  {
    time: "10.15am", type: "WiCode",
    title: "WiCode 27 Kickoff",
    detail: "Problem statements released; hackathon teams start building",
  },
  {
    time: "11.00am", type: "Panel",
    title: "Industry Expert Panel",
    detail: "AI in practice, ethical AI and quantum technologies in the UAE",
  },
  { time: "12.00pm", type: "Break", title: "Lunch" },
  {
    time: "1.00pm", type: "Panel",
    title: "ACM-W Expert Panel",
    detail: "ACM-W chairs from Asia Pacific, Europe and the global committee on research pathways and building a computing career",
  },
  {
    time: "1.45pm", type: "WiCode",
    title: "WiCode 27 Demos and Judging",
    detail: "Hackathon teams present their prototypes to the judges",
  },
  {
    time: "2.30pm", type: "Talk",
    title: "One-on-One Career Consultations",
    detail: "Students meet individually with the academic and industry experts",
  },
  {
    time: "4.00pm", type: "Talk",
    title: "Remarks from ACM-W",
    detail: "ACM-W regional and global leadership",
  },
  {
    time: "4.15pm", type: "Talk",
    title: "Student Chapter Showcase",
    detail: "Short updates from the participating ACM and ACM-W student chapters",
  },
  { time: "4.30pm", type: "Talk", title: "WiCode 27 Results & Closing Remarks" },
  { time: "4.45pm", type: "Talk", title: "Vote of Thanks" },
  { time: "5.00pm onwards", type: "Break", title: "Networking & Refreshments" },
];

/** External sites; these open in a new tab. */
export const utilityCentre = [
  { label: "ACM BITS Dubai", href: "https://www.acmbpdc.org/" },
  { label: "ACM-W BITS Dubai", href: "https://www.linkedin.com/company/acmw-bpdc/" },
  { label: "BITS Pilani Dubai", href: org.regionHref },
];

export const utilityRight = [
  { label: "Speakers", href: "#speakers" },
  { label: "Students", href: "#scholars" },
  { label: "Chapters", href: "#committee" },
];

export const sectionNav = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "WiCode 27", href: "#wicode" },
  { label: "Scholars", href: "#scholars" },
  { label: "Venue", href: "#venue" },
];

export const utilityLinks = [
  "Students",
  "Researchers",
  "Industry",
  "Student Chapters",
  "WiCode 27",
  "Volunteers",
];

/** `photo` is a square image in public/people/; without one the card shows a backdrop. */
export type Person = { name: string; role: string; affiliation?: string; photo?: string };

/** ACM-W leaders. */
export const expertPanel: Person[] = [
  { name: "Prof Bimlesh Wadhwa", photo: "/people/wadhwa.webp", role: "ACM-W Asia Pacific Chair", affiliation: "NUS, Singapore" },
  { name: "Dr Rukiye Altin", photo: "/people/altin.webp", role: "ACM-W Global Chair", affiliation: "Kiel University, Germany" },
  { name: "Dr Arati Dixit", photo: "/people/dixit.webp", role: "ACM-W Chair, Regional Activities", affiliation: "North Carolina University" },
  { name: "Dr Leyla Atakan", photo: "/people/atakan.webp", role: "ACM-W Chair", affiliation: "Bilkent, Turkey" },
  { name: "Dr Dorota Filipczuk", photo: "/people/filipczuk.webp", role: "ACM-W Chair, Europe", affiliation: "Microsoft" },
];

/** More names to come from the organisers. */
export const industryPanel: Person[] = [
  { name: "Dr Rathan M", photo: "/people/rathan-2.webp", role: "Senior Director of Artificial Intelligence", affiliation: "Exalogic Consulting, Dubai" },
  {
    name: "Gowri Shankar Sivabala",
    photo: "/people/sivabala-2.webp",
    role: "Ethical AI Consultant; Founder, AI and Quantum International Hub (AIQUAINT)",
    affiliation: "UAE",
  },
];

export const organisingChapters: { name: string; logo?: string }[] = [
  { name: "ACM-W Dubai Professional Chapter" },
  { name: "ACM Dubai Professional Chapter", logo: "/logos/acm-dubai.png" },
];

export const organisers: Person[] = [
  { name: "Prof Elakkiya Rajasekar", photo: "/people/rajasekar.webp", role: "Chair, ACM-W Dubai Professional Chapter", affiliation: "BPDC" },
  { name: "Prof Angel Arul Jothi", photo: "/people/jothi.webp", role: "Chair, ACM Dubai Professional Chapter", affiliation: "BPDC" },
];

/** Names as the chapters write them on their own pages, where found. */
export const studentChapters: { name: string; logo?: string; darkLogo?: boolean }[] = [
  { name: "ACM-W BITS Pilani, Dubai", logo: "/logos/acmw-bpdc.jpg" },
  { name: "Symbiosis ACM-W Student Chapter" },
  { name: "ACM BITS Pilani Dubai Student Chapter", logo: "/logos/acm-bpdc.png" },
  { name: "UoBD ACM Student Chapter", logo: "/logos/acm-uobd.png", darkLogo: true },
  { name: "ACM Student Chapter MAHE Dubai" },
  { name: "ACM Student Chapter Amity Dubai" },
];

export const venue = {
  mapHref: "https://www.google.com/maps/search/?api=1&query=BITS+Pilani+Dubai+Campus",
  mapEmbed: "https://www.google.com/maps?q=BITS+Pilani+Dubai+Campus&output=embed",
  lines: [
    "BITS Pilani, Dubai Campus",
    "Dubai International Academic City",
    "Dubai, United Arab Emirates",
  ],
  directions:
    "The campus is in Dubai International Academic City, off Al Ain Road (E66). Visitor parking is available on campus; arrival details will be shared with registered attendees.",
};

/** WiCode 27 has its own website; this page only links out to it. */
export const wicode = {
  name: "WiCode 27",
  summary:
    "The hackathon that runs alongside the conference. Registration, teams, rules and key dates are all on the WiCode 27 website.",
  url: "https://wicode-pearl.vercel.app/",
};

export const scholarIntro =
  "Each year a cohort of students is funded to attend, present their work and join a mentoring programme with the speakers. Applications open alongside registration, and this year's cohort will be announced here.";

export const getInvolved = [
  {
    title: "Attend",
    text: "Register to hear both expert panels, meet the speakers and join the networking session.",
    cta: "Register now",
    href: "#",
  },
  {
    title: "Join WiCode 27",
    text: "Registration, teams and rules for the hackathon are on the WiCode 27 website.",
    cta: "Visit WiCode 27",
    href: wicode.url,
  },
  {
    title: "Become a scholar",
    text: "Apply for a funded place in the scholar cohort, with mentoring from the speakers.",
    cta: "Apply",
    href: "#",
  },
];

export const faq = [
  {
    q: "Who can attend?",
    a: "The conference is open to students, researchers and professionals. Everyone is welcome; the programme is designed around women in computing.",
  },
  {
    q: "How much does it cost?",
    a: "Ticket prices will be announced when registration opens.",
  },
  {
    q: "Where do I register for WiCode 27?",
    a: "WiCode 27 has its own website, which covers registration, teams, rules and key dates.",
  },
  {
    q: "How do I apply for the scholar cohort?",
    a: "Applications open alongside registration. Details will be posted on this page.",
  },
  {
    q: "Can my student chapter take part?",
    a: "Yes. ACM and ACM-W student chapters across the UAE are welcome to join; contact the ACM-W Dubai Professional Chapter.",
  },
];

export const socials = ["X", "LinkedIn", "Instagram", "YouTube"];
