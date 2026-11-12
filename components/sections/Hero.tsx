"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/lib/content";
import RegisterButton from "@/components/ui/RegisterButton";
import ArtPanel from "@/components/ui/ArtPanel";
import Lockup from "@/components/ui/Lockup";
import Icon from "@/components/ui/Icon";

const ease = [0.22, 1, 0.36, 1] as const;

/** Optional hero photo (wide, ~2400×1400, subject on the right). Empty = gold "stage light" art. */
const HERO_PHOTO = "";

/**
 * The hero from the Parent Live Sessions page: a large rounded card inset from
 * the page edges, dot-eyebrow, huge headline, subhead, the registration pill
 * beside Dates / Place / Format, and the black event lock-up tile bottom-right.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const up = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay: d },
  });

  return (
    <section id="top" aria-label="Introduction" className="bg-black px-3 pb-3 pt-3 md:px-7 md:pb-5 md:pt-2">
      <ArtPanel
        src={HERO_PHOTO}
        variant="sunset"
        seed={7}
        beams
        className="flex min-h-[calc(100svh-120px)] flex-col justify-end rounded-[20px] md:min-h-[calc(100vh-124px)] md:rounded-[28px]"
      >
        {/* Oversized "fine." as the visual subject when no photo is set */}
        {!HERO_PHOTO && (
          <motion.span
            aria-hidden
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
            className="pointer-events-none absolute right-[-4%] top-[6%] select-none font-sans text-[clamp(9rem,30vw,30rem)] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1.5px_rgba(245,209,122,0.28)]"
          >
            fine.
          </motion.span>
        )}
        {/* Legibility gradients */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,12,0.85)_0%,rgba(8,9,12,0.55)_38%,rgba(8,9,12,0)_70%),linear-gradient(0deg,rgba(8,9,12,0.9)_0%,rgba(8,9,12,0)_55%)]"
        />

        <div className="relative z-10 flex flex-col gap-10 p-6 pt-20 md:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[1020px] lg:max-w-[min(1020px,calc(100%-330px))]">
            <motion.p {...up(0.05)} className="eyebrow text-ivory">
              {hero.eyebrow}
            </motion.p>
            <motion.p {...up(0.1)} className="mt-4 text-sm uppercase tracking-[0.06em] text-ivory/80 md:text-base">
              {hero.tagline}
            </motion.p>

            <motion.h1 {...up(0.15)} className="mt-5 font-sans text-display-hero font-semibold text-ivory">
              {hero.headlineA}
              <br />
              {hero.headlineB}
            </motion.h1>

            <motion.p {...up(0.28)} className="mt-6 max-w-[720px] text-lead text-ivory/90" style={{ textWrap: "pretty" }}>
              {hero.sub}
            </motion.p>

            <motion.div {...up(0.4)} className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:gap-14">
              <RegisterButton variant="hero" className="self-start" />
              <dl className="grid grid-cols-3 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-14">
                {hero.meta.map((m) => (
                  <div key={m.label}>
                    <dt className="text-sm uppercase tracking-[0.04em] text-ivory/70 md:text-[17px]">{m.label}</dt>
                    <dd className="mt-1 whitespace-nowrap text-lg font-medium tracking-[-0.02em] text-ivory md:text-[26px]">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Event lock-up tile */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.55 }}
            className="hidden shrink-0 rounded-[18px] bg-black px-10 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] md:block"
          >
            <Lockup className="w-[220px]" />
            <div className="mt-5 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                <Icon name="pin" className="h-3.5 w-3.5" />
                {hero.tileBadge}
              </span>
            </div>
            <ul className="mt-7 space-y-2 border-t border-white/10 pt-5 text-[13px] text-ivory/75">
              {hero.tileLines.map((s) => (
                <li key={s.day}>
                  {s.day} · <span className="text-ivory">{s.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ArtPanel>
    </section>
  );
}
