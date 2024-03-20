import Image from "next/image";
import { Button } from "../ui/button";
import sales from "../../../public/sales.png";
import Link from "next/link";

const ProjectTracking = () => {
  return (
    <div className="bg-background mt-20">
      <h1 className="font-extrabold my-5 px-1 md:px-3 text-slate-600 dark:text-slate-500">
        Project Issues Tracking System
      </h1>
      <div className="flex flex-col md:flex-row md:gap-[4%] ">
        <div className="md:w-[36%] px-1 md:px-3 order-last md:order-1">
          <p className="text-slate-600 dark:text-slate-500 text-sm mb-3 py-2">
            This application is designed to track issued in projects, each issue
            has three status open, in progress and closed. It proviced to types
            of users, Admin and common user, while admin can assign and keep
            track of issues. it can further delete and edit issues while user
            can only add new issues. it has a dashboard that provides basic
            statistics of the issues.
          </p>
          <p className="bold">
            Tech Used:{" "}
            <span className="text-slate-600 dark:text-slate-400 text-sm">
              NextJS 14, React 18, Mysql 8, NodeJS 20, TypeScript, Tailwind
              CSS,Radix UI, NextAuth, Prisma, React-hook-form, and Zod
            </span>
          </p>
          <div className="my-3 flex gap-3">
            <Button variant="outline" className=" border-ring">
              Live Demo
            </Button>
            <Link href="https://github.com/nazif786/Issues_Tracker">
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

export default ProjectTracking;
