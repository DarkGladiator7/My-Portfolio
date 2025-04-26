import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/1222.png";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import bulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { motion } from "framer-motion";
import TransitionEffect from "@/Components/TransitionEffect";

export default function Home() {
  const FramerImage = motion(Image);
  return (
    <>
      <Head>
        <title>GaneshK&apos;s Portfolio</title>
        <meta
          name="GaneshK's - Portfolio"
          content="Dive into the captivating portfolio of GaneshK"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="profilepic"
                className="w-[85%] h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Passionate Deep Learning Enthusiast and Software Developer"
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:!text-3xl md:relative md:left-1.5"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs md:left-0.5 md:relative">
                Aspiring software developer with a strong foundation in
                programming and a passion for creating innovative solutions.
                Strong analytical and problem-solving skills, with a keen
                attention to detail. Able to work effectively in a team-oriented
                environment, collaborating with colleagues to deliver
                high-quality code.
              </p>
              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/GaneshK_CV1.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg md:p-2 md:px-4 md:text-base sm:text-sm
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Curriculum Vitae
                  <LinkArrow className={"w-5 ml-1 sm:!w-5"} />
                </Link>
                <Link
                  href="mailto:ganeshkrishnadoss@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base sm:text-[14.5px]   "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-5 bottom-3 inline-block w-24 md:hidden">
          <Link href="https://www.youtube.com/@darkglady007" target={"_blank"}>
            <FramerImage
              src={bulb}
              alt="DG7"
              whileHover={{ scale: 1.05, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full h-auto cursor-pointer "
            ></FramerImage>
          </Link>
        </div>
      </main>
    </>
  );
}
