"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  return (
    <div className="min-h-[600px] h-screen flex items-center justify-center">
      <div className="h-[90%] w-[95%] overflow-hidden">
        <motion.div
          ref={ref}
          style={{ y }}
          className="relative h-[125%] w-full"
        >
          <Image
            src="/fashion.jpg"
            alt=""
            fill
            priority={true}
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
