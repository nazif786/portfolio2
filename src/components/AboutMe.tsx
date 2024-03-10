import React from "react";
// border-solid border-2 border-orange-700 flex flex-row items-center justify-center

const AboutMe = () => {
  return (
    <section id="about">
      <div className="p-3 md:p-12 md:max-w-[75%] lg:w-[60%]  md:my-20 m-auto flex flex-col space-y-5 shadow-2xl">
        <div className="text-center">
          <h1 className="font-serif text-3xl ">About Me</h1>
          <p className="font-mono text-l">Why Choose Me?</p>
        </div>
        <p>
          With proficiency in the latest modern technologies like MERN stack,
          Redux, React, Node.js, GraphQL, and MongoDB, I can help your
          organization develop dynamic, responsive, and user-friendly web
          applications that are scalable and secure. My track record of
          delivering quality results on-time and within budget speaks to my
          commitment to excellence. Let me help you achieve your business
          objectives with my passion for staying up-to-date with the latest
          industry trends and technologies.
        </p>
        <div>
          <ul className="list-disc pl-5">
            <li> Fullstack Web Developement </li>
            <li> Interactive UIs </li>
            <li> React, ExpressJS, NodeJS, and NextJS </li>
            <li> Restfull APIs and Web APIs </li>
            <li> Data Driven Application, Data Science and Big Data </li>
            <li>
              Database Desgin and Development (MangoDB, MySQL, SQL Sever etc){" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
