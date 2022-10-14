import React, { ReactElement } from "react";
import { motion } from 'framer-motion';
import ExpCard from "./ExpCard";

interface Props {}

function Experience({}: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-10 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>

      <div className="w-full h-[88vh] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
      </div>
    </motion.div>
  );
}

export default Experience;
