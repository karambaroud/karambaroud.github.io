import { content } from "@/lib/content";

export default function Experience() {
  return (
    <div className="space-y-12">
      {content.experience.map((job) => (
        <article
          key={`${job.company}-${job.start}`}
          className="relative border-l-2 border-edge pl-6 sm:pl-8"
        >
          <span
            aria-hidden="true"
            className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent-400"
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-xl font-bold text-ink">
              {job.role}
            </h3>
            <span className="text-accent-300">· {job.company}</span>
          </div>
          <p className="mt-1 text-sm text-faint">
            {job.start} – {job.end} · {job.location}
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed text-body">
            {job.summary}
          </p>
          <ul className="mt-4 max-w-3xl space-y-2.5">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-0.5 text-accent-400">
                  ▹
                </span>
                <span className="text-body">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-edge bg-surface px-2.5 py-0.5 text-xs text-faint"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
