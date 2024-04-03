import Experience from "@/app/_components/experience";
import Hero from "@/app/_components/hero";
import Projects from "@/app/_components/projects";
import Skills from "@/app/_components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
