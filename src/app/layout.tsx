import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andes Capital — Equipo especializado en Inversiones Globales",
  description: "Experiencia internacional enfocada en identificar y estructurar oportunidades de inversión para Latinoamérica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-[#f8f9fa] text-[#38404b] font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-[#f8f9fa] text-[#38404b]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
