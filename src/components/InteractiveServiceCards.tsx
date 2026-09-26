"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, BarChart3, ShieldAlert } from "lucide-react";

const services = [
  { id: 1, title: "XXXX XXXXXX", short: "TEXT TEXT TEXT TEXT", full: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.", icon: Search },
  { id: 2, title: "XXXX XXXXXX", short: "TEXT TEXT TEXT TEXT", full: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.", icon: BarChart3 },
  { id: 3, title: "XXXX XXXXXX", short: "TEXT TEXT TEXT TEXT", full: "TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.", icon: ShieldAlert },
];

export default function InteractiveServiceCards() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6 relative">
      {services.map((service) => (
        <motion.div
          layoutId={`card-${service.id}`}
          key={service.id}
          onClick={() => setSelected(service.id)}
          className="cursor-pointer h-full rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl p-8 hover:bg-white/20 transition-colors shadow-xl"
        >
          <service.icon className="w-10 h-10 text-[#eab308] mb-6" />
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-white/70">{service.short}</p>
        </motion.div>
      ))}

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#1c2126]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0"
            />
            
            {services.map((service) => service.id === selected && (
              <motion.div
                layoutId={`card-${service.id}`}
                key={`modal-${service.id}`}
                className="relative z-10 w-full max-w-2xl rounded-[3rem] border border-white/20 bg-[#2a3038] p-12 shadow-2xl"
              >
                <service.icon className="w-12 h-12 text-[#eab308] mb-8" />
                <h3 className="text-4xl font-bold text-white mb-6">{service.title}</h3>
                <p className="text-xl text-white/80 leading-relaxed mb-8">{service.full}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-2 rounded-full bg-[#eab308] px-8 py-4 text-sm font-bold text-[#2a3038] transition-all hover:bg-[#facc15]"
                >
                  Cerrar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
