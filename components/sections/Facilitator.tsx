import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { facilitator } from "@/lib/content";

/** Black stage band (the Positivity Hub "Programme" layout) introducing the facilitator. */
export default function Facilitator() {
  return (
    <section id="facilitator" aria-labelledby="facilitator-title" className="section relative overflow-hidden bg-stage text-ivory">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_25%_45%,rgba(233,196,106,0.16),transparent_70%)]" aria-hidden="true" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-panel border-b-4 border-gold bg-stage-card shadow-lift">
            <Image src={facilitator.photo} alt={`${facilitator.name} speaking on stage`} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[70%_30%]" />
          </div>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gold-bright">{facilitator.eyebrow}</p>
          <h2 id="facilitator-title" className="mt-3 font-display text-display-lg text-ivory" style={{ textWrap: "balance" }}>
            {facilitator.name}
          </h2>
          <p className="mt-2 text-ivory/70">{facilitator.designation}</p>

          <ul className="mt-8 space-y-4">
            {facilitator.points.map((p) => (
              <li key={p} className="flex items-start gap-3 leading-relaxed text-ivory/85">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <dl className="flex flex-wrap gap-x-8 gap-y-4">
              {facilitator.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl text-ivory">{s.value}</dd>
                  <dd className="text-sm text-ivory/60">{s.label}</dd>
                </div>
              ))}
            </dl>
            <a href="#agenda" className="btn-primary self-start whitespace-nowrap sm:self-auto">
              {facilitator.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
