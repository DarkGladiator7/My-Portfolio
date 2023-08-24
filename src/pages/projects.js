import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion'
import project1 from "../../public/images/projects/ExpenseTracker.png";
import project2 from "../../public/images/projects/Ecommerce.png";
import project3 from "../../public/images/projects/library.jpg";
import project4 from "../../public/images/projects/portfolio.png";
import project5 from "../../public/images/projects/gastro.jpg";
import project6 from "../../public/images/projects/food.png";

const FramerImage= motion(Image);

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
       rounded-br-3xl "
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"

        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
         />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2 "
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold hover:underline underline-offset-2"
          >
            Visit
          </Link>
          <Link href={github} className="w-8" target={"_blank"}>
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl p-12 border border-solid relative border-dark bg-light shadow-2xl">
      <div
        className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
       rounded-br-3xl"
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}} />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2 "
          href={link}
          target={"_blank"}
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} className="w-10" target={"_blank"}>
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Ganesh K | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16"
            text="Imagination Trumps Knowledge!"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="Modern E-commerce Website "
                summary="Developed a modern E-commerce website utilizing React JS, Tailwind CSS, and
                Firebase as the database. Implemented a sleek and intuitive user interface to
                enhance the online shopping experience, enabling seamless product browsing,
                secure transactions."
                link="https://ecommerce-website-hazel-three.vercel.app"
                type="Featured Project"
                github="https://github.com/DarkGladiator7/Ecommerce_Website"
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project2}
                title="Simple Expense Tracker "
                link="https://expense-tracker-alpha-ten.vercel.app"
                type="Project"
                github="https://github.com/DarkGladiator7/Expense_Tracker"
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project3}
                title="Library Management System"
                link="https://github.com/DarkGladiator7/MagLibraryManagement"
                type="Project"
                github="https://github.com/DarkGladiator7/MagLibraryManagement"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                img={project4}
                title="My Portfolio Website"
                summary="Crafted with Next.js for seamless navigation, Tailwind CSS for stunning aesthetics, and Framer Motion for captivating animations, this site embodies the fusion of cutting-edge technology and design finesse. Explore a collection of my projects that exemplify innovation and dedication, as I strive to transform ideas into immersive digital experiences."
                link="https://ecommerce-website-hazel-three.vercel.app"
                type="Featured Project"
                github="https://github.com/DarkGladiator7/Ecommerce_Website"
              />
            </div>
            <div className="col-span-6 ">
              <Project
                img={project5}
                title="Detection of Gastrointestinal Diseases"
                link="https://github.com/DarkGladiator7/gastrointestinaldiseaseprediction"
                type="Project"
                github="https://github.com/DarkGladiator7/gastrointestinaldiseaseprediction"
              />
            </div>
            <div className="col-span-6 ">
              <Project
                img={project6}
                title="Simple Food Order App "
                link="https://food-order-page.vercel.app"
                type="Project"
                github="https://github.com/DarkGladiator7/FoodOrderPage"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
