"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  });

  const display = useTransform(motionValue, (current) => 
    `${prefix}${Math.floor(current)}${suffix}`
  );

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
