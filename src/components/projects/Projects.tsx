import CreditSales from "./CreditSales";
import CreditSalesNode from "./CreditSalesNode";
import Games from "./Games";
import ProjectTracking from "./ProjectTracking";
import ShamsMedex from "./ShamsMedex";

const Projects = () => {
  return (
    <section id="projects" className="bg-background ">
      <div className="p-3 md:max-w-[85%] lg:max-w-[70%] m-auto bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl"> My Projects</h1>
        </div>
        <div className="block md:flex md:flex-col gap-20">
          <CreditSales />
          <ProjectTracking />
          <ShamsMedex />
          <Games />
          <CreditSalesNode />
        </div>
      </div>
    </section>
  );
};

export default Projects;
