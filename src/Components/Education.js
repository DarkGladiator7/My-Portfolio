import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl text-dark mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Engineering In Computer Science and Engineering"
            time="2021-2025 "
            place="Sri Sairam Engineering College"
            info="Exploring the foundations and advancements of computer science, including programming, algorithms, data structures, software engineering, and more, to prepare for a dynamic career in the world of technology."
          />
          <Details
            type="Higher Secondary In Computer Science "
            time="2020-2021"
            place="Chinmaya Vidyalaya"
            info="Exploring the foundations and advancements of computer science, including programming, algorithms, data structures, software engineering, and more, to prepare for a dynamic career in the world of technology."
          />
          <Details
            type="Online Coursework"
            time="2020-2023"
            place="Coursera, EdX, Udemy, LinkedIn"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Image Processing, Deep Learning and Machine 
            Learning Engineering."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
