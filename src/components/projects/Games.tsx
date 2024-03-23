import Image from "next/image";
import { Button } from "../ui/button";
import gamingApp from "../../../public/gamingApp.png";
import Link from "next/link";
import { Badge } from "../ui/badge";

const Games = () => {
  const tools = [
    "React 18",
    "NodeJS",
    "TypeScript",
    "CSS",
    "Chakra UI",
    "Axios",
    "React-query",
    "Zustand",
    "Vite",
  ];
  return (
    <div className="bg-background mt-20">
      <h1 className="font-extrabold my-5 px-1 md:px-3 text-slate-600 dark:text-slate-500">
        Games Website
      </h1>
      <div className="flex flex-col md:flex-row md:gap-[4%] ">
        <div className="md:w-[36%] px-1 md:px-3 order-last md:order-1">
          <p className="text-slate-600 dark:text-slate-500 text-sm mb-3 py-2">
            This application provides information about games. It consumes
            webAPI. it has search capabilites along with ordering by various
            variables that can be filtered for different platforms.
          </p>
          <p className="bold">
            Tech Used:{" "}
            {tools.map((tool) => (
              <Badge key={tool} className="mr-1" variant={"secondary"}>
                {tool}
              </Badge>
            ))}
          </p>
          <div className="my-3 flex gap-3">
            <Link href="https://loobay.vercel.app/" target="_blank">
              <Button variant="outline" className=" border-ring">
                Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/nazif786/gamingApp" target="_blank">
              <Button variant="default">Github Code</Button>
            </Link>
          </div>
        </div>{" "}
        <div className="md:w-[60%]  px-1 md:px-3 order-1 md:order-last">
          <Image
            width={650}
            height={650}
            sizes="360"
            src={gamingApp}
            alt={"Project Image"}
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
