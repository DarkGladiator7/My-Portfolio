import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full absolute font-semibold cursor-pointer py-3 px-6 bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y , transition:{ duration: 1.5 }}}
      
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 pb-4 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold cursor-pointer bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name="Python" x="37vw" y="-11vw" />
        <Skill name="SQL" x="17vw" y="-15vw" />
        <Skill name="Deep Learning" x="30vw" y="-5vw" />
        <Skill name="Machine Learning" x="19vw" y="5vw" />
        <Skill name="Numpy" x="20vw" y="14vw" />
        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="CSS" x="-7vw" y="-11vw" />
        <Skill name="Photoshop" x="-5vw" y="23vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-14vw" />
        <Skill name="Web Design" x="-40vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="-7vw" y="-11vw" />
      </div>
    </>
  );
};

export default Skills;
