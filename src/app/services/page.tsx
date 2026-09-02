import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — United Capitals",
  description: "Asset Management para inversionistas institucionales y calificados, y Wealth Services para individuos y familias de alto patrimonio.",
};

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Servicios</p>
          <h1 className="mt-4 max-w-3xl text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Dos líneas.
            <br />
            Un mismo criterio.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Asset Management para inversionistas institucionales y calificados. Wealth Services para individuos y familias de alto patrimonio. En ambas, el trabajo de nuestro equipo es el mismo: claridad, proceso y acceso a mercados globales.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#asset-management"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#eab308] text-[#030712] hover:bg-[#facc15] w-full sm:w-auto"
            >
              Asset Management
            </Link>
            <Link
              href="#wealth-services"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-white text-[#030712] hover:bg-slate-100 w-full sm:w-auto"
            >
              Wealth Services
            </Link>
          </div>
        </div>
      </section>

      <section id="asset-management" className="scroll-mt-36 border-t border-white/5 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#eab308]">Gestión de activos</p>
              <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Asset Management</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                Construcción y gestión de portafolios para inversionistas institucionales y calificados. El mandato define el universo; el proceso define cada decisión.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Pensado para family offices, instituciones, asesores y inversionistas que requieren un marco profesional de asignación, acceso y seguimiento — no una lista de productos.
              </p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <li className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Construcción de portafolio</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Diseñamos asignaciones alineadas a objetivos, horizonte y restricciones de cada mandato institucional o calificado.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Acceso a mercados globales</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Identificamos y estructuramos vehículos para que el inversionista latinoamericano participe en oportunidades fuera de su mercado local.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Supervisión continua</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Seguimos exposiciones, liquidez y contrapartes. El portafolio se revisa con disciplina, no solo cuando el mercado se mueve.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Informe y gobernanza</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Reportes periódicos y un marco de decisión claro, para que el comité o el inversionista sepa qué se hizo y por qué.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="wealth-services" className="scroll-mt-36 border-t border-white/5 bg-[#0b1220] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Servicios patrimoniales</p>
              <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Wealth Services</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
                Planificación y asesoría patrimonial para individuos y familias de alto patrimonio. El portafolio es una herramienta; el patrimonio es el conjunto.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Acompañamos decisiones de inversión en un marco más amplio: liquidez, horizonte, familia y coordinación con los asesores que el cliente ya eligió.
              </p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <li className="rounded-2xl border border-white/10 bg-[#030712]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Planificación patrimonial</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Ordenamos objetivos de largo plazo —crecimiento, liquidez, sucesión y uso del capital— antes de hablar de productos.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#030712]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Asesoría de inversión</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Acompañamos a individuos y familias de alto patrimonio en la lectura de oportunidades globales y en la coherencia del conjunto.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#030712]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Coordinación de asesores</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Trabajamos junto a los asesores legales, fiscales y fiduciarios que el cliente ya tiene. No sustituimos su consejo independiente.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#030712]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-white">Estructura familiar</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Ayudamos a articular políticas de inversión y de gobierno familiar para que las decisiones sobrevivan a un ciclo o a una generación.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="planes" className="scroll-mt-36 border-t border-white/5 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Plan activo</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Comienza hoy</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Si ya conversaste con nuestro equipo y te pidieron realizar tu pago, puedes hacerlo directamente aquí.
          </p>
          <div className="mt-10 mx-auto max-w-md rounded-3xl border border-white/10 bg-[#0b1220] p-8 text-left">
            <h3 className="text-xl font-semibold text-white">Investment Advisory &amp; Capital Management</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Asesoría de inversión y gestión de capital con acompañamiento personalizado, soporte todos los días de 7:00 a.m. a 6:00 p.m.
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">$350</span>
              <span className="text-sm text-slate-500">pago único</span>
            </div>
            <a
              href="https://whop.com/checkout/plan_RJVzxzyYYWDOc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#eab308] text-[#030712] hover:bg-[#facc15] mt-8 w-full"
            >
              Pagar ahora
            </a>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Este servicio está reservado para clientes con quienes ya hemos tenido contacto directo. Si no forma parte de nuestra base de clientes activos, cualquier pago recibido será reembolsado automáticamente en un plazo máximo de 1 día hábil.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src="/imported/781c04589548-luxury_architecture_1786981640000.webp"
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[#030712]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-[#030712]/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Conversemos sobre su mandato.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Si representa a un inversionista, una familia o una red de asesores, el siguiente paso es una conversación — no un formulario de productos.
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
      </section>
    </>
  );
}
