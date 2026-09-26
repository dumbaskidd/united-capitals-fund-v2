import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/StaggerUp";
import { ArrowRight, ChevronRight, Briefcase, Landmark, ShieldCheck } from "lucide-react";
import TradingChartBackground from "@/components/TradingChartBackground";
import InteractiveServiceCards from "@/components/InteractiveServiceCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Andes Capital",
  description: "TEXT TEXT TEXT",
};

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-32 flex items-center min-h-[60vh] bg-[#1c2126]">
        {/* Animated Trading Chart Background */}
        <TradingChartBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c2126]/40 via-transparent to-[#1c2126]"></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center flex flex-col items-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab308] border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 rounded-full inline-block">
              XXXXX XXXXX
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
              TITLE TITLE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#aa8362]">TITLE TITLE</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 font-medium">
              TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Interactive Service Cards Module */}
      <section className="relative overflow-hidden py-32 bg-[#2a3038]">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeUp className="mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">TITLE TITLE TITLE</h2>
            <p className="mt-4 text-xl text-white/60 max-w-2xl">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</p>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <InteractiveServiceCards />
          </FadeUp>
        </div>
      </section>

      {/* Asset Management Module */}
      <section id="asset-management" className="scroll-mt-36 bg-[#f8f9fa] py-32 relative overflow-hidden">
        {/* Abstract light decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#72563f]/5 rounded-full blur-[120px]"></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid items-start gap-20 lg:grid-cols-2">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#72563f] mb-4">XXXX XXXXXX</p>
              <h2 className="text-5xl font-bold leading-tight tracking-tight text-[#2a3038]">TITLE TITLE<br/>TITLE TITLE</h2>
              <p className="mt-8 text-xl leading-relaxed text-[#2a3038]/70">
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
              </p>
              <div className="mt-12 space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-4 group cursor-pointer">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72563f]/10 text-[#72563f] transition-all group-hover:bg-[#72563f] group-hover:text-white">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2a3038]">XXXX XXXXXX</h4>
                      <p className="mt-2 text-[#2a3038]/60">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="grid gap-6">
                <div className="rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-2xl p-10 shadow-2xl transition-all hover:scale-105 hover:bg-white/60">
                  <Briefcase className="w-10 h-10 text-[#72563f] mb-6" />
                  <h3 className="text-2xl font-bold text-[#2a3038] mb-4">TITLE TITLE</h3>
                  <p className="text-[#2a3038]/70 leading-relaxed">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</p>
                </div>
                <div className="rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-2xl p-10 shadow-2xl transition-all hover:scale-105 hover:bg-white/60 translate-x-0 md:translate-x-12">
                  <Landmark className="w-10 h-10 text-[#72563f] mb-6" />
                  <h3 className="text-2xl font-bold text-[#2a3038] mb-4">TITLE TITLE</h3>
                  <p className="text-[#2a3038]/70 leading-relaxed">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Global Connectivity Module */}
      <section className="relative overflow-hidden py-32 flex items-center min-h-[60vh]">
        <Image src="/handshake-bg.png" alt="Global Services" fill className="absolute inset-0 object-cover object-center" />
        <div className="absolute inset-0 bg-[#2a3038]/80 backdrop-blur-md"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="rounded-[3rem] bg-white/10 backdrop-blur-3xl border border-white/20 p-12 shadow-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#eab308] mb-4">XXXX XXXXXX</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">TITLE TITLE TITLE</h2>
                <p className="text-lg leading-relaxed text-white/80 mb-8">
                  TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#eab308] px-10 py-5 text-sm font-bold text-[#2a3038] transition-all hover:scale-105 shadow-xl"
                >
                  XXXXX XXXXX
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
