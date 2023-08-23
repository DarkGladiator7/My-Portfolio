import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>Ganesh K | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="Yet To Publish :)" />
        </Layout>
      </main>
    </>
  );
};

export default articles;
