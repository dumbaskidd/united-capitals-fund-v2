"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/65 backdrop-blur-2xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/united-capitals-fund-v2/andes-logo.png" alt="Andes Capital" width={180} height={65} className="h-[54px] md:h-[65px] w-auto drop-shadow-md" />
          <span className="hidden lg:block text-[14px] leading-tight text-[#38404b]/70 border-l border-[#38404b]/10 pl-4 ml-1">
            Conectándote
            <br />
            con <span className="text-[#38404b]/90 font-medium">Inversiones Globales</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-[#38404b]/90">
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
