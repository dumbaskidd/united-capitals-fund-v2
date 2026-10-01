import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#38404b] border-t border-[#f8f9fa]/10 text-[#f8f9fa]/70">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/andes-logo-black.png" alt="Andes Capital" width={180} height={48} className="h-10 md:h-12 w-auto drop-shadow-md" />
          </div>
          <p className="text-sm max-w-xs">
            © {new Date().getFullYear()} Andes Capital. Conectando portafolios e inversionistas latinoamericanos con oportunidades globales.
          </p>
          <div className="mt-6 space-y-1.5 text-sm">
            <p>Alejo Bezada 131, Lima, 15088, Perú</p>
            <a href="tel:+51959217636" className="block hover:text-[#72563f] transition-colors">
              +51 959 217 636
            </a>
            <a href="tel:+51995042876" className="block hover:text-[#72563f] transition-colors">
              +51 995 042 876
            </a>
            <a href="tel:+34642175097" className="block hover:text-[#72563f] transition-colors">
              +34 642 17 50 97
            </a>
            <a href="mailto:colladojeanfabio@gmail.com" className="block hover:text-[#72563f] transition-colors break-all">
              colladojeanfabio@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-[#72563f] mb-4">METODOLOGÍA</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/philosophy#methodology" className="hover:text-[#f8f9fa] transition-colors">
                Metodología Estratégica
              </Link>
            </li>
            <li>
              <Link href="/philosophy#sectors" className="hover:text-[#f8f9fa] transition-colors">
                Sectores del Portafolio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-[#72563f] mb-4">ACCESO</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-[#f8f9fa] transition-colors">
                Acceso Institucional
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#f8f9fa] transition-colors">
                Portal de Clientes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-[#72563f] mb-4">CUMPLIMIENTO</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/legal" className="hover:text-[#f8f9fa] transition-colors">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#f8f9fa] transition-colors">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
