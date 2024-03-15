import React from "react";

const Projects = () => {
  return (
    <section className="h-dvh bg-background ">
      <div className="p-3 md:max-w-[85%] lg:max-w-[70%] m-auto h-dvh bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl"> My Projects</h1>
        </div>
        <div className="bg-background md:mt-28 flex flex-row gap-[2%]">
          <div className="border-2 w-[49%]">info</div>
          <div className="border-2 w-[49%]">pictures</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
