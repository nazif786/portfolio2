import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-32">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
