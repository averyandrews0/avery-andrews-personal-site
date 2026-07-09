import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  skills: string[];
  href: string;
  linkLabel: string;
};

export function ProjectCard({
  title,
  description,
  skills,
  href,
  linkLabel
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
      </div>
      <p className="mt-4 flex-1 leading-7 text-slate-700">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-line bg-paper px-3 py-1 text-xs font-semibold text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-md text-sm font-semibold text-navy transition hover:text-[#0D2742]"
      >
        {linkLabel}
        <ExternalLink aria-hidden="true" size={16} />
      </a>
    </article>
  );
}
