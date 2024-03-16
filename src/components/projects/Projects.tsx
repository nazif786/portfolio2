import CreditSales from "./CreditSales";
import ProjectTracking from "./ProjectTracking";

const Projects = () => {
  return (
    <section className="bg-background ">
      <div className="p-3 md:max-w-[85%] lg:max-w-[70%] m-auto bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl"> My Projects</h1>
        </div>
        <div className="block md:flex md:flex-col gap-20">
          <CreditSales />
          <ProjectTracking />
        </div>
      </div>
    </section>
  );
};

export default Projects;
