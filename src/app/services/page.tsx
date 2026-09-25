import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Andes Capital",
  description: "Asset Management para inversionistas institucionales y calificados, y Wealth Services para individuos y familias de alto patrimonio.",
};

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72563f]">Servicios</p>
          <h1 className="mt-4 max-w-3xl text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Dos líneas.
            <br />
            Un mismo criterio.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#38404b]/70 sm:text-lg">
            Asset Management para inversionistas institucionales y calificados. Wealth Services para individuos y familias de alto patrimonio. En ambas, el trabajo de nuestro equipo es el mismo: claridad, proceso y acceso a mercados globales.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#asset-management"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#72563f] text-[#030712] hover:bg-[#8c6b4e] w-full sm:w-auto"
            >
              Asset Management
            </Link>
            <Link
              href="#wealth-services"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#38404b] text-white hover:bg-[#38404b]/90 w-full sm:w-auto"
            >
              Wealth Services
            </Link>
          </div>
        </div>
      </section>

      <section id="asset-management" className="scroll-mt-36 border-t border-[#38404b]/5 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72563f]">Gestión de activos</p>
              <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Asset Management</h2>
              <p className="mt-5 text-base leading-relaxed text-[#38404b]/70 sm:text-lg">
                Construcción y gestión de portafolios para inversionistas institucionales y calificados. El mandato define el universo; el proceso define cada decisión.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#38404b]/60">
                Pensado para family offices, instituciones, asesores y inversionistas que requieren un marco profesional de asignación, acceso y seguimiento — no una lista de productos.
              </p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <li className="rounded-2xl border border-[#38404b]/10 bg-white p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Construcción de portafolio</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Diseñamos asignaciones alineadas a objetivos, horizonte y restricciones de cada mandato institucional o calificado.</p>
              </li>
              <li className="rounded-2xl border border-[#38404b]/10 bg-white p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Acceso a mercados globales</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Identificamos y estructuramos vehículos para que el inversionista latinoamericano participe en oportunidades fuera de su mercado local.</p>
              </li>
              <li className="rounded-2xl border border-[#38404b]/10 bg-white p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Supervisión continua</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Seguimos exposiciones, liquidez y contrapartes. El portafolio se revisa con disciplina, no solo cuando el mercado se mueve.</p>
              </li>
              <li className="rounded-2xl border border-[#38404b]/10 bg-white p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Informe y gobernanza</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Reportes periódicos y un marco de decisión claro, para que el comité o el inversionista sepa qué se hizo y por qué.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="wealth-services" className="scroll-mt-36 border-t border-[#38404b]/5 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72563f]">Servicios patrimoniales</p>
              <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Wealth Services</h2>
              <p className="mt-5 text-base leading-relaxed text-[#38404b]/70 sm:text-lg">
                Planificación y asesoría patrimonial para individuos y familias de alto patrimonio. El portafolio es una herramienta; el patrimonio es el conjunto.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#38404b]/60">
                Acompañamos decisiones de inversión en un marco más amplio: liquidez, horizonte, familia y coordinación con los asesores que el cliente ya eligió.
              </p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <li className="rounded-2xl border border-[#38404b]/10 bg-[#f8f9fa]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Planificación patrimonial</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Ordenamos objetivos de largo plazo —crecimiento, liquidez, sucesión y uso del capital— antes de hablar de productos.</p>
              </li>
              <li className="rounded-2xl border border-[#38404b]/10 bg-[#f8f9fa]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Asesoría de inversión</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Acompañamos a individuos y familias de alto patrimonio en la lectura de oportunidades globales y en la coherencia del conjunto.</p>
              </li>
              <li className="rounded-2xl border border-[#38404b]/10 bg-[#f8f9fa]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Coordinación de asesores</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Trabajamos junto a los asesores legales, fiscales y fiduciarios que el cliente ya tiene. No sustituimos su consejo independiente.</p>
              </li>
              <li className="rounded-2xl border border-[#38404b]/10 bg-[#f8f9fa]/70 p-6">
                <h3 className="text-base font-semibold tracking-tight text-[#38404b]">Estructura familiar</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Ayudamos a articular políticas de inversión y de gobierno familiar para que las decisiones sobrevivan a un ciclo o a una generación.</p>
              </li>
            </ul>
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
        <div className="absolute inset-0 bg-[#f8f9fa]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/80 to-[#f8f9fa]/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Conversemos sobre su mandato.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#38404b]/80 sm:text-lg">
            Si representa a un inversionista, una familia o una red de asesores, el siguiente paso es una conversación — no un formulario de productos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#72563f] text-[#030712] hover:bg-[#8c6b4e] w-full sm:w-auto"
            >
              Quiero ser Cliente
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#38404b] text-white hover:bg-[#38404b]/90 w-full sm:w-auto"
            >
              Quiero ser Asesor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
