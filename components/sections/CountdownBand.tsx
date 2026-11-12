"use client";

import { useState } from "react";
import Countdown from "@/components/ui/Countdown";
import RegisterButton from "@/components/ui/RegisterButton";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { countdown, event } from "@/lib/content";

/** Black band straight after the hero: the countdown to Day 1 and a push to register. */
export default function CountdownBand() {
  const [done, setDone] = useState(false);

  return (
    <section id="countdown" aria-labelledby="countdown-title" className="relative overflow-hidden bg-black px-3 pb-3 md:px-7 md:pb-5">
      <div className="relative overflow-hidden rounded-[20px] border border-gold/20 bg-stage py-16 md:rounded-[28px] md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_0%,rgba(233,196,106,0.18),transparent_70%)]" aria-hidden="true" />
        <div className="container relative flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold sm:text-[15px]">
              <span className="hidden h-px w-8 bg-gold/70 sm:block" aria-hidden="true" />
              {done ? event.format : countdown.eyebrow}
              <span className="hidden h-px w-8 bg-gold/70 sm:block" aria-hidden="true" />
            </p>
            <h2 id="countdown-title" className="mt-5 max-w-[20ch] font-display text-display-lg text-ivory" style={{ textWrap: "balance" }}>
              {done ? countdown.doneTitle : countdown.title}
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-14">
            <Countdown target={event.startsAt} onDone={setDone} />
          </div>

          <Reveal className="flex flex-col items-center">
            <p className="mt-10 max-w-[40rem] text-lg leading-relaxed text-ivory/75" style={{ textWrap: "pretty" }}>
              {done ? countdown.doneLead : countdown.lead}
            </p>
            {!done && (
              <>
                <RegisterButton variant="primary" className="mt-8 min-h-[56px] px-9 text-base" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ivory/60">
                  <span className="flex items-center gap-2">
                    <Icon name="calendar" className="h-4 w-4 text-gold" />
                    {event.datesLong}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="pin" className="h-4 w-4 text-gold" />
                    In person in {event.city}
                  </span>
                </p>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
