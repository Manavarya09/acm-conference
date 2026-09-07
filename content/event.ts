/**
 * Every piece of copy on the site lives here as placeholder text.
 * Swap these values for real event content — the pages read from this file only.
 */

export const event = {
  name: "Lorem Ipsum Dolor Sit Amet",
  title: "ACM Lorem Ipsum: Consectetur Adipiscing Elit",
  tagline:
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  chapter: "ACM Lorem Student Chapter",
  format: "Face-to-Face",
  kind: "Workshop",
  date: "Tuesday, 02 Lorem 2026",
  dateShort: "02 Lorem 2026",
  time: "9 AM – 5 PM (IPSM)",
  price: "Paid",
  registerHref: "#",
};

export const about = {
  heading: "Lorem ipsum dolor sit amet",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Places are limited — lorem ipsum registration required.",
  ],
};

export const highlights = [
  {
    label: "Lorem Ipsum",
    value: "12+",
    detail: "Consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    label: "Dolor Sit Amet",
    value: "08",
    detail: "Ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    label: "Tempor Incididunt",
    value: "200",
    detail: "Quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    label: "Magna Aliqua",
    value: "01",
    detail: "Duis aute irure dolor in reprehenderit voluptate.",
  },
];

export type AgendaItem = {
  time: string;
  title: string;
  presenter?: string;
  detail?: string;
};

export const agenda: AgendaItem[] = [
  {
    time: "9.00am",
    title: "Lorem Ipsum & Refreshments",
    detail: "Consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    time: "9.30am",
    title: "Dolor Sit Amet Address",
    presenter: "A/Prof. Lorem Ipsum",
    detail: "Consectetur Adipiscing, Director of Elit, Faculty of Lorem.",
  },
  {
    time: "9.45am",
    title: "Keynote: Sed Do Eiusmod Tempor",
    presenter: "Prof. Dolor Consectetur",
    detail: "Associate Dean (Lorem) and Director of Ipsum Institute.",
  },
  {
    time: "10.30am",
    title: "Invited Talk — Ut Labore Et Dolore",
    presenter: "Dr Adipiscing Elit",
    detail: "Magna aliqua ut enim ad minim veniam quis nostrud.",
  },
  {
    time: "11.00am",
    title: "Panel Discussion",
    detail:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    time: "12.00pm",
    title: "Lorem Lunch",
    detail: "Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    time: "1.00pm",
    title: "Excepteur Sint Career Guidance",
    detail: "Panel discussion on lorem pathways and future ipsum.",
  },
  {
    time: "1.45pm",
    title: "Occaecat Cupidatat Guidance",
    detail: "Panel discussion on ipsum pathways and future dolor.",
  },
  {
    time: "2.30pm",
    title: "One-on-One Lorem Consultations",
    detail: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    time: "4.00pm",
    title: "Remarks from Lorem Ipsum",
    presenter: "A/Prof. Voluptate Velit",
    detail: "Regional Chair, Lorem Ipsum Asia Pacific.",
  },
  {
    time: "4.15pm",
    title: "Remarks from the Dolor Committee",
    presenter: "Prof. Consequat Aute",
    detail: "Associate Dean (Lorem, Ipsum & Dolor).",
  },
  {
    time: "4.30pm",
    title: "Closing Remarks",
    presenter: "A/Prof. Nulla Pariatur",
    detail: "Associate Dean (Graduate Lorem), Faculty of Ipsum.",
  },
  {
    time: "4.45pm",
    title: "Vote of Thanks",
    detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    time: "5.00pm",
    title: "Networking & Refreshments",
    detail: "Accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
  },
];

export type Person = {
  name: string;
  role: string;
  org: string;
  featured?: boolean;
};

