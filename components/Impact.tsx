import { content } from "@/lib/content";

export default function Impact() {
  return (
    <section
      id="impact"
      aria-label="Quantified impact"
      className="mx-auto max-w-5xl px-5 sm:px-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.impact.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-edge bg-surface p-5"
          >
            <p className="font-display text-3xl font-bold text-accent-300">
              {item.stat}
            </p>
            <p className="mt-1 font-medium text-ink">{item.label}</p>
            {item.context && (
              <p className="mt-2 text-sm leading-relaxed text-faint">
                {item.context}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
