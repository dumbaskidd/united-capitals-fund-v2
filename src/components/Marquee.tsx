"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Marquee({ children }: { children: ReactNode }) {
  return (
    <motion.div 
      className="flex w-max items-center gap-20 pr-20 md:gap-32 md:pr-32"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ ease: "linear", duration: 35, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