export const speakers: Person[] = [
  {
    name: "Prof. Lorem Ipsum",
    role: "Associate Dean (Consectetur)",
    org: "Adipiscing Institute",
    featured: true,
  },
  {
    name: "Prof. Dolor Sit",
    role: "Senior Deputy Dean",
    org: "Faculty of Lorem",
    featured: true,
  },
  {
    name: "Prof. Amet Consectetur",
    role: "Associate Dean (Eiusmod)",
    org: "Tempor University",
    featured: true,
  },
  {
    name: "Dr Adipiscing Elit",
    role: "Research Fellow",
    org: "Centre for Lorem Interfaces",
    featured: true,
  },
  {
    name: "Sed Eiusmod",
    role: "Product Owner, Ipsum Ecosystem",
    org: "Dolor Bank of Lorem",
  },
  { name: "Prof. Tempor Incididunt", role: "Professor (Practice)", org: "Ut Labore University" },
  {
    name: "Prof. Magna Aliqua",
    role: "Director, Lorem Informatics Hub",
    org: "Ipsum Research Organisation",
  },
  { name: "Prof. Enim Minim", role: "Head of Department (LRM)", org: "Veniam University" },
  { name: "Dr Quis Nostrud", role: "Senior Lecturer", org: "Exercitation University" },
  {
    name: "A/Prof. Ullamco Laboris",
    role: "Regional Chair, Lorem Ipsum",
    org: "National University of Dolor",
  },
  { name: "Dr Nisi Aliquip", role: "Senior Lecturer", org: "Ex Ea University Commodo" },
  { name: "Prof. Consequat Duis", role: "Professor (Practice)", org: "Aute Irure University" },
];

export const conveners: Person[] = [
  {
    name: "A/Prof. Reprehenderit Vol",
    role: "Director, Education — Chapter Advisor",
    org: "Lorem Ipsum Chapter",
  },
  { name: "Velit Esse", role: "PhD Candidate — Chapter Chair", org: "Lorem Ipsum Chapter" },
  { name: "Dr Cillum Dolore", role: "Research Fellow — Committee Member", org: "Lorem Ipsum Chapter" },
  { name: "Fugiat Nulla", role: "PhD Candidate — Vice Chair", org: "Lorem Ipsum Chapter" },
  { name: "Pariatur Excepteur", role: "PhD Candidate — Secretary", org: "Lorem Ipsum Chapter" },
  { name: "Sint Occaecat", role: "PhD Candidate — Treasurer", org: "Lorem Ipsum Chapter" },
];

export const partners = [
  "Lorem Ipsum Group",
  "Dolor Sit Amet",
  "Consectetur Labs",
  "Adipiscing Foundation",
  "Eiusmod Partners",
  "Tempor Collective",
];

export const venue = {
  room: "Room 903, Lorem Ipsum College",
  street: "Level 9 / 750 Dolor Street",
  city: "Consectetur VIC 3008",
  country: "Adipiscing",
  directions: [
    {
      heading: "Lorem by Train",
      body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
    },
    {
      heading: "Ipsum by Tram",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    },
    {
      heading: "Dolor Parking",
      body: "Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.",
    },
    {
      heading: "Sit Accessibility",
      body: "Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.",
    },
  ],
};

export const faq = [
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    q: "Ut enim ad minim veniam quis nostrud?",
    a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
  },
  {
    q: "Duis aute irure dolor in reprehenderit?",
    a: "Sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    q: "Excepteur sint occaecat cupidatat non proident?",
    a: "Laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.",
  },
  {
    q: "Nemo enim ipsam voluptatem quia voluptas?",
    a: "Sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
  },
];

export const tickets = [
  {
    name: "Lorem Student",
    price: "$00",
    note: "Consectetur adipiscing elit sed do.",
    perks: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore",
    ],
    featured: false,
  },
  {
    name: "Ipsum Standard",
    price: "$00",
    note: "Eiusmod tempor incididunt ut labore.",
    perks: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore et dolore",
      "Magna aliqua ut enim ad minim",
    ],
    featured: true,
  },
  {
    name: "Dolor Industry",
    price: "$00",
    note: "Ut labore et dolore magna aliqua.",
    perks: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore et dolore",
      "Magna aliqua ut enim ad minim",
      "Veniam quis nostrud exercitation",
    ],
    featured: false,
  },
];

export const nav = [
  { href: "/", label: "Overview" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/venue", label: "Venue" },
  { href: "/register", label: "Register" },
];
