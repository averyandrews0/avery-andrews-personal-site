import { ArrowUpRight } from "lucide-react";

type WritingCardProps = {
  title: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export function WritingCard({
  title,
  summary,
  href,
  linkLabel
}: WritingCardProps) {
  return (
    <article className="rounded-lg border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:border-lilac/35 hover:bg-segment/40">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-steel">{summary}</p>
      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-lilac hover:text-ink"
      >
        {linkLabel}
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </article>
  );
}
