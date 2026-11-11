import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { why } from "@/lib/content";

const pillarIcons = ["people", "spark", "leaf"] as const;

/** Gold band (the Positivity Hub "About" layout): why this masterclass happens in one room. */
export default function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="section bg-gold text-ink">
      <div className="container">
        <Reveal className="max-w-3xl">
          <h2 id="why-title" className="font-display text-display-lg text-ink" style={{ textWrap: "balance" }}>
            {why.title}
          </h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/75">{why.lead}</p>
        </Reveal>

        {/* Where the Positivity Hub video sat: a photo with the in-person promise on it. */}
        <Reveal className="mt-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-panel bg-stage shadow-lift sm:aspect-[16/8]">
            <Image src={why.image} alt={why.imageAlt} fill sizes="(min-width: 1200px) 1136px, 100vw" className="object-cover object-[50%_22%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" aria-hidden="true" />
            <p className="absolute bottom-6 left-6 font-display text-[clamp(1.75rem,4.4vw,3.5rem)] leading-[1.08] text-ivory sm:bottom-10 sm:left-10">
              {why.imageLines.map((l, i) => (
                <span key={l} className={`block ${i === why.imageLines.length - 1 ? "text-gold-bright" : ""}`}>
                  {l}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {why.pillars.map((p, i) => (
            <div key={p.title}>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-stage text-gold">
                <Icon name={pillarIcons[i]} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 max-w-[34ch] leading-relaxed text-ink/75">{p.body}</p>
            </div>
          ))}
        </Reveal>

        <p className="mt-14 max-w-prose text-lg font-medium leading-relaxed text-ink">{why.closing}</p>
      </div>
    </section>
  );
}
