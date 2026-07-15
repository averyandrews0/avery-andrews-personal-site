import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  skills: string[];
  href: string;
  linkLabel: string;
  newTab?: boolean;
};

export function ProjectCard({
  title,
  description,
  skills,
  href,
  linkLabel,
  newTab = true
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:border-lilac/35 hover:bg-segment/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
      </div>
      <p className="mt-4 flex-1 leading-7 text-steel">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-line bg-segment/60 px-3 py-1 text-xs font-semibold text-steel"
          >
            {skill}
          </span>
        ))}
      </div>
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-md text-sm font-semibold text-lilac transition hover:text-ink"
      >
        {linkLabel}
        <ExternalLink aria-hidden="true" size={16} />
      </a>
    </article>
  );
}
