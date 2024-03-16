import AboutMe from "@/components/AboutMe";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-32">
      <AboutMe />
      <Skills />
      <Projects />
      <h1 className="border-2"> portfolio </h1>
    </div>
  );
}
