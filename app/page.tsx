import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Section id="projects" kicker="01 — Work" title="Projects">
        <Projects />
      </Section>
      <Section id="experience" kicker="02 — Career" title="Experience">
        <Experience />
      </Section>
      <Section id="education" kicker="03 — Background" title="Education">
        <Education />
      </Section>
      <Section id="skills" kicker="04 — Toolbox" title="Skills">
        <Skills />
      </Section>
    </>
  );
}
