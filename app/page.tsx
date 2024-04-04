import Experience from "@/app/_components/experience";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import Hero from "@/app/_components/hero";
import Projects from "@/app/_components/projects";
import Skills from "@/app/_components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
