"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TradingChartBackground() {
  const [candles, setCandles] = useState<{ o: number, h: number, l: number, c: number }[]>([]);
  
  useEffect(() => {
    let currentPrice = 50;
    // Increase volatility from 10 to 25 to make candles much larger
    const initial = Array.from({ length: 40 }, () => {
      const o = currentPrice;
      let c = o + (Math.random() - 0.45) * 25;
      if (c > 85) c = 85;
      if (c < 15) c = 15;
      const h = Math.min(98, Math.max(o, c) + Math.random() * 10);
      const l = Math.max(2, Math.min(o, c) - Math.random() * 10);
      currentPrice = c;
      return { o, h, l, c };
    });
    setCandles(initial);

    const interval = setInterval(() => {
      setCandles((prev) => {
        const lastPrice = prev[prev.length - 1].c;
        const o = lastPrice;
        let c = o + (Math.random() - 0.45) * 25;
        if (c > 85) c = 85;
        if (c < 15) c = 15;
        const h = Math.min(98, Math.max(o, c) + Math.random() * 10);
        const l = Math.max(2, Math.min(o, c) - Math.random() * 10);
        return [...prev.slice(1), { o, h, l, c }];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (candles.length === 0) return null;

  const stepX = 100 / 40;

  // Fake price axis prices based on the candles
  const currentLivePrice = candles[candles.length - 1].c;
  const currentLivePriceFormatted = `$${(4000 + currentLivePrice * 10).toFixed(2)}`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-25 mix-blend-screen pointer-events-none">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        {/* Grid lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#ffffff" strokeWidth="0.05" strokeOpacity="0.2" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 5} y1="0" x2={i * 5} y2="100" stroke="#ffffff" strokeWidth="0.05" strokeOpacity="0.2" />
        ))}
        
        {/* Candlesticks */}
        {candles.map((candle, i) => {
          const isUp = candle.c >= candle.o;
          const color = isUp ? "#4ade80" : "#f87171";
          const x = i * stepX;
          
          return (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {/* Wick */}
              <line x1={x + stepX/2} y1={100 - candle.h} x2={x + stepX/2} y2={100 - candle.l} stroke={color} strokeWidth="0.2" />
              {/* Body */}
              <rect 
                x={x + stepX * 0.15} 
                y={100 - Math.max(candle.o, candle.c)} 
                width={stepX * 0.7} 
                height={Math.abs(candle.o - candle.c) || 0.1} 
                fill={color} 
              />
            </motion.g>
          );
        })}
        
        {/* Live Price Line */}
        <line x1="0" y1={100 - currentLivePrice} x2="100" y2={100 - currentLivePrice} stroke="#eab308" strokeWidth="0.2" strokeDasharray="1,1" />
      </svg>
      
      {/* Fake Price Axis on the right */}
      <div className="absolute top-0 right-0 h-full w-[80px] border-l border-white/10 bg-[#1c2126]/50 backdrop-blur-sm flex flex-col justify-between py-10 pr-2 text-right">
        <span className="text-white/40 text-[10px] font-mono">4900.00</span>
        <span className="text-white/40 text-[10px] font-mono">4700.00</span>
        <span className="text-white/40 text-[10px] font-mono">4500.00</span>
        <span className="text-[#eab308] font-bold text-[11px] font-mono bg-[#eab308]/20 px-1 rounded absolute right-2" style={{ top: `${100 - currentLivePrice}%`, transform: 'translateY(-50%)' }}>
          {currentLivePriceFormatted}
        </span>
        <span className="text-white/40 text-[10px] font-mono">4300.00</span>
        <span className="text-white/40 text-[10px] font-mono">4100.00</span>
      </div>
    </div>
  );
}
