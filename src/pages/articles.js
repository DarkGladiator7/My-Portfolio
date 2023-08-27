import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import TransitionEffect from "@/Components/TransitionEffect";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>Ganesh K | Arictles Page</title>
        <meta name="Articles" content="Explore my Articles" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Yet To Publish :)"
          />
        </Layout>
      </main>
    </>
  );
};

export default articles;
