"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import image from "../../../public/profilephoto.jpg";
import { Button } from "../ui/button";
import SocialIcons from "./SocialIcons";
import { FlowbiteFilePdfSolid } from "../ui/icons/FlowbiteFilePdfSolid";
import { BiFilePdf } from "../ui/icons/BiFilePdf";
import { SolarFileRightBoldDuotone } from "../ui/icons/SolarFileRightBoldDuotone";
import { SkillIconsNextjsDark } from "../ui/icons/skillsIcons/SkillIconsNextjsDark";
import { SkillIconsReactDark } from "../ui/icons/skillsIcons/SkillIconsReactDark";
import { SkillIconsExpressjsDark } from "../ui/icons/skillsIcons/SkillIconsExpressjsDark";
import { SkillIconsJavascript } from "../ui/icons/skillsIcons/SkillIconsJavascript";
import { SkillIconsNodejsDark } from "../ui/icons/skillsIcons/SkillIconsNodejsDark";
import { SkillIconsTypescript } from "../ui/icons/skillsIcons/SkillIconsTypescript";
import { SkillIconsCss } from "../ui/icons/skillsIcons/SkillIconsCss";
import { SkillIconsTailwindcssDark } from "../ui/icons/skillsIcons/SkillIconsTailwindcssDark";
import { SkillIconsPostgresqlDark } from "../ui/icons/skillsIcons/SkillIconsPostgresqlDark";
import { SkillIconsMysqlDark } from "../ui/icons/skillsIcons/SkillIconsMysqlDark";
import { SkillIconsMongodb } from "../ui/icons/skillsIcons/SkillIconsMongodb";
import { SkillIconsHtml } from "../ui/icons/skillsIcons/SkillIconsHtml";
import { SkillIconsRedisDark } from "../ui/icons/skillsIcons/SkillIconsRedisDark";
import { SimpleIconsDrizzle } from "../ui/icons/skillsIcons/SimpleIconsDrizzle";

// border-solid border-2 border-orange-700 flex flex-row items-center justify-center
const HeroSection = () => {
  const skills = [
    { skill: "NextJs", icon: <SkillIconsNextjsDark /> },
    { skill: "React", icon: <SkillIconsReactDark /> },
    { skill: "Ex.JS", icon: <SkillIconsExpressjsDark /> },
    { skill: "NodeJS", icon: <SkillIconsNodejsDark /> },
    { skill: "JS", icon: <SkillIconsJavascript /> },
    { skill: "TS", icon: <SkillIconsTypescript /> },
    { skill: "HTML", icon: <SkillIconsHtml /> },
    { skill: "CSS", icon: <SkillIconsCss /> },
    { skill: "Tailwind", icon: <SkillIconsTailwindcssDark /> },
    { skill: "Postgre", icon: <SkillIconsPostgresqlDark /> },
    { skill: "MySQL", icon: <SkillIconsMysqlDark /> },
    { skill: "MangoDB", icon: <SkillIconsMongodb /> },
    { skill: "Redis", icon: <SkillIconsRedisDark /> },
    { skill: "Drizzle", icon: <SimpleIconsDrizzle /> },
  ];
  return (
    <section className=" min-h-[85%] md:w-full mt-10 md:mt-20 relative">
      <div className="hidden md:block">
        <SocialIcons />
      </div>

      <div className="md:w-[95%] flex flex-col md:flex-row md:items-center px-1 md:justify-between">
        <div className="order-last md:order-first md:w-[50%] text-center m-auto ">
          <p className="text-xl font-extrabold mb-1">
            Hello, I am <span className="text-primary">Nazifullah</span>
          </p>
          <p className="py-2 italic text-2xl font-semibold font-serif">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Database Developer",
                "Datascience Engineer",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="text-l max-w-[70%] pr-3 border-solid m-auto">
            Crafting Data-Driven Web Applications: Seamlessly Integrating
            Front-end Interactivity with Robust Back-end Operations
          </p>
          <div className="flex space-x-3 justify-center my-5">
            <Link href="">
              <Button variant="btn" size="btn">
                Hire me
              </Button>
            </Link>
            {/* <Link href="/Nazifullah.pdf" target="_blank"> */}
            <Button variant="btn_h" size="btn">
              Resume <SolarFileRightBoldDuotone className="ml-4 text-2xl" />
            </Button>
            {/* </Link> */}
          </div>
        </div>
        <div className="mb-5 w-[60%] md:w-[28%] rounded-full shadow-[0px_1px_0px_0px] shadow-primary m-auto">
          <Image
            src={image}
            alt="portfolio image"
            className="rounded-full object-cover border-solid scale-95 hover:scale-100 ease-out duration-500"
          />
        </div> 
      </div>
      <div className="md:w-11/12 lg:w-9/12 mx-auto md:px-3 md:mt-7 flex flex-row space-x-0 md:space-x-3">
        <div className="hidden md:block">
          <h1 className="font-bold mt-3 text-sm">Tech Stack:</h1>
        </div>
        <div className="flex flex-row items-center justify-center md:space-x-4 text-center overflow-scroll lg:overflow-visible">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-2xl md:text-4xl opacity-50 hover:opacity-90 hover:translate-y-1 transition duration-300"
            >
              <div className="pl-1">{skill.icon}</div>
              <p className="hidden md:block text-xs">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
