"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
  number: string;
}

const items: AccordionItem[] = [
  { id: 1, number: "01", title: "XXXX XXXXX", description: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT." },
  { id: 2, number: "02", title: "XXXX XXXXX", description: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT." },
  { id: 3, number: "03", title: "XXXX XXXXX", description: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT." },
  { id: 4, number: "04", title: "XXXX XXXXX", description: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT." },
];

export default function HoverAccordion() {
  const [hovered, setHovered] = useState<number | null>(1);

  return (
    <div className="flex flex-col md:flex-row h-[600px] w-full gap-4">
      {items.map((item) => {
        const isHovered = hovered === item.id;
        
        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
            animate={{
              flex: isHovered ? 3 : 1,
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
            className={`relative overflow-hidden rounded-[2rem] border border-white/20 transition-colors duration-500 cursor-pointer ${
              isHovered ? "bg-white/30 backdrop-blur-3xl shadow-2xl" : "bg-white/10 backdrop-blur-xl"
            }`}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-8 h-full">
              <div className="flex flex-col h-full justify-between">
                <span className={`text-4xl font-light transition-colors duration-500 ${isHovered ? "text-[#eab308]" : "text-white/40"}`}>
                  {item.number}
                </span>
                
                <div className="flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2 whitespace-nowrap">
                    {item.title}
                  </h3>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? "auto" : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/80 mt-4 leading-relaxed min-w-[200px]">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
