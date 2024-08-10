"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import woman1 from "../../public/woman1.jpg";
import woman2 from "../../public/woman2.jpg";

function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const clipRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"]
  );
  const clipLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 0% 0%)", "inset(0% 100% 0% 0%)"]
  );

  const top = useTransform(scrollYProgress, [0, 1], ["5%", "60%"]);
  const bottom = useTransform(scrollYProgress, [0, 1], ["5%", "50%"]);

  return (
    <div
      ref={ref}
      className="relative min-h-[600px] h-screen flex items-center justify-center w-[95%] mx-auto overflow-hidden"
    >
      <h1 className="text-5xl z-10 2xl:text-[4vw] mix-blend-difference bg-white">
        scroll
      </h1>
      <motion.div
        style={{ clipPath: clipRight, top }}
        className="absolute w-[200px] 2xl:w-[15vw] h-[300px] 2xl:h-[50vh] right-0 top-[5%] overflow-hidden"
      >
        <div className="relative h-full w-full">
          <Image
            src={woman1}
            alt=""
            fill
            priority={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </motion.div>
      <motion.div
        style={{ clipPath: clipLeft, bottom }}
        className="absolute w-[300px] 2xl:w-[22.5vw] h-[450px] 2xl:h-[75vh] left-0 bottom-[5%] overflow-hidden"
      >
        <div className="relative h-full w-full">
          <Image
            src={woman2}
            alt=""
            fill
            priority={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
