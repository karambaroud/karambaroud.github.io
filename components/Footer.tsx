import { content } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

export default function Footer() {
  const { meta } = content;
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {meta.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-faint transition-colors hover:text-accent-300"
          >
            <GitHubIcon />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-faint transition-colors hover:text-accent-300"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${meta.email}`}
            aria-label="Email"
            className="text-faint transition-colors hover:text-accent-300"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
