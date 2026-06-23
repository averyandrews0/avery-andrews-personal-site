import { ArrowRight, BriefcaseBusiness, FileText, Mail } from "lucide-react";
import { links } from "./site-data";

const highlights = [
  "Solon High School, Class of 2027",
  "Solon Investment Society Co-Founder",
  "Public markets and private investing"
];

export function Hero() {
  return (
    <section
      id="home"
      className="border-b border-line bg-white pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">
            Student investor | Builder | Athlete
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Avery Andrews
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-800">
            Finance-focused student interested in public markets, private
            equity, growth equity, venture capital, entrepreneurship, and urban
            development.
          </p>
          <p className="mt-4 text-base font-medium text-slate-600">
            Solon High School | Solon Investment Society Co-Founder
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.resume}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0D2742]"
            >
              <FileText aria-hidden="true" size={18} />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/25 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-slate-50"
            >
              <Mail aria-hidden="true" size={18} />
              Contact
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-steel hover:bg-slate-50"
            >
              <BriefcaseBusiness aria-hidden="true" size={18} />
              View Projects
            </a>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <div className="rounded-lg border border-line bg-paper p-5 shadow-card">
            <div className="aspect-[4/5] rounded-md border border-dashed border-steel/45 bg-white p-6">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                      Photo
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Replace this with a professional portrait.
                    </p>
                  </div>
                  <ArrowRight className="text-steel" aria-hidden="true" />
                </div>
                <div
                  className="mx-auto grid size-32 place-items-center rounded-full border border-line bg-paper text-4xl font-semibold text-navy"
                  role="img"
                  aria-label="Portrait placeholder for Avery Andrews"
                >
                  AA
                </div>
                <div className="space-y-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-line bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
