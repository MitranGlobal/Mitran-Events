import Price from "@/components/ui/Price";
import BenefitList from "@/components/ui/BenefitList";
import Reveal from "@/components/ui/Reveal";
import RegisterButton from "@/components/ui/RegisterButton";
import { event, pass, passGroups, pricing } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section bg-gold">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-title" className="section-title">
            {pricing.title}
          </h2>
          <p className="section-lead mx-auto text-ink/75">{pricing.lead}</p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-xl">
          <article aria-labelledby="pass-title" className="rounded-panel bg-white p-7 text-ink shadow-[0_40px_80px_-40px_rgba(8,9,12,0.45)] sm:p-10">
            <h3 id="pass-title" className="font-display text-display-md text-ink">
              {pass.name}
            </h3>
            <p className="mt-2 text-ink-soft">{pass.tagline}</p>
            <div className="mt-6">
              <Price price={pass.price} was={pass.was} note={pass.priceNote} tone="ink" />
            </div>
            <div className="h-8" aria-hidden="true" />
            <BenefitList groups={passGroups} tone="ink" />
            <RegisterButton variant="ink" className="mt-10 w-full" />
            <p className="mt-3 text-center text-sm text-ink-soft">{event.venueNote}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
