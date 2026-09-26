"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const data = [
  { id: "liquido", label: "Líquido", value: 25, color: "#eab308" }, // yellow
  { id: "acciones", label: "Acciones", value: 35, color: "#72563f" }, // mustard/brown
  { id: "crypto", label: "Crypto", value: 5, color: "#38404b" }, // dark blue
  { id: "opciones", label: "Opciones", value: 10, color: "#9ca3af" }, // gray
  { id: "etfs", label: "ETF's", value: 15, color: "#f3f4f6" }, // light gray/white
  { id: "futuros", label: "Futuros", value: 10, color: "#aa8362" }, // light brown
];

export default function AllocationChart() {
  const [hovered, setHovered] = useState<string | null>("liquido");

  useEffect(() => {
    const interval = setInterval(() => {
      setHovered((prev) => {
        if (!prev) return data[0].id;
        const currentIndex = data.findIndex(d => d.id === prev);
        const nextIndex = (currentIndex + 1) % data.length;
        return data[nextIndex].id;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Calculate SVG arc paths
  const createArc = (startAngle: number, endAngle: number, isHovered: boolean) => {
    const radius = isHovered ? 160 : 150;
    const innerRadius = 90;
    const centerX = 200;
    const centerY = 200;

    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const x3 = centerX + innerRadius * Math.cos(endRad);
    const y3 = centerY + innerRadius * Math.sin(endRad);
    const x4 = centerX + innerRadius * Math.cos(startRad);
    const y4 = centerY + innerRadius * Math.sin(startRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  let currentAngle = 0;
  const paths = data.map((item) => {
    const angle = (item.value / 100) * 360;
    const start = currentAngle;
    const end = currentAngle + angle;
    currentAngle += angle;
    return { ...item, start, end };
  });

  const activeItem = data.find((d) => d.id === hovered) || null;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl mx-auto">
      {/* SVG Donut Chart */}
      <div className="relative w-[400px] h-[400px]">
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
          {paths.map((p) => {
            const isHovered = hovered === p.id;
            return (
              <motion.path
                key={p.id}
                d={createArc(p.start, p.end, isHovered)}
                fill={p.color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hovered === null || isHovered ? 1 : 0.3,
                  scale: 1,
                  d: createArc(p.start, p.end, isHovered)
                }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer transition-all duration-300"
                stroke="#2a3038"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Center Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            key={activeItem ? activeItem.id : "default"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {activeItem ? (
              <>
                <span className="text-5xl font-extrabold text-white">{activeItem.value}%</span>
                <span className="block text-sm font-bold tracking-widest text-white/60 uppercase mt-1">{activeItem.label}</span>
              </>
            ) : (
              <>
                <span className="text-3xl font-bold text-white/40">100%</span>
                <span className="block text-xs font-bold tracking-widest text-white/30 uppercase mt-1">Global</span>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
              hovered === item.id ? "bg-white/10 backdrop-blur-md" : "hover:bg-white/5"
            }`}
          >
            <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: item.color }}></div>
            <div>
              <p className="text-white font-bold">{item.label}</p>
              <p className="text-white/60 text-sm">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
