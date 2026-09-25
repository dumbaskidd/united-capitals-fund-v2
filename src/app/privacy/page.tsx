import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Andes Capital",
  description: "Política de privacidad y protección de datos de Andes Capital.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Política de Privacidad</h1>
      <div className="prose prose-invert max-w-none text-[#38404b]/80 space-y-6">
        <p>
          En Andes Capital respetamos y protegemos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y salvaguardamos su información personal.
        </p>
        <h2 className="text-xl font-semibold text-[#38404b] mt-8 mb-4">Información que recopilamos</h2>
        <p>
          Podemos recopilar información personal, como su nombre, correo electrónico y número de teléfono, cuando usted se comunica con nosotros a través de nuestro formulario de contacto o por correo electrónico.
        </p>
        <h2 className="text-xl font-semibold text-[#38404b] mt-8 mb-4">Uso de la información</h2>
        <p>
          La información recopilada se utiliza exclusivamente para responder a sus consultas, enviarle información solicitada y comunicarnos con usted en relación a nuestros servicios. No vendemos ni compartimos su información personal con terceros para fines comerciales sin su consentimiento expreso.
        </p>
        <h2 className="text-xl font-semibold text-[#38404b] mt-8 mb-4">Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos en <strong>colladojeannette@gmail.com</strong>.
        </p>
        <div className="mt-12">
          <Link href="/" className="text-[#72563f] hover:text-[#8c6b4e]">
            &larr; Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
