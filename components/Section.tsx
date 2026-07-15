import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lilac">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-5xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-base leading-7 text-steel sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
