import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/StaggerUp";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/andes-bg.png"
            alt="Andes Mountains"
            fill
            priority
            className="absolute inset-0 object-cover object-center"
          />
          {/* Deep Dark Overlay */}
          <div className="absolute inset-0 bg-[#2a3038]/60 backdrop-blur-[2px] z-0"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 py-20 text-center flex flex-col items-center">
          <FadeUp delay={0.1} y={30}>
            <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Construimos tu<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#72563f] to-[#aa8362]">futuro financiero</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2} y={30}>
            <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-white/90 font-medium">
              Estrategias patrimoniales claras, visión global y acompañamiento experto para tomar decisiones que perduran.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} y={30}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-white/30 hover:scale-105 shadow-lg"
              >
                Descubre nuestros servicios
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full bg-[#72563f]/90 backdrop-blur-3xl border border-[#72563f]/50 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-[#8c6b4e] hover:scale-105 shadow-lg"
              >
                Contáctanos
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features Section - Apple Style Liquid Glass */}
      <section className="relative bg-[#f8f9fa] py-24 lg:py-32 overflow-hidden">
        {/* Subtle abstract shapes for liquid feel */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#72563f]/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#38404b]/5 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-[#2a3038] sm:text-5xl">Una estrategia hecha para ti</h2>
              <p className="mt-4 text-lg text-[#2a3038]/60">Conectamos experiencia, análisis y oportunidades para proteger y hacer crecer tu patrimonio.</p>
            </div>
          </FadeUp>

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
            {[Globe, Shield, TrendingUp].map((Icon, i) => (
              <StaggerItem key={i}>
                <div className="group relative h-full rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 p-8 transition-all duration-500 hover:bg-white/60 hover:shadow-2xl hover:shadow-[#2a3038]/10 hover:-translate-y-2">
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-[#2a3038] p-4 text-[#72563f] shadow-xl shadow-[#2a3038]/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2a3038]">Visión global</h3>
                    <p className="mt-3 leading-relaxed text-[#2a3038]/70">Accedemos a oportunidades y perspectivas de los principales mercados internacionales.</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Alianzas Marquee Section */}
      <section className="overflow-hidden bg-[#2a3038] py-24 text-white relative">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeUp>
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Nuestros <span className="text-[#72563f]">aliados</span>
              </h2>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.2} className="relative mt-20 pb-10 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#2a3038] to-transparent md:w-48"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#2a3038] to-transparent md:w-48"></div>
          
          {/* Framer Motion Seamless Marquee */}
          <Marquee>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-20 md:gap-32 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <span className="shrink-0 text-2xl font-bold tracking-[0.2em] md:text-3xl text-white">BLOOMBERG</span>
                <span className="shrink-0 text-2xl font-bold tracking-[0.2em] md:text-3xl text-white">ICAPITAL</span>
                <span className="shrink-0 text-2xl font-bold tracking-[0.2em] md:text-3xl text-white">SALESFORCE</span>
                <span className="shrink-0 text-2xl font-bold tracking-[0.2em] md:text-3xl text-white">XP INC.</span>
                <span className="shrink-0 text-2xl font-bold tracking-[0.2em] md:text-3xl text-white">VANGUARD</span>
              </div>
            ))}
          </Marquee>
        </FadeUp>
      </section>

      {/* Global Reach - Deep Liquid Glass */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        <Image
          src="/handshake-bg.png"
          alt="Corporate Deal"
          fill
          className="absolute inset-0 object-cover object-center"
        />
        {/* Deep opaque overlay without gradients */}
        <div className="absolute inset-0 bg-[#1c2126]/80 backdrop-blur-[6px]"></div>
        
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <FadeUp>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl text-center">
              <span className="inline-block rounded-full bg-[#72563f]/30 px-4 py-1.5 text-xs font-bold text-[#eab308] uppercase tracking-wider mb-6 border border-[#72563f]/50">
                Alcance global
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-8">
                Tu patrimonio, nuestra prioridad
              </h2>
              <p className="text-lg leading-relaxed text-white/80 mb-10">
                Te acompañamos con disciplina, transparencia y una visión de largo plazo para transformar tus objetivos en decisiones financieras sólidas.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#72563f]/90 px-10 py-5 text-sm font-bold text-white transition-all hover:scale-105 shadow-xl"
              >
                Descubre nuestros servicios
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
