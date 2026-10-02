"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <aside
      className="relative mx-auto mb-10 flex w-full max-w-lg items-center gap-4 text-left"
      aria-label="Bienvenida"
    >
      <div className="flex min-w-0 flex-1 items-center px-5 py-4 pr-3 sm:px-6 sm:py-5">
        <p className="text-sm leading-6 text-white/70 sm:text-[15px]">
          <span className="font-medium text-white">Bienvenido a United Capitals Fund.</span>{" "}
          Este es un espacio para pensar tus decisiones patrimoniales con calma, criterio y una mirada de largo plazo.
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar bienvenida"
          className="ml-3 shrink-0 rounded-full p-1.5 text-white/45 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="relative hidden w-24 shrink-0 sm:block">
        <Image
          src="/expert-welcome.png"
          alt="Experto de United Capitals Fund"
          fill
          className="object-cover object-center opacity-85"
          priority
        />
      </div>
    </aside>
  );
}
