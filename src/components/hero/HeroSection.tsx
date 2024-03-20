"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import image from "../../../public/profilephoto.jpg";
import { Button } from "../ui/button";
import SocialIcons from "./SocialIcons";

// border-solid border-2 border-orange-700 flex flex-row items-center justify-center
const HeroSection = () => {
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
            <Button variant="btn_h" size="btn">
              Resume
            </Button>
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
    </section>
  );
};

export default HeroSection;
