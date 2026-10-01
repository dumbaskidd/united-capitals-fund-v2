"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c2126]/45 p-4 backdrop-blur-[3px]" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="relative grid w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-[#72563f]/15 bg-[#f8f9fa] shadow-[0_24px_80px_rgba(28,33,38,0.24)] md:grid-cols-[1.1fr_0.7fr]">
        <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar bienvenida" className="absolute right-3 top-3 z-10 rounded-full bg-white/75 p-2 text-[#2a3038]/70 transition hover:bg-white hover:text-[#2a3038] focus:outline-none focus:ring-2 focus:ring-[#72563f]">
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <span className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#72563f]">Una breve bienvenida</span>
          <h2 id="welcome-title" className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2a3038] sm:text-4xl">Las decisiones importantes merecen perspectiva.</h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[#38404b]/75">En United Capitals Fund ponemos claridad, criterio y experiencia a tu disposición para que puedas avanzar con mayor confianza.</p>
          <button type="button" onClick={() => setOpen(false)} className="mt-7 w-fit border-b border-[#72563f] pb-1 text-sm font-semibold text-[#72563f] transition hover:border-[#2a3038] hover:text-[#2a3038] focus:outline-none focus:ring-2 focus:ring-[#72563f] focus:ring-offset-4">Conocer el enfoque</button>
        </div>
        <div className="relative min-h-56 overflow-hidden bg-[#2a3038] md:min-h-full">
          <Image src="/expert-welcome.png" alt="Asesor financiero de United Capitals Fund" fill className="object-cover object-center opacity-90" priority />
          <div className="absolute inset-0 bg-[#2a3038]/10" />
        </div>
      </div>
    </div>
  );
}
