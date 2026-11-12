# Mitran Events

The page for MiTran Global's **in-person** events.

Current event: **Imparting Positivity Masterclass · In the Room**
Tuesday 29 & Wednesday 30 December 2026 · Coimbatore · ₹4,999 (regular ₹38,950).

The hero comes from [Parent-Live-Sessions-Landing-Page](https://github.com/MitranGlobal/Parent-Live-Sessions-Landing-Page);
everything below it follows the layout and design of [Positivity-Hub](https://github.com/MitranGlobal/Positivity-Hub).

## Registration, price and countdown

Everything lives in `lib/content.ts`:

- `REGISTER_URL` — every **Register now** button (menu, hero, countdown, fee card, seat card, footer) goes here.
- `event.price` / `event.was` — ₹4,999, shown with ₹38,950 struck out on both price cards.
- `event.startsAt` — when the countdown after the hero reaches zero (currently 29 Dec 2026, 9:00 am IST).
  Once the clock runs out, the band switches to “The doors are open.” and the register button is hidden.

## Running the next event

All copy, dates, prices and links live in **`lib/content.ts`**. Update the `event` block (name, city,
dates, price), the agenda days and the FAQ, then push. The hero, gold strip, price cards and footer
all read from there.

Wording note: the page never calls the event “live”, because “live” reads as an online broadcast.
It uses **in person**, **in the room** and **face to face** instead.

## Page structure

1. Gold strip + black menu (Register now on the right)
2. **Hero** (from Parent Live Sessions) — rounded stage-light card, “fine.” outline, headline, Register now beside Dates / Place / Format (no price in the hero), black lock-up tile (“In the Room”, In person · Coimbatore, Day 1 / Day 2)
3. **Countdown to Day 1** — “The clock is ticking. The seats won’t wait.”, days / hours / minutes / seconds (rebuilt from the Framer Count Down component), Register now
4. “Does this sound like your home?” — moving row of photo cards
5. Gold band — “Some conversations need the same room.” (why it is in person)
6. Black band — facilitator, Vidyashankar Guru
7. Student testimonials
8. Black band — the two days, with the fee card pinned alongside
9. Gold band — “Save your seat in the room” pass card
10. FAQ
11. Footer with closing line

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
