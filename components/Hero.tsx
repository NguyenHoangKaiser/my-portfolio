import React, { ReactElement } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import avatar2 from "../public/avatar2.png";

interface Props {}

function Hero({}: Props): ReactElement {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name Is Nguyen Huy Hoang",
      "Coding-is-hard.tsx",
      "<ButLifeIsHarder />",
    ],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="relative mx-auto rounded-full object-cover"
        priority
        src={avatar2}
        height={150}
        width={150}
        alt="avatar placeholder"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F0f" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
