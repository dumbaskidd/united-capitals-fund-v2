"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#030712]/95 backdrop-blur border-b border-white/10">
      <div className="flex items-center justify-between gap-2 px-6 py-2 text-xs text-slate-400 border-b border-white/5">
        <span className="hidden sm:inline">Mantente conectado</span>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="/contact" className="hidden sm:inline hover:text-white transition-colors">
            Trabaja con nosotros
          </Link>
          <span className="hidden md:inline">Medios y Eventos</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 20L9 6L13 15L16 9L21 20H3Z" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round"></path>
          </svg>
          <span className="font-bold tracking-wide text-white text-lg">
            UNITED <span className="font-light tracking-widest">CAPITALS</span>
          </span>
          <span className="hidden lg:block text-[11px] leading-tight text-slate-400 border-l border-white/10 pl-3 ml-1">
            Conectándote
            <br />
            con <span className="text-slate-200 font-medium">Inversiones Globales</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link
            href="/philosophy"
            className={`hover:text-sky-400 transition-colors ${
              pathname === "/philosophy" ? "text-sky-400" : ""
            }`}
          >
            Filosofía
          </Link>
          <Link
            href="/services"
            className={`hover:text-sky-400 transition-colors ${
              pathname === "/services" ? "text-sky-400" : ""
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/services#planes"
            className="hover:text-sky-400 transition-colors"
          >
            Pagar
          </Link>
          <Link
            href="/contact"
            className={`hover:text-sky-400 transition-colors ${
              pathname === "/contact" ? "text-sky-400" : ""
            }`}
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors"
          >
            Contáctanos
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#030712] p-6 flex flex-col gap-4 text-sm font-medium text-slate-200">
          <Link href="/philosophy" onClick={() => setMobileMenuOpen(false)}>Filosofía</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
          <Link href="/services#planes" onClick={() => setMobileMenuOpen(false)}>Pagar</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}
