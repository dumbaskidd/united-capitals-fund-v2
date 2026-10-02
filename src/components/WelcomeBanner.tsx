"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside className="relative z-20 mx-auto mb-10 flex w-full max-w-3xl items-center gap-5 rounded-2xl border border-white/15 bg-[#1c2126]/70 px-5 py-4 text-left shadow-xl backdrop-blur-md sm:px-6" aria-label="Mensaje de bienvenida">
      <Image
        src="/expert-welcome.png"
        alt="Experto de United Capitals Fund"
        width={72}
        height={72}
        className="h-16 w-16 shrink-0 rounded-xl object-cover object-top sm:h-[72px] sm:w-[72px]"
      />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8b58e]">Bienvenido</p>
        <p className="mt-1 text-sm leading-relaxed text-white/80 sm:text-base">
          Tómate tu tiempo. Aquí encontrarás una perspectiva clara para tus decisiones financieras.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Cerrar bienvenida"
        className="self-start rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </aside>
  );
}
