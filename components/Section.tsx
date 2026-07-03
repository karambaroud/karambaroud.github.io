type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, kicker, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent-400">
        {kicker}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
