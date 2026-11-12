"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Countdown rebuilt from the Framer "Pro Countdown" component
 * (framer.com/m/Count-Down-yIqNhX.js), with the same behaviour:
 *
 * 1. Independent digits — every number is split into single digits, each in its
 *    own AnimatePresence slot, so 49 → 48 only moves the "9"; the "4" stays put.
 * 2. Motion blur — digits enter from above and exit below through blur(6px).
 * 3. Spring physics — stiffness 450, damping 35, mass 1: snaps in, no bounce.
 * 4. Google Fonts — pass any of COUNTDOWN_FONTS as `font` and the font file is
 *    loaded automatically (no CSS import needed).
 *
 * AnimatePresence uses mode="popLayout" so entering and exiting digits overlap
 * without layout shift, and only transform / opacity / filter are animated.
 * Like the original it always animates, even when the device asks for reduced
 * motion — the movement is small and it is the point of the component.
 */

export const COUNTDOWN_FONTS = [
  "Inter", "Roboto", "Poppins", "DM Sans", "Oswald", "Montserrat", "Open Sans", "Lato",
  "Playfair Display", "Nunito", "Raleway", "Bebas Neue", "Anton", "Fraunces", "Space Mono",
] as const;
export type CountdownFont = (typeof COUNTDOWN_FONTS)[number];

// Narrow fonts get a narrower digit slot so the numbers don't look spaced out.
const CONDENSED: CountdownFont[] = ["Oswald", "Bebas Neue", "Anton"];

/** Same loader as the Framer component: injects the Google Fonts stylesheet once. */
function useGoogleFont(font: string) {
  useEffect(() => {
    if (!font) return;
    const id = `font-${font.replace(/\s+/g, "-")}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css?family=${font.replace(/\s+/g, "+")}:300,400,500,600,700,800,900&display=swap`;
    document.head.appendChild(link);
  }, [font]);
}

type Left = { days: number; hours: number; minutes: number; seconds: number };

function timeLeft(target: number): Left | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const spring = { type: "spring", stiffness: 450, damping: 35, mass: 1 } as const;

function Digit({ value, width }: { value: string; width: string }) {
  return (
    <span className="relative flex h-[1.1em] justify-center overflow-hidden" style={{ width }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          className="absolute leading-none will-change-[transform,opacity,filter]"
          initial={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
          transition={spring}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Group({ value, label, width }: { value: number | null; label: string; width: string }) {
  const text = value === null ? "--" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="flex text-gold-bright">
        {/* One slot per digit position, so only the digit that changes animates */}
        {text.split("").map((d, i) => (
          <Digit key={`${text.length}-${i}`} value={d} width={width} />
        ))}
      </div>
      <span className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60 sm:text-xs">{label}</span>
    </div>
  );
}

export default function Countdown({
  target,
  font = "Oswald",
  weight = 700,
  showSeparators = true,
  onDone,
}: {
  target: string;
  font?: CountdownFont;
  weight?: 300 | 400 | 500 | 700 | 900;
  showSeparators?: boolean;
  onDone?: (done: boolean) => void;
}) {
  useGoogleFont(font);
  const end = new Date(target).getTime();
  // Starts as "--" so the server HTML and first client render match; the clock fills in on mount.
  const [left, setLeft] = useState<Left | null | undefined>(undefined);

  useEffect(() => {
    const tick = () => setLeft(timeLeft(end));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [end]);

  useEffect(() => {
    if (left !== undefined) onDone?.(left === null);
  }, [left, onDone]);

  const pending = left === undefined;
  const v = left ?? null;
  const width = CONDENSED.includes(font) ? "0.52em" : "0.65em";
  const parts: [number | null, string][] = [
    [pending ? null : v?.days ?? 0, "Days"],
    [pending ? null : v?.hours ?? 0, "Hours"],
    [pending ? null : v?.minutes ?? 0, "Minutes"],
    [pending ? null : v?.seconds ?? 0, "Seconds"],
  ];

  return (
    <div
      role="timer"
      aria-label={v ? `${v.days} days, ${v.hours} hours and ${v.minutes} minutes to go` : "Countdown to the masterclass"}
      className="flex items-start justify-center gap-2 text-[clamp(2.75rem,11vw,7.5rem)] sm:gap-5 md:gap-8"
      style={{ fontFamily: `"${font}", sans-serif`, fontWeight: weight }}
    >
      {parts.map(([value, label], i) => (
        <div key={label} className="flex items-start gap-2 sm:gap-5 md:gap-8">
          {i > 0 && showSeparators && (
            <span className="leading-[1.05] text-gold/30" aria-hidden="true">
              :
            </span>
          )}
          <Group value={value} label={label} width={width} />
        </div>
      ))}
    </div>
  );
}
