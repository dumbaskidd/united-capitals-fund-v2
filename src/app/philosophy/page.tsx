import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filosofía — Andes Capital",
  description: "Metodología estratégica y sectores de enfoque de Andes Capital: un enfoque disciplinado, basado en investigación y gestión de riesgo para estructurar inversiones globales.",
};

export default function Philosophy() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="/imported/5d82eafd584e-luxury_watch_macro_1786981627850.webp"
          alt=""
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/85 to-[#f8f9fa]/55"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-transparent to-[#f8f9fa]/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72563f]">Filosofía</p>
          <h1 className="mt-4 max-w-3xl text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Criterio antes que ruido.
            <br />
            Proceso antes que promesa.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#38404b]/70 sm:text-lg">
            Andes Capital identifica y estructura oportunidades de inversión globales para inversionistas y asesores financieros en América Latina. Nuestro equipo trabaja con disciplina, investigación y gestión de riesgo — no con atajos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#methodology"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#72563f] text-[#030712] hover:bg-[#8c6b4e] w-full sm:w-auto"
            >
              Metodología Estratégica
            </Link>
            <Link
              href="#sectors"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors bg-[#38404b] text-white hover:bg-[#38404b]/90 w-full sm:w-auto"
            >
              Sectores del Portafolio
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#38404b]/5 bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 h-px w-10 bg-[#72563f]"></div>
            <h2 className="text-lg font-semibold tracking-tight text-[#38404b]">Disciplina</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Decisiones ancladas a un proceso, no a la narrativa del momento.</p>
          </div>
          <div>
            <div className="mb-4 h-px w-10 bg-[#72563f]"></div>
            <h2 className="text-lg font-semibold tracking-tight text-[#38404b]">Investigación</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Cada oportunidad se examina con diligencia antes de estructurarse.</p>
          </div>
          <div>
            <div className="mb-4 h-px w-10 bg-[#72563f]"></div>
            <h2 className="text-lg font-semibold tracking-tight text-[#38404b]">Riesgo primero</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">El capital se protege definiendo límites antes de buscar retorno.</p>
          </div>
          <div>
            <div className="mb-4 h-px w-10 bg-[#72563f]"></div>
            <h2 className="text-lg font-semibold tracking-tight text-[#38404b]">Horizonte largo</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#38404b]/70">Construimos para ciclos, no para titulares de mercado.</p>
          </div>
        </div>
      </section>

      <section id="methodology" className="scroll-mt-36 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72563f]">Metodología</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Metodología Estratégica</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#38404b]/70 sm:text-lg">
            Un enfoque ordenado para identificar, evaluar y estructurar oportunidades globales. El proceso es el mismo para cada mandato: entender al inversionista, investigar con rigor, estructurar el acceso y gestionar el riesgo de forma continua.
          </p>
          <ol className="mt-14 grid gap-6 md:grid-cols-2">
            <li className="rounded-2xl border border-[#38404b]/10 bg-white p-7 sm:p-8">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#72563f]">01</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#38404b]">Contexto del inversionista</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#38404b]/70">Partimos de objetivos, horizonte, liquidez y restricciones. Sin ese mapa, ninguna asignación global es responsable.</p>
            </li>
            <li className="rounded-2xl border border-[#38404b]/10 bg-white p-7 sm:p-8">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#72563f]">02</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#38404b]">Identificación e investigación</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#38404b]/70">Filtramos oportunidades en mercados internacionales con análisis fundamental, contrapartes y estructura legal del vehículo.</p>
            </li>
            <li className="rounded-2xl border border-[#38404b]/10 bg-white p-7 sm:p-8">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#72563f]">03</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#38404b]">Estructuración</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#38404b]/70">Diseñamos el acceso —vehículo, jurisdicción, moneda y costos— para que el inversionista latinoamericano pueda participar con claridad.</p>
            </li>
            <li className="rounded-2xl border border-[#38404b]/10 bg-white p-7 sm:p-8">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#72563f]">04</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#38404b]">Gestión de riesgo y seguimiento</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#38404b]/70">Monitoreamos exposiciones, liquidez y desviaciones. Informamos con regularidad para que el portafolio se ajuste con criterio, no con prisa.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="sectors" className="scroll-mt-36 border-t border-[#38404b]/5 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72563f]">Portafolio</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">Sectores del Portafolio</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#38404b]/70 sm:text-lg">
            Áreas de enfoque ilustrativas. No constituyen tenencias actuales, ni una asignación prometida, ni una recomendación de inversión.
          </p>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Bienes raíces",
                desc: "Exposición a activos inmobiliarios a través de vehículos institucionales, con foco en calidad del activo y estructura de capital."
              },
              {
                title: "Private equity",
                desc: "Participación en empresas no cotizadas y estrategias de capital privado, pensadas para un horizonte de mediano y largo plazo."
              },
              {
                title: "Renta fija",
                desc: "Instrumentos de deuda soberana y corporativa para aportar equilibrio, flujo y diversificación de moneda y crédito."
              },
              {
                title: "Tecnología",
                desc: "Compañías e infraestructura ligadas a la economía digital, evaluadas por modelo de negocio, no por moda de mercado."
              },
              {
                title: "Energía renovable",
                desc: "Proyectos e infraestructura asociados a la transición energética, con atención al marco regulatorio y a la generación de caja."
              },
              {
                title: "Activos alternativos",
                desc: "Estrategias complementarias —crédito privado, infraestructuras u otros vehículos— para diversificar fuentes de retorno."
              }
            ].map((sector) => (
              <li key={sector.title} className="rounded-2xl border border-[#38404b]/10 bg-[#f8f9fa]/60 p-7 transition-colors hover:border-[#eab308]/40">
                <div className="mb-5 h-1 w-8 rounded-full bg-[#38bdf8]"></div>
                <h3 className="text-lg font-semibold tracking-tight text-[#38404b]">{sector.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#38404b]/70">{sector.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-3xl text-xs leading-relaxed text-[#38404b]/60">
            Invertir implica riesgo, incluida la posible pérdida de capital. El contenido de esta página es informativo y no constituye asesoría personalizada. Consulte el <Link href="/legal" className="text-[#72563f] hover:text-[#8c6b4e] underline-offset-2 hover:underline">Aviso Legal</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
