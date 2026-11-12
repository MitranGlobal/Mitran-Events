import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import CountdownBand from "@/components/sections/CountdownBand";
import Struggles from "@/components/sections/Struggles";
import Why from "@/components/sections/Why";
import Facilitator from "@/components/sections/Facilitator";
import Testimonials from "@/components/sections/Testimonials";
import Agenda from "@/components/sections/Agenda";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Nav />
      {/* Offset for the fixed gold strip + menu bar */}
      <main id="main" className="pt-[108px]">
        {/* Hero (from Parent Live Sessions) → countdown → recognition → why in person → facilitator → proof → agenda → seat → FAQ */}
        <Hero />
        <CountdownBand />
        <Struggles />
        <Why />
        <Facilitator />
        <Testimonials />
        <Agenda />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
