import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — United Capitals",
  description: "Habla con el equipo de United Capitals sobre tu perfil de inversión, asesoría patrimonial o una alianza estratégica.",
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 80% -10%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 110%, rgba(234,179,8,0.08), transparent 55%)"
          }}
        ></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Contacto</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            Nuestro equipo está listo para conversar sobre tu perfil de inversión
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Escríbenos para explorar asesoría patrimonial, acceso a oportunidades globales o una alianza como asesor. Respondemos de forma directa y confidencial.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-24">
        <aside className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">Datos de contacto</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              También puedes escribirnos o llamarnos directamente. El formulario te lleva a Gmail con el mensaje ya redactado, listo para revisar y enviar.
            </p>
          </div>
          <dl className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-[#0f172a]/80 p-5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-sky-400">Dirección</dt>
              <dd className="mt-2">
                <a
                  href="https://maps.google.com/?q=Alejo%20Bezada%20131%2C%20Lima%2C%2015088%2C%20Per%C3%BA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-slate-200 transition-colors hover:text-sky-400"
                >
                  Alejo Bezada 131, Lima, 15088, Perú
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0f172a]/80 p-5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-sky-400">Teléfono(s)</dt>
              <dd className="mt-2 flex flex-col space-y-1">
                <a href="tel:+51959217636" className="text-base text-slate-200 transition-colors hover:text-sky-400">
                  +51 959 217 636
                </a>
                <a href="tel:+51995042876" className="text-base text-slate-200 transition-colors hover:text-sky-400">
                  +51 995 042 876
                </a>
                <a href="tel:+34642175097" className="text-base text-slate-200 transition-colors hover:text-sky-400">
                  +34 642 17 50 97
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0f172a]/80 p-5">
              <dt className="text-xs font-semibold uppercase tracking-widest text-sky-400">Correo</dt>
              <dd className="mt-2">
                <a href="mailto:colladojeanfabio@gmail.com" className="break-all text-base text-slate-200 transition-colors hover:text-sky-400">
                  colladojeanfabio@gmail.com
                </a>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-slate-500">
            Consulta el <Link href="/legal" className="text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">Aviso Legal</Link> y la <Link href="/privacy" className="text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline">Política de Privacidad</Link>.
          </p>
        </aside>

        <div className="rounded-2xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-2xl sm:p-8 md:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-white">Envíanos un mensaje</h2>
          <p className="mt-2 mb-8 text-sm leading-relaxed text-slate-400">
            Completa el formulario. Al enviar, se abrirá Gmail con tu mensaje ya redactado hacia colladojeanfabio@gmail.com, listo para que lo revises y presiones enviar.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
