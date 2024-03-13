"use client";
import { useState } from "react";
import { SkillsData } from "@/app/skillsData";
import Image from "next/image";

interface Data {
  count: number;
  title: string;
  icon?: any;
  skills: string[];
}

const Skills = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [isFadded, setIsFadded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skillData, setSkillData] = useState<Data>(SkillsData[0]);

  const myfunction = (data: Data) => {
    setFlipped(false);
    setIsFadded(false);
    setSkillData(data);
  };

  const handleCardClick = (data: Data, index: number) => {
    setFlipped(true);
    setIsFadded(true);
    setCurrentIndex(index);

    setTimeout(() => myfunction(data), 600);
  };

  const handleNext = () => {
    if (currentIndex < 5) {
      handleCardClick(SkillsData[currentIndex + 1], currentIndex + 1);
    } else {
      handleCardClick(SkillsData[0], 0);
    }
  };
  const handlePrevious = () => {
    if (currentIndex !== 0) {
      handleCardClick(SkillsData[currentIndex - 1], currentIndex - 1);
    } else {
      handleCardClick(SkillsData[5], 5);
    }
  };

  return (
    <section>
      <div className="p-3 md:max-w-[85%] m-auto h-dvh bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl"> My Skills</h1>
        </div>
        <div className="bg-background md:mt-28">
          <section className="flex flex-col m-auto sm:flex-row my-12 ">
            <div className="sm:flex w-full sm:w-1/2 md:w-6/12">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-5 mr-0 md:mr-7">
                {SkillsData.map((skill, index) => (
                  <a
                    key={index}
                    onClick={() => handleCardClick(skill, index)}
                    className={`dark:bg-foreground/80 dark:text-background dark:shadow-primary relative 
                    text-[12px] md:text-[16px] md:font-lightbold shadow-sm md:shadow-md
                    shadow-destructive/30 cursor-pointer
                    transition-all transform p-2 md:p-5 duration-300
                    group rounded-xl center flex flex-col justify-center items-center
                    ${
                      currentIndex === index
                        ? "bg-primary/90 text-foreground dark:bg-primary/90 dark:text-foreground "
                        : ""
                    }`}
                  >
                    <div className="hidden md:block md:p-3 transition-all transform duration-500 group-hover:scale-125">
                      <Image
                        src={skill.icon}
                        height={48}
                        width={48}
                        sizes="48"
                        alt="icons"
                      />
                    </div>
                    <h3
                      className={`text-center group-hover:text-foreground/70 dark:group-hover:text-background/70 
                     ${currentIndex === index ? "" : ""}`}
                    >
                      {skill.title}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 overflow-visible my-5 md:m-0">
              <div className="rounded-xl bg-accent p-3 md:p-5">
                <section
                  className={`fade-left overflow-hidden ${isFadded ? "fade-out" : ""}`}
                >
                  <p
                    className={`font-bold text-foreground/50 text-base md:text-lg transition duration-500 transform opacity-100 `}
                  >
                    Skills Info:
                  </p>
                  <h3 className="text-xl md:text-2xl mb-3 transition duration-500 transform opacity-100">
                    {skillData.title}
                  </h3>
                  <ul className="list-disc ml-7 text-base md:text-xl p-y2 ">
                    {skillData.skills.map((skill, index) => (
                      <li key={index} className="py-[2px]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
