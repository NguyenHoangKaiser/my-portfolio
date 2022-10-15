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
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 h-[250px] w-[250px] animate-ping rounded-full border border-[#e9f504]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-[#f70ac8] opacity-20" />
    </motion.div>
  );
}
