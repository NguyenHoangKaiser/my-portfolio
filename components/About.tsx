import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import Image from "next/image";
import avatar from "../public/avatar.jpg";

interface Props {}

function About({}: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-14 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:h-95 relative -mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
        src="https://picsum.photos/200/300"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum qui
          facilis soluta quod repudiandae dolorem eligendi corrupti, ex aliquid
          perspiciatis error veniam asperiores cum eos quasi ullam atque
          exercitationem officia odio, nostrum sed amet voluptate. Commodi
          corporis sint fugiat amet, sunt, et architecto quos quod
          necessitatibus maiores nostrum, saepe porro.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
