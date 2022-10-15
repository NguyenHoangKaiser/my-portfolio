/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import avatar2 from "../public/avatar2.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f70ac8]/80">
      <Head>
        <title>Hoang's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section className="snap-center" id="experience">
        <Experience />
      </section>

      <section className="snap-center" id="skills">
        <Skills />
      </section>

      <section className="snap-center" id="projects">
        <Projects />
      </section>

      <section className="snap-center" id="contact">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={avatar2}
              width={40}
              height={40}
              className="cursor-pointer rounded-full grayscale filter hover:grayscale-0"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
