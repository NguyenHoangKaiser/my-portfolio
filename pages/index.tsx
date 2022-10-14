/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Hoang's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section className="snap-center" id="experience">
        <Experience />
      </section>

      {/* Skill */}
      <section className="snap-center" id="skills">
        <Skills/>
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  );
};

export default Home;
