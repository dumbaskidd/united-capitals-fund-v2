import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FadeUp from "@/components/FadeUp";
import { StaggerContainer, StaggerItem } from "@/components/StaggerUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Andes Capital",
  description: "TEXT TEXT TEXT",
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-32 flex items-center min-h-[100vh]">
        <Image src="/united-capitals-fund-v2/contact-bg.png" alt="Contact" fill className="absolute inset-0 object-cover object-center" />
        <div className="absolute inset-0 bg-[#1c2126]/80 backdrop-blur-md"></div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab308]">XXXXX XXXXX</p>
                <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
                  TITLE TITLE<br />TITLE TITLE
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
                </p>
                
                <div className="mt-12 space-y-6">
                  <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8">
                    <h3 className="font-bold text-white text-lg">XXXXX</h3>
                    <p className="mt-2 text-white/70">Alejo Bezada 131, Lima, 15088, Perú</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8">
                    <h3 className="font-bold text-white text-lg">XXXXX(X)</h3>
                    <p className="mt-2 text-white/70">
                      +51 959 217 636<br />
                      +51 995 042 876<br />
                      +34 642 17 50 97
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-3xl border border-white/20 p-8 sm:p-12 shadow-2xl">
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
