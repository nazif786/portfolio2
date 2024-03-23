import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import creditSalesNode from "../../../public/creditSalesNode.png";
import { Badge } from "../ui/badge";

const CreditSalesNode = () => {
  const tools = [
    "HTML",
    "CSS",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "JavaScript",
    "Handlebars",
  ];
  return (
    <div className="bg-background md:mt-20">
      <h1 className="font-extrabold my-5 px-1 md:px-3 text-slate-600 dark:text-slate-500">
        Mobile Credit Sales and Purchase System using ExpressJS
      </h1>
      <div className="flex flex-col md:flex-row gap-[4%]">
        <div className="md:w-[60%] px-1 md:px-3">
          <Image
            width={650}
            height={650}
            sizes="360"
            src={creditSalesNode}
            alt={"Project Image"}
          />
        </div>
        <div className=" md:w-[36%] px-1 md:px-3">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 py-2">
            it is a project that is renewd using NextJS (first project listed
            here). it uses basic JavaScript and ExpressJS. it is fully functinal
            with all the features.
          </p>
          <p className="bold">
            Tech Used:
            {tools.map((tool) => (
              <Badge key={tool} className="mr-1" variant={"secondary"}>
                {tool}
              </Badge>
            ))}
          </p>
          <div className="my-3 flex gap-3">
            <Button
              variant="outline"
              className=" border-ring active:translate-x-2"
            >
              Live Demo
            </Button>
            <Link
              href="https://github.com/nazif786/CreditSalesExpressJS"
              target="_blank"
            >
              <Button variant="default">Github Code</Button>
            </Link>
          </div>
          <p>
            <span className="font-bold">Demo user credentials:</span> <br />
            username: test1234 <br /> password: Test@1234
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditSalesNode;
