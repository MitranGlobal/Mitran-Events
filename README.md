# Mitran Events

The page for MiTran Global's **in-person** events.

Current event: **Imparting Positivity Masterclass · In the Room**
Tuesday 29 & Wednesday 30 December 2026 · Coimbatore · ₹4,999 · Registrations open Friday 20 November 2026.

The hero comes from [Parent-Live-Sessions-Landing-Page](https://github.com/MitranGlobal/Parent-Live-Sessions-Landing-Page);
everything below it follows the layout and design of [Positivity-Hub](https://github.com/MitranGlobal/Positivity-Hub).

## Opening registrations (20 November)

Until a checkout link exists, every register button shows a **“Registrations open 20 Nov”** notice instead.
On the day, open `lib/content.ts` and paste the link:

```ts
export const registration = {
  url: "https://hub.mitranglobal.com/web/checkout/…",   // ← paste here
  …
};
```

Push, and all of them (menu, hero, fee card, seat card, footer) turn into **Register now** links.
The note under the seat card about registrations opening disappears on its own.

## Running the next event

All copy, dates, prices and links live in **`lib/content.ts`**. Update the `event` block (name, city,
dates, price), the agenda days and the FAQ, then push. The hero, gold strip, price cards and footer
all read from there.

Wording note: the page never calls the event “live”, because “live” reads as an online broadcast.
It uses **in person**, **in the room** and **face to face** instead.

## Page structure

1. Gold strip + black menu (register notice on the right)
2. **Hero** (from Parent Live Sessions) — rounded stage-light card, “fine.” outline, headline, register notice beside Dates / Place / Fee, black lock-up tile (“In the Room”, In person · Coimbatore, Day 1 / Day 2)
3. “Does this sound like your home?” — moving row of photo cards
4. Gold band — “Some conversations need the same room.” (why it is in person)
5. Black band — facilitator, Vidyashankar Guru
6. Student testimonials
7. Black band — the two days, with the fee card pinned alongside
8. Gold band — “Save your seat in the room” pass card
9. FAQ
10. Footer with closing line

## Stack

Next.js 14 (App Router, TypeScript), Tailwind CSS v3, Framer Motion, GSAP + ScrollTrigger.
Fonts: Young Serif + Figtree (as Positivity Hub) and Oswald for the hero lock-up tile.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Deploy on Vercel

Import the repo at vercel.com/new. Framework preset Next.js, no environment variables needed.
