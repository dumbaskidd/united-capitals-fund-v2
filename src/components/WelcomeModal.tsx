"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c2126]/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="relative grid w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#f8f9fa] shadow-2xl md:grid-cols-[1fr_0.82fr]">
        <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar bienvenida" className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-[#2a3038] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#72563f]">
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#72563f]">United Capitals Fund</span>
          <h2 id="welcome-title" className="text-3xl font-extrabold tracking-tight text-[#2a3038] sm:text-4xl">Bienvenido a nuestra visión financiera</h2>
          <p className="mt-4 text-base leading-relaxed text-[#38404b]/70">Descubre una forma más clara, estratégica y humana de construir tu futuro financiero.</p>
          <button type="button" onClick={() => setOpen(false)} className="mt-7 w-fit rounded-full bg-[#72563f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8c6b4e] focus:outline-none focus:ring-2 focus:ring-[#72563f] focus:ring-offset-2">Comenzar a explorar</button>
        </div>
        <div className="relative min-h-64 md:min-h-full">
          <Image src="/expert-welcome.png" alt="Experto financiero de United Capitals Fund" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  );
}
