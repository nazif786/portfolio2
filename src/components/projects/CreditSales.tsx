import Image from "next/image";
import { Button } from "../ui/button";
import sales from "../../../public/sales.png";

const CreditSales = () => {
  return (
    <div className="bg-background md:mt-20">
      <h1 className="font-extrabold my-5 px-1 md:px-3 text-slate-600 dark:text-slate-500">
        Mobile Cridit Sales Management System
      </h1>
      <div className="flex flex-row gap-[4%]">
        <div className=" w-[60%]  px-1 md:px-3">
          <Image
            width={650}
            height={650}
            sizes="360"
            src={sales}
            alt={"Project Image"}
          />
        </div>
        <div className=" w-[36%] px-1 md:px-3">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
            This application is designed for businesses engaged in the sale of
            mobile credits to customers, managing customer data, sales,
            suppliers, and purchases, while tracking changes to sensitive
            information. It offers two user roles: Administrator and User.
            Administrators have full control, generating reports, monitoring
            data changes, and accessing detailed information. A main dashboard
            provides real-time updates on sales, customers, and business status.
          </p>
          <p className="bold ">
            Tech Used:{" "}
            <span className="text-slate-600 dark:text-slate-400 text-sm ">
              NextJS 14, React 18, Mysql 8, NodeJS 20, TypeScript, Tailwind
              CSS,Next UI, NextAuth, Drizzle, React-hook-form, and Zod
            </span>
          </p>
          <div className="my-3 flex gap-3">
            <Button
              variant="outline"
              className=" border-ring active:translate-x-2 "
            >
              Live Demo
            </Button>
            <Button variant="default">Github Code</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditSales;
