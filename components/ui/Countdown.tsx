"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Countdown rebuilt from the Framer "Pro Countdown" component
 * (framer.com/m/Count-Down-yIqNhX.js): days · hours · minutes · seconds, each
 * digit sliding in from above with a short blur on a spring. Restyled in the
 * MiTran palette — gold digits, ivory labels — and set in Oswald to match the
 * hero lock-up tile.
 */

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

function Digit({ value, reduced }: { value: string; reduced: boolean }) {
  return (
    <span className="relative flex h-[1.1em] w-[0.52em] justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          className="absolute leading-none"
          initial={reduced ? false : { y: "-60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={reduced ? { opacity: 0, transition: { duration: 0 } } : { y: "60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ type: "spring", stiffness: 450, damping: 35, mass: 1 }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Group({ value, label, reduced }: { value: number | null; label: string; reduced: boolean }) {
  const text = value === null ? "--" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="flex font-lockup font-bold text-gold-bright">
        {text.split("").map((d, i) => (
          <Digit key={`${text.length}-${i}`} value={d} reduced={reduced} />
        ))}
      </div>
      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60 sm:text-xs">{label}</span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-lockup font-bold leading-[1.05] text-gold/30" aria-hidden="true">
      :
    </span>
  );
}

export default function Countdown({ target, onDone }: { target: string; onDone?: (done: boolean) => void }) {
  const reduced = usePrefersReducedMotion();
  const end = new Date(target).getTime();
  // Starts empty ("--") so the server HTML and first client render match; the clock fills in on mount.
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

  const v = left ?? null;
  const pending = left === undefined;
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
    >
      {parts.map(([value, label], i) => (
        <div key={label} className="flex items-start gap-2 sm:gap-5 md:gap-8">
          {i > 0 && <Separator />}
          <Group value={value} label={label} reduced={reduced} />
        </div>
      ))}
    </div>
  );
}
