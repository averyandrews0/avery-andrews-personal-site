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
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{summary}</p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-navy hover:text-[#0D2742]"
      >
        {linkLabel}
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </article>
  );
}
