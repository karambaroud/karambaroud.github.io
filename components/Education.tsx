import { content } from "@/lib/content";

export default function Education() {
  const edu = content.education;
  return (
    <div className="rounded-xl border border-edge bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">
            {edu.school}
          </h3>
          <p className="mt-1 text-body">
            {edu.degree} · Class of {edu.graduation.split(" ").pop()}
          </p>
        </div>
        <p className="font-display text-lg font-bold text-accent-300">
          {edu.gpa} GPA
        </p>
      </div>
      <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {edu.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span aria-hidden="true" className="mt-0.5 text-accent-400">
              ▹
            </span>
            <span className="text-body">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
