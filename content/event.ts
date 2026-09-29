/**
 * All copy for the page. Every value is placeholder lorem ipsum —
 * swap these for real event content and no component needs to change.
 */

export const org = {
  name: "Lorem Ipsum",
  sub: "University",
  region: "Lorem Ipsum Dolor",
};

/** Two-line lockup shown beside the mark in the header. */
export const brand = { name: "Women in Computing", sub: "Conference" };

export const event = {
  title: "Women in Computing Conference",
  tags: ["Lorem-Ipsum Student Chapter", "Face-To-Face", "Conference"],
  date: "Tuesday, 02 Lorem 2026",
  time: "9 AM - 5 PM (IPSM)",
  price: "Paid",
  tagline: "Talks, two expert panels and a hackathon for women in computing.",
};

export const intro = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit voluptate velit esse cillum.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Places are limited, so registration is required to secure your spot.",
];

export type SessionType = "Keynote" | "Panel" | "Talk" | "WiCode" | "Break";

export type AgendaItem = {
  time: string;
  title: string;
  type: SessionType;
  detail?: string;
};

export const agenda: AgendaItem[] = [
  { time: "9.00am", type: "Break", title: "Lorem Ipsum & Refreshments" },
  {
    time: "9.30am", type: "Talk",
    title: "Welcome address",
    detail:
      "A/Prof. Lorem Ipsum, Faculty Advisor of Dolor Sit Amet Student Chapter and Director of Consectetur, Faculty of Adipiscing",
  },
  {
    time: "9.45am", type: "Keynote",
    title: "Keynote speech",
    detail:
      "Prof. Dolor Consectetur, Associate Dean (Elit) and Director of Lorem Ipsum Institute",
  },
  {
    time: "10.15am", type: "WiCode",
    title: "WiCode 27 Kickoff",
    detail: "Problem statements released; hackathon teams start building",
  },
  {
    time: "10.30am", type: "Talk",
    title: "Invited Talk",
    detail: "Dr Adipiscing Elit - Sed Do Eiusmod: Tempor, Incididunt and the Case for Labore",
  },
  {
    time: "11.00am", type: "Panel",
    title: "Industry Panel",
    detail:
      "How lorem and ipsum are shaping the future of dolor in the age of consectetur",
  },
  { time: "12.00pm", type: "Break", title: "Lunch" },
  {
    time: "1.00pm", type: "Panel",
    title: "Academic Panel",
    detail: "Panel discussion on research pathways and future opportunities",
  },
  {
    time: "1.45pm", type: "WiCode",
    title: "WiCode 27 Demos and Judging",
    detail: "Hackathon teams present their prototypes to the judges",
  },
  {
    time: "2.30pm", type: "Talk",
    title: "One-on-One Career Consultations",
    detail: "Students meet individually with lorem and/or ipsum experts",
  },
  {
    time: "4.00pm", type: "Talk",
    title: "Remarks from Lorem Ipsum",
    detail: "A/Prof. Consectetur Adipiscing - Lorem Ipsum Asia Pacific Regional Chair",
  },
  {
    time: "4.12pm", type: "Talk",
    title: "Remarks from the Dolor Committee, Faculty of Ipsum",
    detail: "Prof. Sed Eiusmod, Associate Dean (Tempor, Incididunt & Labore)",
  },
  { time: "4.19pm", type: "Talk", title: "Remarks from Magna Aliqua Chapter" },
  { time: "4.24pm", type: "Talk", title: "Remarks from University of Veniam Student Chapter" },
  {
    time: "4.30pm", type: "Talk",
    title: "Closing Remarks",
    detail: "A/Prof. Quis Nostrud, Associate Dean (Graduate Exercitation), Faculty of Ipsum",
  },
  { time: "4.45pm", type: "Talk", title: "Vote of Thanks" },
  { time: "5.00pm onwards", type: "Break", title: "Networking & Refreshments" },
];

export const utilityCentre = ["Lorem", "Ipsum Online", "Library", "Donate"];

export const utilityRight = ["Staff", "Students", "Alumni"];

export const sectionNav = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "WiCode 27", href: "#wicode" },
  { label: "Scholars", href: "#scholars" },
  { label: "Venue", href: "#venue" },
];

export const utilityLinks = [
  "Alumni",
  "Current Students",
  "Future Students",
  "Education",
  "Industry and Community",
  "Research",
];

