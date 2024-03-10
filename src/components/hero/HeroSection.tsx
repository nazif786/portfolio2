"use client";
import Image from "next/image";
import image from "../../../public/profilephoto.jpg";
import { Typewriter } from "react-simple-typewriter";
// border-solid border-2 border-orange-700
const HeroSection = () => {
  return (
    <div className="min-h-[85%] md:w-full flex flex-row items-center justify-center">
      <div className="md:w-[95%] flex flex-col md:flex-row md:items-center px-1 md:justify-between">
        <div className="order-last md:order-first md:w-[50%] text-center m-auto ">
          <p className="text-xl font-extrabold mb-1">
            Hello, I am <span className="text-primary">Nazifullah</span>
          </p>
          <p className="py-2 italic text-2xl font-bold">
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
        </div>
        <div className="mb-5 w-[60%] md:w-[28%] rounded-full shadow-[0px_1px_0px_0px] shadow-primary m-auto">
          <Image
            src={image}
            alt="portfolio image"
            className="rounded-full object-cover border-solid scale-95 hover:scale-100 ease-out duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
