import raw from "@/data/content.json";

/**
 * Typed content layer. All site content lives in /data/content.json —
 * add a project, job, or skill there and the site updates. Components
 * never hardcode content; they map over these types.
 */

export type Meta = {
  name: string;
  tagline: string;
  description: string;
  siteUrl: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  location: string;
  headshot: string;
};

export type Hero = {
  greeting: string;
  intro: string;
};

export type ImpactStat = {
  stat: string;
  label: string;
  context?: string;
};

export type ProjectTag =
  | "ML"
  | "Embedded"
  | "Full-Stack"
  | "Computer Vision"
  | "Game Dev";

export type Project = {
  title: string;
  description: string;
  tags: ProjectTag[];
  tech: string[];
  links: {
    github?: string;
    live?: string;
    /** A page about the project (e.g. sponsor's site) when no repo/live app can be linked. */
    page?: string;
  };
  /** Path under /public, e.g. "/projects/asset-tracker.png". null = placeholder. */
  image: string | null;
  year: string;
  note?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export type Education = {
  school: string;
  degree: string;
  graduation: string;
  gpa: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectsNote = {
  text: string;
  linkLabel: string;
  url: string;
};

export type Content = {
  meta: Meta;
  hero: Hero;
  impact: ImpactStat[];
  projects: Project[];
  /** Optional footnote under the projects grid (e.g. link to a bonus project). */
  projectsNote?: ProjectsNote;
  experience: Experience[];
  education: Education;
  skills: SkillGroup[];
};

export const content = raw as Content;