export type Person = { name: string; role: string };

export const industryPanel: Person[] = [
  { name: "Professor Lorem Ipsum", role: "Associate Dean (Consectetur) and Director, Adipiscing Institute" },
  { name: "Professor Dolor Sit", role: "Senior Deputy Dean, Deputy Dean (Elit & Operations)" },
  { name: "Professor Amet Consectetur", role: "Associate Dean (Eiusmod, Tempor & Incididunt)" },
  { name: "Dr Adipiscing Elit", role: "Research Fellow, Centre for Lorem Natural User Interfaces" },
  { name: "Sed Eiusmod Tempor", role: "Product Owner, Ipsum Ecosystem Community, Dolor Bank of Lorem" },
  { name: "Professor Magna Aliqua", role: "Professor (Practice)" },
];

export const academicPanel: Person[] = [
  { name: "Professor Enim Minim", role: "Director, Lorem Informatics Hub; Discipline Lead, Ipsum" },
  { name: "Professor Quis Nostrud", role: "Head of Department (LRM)" },
  { name: "Dr Ullamco Laboris", role: "Exercitation University" },
  { name: "Associate Professor Nisi Aliquip", role: "National University of Commodo" },
  { name: "Dr Consequat Duis", role: "Lorem Ipsum University Dolor" },
  { name: "Professor Aute Irure", role: "Professor (Practice)" },
];

export type CommitteeGroup = { role: string; members: string[] };

export const committee: CommitteeGroup[] = [
  { role: "Conference Chairs", members: ["Reprehenderit Vol", "Velit Esse"] },
  { role: "Programme", members: ["Cillum Dolore", "Fugiat Nulla", "Pariatur Excepteur"] },
  { role: "WiCode 27", members: ["Sint Occaecat", "Cupidatat Proident"] },
  { role: "Outreach & Logistics", members: ["Culpa Officia", "Deserunt Mollit", "Anim Laborum"] },
];

export const partner = "Lorem Ipsum Dolor";

export const venue = {
  mapHref: "https://www.google.com/maps/search/?api=1&query=BITS+Pilani+Dubai+Campus",
  mapEmbed: "https://www.google.com/maps?q=BITS+Pilani+Dubai+Campus&output=embed",
  lines: [
    "BITS Pilani, Dubai Campus",
    "Dubai International Academic City",
    "Dubai, United Arab Emirates",
  ],
};

/** WiCode 27 has its own website; this page only links out to it. */
export const wicode = {
  name: "WiCode 27",
  summary:
    "The hackathon that runs alongside the conference. Registration, teams, rules and key dates are all on the WiCode 27 website.",
  url: "#", // Replace with the WiCode 27 website address.
};

export type Scholar = { name: string; institution: string };

export const scholarIntro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Each year a cohort of students is funded to attend, present their work and join a mentoring programme with the speakers.";

export const scholars: Scholar[] = [
  { name: "Lorem Ipsum", institution: "Dolor University" },
  { name: "Sit Amet", institution: "Consectetur Institute" },
  { name: "Adipiscing Elit", institution: "Dolor University" },
  { name: "Sed Eiusmod", institution: "Tempor College" },
  { name: "Incididunt Labore", institution: "Magna University" },
  { name: "Aliqua Veniam", institution: "Consectetur Institute" },
];

export const scholarQuote = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  name: "Quis Nostrud",
  cohort: "Previous scholar",
};

export const getInvolved = [
  {
    title: "Attend",
    text: "Lorem ipsum dolor sit amet. Register to hear both panels, meet the scholars and join the networking session.",
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
    text: "Sed do eiusmod tempor. Apply for a funded place in next year's scholar cohort.",
    cta: "Apply",
    href: "#",
  },
];

export const faq = [
  {
    q: "Who can attend?",
    a: "Lorem ipsum dolor sit amet. The conference is open to students, researchers and professionals.",
  },
  {
    q: "How much does it cost?",
    a: "Consectetur adipiscing elit. Ticket prices will be announced when registration opens.",
  },
  {
    q: "Where do I register for WiCode 27?",
    a: "WiCode 27 has its own website, which covers registration, teams, rules and key dates.",
  },
  {
    q: "How do I apply for the scholar cohort?",
    a: "Incididunt ut labore. Applications open alongside registration; details to be added.",
  },
];

export const socials = ["X", "LinkedIn", "Instagram", "YouTube"];
