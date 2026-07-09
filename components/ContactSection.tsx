import { ExternalLink, FileText, Mail } from "lucide-react";
import { links } from "./site-data";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-[#181321] py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            I&apos;m always open to connecting with people in finance,
            investing, entrepreneurship, and related fields.
          </p>
        </div>
        <div className="rounded-lg border border-white/12 bg-white/[0.04] p-5">
          <div className="space-y-3">
            <a
              href={links.email}
              className="flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <Mail aria-hidden="true" size={18} />
              {links.emailLabel}
            </a>
            <a
              href={links.linkedin}
              className="flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <ExternalLink aria-hidden="true" size={18} />
              {links.linkedinLabel}
            </a>
            <a
              href={links.resume}
              className="flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <FileText aria-hidden="true" size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
