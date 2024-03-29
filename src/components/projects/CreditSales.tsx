import Image from "next/image";
import { Button } from "../ui/button";
import sales from "../../../public/sales.png";
import Link from "next/link";
import { Badge } from "../ui/badge";

const CreditSales = () => {
  const tools = [
    "NextJS 14",
    "React 18",
    "Mysql 8",
    "NodeJS 20",
    "TypeScript",
    "Tailwind CSS",
    " Next UI",
    "NextAuth",
    "Drizzle",
    "React-hook-form",
    "Zod",
  ];
  return (
    <div className="bg-background md:mt-20">
      <h1 className="font-extrabold my-5 px-1 md:px-3 text-slate-600 dark:text-slate-500">
        Mobile Cridit Sales Management System
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
            This application is designed for businesses engaged in the sale of
            mobile credits to customers, managing customer data, sales,
            suppliers, and purchases, while tracking changes to sensitive
            information. It offers two user roles: Administrator and User.
            Administrators have full control, generating reports, monitoring
            data changes, and accessing detailed information. A main dashboard
            provides real-time updates on sales, customers, and business status.
          </p>
          <div>
            <span className="text-sm font-semibold text-muted-foreground">
              Tech Used:{" "}
            </span>
            {tools.map((tool) => (
              <Badge key={tool} className="mr-1" variant={"secondary"}>
                {tool}
              </Badge>
            ))}
          </div>

          <div className="my-3 flex gap-3">
            <Button
              variant="outline"
              className=" border-ring active:translate-x-2 "
            >
              Live Demo
            </Button>
            <Link
              href="https://github.com/nazif786/mobileCreditSalesSystem"
              target="_blank"
            >
              <Button variant="default">Github Code</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditSales;
