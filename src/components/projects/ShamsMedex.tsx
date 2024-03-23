import Image from "next/image";
import { Button } from "../ui/button";
import sales from "../../../public/sales.png";
import Link from "next/link";

const ShamsMedex = () => {
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
            src={sales}
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
            <span className="text-slate-600 dark:text-slate-400 text-sm ">
              HTML, CSS, NodeJS, ExpressJS, JavaScript, and Handlebars
            </span>
          </p>
          <div className="my-3 flex gap-3">
            <Button
              variant="outline"
              className=" border-ring active:translate-x-2 "
            >
              Live Demo
            </Button>
            <Link href="https://github.com/nazif786/ShamsMedex">
              <Button variant="default">Github Code</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShamsMedex;