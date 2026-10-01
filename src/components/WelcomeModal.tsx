"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <aside className="mx-auto flex w-full max-w-2xl items-center justify-center gap-3 pb-8 text-left" aria-label="Bienvenida">
      <div className="relative hidden h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/30 sm:block">
        <Image src="/expert-welcome.png" alt="" fill className="object-cover object-center" priority />
      </div>
      <p className="min-w-0 flex-1 text-sm leading-6 text-white/70">
        <span className="font-medium text-white">Bienvenido.</span>{" "}
        Un espacio para decidir tu futuro financiero con calma y perspectiva.
      </p>
      <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar bienvenida"
          className="shrink-0 rounded-full p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <X className="h-4 w-4" />
        </button>
    </aside>
  );
}
