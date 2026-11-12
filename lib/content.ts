/**
 * ALL page copy, dates, prices and links live in this one file.
 *
 * Mitran Events is the page for MiTran Global's in-person events. To run the
 * next event, update REGISTER_URL and the EVENT block;
 * the hero, top bar, agenda, price cards, FAQ and footer all read from here.
 */

/* ═══════════════════════════════════════════════════════════════════════
 * REGISTRATION — every "Register now" button on the page goes here.
 * ═══════════════════════════════════════════════════════════════════════ */
export const REGISTER_URL = "https://hub.mitranglobal.com/web/checkout/6ace0ed5f506917ea09e28b5";
export const REGISTER_LABEL = "Register now";

/* ═══════════════════════════════════════════════════════════════════════
 * EVENT
 * ═══════════════════════════════════════════════════════════════════════ */
export const event = {
  name: "Imparting Positivity Masterclass",
  /** How we say "in person" — "live" reads as a broadcast, so we don't use it. */
  format: "In the Room",
  city: "Coimbatore",
  venueNote: "Venue address and timings are shared with your registration confirmation.",
  datesShort: "29 & 30 Dec",
  datesLong: "Tuesday 29 & Wednesday 30 December 2026",
  /** When the countdown reaches zero: Day 1 start, India time. Change the time here once it's fixed. */
  startsAt: "2026-12-29T09:00:00+05:30",
  price: 4999,
  /** Struck-out price shown beside the fee */
  was: 38950,
  priceNote: "For the full two-day masterclass",
  audience: "For parents & teens (11–17)",
  facilitator: "Vidyashankar Guru",
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const site = {
  name: "Mitran Events",
  by: "MiTran Global",
  metaTitle: `${event.name} · In person in ${event.city}, 29–30 Dec 2026 | MiTran Global`,
  metaDescription: `Your teenager says “fine.” What are they not telling you? Two days in one room with ${event.facilitator} for parents and teens. In person in ${event.city}, 29–30 December 2026.`,
};

/* Thin gold strip above the menu */
export const announcement = {
  short: `In person · ${event.city} · ${event.datesShort}`,
  long: `${event.name} · In person in ${event.city} · ${event.datesShort} 2026`,
};

export const nav = [
  { label: "Why in person", href: "#why" },
  { label: "Facilitator", href: "#facilitator" },
  { label: "Agenda", href: "#agenda" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#help" },
];

/* ───────────────────────── Hero (from the Parent Live Sessions page) ───────────────────────── */
export const hero = {
  eyebrow: event.name,
  tagline: `In person · 2 days, 1 room · ${event.audience}`,
  headlineA: "Your teenager says “fine.”",
  headlineB: "What are they not telling you?",
  sub: `Two days in the same room as ${event.facilitator}, for parents and teens together. Pressure, phones, silence and setbacks, and how to help your child without nagging, fighting or doing it all yourself. No screens, no links. Just the room.`,
  meta: [
    { label: "Dates", value: event.datesShort },
    { label: "Place", value: event.city },
    { label: "Format", value: "In person" },
  ],
  tileBadge: `In person · ${event.city}`,
  tileLines: [
    { day: "Day 1 · Tue 29 Dec", title: "Beneath “Fine”" },
    { day: "Day 2 · Wed 30 Dec", title: "From managing to supporting" },
  ],
};

/* ───────────────────── Countdown to Day 1 (right after the hero) ───────────────────── */
export const countdown = {
  eyebrow: "The room opens in",
  title: "The clock is ticking. The seats won’t wait.",
  lead: `Two days that can change how your home talks, and only so many chairs in the room. When this clock hits zero on Tuesday 29 December, the doors in ${event.city} close behind the families already inside.`,
  /** Countdown font: any of Inter, Roboto, Poppins, DM Sans, Oswald, Montserrat, Open Sans, Lato,
   *  Playfair Display, Nunito, Raleway, Bebas Neue, Anton, Fraunces, Space Mono — loaded automatically. */
  font: "Oswald" as const,
  doneTitle: "The doors are open.",
  doneLead: `${event.name} is under way in ${event.city}.`,
};

/* ───────────────────── "Sound familiar?" moving cards ───────────────────── */
export type CardShape = "wide" | "tall" | "square";

export const struggles: {
  title: string;
  lead: string;
  items: { q: string; a: string; image: string; shape: CardShape }[];
} = {
  title: "Does this sound like your home?",
  lead: "These are the things parents tell us most often. None of them, by itself, means something is wrong with your child. Over two days we work through every one of them, face to face.",
  items: [
    { q: "The reminder loop", a: "“I remind, she shouts, I feel terrible, and tomorrow we do it all again.”", image: "/familiar/familiar-1.webp", shape: "wide" },
    { q: "The phone and the late night", a: "Awake until 2 am, asleep through the morning, angry when the screen goes off.", image: "/familiar/familiar-2.webp", shape: "tall" },
    { q: "Going blank in the exam", a: "“He knew it at home.” And a fear he never mentioned until it was too late.", image: "/familiar/familiar-3.webp", shape: "square" },
    { q: "“Why should I?”", a: "Gives up the moment it gets hard, or does the bare minimum.", image: "/familiar/familiar-4.webp", shape: "wide" },
    { q: "The closed door", a: "One-word answers at home, a very different child around friends.", image: "/familiar/familiar-5.webp", shape: "tall" },
    { q: "Doing it all alone", a: "One parent carries everything. The other says, “All teens are like this.”", image: "/familiar/familiar-6.webp", shape: "square" },
  ],
};

/* ───────────────────── Why in person (gold band) ───────────────────── */
export const why = {
  title: "Some conversations need the same room.",
  lead: "Screens are part of what we’re here to talk about, so this masterclass doesn’t happen on one. Parents and teens sit together for two full days and practise what they learn with each other before they go home.",
  image: "/together.webp",
  imageAlt: "A mother and her teenage daughter laughing together at home",
  imageLines: ["No links.", "No screens.", "Just the room."],
  pillars: [
    {
      title: "Face to face with the facilitator",
      body: `Ask ${event.facilitator} your question and work through the answer while you are both still in the room.`,
    },
    {
      title: "Parents and teens, side by side",
      body: "Do every exercise together, at the same table, instead of on two separate devices in two separate rooms.",
    },
    {
      title: "Practice, not just theory",
      body: "Try the harder conversations on the spot, with guidance, before you try them at home.",
    },
  ],
  closing: `Two days, one room, one city: ${event.city}, ${event.datesLong}.`,
};

/* ───────────────────── Facilitator ───────────────────── */
export const facilitator = {
  eyebrow: "Your facilitator",
  name: event.facilitator,
  designation: "Co-founder and Chief Vision Officer at MiTran Global",
  photo: "/vidyashankar-guru.webp",
  points: [
    "Grew up in a small village in South India, with no elite school and no big-city advantages. Struggled with confidence, self-doubt and freezing under pressure as a teen.",
    "Spent 22+ years studying what schools never teach students: mindset, discipline and inner strength.",
    "TEDx speaker and author of five books. Today his only mission is giving every struggling teen the tools he wished he had at their age.",
  ],
  stats: [
    { value: "25K+", label: "Teens and professionals trained" },
    { value: "40+", label: "Nationalities" },
    { value: "22+", label: "Years of practice" },
  ],
  cta: "See the two days",
};

/* ───────────────────── Agenda: two days ───────────────────── */
export const agenda = {
  title: "Two days. Two shifts in how you see it.",
  lead: "Built on real situations families bring to us, with something to try together before you leave the room.",
  days: [
    {
      label: "Day 1",
      weekday: "Tuesday",
      day: "29",
      month: "Dec",
      image: "/agenda/day-1.webp",
      title: "Beneath “Fine”",
      question: "What is really going on with my teenager?",
      points: [
        "Why behaviour is communication, and why the phone is usually a symptom",
        "The reminder loop, and how to step out of it",
        "Pressure, the exam blank and the fear teens hide",
        "The first hour after a bad result",
        "When it’s time to bring in a professional",
      ],
    },
    {
      label: "Day 2",
      weekday: "Wednesday",
      day: "30",
      month: "Dec",
      image: "/agenda/day-2.webp",
      title: "From managing to supporting",
      question: "How do I help without doing it all myself?",
      points: [
        "The handover ladder: moving tasks from you to them",
        "A phone and sleep plan your teen helps write",
        "Self-belief, giving up and “why should I?”",
        "Conversations that open doors",
        "One handover, one conversation, one small stretch to take home",
      ],
    },
  ],
};

/* ───────────────────── What the pass includes ───────────────────── */
export type Benefit = { title: string; detail?: string; list?: string[] };
export type BenefitGroup = { heading: string; items: Benefit[] };

export const passGroups: BenefitGroup[] = [
  {
    heading: "Two days in the room",
    items: [
      { title: "Day 1 · Beneath “Fine”", detail: "Tuesday 29 December · What is really going on with my teenager?" },
      { title: "Day 2 · From managing to supporting", detail: "Wednesday 30 December · How do I help without doing it all myself?" },
      { title: `Your questions, answered in person`, detail: `By ${event.facilitator}, in the room.` },
    ],
  },
  {
    heading: "You take home",
    items: [
      { title: "A two-page parent toolkit", detail: "Including a page for the other parent." },
      { title: "A handover plan and a phone and sleep plan", detail: "Started together during the two days, ready to use at home." },
    ],
  },
];

export const pass = {
  name: `${event.name} · Two-day pass`,
  tagline: `In person in ${event.city} · ${event.datesLong}`,
  price: event.price,
  was: event.was,
  priceNote: event.priceNote,
};

export const pricing = {
  title: "Save your seat in the room",
  lead: `Seats in the room are limited. Register now to keep yours for ${event.datesLong} in ${event.city}.`,
};

/* ───────────────────── Testimonials (as published on mitranglobal.com) ───────────────────── */
export const testimonials = {
  title: "What students say after working with MiTran Global",
  lead: "Students from schools across India and abroad on what changed for them.",
  items: [
    {
      name: "Banshika Kumari",
      photo: "/testimonials/banshika.webp",
      role: "9th Grade, Jammu Sanskriti School, Jammu",
      quote:
        "I am Banshika Kumari. I always face the problems of slow reading and learning but, since I am using MiTran Global everything took a turn. The platform MiTran Global has many courses like I love exams, Accelerated learning methodologies, Positive mind mastery. All these courses contain the stuff that is much needed for a student. From the accelerated learning methodologies course, I learned to read and learn fast. I especially thank the whole MiTran Global team for making my life much easier.",
    },
    {
      name: "Raju Adnani",
      photo: "/testimonials/raju.webp",
      role: "11th Grade, Dubai English School, UAE",
      quote:
        "Working at the foundational level the system created by Vidyashankar has instilled in Siddharth a drive for success and a belief in failure as a stepping stone to success. Siddharth has not only honed his leadership skills but also integrated essential self-beliefs into his personality. When Siddharth participated in a panel discussion at MiTran Global, we were happy to notice he made significant contributions. In my opinion, the whole coaching process has been fundamental in shaping Siddharth trajectory addressing aspects often overlooked by mainstream education.",
    },
    {
      name: "Mahathi",
      photo: "/testimonials/mahathi.webp",
      role: "8th Grade, KRM Public School, Chennai",
      quote:
        "This is Mahathi and I have been part of MiTran Global sessions. I have learned many new things from these classes. Also, the online courses that have been shared in the link were very understandable and made me believe Exams are easy once we love the same. The other courses like Positive Mind Mastery changed me from feeling negative to thinking positive. Thank you MiTran Global for creating this wonderful hub for students",
    },
    {
      name: "Anshikha Kumar",
      photo: "/testimonials/anshikha.webp",
      role: "9th Grade, The Srijan School, Delhi",
      quote:
        "Hi, I’m Anshika Kumar, a 9th-grade student from The Srijan School, Delhi. Before joining MiTran Global’s Positivity Hub, I was eager to understand teenage life better and learn how to navigate challenges with confidence. One of the most fascinating things I discovered was about the power of the mind and how our neurons shape our thoughts and actions, it was truly eye-opening! I’ve learned the importance of staying positive, believing in myself, Thank you, Mitran Global, for creating such an impactful platform!",
    },
    {
      name: "Justin Jiby",
      photo: "/testimonials/justin.webp",
      role: "6th Grade, St. Alonso Senior Secondary School",
      quote:
        "Hi, I’m Justin, a 6th-grade student from St. Alonso Senior Secondary School. Thank you for this amazing session! It was a new and exciting experience for me. Before this, I had never thought about these ideas. But after the session, when I asked myself what I had learned, the first thing that came to my mind was: \"If others can do it, I can do it too!\" This made me feel more confident and motivated. I’m really grateful for this life-changing opportunity through MiTran Global. Thank you for helping me believe in myself and discover my true potential!",
    },
    {
      name: "Likith Bardwaj",
      photo: "/testimonials/likith.webp",
      role: "7th Grade, Delhi Public School, North Bangalore",
      quote:
        "Earlier, I used to feel like I couldn't achieve much and that my life would always be the same. But after taking these courses, I learned a lot about the human brain, emotions, and self-control. One of the best things was making a weekly plan, which helped me stay focused. Now, I feel better both mentally and physically. My favorite part of the program was learning through mnemonics like POPM and discovering the eight principles of superpower memory. These techniques have helped me understand how to control my emotions and improve my focus. Thank you, MiTran Global, for this amazing experience!",
    },
  ],
};

/* ───────────────────── FAQ ───────────────────── */
export const faqs = [
  {
    q: "Is this online or in person?",
    a: `In person only. There is no livestream, meeting link or recording. The whole masterclass happens in one room in ${event.city} on 29 and 30 December 2026.`,
  },
  {
    q: "How much does it cost?",
    a: `${formatINR(event.price)} for the full two-day masterclass (regular price ${formatINR(event.was)}).`,
  },
  {
    q: "Where exactly is the venue?",
    a: `In ${event.city}. ${event.venueNote}`,
  },
  {
    q: "Do I need to attend both days?",
    a: "Yes. Day 2 builds on Day 1, so please plan to be in the room for both.",
  },
  {
    q: "Can my teen and spouse come?",
    a: "Yes. The masterclass is built for parents and teens (11–17) together, and both parents are welcome. Seat options are shown when you register.",
  },
  {
    q: "What should we bring?",
    a: "A notebook and pen each, and an open mind. Phones can stay in your pocket.",
  },
  {
    q: "Is this therapy?",
    a: "No. This masterclass is education for parents and teens. It does not diagnose or treat any condition.",
  },
];

/* ───────────────────── Footer / closing ───────────────────── */
export const closing = {
  heading: "Two days in one room can change how your home talks.",
  sub: `${event.datesLong} · ${event.city}`,
  disclaimer: "This masterclass is education for parents and teens, not therapy, and does not diagnose or treat any condition.",
};
