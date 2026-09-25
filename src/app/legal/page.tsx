import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal — Andes Capital",
  description: "Aviso legal y términos de uso de Andes Capital.",
};

export default function Legal() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Aviso Legal</h1>
      <div className="prose prose-invert max-w-none text-[#38404b]/80 space-y-6">
        <p>
          Este sitio web es operado por Andes Capital. El contenido de este sitio web es puramente informativo y no constituye una oferta, solicitud o recomendación para comprar o vender valores, ni para participar en ninguna estrategia de inversión.
        </p>
        <p>
          Toda inversión implica riesgo, incluida la posible pérdida de capital. Los rendimientos pasados no son garantía de resultados futuros. Se recomienda encarecidamente consultar con asesores financieros, legales y fiscales independientes antes de tomar cualquier decisión de inversión.
        </p>
        <p>
          Andes Capital no garantiza la exactitud, integridad o actualización de la información proporcionada en este sitio. Las opiniones expresadas pueden cambiar sin previo aviso.
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
