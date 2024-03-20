import Image from "next/image";
import { Button } from "../ui/button";
import sales from "../../../public/sales.png";
import Link from "next/link";

const Games = () => {
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
            <span className="text-slate-600 dark:text-slate-400 text-sm">
              React 18, NodeJS, TypeScript, CSS, Chakra UI, Axios, React-query,
              Zustand, and Vite.
            </span>
          </p>
          <div className="my-3 flex gap-3">
            <Link href="https://loobay.vercel.app/">
              <Button variant="outline" className=" border-ring">
                Live Demo
              </Button>
            </Link>
            <Link href="https://github.com/nazif786/gamingApp">
              <Button variant="default">Github Code</Button>
            </Link>
          </div>
        </div>{" "}
        <div className="md:w-[60%]  px-1 md:px-3 order-1 md:order-last">
          <Image
            width={650}
            height={650}
            sizes="360"
            src={sales}
            alt={"Project Image"}
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
