import { ExternalLink, FileText, Mail } from "lucide-react";
import { links } from "./site-data";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-contact py-16 text-ink sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lilac">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-steel sm:text-lg">
            I&apos;m always open to connecting with people in finance,
            investing, entrepreneurship, and related fields.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-paper/60 p-5">
          <div className="space-y-3">
            <a
              href={links.email}
              className="flex items-center gap-3 rounded-md border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink transition hover:bg-segment"
            >
              <Mail aria-hidden="true" size={18} />
              {links.emailLabel}
            </a>
            <a
              href={links.linkedin}
              className="flex items-center gap-3 rounded-md border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink transition hover:bg-segment"
            >
              <ExternalLink aria-hidden="true" size={18} />
              {links.linkedinLabel}
            </a>
            <a
              href={links.resume}
              className="flex items-center gap-3 rounded-md border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink transition hover:bg-segment"
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
