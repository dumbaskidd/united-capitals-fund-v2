"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f9fa]/95 backdrop-blur border-b border-[#38404b]/10">
      <div className="flex items-center justify-between gap-2 px-6 py-2 text-xs text-[#38404b]/70 border-b border-[#38404b]/5">
        <span className="hidden sm:inline">Mantente conectado</span>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="/contact" className="hidden sm:inline hover:text-[#38404b] transition-colors">
            Trabaja con nosotros
          </Link>
          <span className="hidden md:inline">Medios y Eventos</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/andes-logo.png" alt="Andes Capital" className="h-10 w-auto" />
          <span className="hidden lg:block text-[11px] leading-tight text-[#38404b]/70 border-l border-[#38404b]/10 pl-3 ml-1">
            Conectándote
            <br />
            con <span className="text-[#38404b]/90 font-medium">Inversiones Globales</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#38404b]/90">
          <Link
            href="/philosophy"
            className={`hover:text-[#72563f] transition-colors ${
              pathname === "/philosophy" ? "text-[#72563f]" : ""
            }`}
          >
            Filosofía
          </Link>
          <Link
            href="/services"
            className={`hover:text-[#72563f] transition-colors ${
              pathname === "/services" ? "text-[#72563f]" : ""
            }`}
          >
            Servicios
          </Link>

          <Link
            href="/contact"
            className={`hover:text-[#72563f] transition-colors ${
              pathname === "/contact" ? "text-[#72563f]" : ""
            }`}
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#38404b] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#38404b]/80 transition-colors"
          >
            Contáctanos
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden text-[#38404b] p-1"
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
        <div className="md:hidden border-t border-[#38404b]/10 bg-[#f8f9fa] p-6 flex flex-col gap-4 text-sm font-medium text-[#38404b]/90">
          <Link href="/philosophy" onClick={() => setMobileMenuOpen(false)}>Filosofía</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}
