type ExperienceCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  details?: string[];
};

export function ExperienceCard({
  title,
  eyebrow,
  description,
  details = []
}: ExperienceCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
      <p className="text-sm font-semibold text-moss">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
      {details.length ? (
        <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
          {details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-steel" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
