import Image from "next/image";
import { content } from "@/lib/content";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
} from "@/components/Icons";

export default function Hero() {
  const { meta, hero } = content;
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft dusk glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl"
      />
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-24 md:flex-row md:items-center md:justify-between md:pb-24">
        <div className="max-w-2xl">
          <p className="font-display text-base font-medium text-accent-300">
            {hero.greeting}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
            {meta.name}
          </h1>
          <p className="mt-4 text-xl font-medium leading-snug text-ink/90 sm:text-2xl">
            {meta.tagline}
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-body">
            {hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={meta.resumePdf}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-400 active:bg-accent-600"
            >
              <DownloadIcon />
              Download Resume
            </a>
            <div className="flex items-center gap-4">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-edge p-2.5 text-body transition-colors hover:border-accent-500/60 hover:text-accent-300"
              >
                <GitHubIcon />
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-edge p-2.5 text-body transition-colors hover:border-accent-500/60 hover:text-accent-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${meta.email}`}
                aria-label={`Email ${meta.email}`}
                className="rounded-lg border border-edge p-2.5 text-body transition-colors hover:border-accent-500/60 hover:text-accent-300"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="shrink-0 self-center md:self-auto">
          <Image
            src={meta.headshot}
            alt={`Portrait of ${meta.name}`}
            width={256}
            height={256}
            priority
            className="h-44 w-44 rounded-2xl object-cover ring-2 ring-accent-500/40 sm:h-52 sm:w-52 md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
