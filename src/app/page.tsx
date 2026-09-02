import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-7.5rem)] overflow-hidden">
        <Image
          src="/imported/781c04589548-luxury_architecture_1786981640000.webp"
          alt=""
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/75 to-[#030712]/25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-[#030712]/30"></div>
        <div className="relative mx-auto flex min-h-[calc(100svh-7.5rem)] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-[2.65rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Equipo especializado
              <br />
              en Inversiones Globales
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Experiencia internacional enfocada en identificar y estructurar oportunidades de inversión para Latinoamérica.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/philosophy"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#eab308] text-[#030712] hover:bg-[#facc15] w-full sm:w-auto"
              >
                Conoce sobre nosotros
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-white text-[#030712] hover:bg-slate-100 w-full sm:w-auto"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#030712] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Oportunidades
              <br />
              Globales de
              <br />
              Inversión
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
              Nos especializamos en ser el socio estratégico de inversionistas y asesores financieros latinoamericanos.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#eab308] text-[#030712] hover:bg-[#facc15] w-full sm:w-auto"
              >
                Quiero ser Cliente
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-white text-[#030712] hover:bg-slate-100 w-full sm:w-auto"
              >
                Quiero ser Asesor
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center py-8 lg:py-0">
            <svg viewBox="0 0 420 420" className="h-auto w-full max-w-[420px] aspect-square" aria-hidden="true">
              <defs>
                <radialGradient id="uc-ring-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.18"></stop>
                  <stop offset="55%" stopColor="#eab308" stopOpacity="0.04"></stop>
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
              <circle cx="210" cy="210" r="200" fill="url(#uc-ring-glow)"></circle>
              <circle cx="210" cy="210" r="188" fill="none" stroke="#eab308" strokeOpacity="0.45" strokeWidth="1.15"></circle>
              <circle cx="210" cy="210" r="148" fill="none" stroke="#eab308" strokeOpacity="0.32" strokeWidth="1"></circle>
              <circle cx="210" cy="210" r="108" fill="none" stroke="#ca8a04" strokeOpacity="0.28" strokeWidth="0.9"></circle>
            </svg>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0b1220] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Alianzas
              <br />
              Estratégicas
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-white text-[#030712] hover:bg-slate-100 shrink-0"
            >
              Conoce más
            </Link>
          </div>
        </div>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b1220] to-transparent md:w-32"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b1220] to-transparent md:w-32"></div>
          <div className="overflow-hidden">
            <div className="uc-marquee flex w-max items-center gap-16 pr-16 md:gap-24 md:pr-24">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-16 md:gap-24">
                  <span className="shrink-0 text-xl font-semibold tracking-[0.22em] text-white/70 md:text-2xl">BLOOMBERG</span>
                  <span className="shrink-0 text-xl font-semibold tracking-[0.22em] text-white/70 md:text-2xl">ICAPITAL</span>
                  <span className="shrink-0 text-xl font-semibold tracking-[0.22em] text-white/70 md:text-2xl">SALESFORCE</span>
                  <span className="shrink-0 text-xl font-semibold tracking-[0.22em] text-white/70 md:text-2xl">XP INC.</span>
                  <span className="shrink-0 text-xl font-semibold tracking-[0.22em] text-white/70 md:text-2xl">VANGUARD</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] overflow-hidden md:min-h-screen">
        <Image
          src="/imported/5d82eafd584e-luxury_watch_macro_1786981627850.webp"
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#030712]/25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-[#030712]/20"></div>
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-end px-6 py-16 md:min-h-screen md:py-20">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f172a]/80 p-8 shadow-2xl backdrop-blur-md sm:p-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Alcance Global</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Conectando portafolios a través de las fronteras financieras más dinámicas del mundo.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#eab308] text-[#030712] hover:bg-[#facc15] mt-8"
            >
              Explorar Mercados
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
