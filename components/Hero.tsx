import { ArrowRight, BriefcaseBusiness, FileText, Mail } from "lucide-react";
import { links } from "./site-data";
import AetherFlowHero from "./ui/aether-flow-hero";
import BlurTextAnimation from "./ui/blur-text-animation";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden border-b border-white/10 bg-void py-20 sm:py-24"
    >
      <AetherFlowHero className="opacity-100" />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-lilac/25 bg-lilac/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-lilac">
            Student investor | Builder | Athlete
          </p>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-bold leading-[1.02] text-white sm:text-7xl lg:text-8xl">
            Avery Andrews
          </h1>
          <BlurTextAnimation
            text="Finance-focused student interested in public markets, private equity, growth equity, venture capital, entrepreneurship, and urban development."
            className="mt-7 max-w-3xl"
            fontSize="text-xl sm:text-2xl"
            fontFamily="font-sans"
            textColor="text-slate-100"
            repeat={false}
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-lilac px-5 py-3 text-sm font-semibold text-void transition hover:bg-[#d2c2ff]"
            >
              <FileText aria-hidden="true" size={18} />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail aria-hidden="true" size={18} />
              Contact
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <BriefcaseBusiness aria-hidden="true" size={18} />
              View Projects
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
