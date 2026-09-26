"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Candle { o: number, h: number, l: number, c: number }
interface Asset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  candles: Candle[];
}

const generateInitialCandles = (startPrice: number, volatility: number) => {
  let currentPrice = startPrice;
  return Array.from({ length: 12 }, () => {
    const o = currentPrice;
    const c = o + (Math.random() - 0.45) * volatility;
    const h = Math.max(o, c) + Math.random() * (volatility / 2);
    const l = Math.min(o, c) - Math.random() * (volatility / 2);
    currentPrice = c;
    return { o, h, l, c };
  });
};

export default function LiveChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [assets, setAssets] = useState<Asset[]>([
    { id: "btc", name: "Bitcoin", symbol: "BTC/USD", price: 64230.50, candles: generateInitialCandles(64230, 200) },
    { id: "spy", name: "S&P 500", symbol: "SPY", price: 520.15, candles: generateInitialCandles(520, 5) },
    { id: "gold", name: "Gold", symbol: "XAU/USD", price: 2340.80, candles: generateInitialCandles(2340, 10) }
  ]);

  // Rotate Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % assets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [assets.length]);

  // Update Live Prices
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prevAssets => prevAssets.map(asset => {
        const volatility = asset.id === "btc" ? 150 : asset.id === "spy" ? 2 : 5;
        const lastCandle = asset.candles[asset.candles.length - 1];
        
        // Update the last candle as if the minute is still going
        const o = lastCandle.o;
        const c = lastCandle.c + (Math.random() - 0.5) * volatility;
        const h = Math.max(lastCandle.h, c);
        const l = Math.min(lastCandle.l, c);
        
        const newCandle = { o, h, l, c };
        
        // Randomly decide if we should start a new candle (simulate time passing)
        // Here we just keep 12 candles and update the last one, occasionally shifting
        const newCandles = [...asset.candles];
        if (Math.random() > 0.8) {
          // Push new candle, remove first
          newCandles.shift();
          newCandles.push({ o: c, c, h: c, l: c });
        } else {
          // Update last candle
          newCandles[newCandles.length - 1] = newCandle;
        }

        return {
          ...asset,
          price: c,
          candles: newCandles
        };
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  const calculateChange = (candles: Candle[]) => {
    if (candles.length < 2) return { value: "+0.00%", isUp: true };
    const first = candles[0].o;
    const last = candles[candles.length - 1].c;
    const pct = ((last - first) / first) * 100;
    return {
      value: `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`,
      isUp: pct >= 0
    };
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-[1000px]">
      <AnimatePresence mode="popLayout">
        {assets.map((asset, index) => {
          let diff = index - activeIndex;
          if (diff < -1) diff += assets.length;
          if (diff > 1) diff -= assets.length;
          if (Math.abs(diff) > 1) return null;

          const isCenter = diff === 0;
          const isLeft = diff === -1;
          const change = calculateChange(asset.candles);
          
          return (
            <motion.div
              key={asset.id}
              initial={false}
              animate={{
                x: isCenter ? "0%" : isLeft ? "-40%" : "40%",
                z: isCenter ? 50 : -100,
                rotateY: isCenter ? 0 : isLeft ? 15 : -15,
                scale: isCenter ? 1 : 0.8,
                opacity: isCenter ? 1 : 0.4,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute w-[85%] sm:w-[320px] h-[280px] bg-[#1c2126]/90 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
              style={{ zIndex: isCenter ? 20 : 10 }}
            >
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-white/60 text-xs font-bold tracking-widest uppercase">{asset.name}</h3>
                  <p className="text-white text-xl font-extrabold mt-1">{asset.symbol}</p>
                </div>
                <motion.span 
                  key={change.value} // animate when changes
                  initial={{ scale: 1.2, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`px-2 py-1 rounded text-xs font-bold ${change.isUp ? 'bg-[#eab308]/20 text-[#eab308]' : 'bg-red-500/20 text-red-400'}`}
                >
                  {change.value}
                </motion.span>
              </div>
              
              <motion.div 
                key={asset.price}
                initial={{ y: -5, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-black text-white my-4 relative z-10"
              >
                {formatPrice(asset.price)}
              </motion.div>

              {/* Japanese Candlestick Chart */}
              <div className="h-[100px] w-full flex items-end justify-between gap-[2px] mt-auto relative z-10">
                {asset.candles.map((candle, i) => {
                  const isUp = candle.c >= candle.o;
                  const color = isUp ? "#4ade80" : "#f87171"; // Green / Red
                  
                  // Calculate dynamic heights relative to this asset's min/max
                  const minL = Math.min(...asset.candles.map(c => c.l));
                  const maxH = Math.max(...asset.candles.map(c => c.h));
                  const range = maxH - minL || 1;
                  
                  const hPct = ((candle.h - minL) / range) * 100;
                  const lPct = ((candle.l - minL) / range) * 100;
                  const oPct = ((candle.o - minL) / range) * 100;
                  const cPct = ((candle.c - minL) / range) * 100;
                  
                  const top = Math.max(oPct, cPct);
                  const bottom = Math.min(oPct, cPct);
                  const bodyHeight = Math.max(top - bottom, 2); // min 2% height
                  
                  return (
                    <div key={i} className="relative flex justify-center w-full h-full">
                      {/* Wick */}
                      <motion.div 
                        initial={false}
                        animate={{ height: `${hPct - lPct}%`, bottom: `${lPct}%` }}
                        className="absolute w-[1px] rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      {/* Body */}
                      <motion.div 
                        initial={false}
                        animate={{ height: `${bodyHeight}%`, bottom: `${bottom}%` }}
                        className="absolute w-[80%] rounded-[1px]"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Blinking Live Indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                 <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eab308] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#eab308]"></span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
