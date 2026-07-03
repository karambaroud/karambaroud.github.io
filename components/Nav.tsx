import { content } from "@/lib/content";
import { DownloadIcon } from "@/components/Icons";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const { meta } = content;
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-base/85 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold text-ink transition-colors hover:text-accent-300"
        >
          KB<span className="text-accent-400">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body transition-colors hover:text-accent-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={meta.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-accent-500/50 px-3.5 py-1.5 text-sm font-medium text-accent-300 transition-colors hover:border-accent-400 hover:bg-accent-500/10"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
