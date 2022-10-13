import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {}

export default function BackgroundCircles({}: Props): ReactElement {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.1, 0.6, 1.0],
        borderRadius: ["20%", "40%", "20%"],
      }}
      transition={{ duration: 2 }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-[#655c5c] rounded-full h-[250px] w-[250px] absolute mt-52 animate-ping" />
      <div className="border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}
