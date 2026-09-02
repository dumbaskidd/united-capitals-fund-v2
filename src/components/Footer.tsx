import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 20L9 6L13 15L16 9L21 20H3Z"
                stroke="#38bdf8"
                strokeWidth="1.8"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="font-bold text-white tracking-wide">
              UNITED <span className="font-light tracking-widest">CAPITALS</span>
            </span>
          </div>
          <p className="text-sm max-w-xs">
            © {new Date().getFullYear()} United Capitals. Conectando portafolios e inversionistas latinoamericanos con oportunidades globales.
          </p>
          <div className="mt-6 space-y-1.5 text-sm">
            <p className="text-slate-300 font-medium">Pilar Jeannette Collado Urbina</p>
            <p>Alejo Bezada 131, Lima, 15088, Perú</p>
            <a href="tel:+51915085261" className="block hover:text-sky-400 transition-colors">
              +51 915 085 261
            </a>
            <a href="mailto:colladojeannette@gmail.com" className="block hover:text-sky-400 transition-colors break-all">
              colladojeannette@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-sky-400 mb-4">METODOLOGÍA</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/philosophy#methodology" className="hover:text-white transition-colors">
                Metodología Estratégica
              </Link>
            </li>
            <li>
              <Link href="/philosophy#sectors" className="hover:text-white transition-colors">
                Sectores del Portafolio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-sky-400 mb-4">ACCESO</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Acceso Institucional
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Portal de Clientes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-sky-400 mb-4">CUMPLIMIENTO</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/legal" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
