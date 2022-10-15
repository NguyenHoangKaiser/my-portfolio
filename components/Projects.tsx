import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {}

function Projects({}: Props): ReactElement {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="md:flow-row relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left"
    >
      <h3 className="absolute top-10 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f70ac8]/80">
        {projects.map((_project, index) => (
          <div
            key={index}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.img
              initial={{
                x: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={"https://picsum.photos/550/400"}
              alt="placeholder"
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#f7ab0a]/50">
                  Study projects {index + 1} of {projects.length}:
                </span>{" "}
                Portfolio
              </h4>

              <p className="text-center text-lg md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                corrupti ipsam eveniet laudantium repellendus, veritatis
                consequuntur, optio hic repellat quasi reiciendis. Recusandae
                iure, aperiam consectetur repellat voluptates consequuntur omnis
                cumque.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#f7ab0a]/10" />
    </motion.div>
  );
}

export default Projects;
