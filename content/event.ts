/**
 * All copy for the page. Every value is placeholder lorem ipsum —
 * swap these for real event content and no component needs to change.
 */

export const org = {
  name: "Lorem Ipsum",
  sub: "University",
  region: "Lorem Ipsum Dolor",
};

export const faculty = "Information Lorem";

export const event = {
  title: "ACM Lorem Ipsum Dolor Sit Amet: Consectetur Adipiscing Elit",
  tags: ["Lorem-Ipsum Student Chapter", "Face-To-Face", "Workshop"],
  date: "Tuesday, 02 Lorem 2026",
  time: "9 AM - 5 PM (IPSM)",
  price: "Paid",
};

export const intro = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit voluptate velit esse cillum.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Places are limited, so registration is required to secure your spot.",
];

export type AgendaItem = { time: string; title: string; detail?: string };

export const agenda: AgendaItem[] = [
  { time: "9.00am", title: "Lorem Ipsum & Refreshments" },
  {
    time: "9.30am",
    title: "Welcome address",
    detail:
      "A/Prof. Lorem Ipsum, Faculty Advisor of Dolor Sit Amet Student Chapter and Director of Consectetur, Faculty of Adipiscing",
  },
  {
    time: "9.45am",
    title: "Keynote speech",
    detail:
      "Prof. Dolor Consectetur, Associate Dean (Elit) and Director of Lorem Ipsum Institute",
  },
  {
    time: "10.30am",
    title: "Invited Talk",
    detail: "Dr Adipiscing Elit - Sed Do Eiusmod: Tempor, Incididunt and the Case for Labore",
  },
  {
    time: "11.00am",
    title: "Panel Discussion",
    detail:
      "How lorem and ipsum are shaping the future of dolor in the age of consectetur",
  },
  { time: "12.00pm", title: "Lunch" },
  {
    time: "1.00pm",
    title: "Lorem Career Guidance",
    detail: "Panel discussion on ipsum pathways and future opportunities",
  },
  {
    time: "1.45pm",
    title: "Dolor Career Guidance",
    detail: "Panel discussion on sit amet pathways and future opportunities",
  },
  {
    time: "2.30pm",
    title: "One-on-One Career Consultations",
    detail: "Students meet individually with lorem and/or ipsum experts",
  },
  {
    time: "4.00pm",
    title: "Remarks from Lorem Ipsum",
    detail: "A/Prof. Consectetur Adipiscing - Lorem Ipsum Asia Pacific Regional Chair",
  },
  {
    time: "4.12pm",
    title: "Remarks from the Dolor Committee, Faculty of Ipsum",
    detail: "Prof. Sed Eiusmod, Associate Dean (Tempor, Incididunt & Labore)",
  },
  { time: "4.19pm", title: "Remarks from Magna Aliqua Chapter" },
  { time: "4.24pm", title: "Remarks from University of Veniam Student Chapter" },
  {
    time: "4.30pm",
    title: "Closing Remarks",
    detail: "A/Prof. Quis Nostrud, Associate Dean (Graduate Exercitation), Faculty of Ipsum",
  },
  { time: "4.45pm", title: "Vote of Thanks" },
  { time: "5.00pm onwards", title: "Networking & Refreshments" },
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

export const speakers: Person[] = [
  { name: "Professor Lorem Ipsum", role: "Associate Dean (Consectetur) and Director, Adipiscing Institute" },
  { name: "Professor Dolor Sit", role: "Senior Deputy Dean, Deputy Dean (Elit & Operations)" },
  { name: "Professor Amet Consectetur", role: "Associate Dean (Eiusmod, Tempor & Incididunt)" },
  { name: "Dr Adipiscing Elit", role: "Research Fellow, Centre for Lorem Natural User Interfaces" },
  { name: "Sed Eiusmod Tempor", role: "Product Owner, Ipsum Ecosystem Community, Dolor Bank of Lorem" },
  { name: "Professor Magna Aliqua", role: "Professor (Practice)" },
  { name: "Professor Enim Minim", role: "Director, Lorem Informatics Hub; Discipline Lead, Ipsum" },
  { name: "Professor Quis Nostrud", role: "Head of Department (LRM)" },
  { name: "Dr Ullamco Laboris", role: "Exercitation University" },
  { name: "Associate Professor Nisi Aliquip", role: "National University of Commodo" },
  { name: "Dr Consequat Duis", role: "Lorem Ipsum University Dolor" },
  { name: "Professor Aute Irure", role: "Professor (Practice)" },
];

export const conveners: Person[] = [
  { name: "Associate Professor Reprehenderit Vol", role: "Director, Education (LRM), Chapter Advisor" },
  { name: "Velit Esse", role: "PhD Candidate, Chapter Chair" },
  { name: "Dr Cillum Dolore", role: "Research Fellow, Committee Member" },
  { name: "Fugiat Nulla", role: "PhD Candidate, Vice Chair" },
  { name: "Pariatur Excepteur", role: "PhD Candidate, Secretary" },
  { name: "Sint Occaecat Cupidatat", role: "PhD Candidate, Treasurer" },
];

export const partner = "Lorem Ipsum Dolor";

export const venue = {
  lines: [
    "Room 903, Lorem Ipsum College",
    "Level 9/750 Consectetur Street",
    "Adipiscing VIC 3008 Elit",
  ],
};
