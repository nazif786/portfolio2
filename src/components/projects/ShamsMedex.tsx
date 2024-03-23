import Image from "next/image";
import { Button } from "../ui/button";
import shamsMedex from "../../../public/shamsMedex.png";
import Link from "next/link";
import { Badge } from "../ui/badge";

const ShamsMedex = () => {
  const tools = [
    "HTML",
    "CSS",
    "NodeJS",
    "ExpressJS",
    "JavaScript",
    "Handlebars",
  ];
  return (
    <div className="bg-background md:mt-20">
      <h1 className="font-extrabold my-5 px-1 md:px-3 text-slate-600 dark:text-slate-500">
        Shams Medex Website
      </h1>
      <div className="flex flex-col md:flex-row gap-[4%]">
        <div className="md:w-[60%] px-1 md:px-3">
          <Image
            width={650}
            height={650}
            sizes="360"
            src={shamsMedex}
            alt={"Project Image"}
          />
        </div>
        <div className=" md:w-[36%] px-1 md:px-3">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 py-2">
            Shams Medix, Inc. exists to provide support and guidance throughout
            the medical management process. it is a website for Shams Medical
            Equipment incorpoation that provides information about their producs
            and services.
          </p>
          <p className="bold ">
            Tech Used:{" "}
            {tools.map((tool) => (
              <Badge key={tool} className="mr-1" variant={"secondary"}>
                {tool}
              </Badge>
            ))}
          </p>
          <div className="my-3 flex gap-3">
            <Button
              variant="outline"
              className=" border-ring active:translate-x-2 "
            >
              Live Demo
            </Button>
            <Link href="https://github.com/nazif786/ShamsMedex" target="_blank">
              <Button variant="default">Github Code</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShamsMedex;
