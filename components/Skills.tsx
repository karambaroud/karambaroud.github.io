import { content } from "@/lib/content";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {content.skills.map((group) => (
        <div
          key={group.category}
          className="rounded-xl border border-edge bg-surface p-5"
        >
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent-300">
            {group.category}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-raised px-2.5 py-1 text-sm text-body"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
