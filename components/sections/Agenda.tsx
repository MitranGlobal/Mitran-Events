import Image from "next/image";
import Price from "@/components/ui/Price";
import BenefitList from "@/components/ui/BenefitList";
import Reveal from "@/components/ui/Reveal";
import RegisterButton from "@/components/ui/RegisterButton";
import Icon from "@/components/ui/Icon";
import { agenda, event, pass, passGroups } from "@/lib/content";

/** Black stage band (the Positivity Hub "Course" layout): the two days, with the pass pinned alongside. */
export default function Agenda() {
  return (
    <section id="agenda" aria-labelledby="agenda-title" className="section bg-stage text-ivory">
      <div className="container">
        <Reveal className="max-w-3xl">
          <h2 id="agenda-title" className="section-title text-ivory">
            {agenda.title}
          </h2>
          <p className="section-lead text-ivory/70">{agenda.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="space-y-8">
            {agenda.days.map((d) => (
              <Reveal key={d.label}>
                <article className="overflow-hidden rounded-panel border border-white/10 bg-stage-card">
                  <div className="relative aspect-[2/1]">
                    <Image src={d.image} alt="" fill sizes="(min-width: 1200px) 640px, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stage-card via-black/20 to-transparent" aria-hidden="true" />
                    {/* Date panel */}
                    <div className="absolute left-5 top-5 rounded-tile bg-black/75 px-4 py-3 text-center backdrop-blur sm:left-7 sm:top-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{d.weekday}</p>
                      <p className="font-display text-4xl leading-none text-ivory">{d.day}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-ivory/70">{d.month}</p>
                    </div>
                  </div>
                  <div className="p-7 pt-2 sm:p-10 sm:pt-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">{d.label}</p>
                    <h3 className="mt-2 font-display text-display-md text-ivory">{d.title}</h3>
                    <p className="mt-2 text-lg text-ivory/70">{d.question}</p>
                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                      {d.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 leading-relaxed text-ivory/85">
                          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <aside aria-label="Masterclass fee" className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-panel bg-mist p-7 text-ink shadow-lift sm:p-9">
              <p className="text-ink-soft">{pass.name}</p>
              <div className="mt-4">
                <Price price={pass.price} note={pass.priceNote} tone="ink" />
              </div>
              <ul className="mt-6 space-y-2 border-t border-mist-line pt-6 text-sm text-ink-soft">
                <li className="flex items-center gap-2.5">
                  <Icon name="calendar" className="h-4 w-4 text-gold-deep" />
                  {event.datesLong}
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="pin" className="h-4 w-4 text-gold-deep" />
                  In person in {event.city}
                </li>
              </ul>
              <div className="mt-7">
                <BenefitList groups={passGroups} tone="ink" compact />
              </div>
              <RegisterButton variant="ink" surface="light" className="mt-8 w-full" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
