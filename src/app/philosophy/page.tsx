import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import HoverAccordion from "@/components/HoverAccordion";
import Counter from "@/components/Counter";
import LiveChart from "@/components/LiveChart";
import AllocationChart from "@/components/AllocationChart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filosofía — Andes Capital",
  description: "TEXT TEXT TEXT",
};

export default function Philosophy() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-32 flex items-center min-h-[70vh]">
        <Image src="/united-capitals-fund-v2/philosophy-bg.png" alt="Philosophy" fill className="absolute inset-0 object-cover object-center" />
        <div className="absolute inset-0 bg-[#2a3038]/70 backdrop-blur-[4px]"></div>
        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab308]">XXXX XXXXX</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
              TITLE TITLE<br />TITLE TITLE
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-xl leading-relaxed text-white/90 font-medium">
              TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Live Chart Section - High Interactivity */}
      <section className="relative overflow-hidden py-32 bg-[#1c2126]">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">TITLE TITLE TITLE</h2>
              <p className="text-lg leading-relaxed text-white/70 mb-8">
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 font-bold text-sm tracking-widest uppercase border border-white/20">XXXX</span>
                <span className="px-4 py-2 rounded-full bg-[#eab308]/20 text-[#eab308] font-bold text-sm tracking-widest uppercase border border-[#eab308]/30">XXXX</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <LiveChart />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision Section with Counter */}
      <section className="relative overflow-hidden py-32 flex items-center min-h-[60vh]">
        <Image src="/united-capitals-fund-v2/vision-bg.png" alt="Vision" fill className="absolute inset-0 object-cover object-center" />
        <div className="absolute inset-0 bg-[#f8f9fa]/80 backdrop-blur-xl"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 p-12 shadow-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#72563f] mb-4">XXXX XXXXXX</p>
                <h2 className="text-4xl font-bold tracking-tight text-[#2a3038] sm:text-5xl mb-6">TITLE TITLE TITLE</h2>
                <p className="text-lg leading-relaxed text-[#2a3038]/80">
                  TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
                </p>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2} className="grid grid-cols-2 gap-8">
              <div className="text-center rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/80 p-8 shadow-xl">
                <div className="text-5xl md:text-6xl font-extrabold text-[#72563f] mb-2">
                  <Counter value={50} prefix="+" />
                </div>
                <p className="text-[#2a3038]/70 font-bold tracking-widest uppercase text-sm">XXXXX XXXXX</p>
              </div>
              <div className="text-center rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/80 p-8 shadow-xl">
                <div className="text-5xl md:text-6xl font-extrabold text-[#72563f] mb-2">
                  <Counter value={100} prefix="$" suffix="M+" />
                </div>
                <p className="text-[#2a3038]/70 font-bold tracking-widest uppercase text-sm">XXXXX XXXXX</p>
              </div>
              <div className="text-center rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/80 p-8 shadow-xl">
                <div className="text-5xl md:text-6xl font-extrabold text-[#72563f] mb-2">
                  <Counter value={25} prefix="+" />
                </div>
                <p className="text-[#2a3038]/70 font-bold tracking-widest uppercase text-sm">XXXXX XXXXX</p>
              </div>
              <div className="text-center rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/80 p-8 shadow-xl">
                <div className="text-5xl md:text-6xl font-extrabold text-[#72563f] mb-2">
                  <Counter value={10} prefix="+" suffix="A" />
                </div>
                <p className="text-[#2a3038]/70 font-bold tracking-widest uppercase text-sm">XXXXX XXXXX</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Allocation Chart Section - High Interactivity */}
      <section className="relative overflow-hidden py-32 bg-[#2a3038]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#eab308]/5 rounded-full blur-[100px]"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center mb-16">
          <FadeUp>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#eab308] mb-4">XXXX XXXXXX</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">TITLE TITLE TITLE</h2>
            <p className="mt-4 text-xl text-white/60 max-w-2xl mx-auto">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</p>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.2}>
          <AllocationChart />
        </FadeUp>
      </section>

      {/* Mission Section */}
      <section className="relative overflow-hidden py-32 flex items-center min-h-[60vh]">
        <Image src="/united-capitals-fund-v2/mission-bg.png" alt="Mission" fill className="absolute inset-0 object-cover object-center" />
        <div className="absolute inset-0 bg-[#2a3038]/80 backdrop-blur-xl"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.2}>
              <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-3xl border border-white/20 p-12 shadow-2xl text-white">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#eab308] mb-4">XXXX XXXXXX</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">TITLE TITLE TITLE</h2>
                <p className="text-lg leading-relaxed text-white/80 mb-8">
                  TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
                </p>
                <ul className="space-y-4 pl-6 list-disc marker:text-[#eab308] text-white/90">
                  <li><strong>XXXX XXXXX:</strong> TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</li>
                  <li><strong>XXXX XXXXX:</strong> TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</li>
                </ul>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                 <Image src="/united-capitals-fund-v2/strategy-bg.png" alt="Mission Value" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-[#2a3038]/20 mix-blend-color-burn transition-opacity duration-700 group-hover:opacity-0"></div>
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]"></div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Interactive Accordion Section */}
      <section className="relative overflow-hidden py-32 bg-[#1c2126]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#38404b]/40 via-[#1c2126] to-[#1c2126]"></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">TITLE TITLE</h2>
            <p className="mt-4 text-xl text-white/60">TEXT TEXT TEXT TEXT TEXT TEXT TEXT.</p>
          </FadeUp>
          
          <HoverAccordion />
          
        </div>
      </section>
    </>
  );
}
