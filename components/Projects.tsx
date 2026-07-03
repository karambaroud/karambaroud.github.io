"use client";

import { useState } from "react";
import Image from "next/image";
import { content, type ProjectTag } from "@/lib/content";
import { GitHubIcon, ExternalLinkIcon } from "@/components/Icons";

export default function Projects() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All");

  const allTags = Array.from(
    new Set(content.projects.flatMap((p) => p.tags))
  ) as ProjectTag[];

  const visible =
    activeTag === "All"
      ? content.projects
      : content.projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by domain"
      >
        {(["All", ...allTags] as const).map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeTag === tag
                ? "bg-accent-500 text-white"
                : "border border-edge bg-surface text-body hover:border-accent-500/60 hover:text-accent-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-edge bg-surface transition-colors hover:border-accent-500/40"
          >
            {/* Thumbnail — real screenshot if provided in content.json, styled placeholder otherwise */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-edge bg-raised">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-raised via-surface to-accent-600/20">
                  <span className="select-none font-display text-5xl font-bold text-accent-500/30">
                    {project.title
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-ink">
                  {project.title}
                </h3>
                <span className="mt-1 shrink-0 text-sm text-faint">
                  {project.year}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-500/15 px-2.5 py-0.5 text-xs font-medium text-accent-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-faint">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm font-medium">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-300 transition-colors hover:text-accent-200"
                  >
                    <ExternalLinkIcon />
                    Live
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-300 transition-colors hover:text-accent-200"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.links.page && (
                  <a
                    href={project.links.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-300 transition-colors hover:text-accent-200"
                  >
                    <ExternalLinkIcon />
                    Project Page
                  </a>
                )}
                {!project.links.live &&
                  !project.links.github &&
                  !project.links.page &&
                  project.note && (
                    <span className="text-xs text-faint">{project.note}</span>
                  )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {content.projectsNote && (
        <p className="mt-8 text-sm text-faint">
          {content.projectsNote.text}{" "}
          <a
            href={content.projectsNote.url}
            className="font-medium text-accent-300 transition-colors hover:text-accent-200"
          >
            {content.projectsNote.linkLabel} →
          </a>
        </p>
      )}
    </div>
  );
}
