"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, correo, telefono, asunto, mensaje } = formData;
    
    const subject = asunto || `Contacto de ${nombre}`;
    const body = `Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono || 'No especificado'}

Mensaje:
${mensaje}`;

    // Usar la URL de redacción de Gmail explícitamente en lugar de mailto:
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=colladojeanfabio@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-nombre" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#38404b]/80">
          Nombre completo
        </label>
        <input
          id="contact-nombre"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-lg border border-[#38404b]/10 bg-[#f8f9fa] px-4 py-3 text-sm text-[#38404b] placeholder:text-[#38404b]/60 transition-colors focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"
          placeholder="Tu nombre y apellido"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact-correo" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#38404b]/80">
          Correo electrónico
        </label>
        <input
          id="contact-correo"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-[#38404b]/10 bg-[#f8f9fa] px-4 py-3 text-sm text-[#38404b] placeholder:text-[#38404b]/60 transition-colors focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"
          placeholder="tu@correo.com"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact-telefono" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#38404b]/80">
          Teléfono <span className="font-normal text-[#38404b]/60">(opcional)</span>
        </label>
        <input
          id="contact-telefono"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-lg border border-[#38404b]/10 bg-[#f8f9fa] px-4 py-3 text-sm text-[#38404b] placeholder:text-[#38404b]/60 transition-colors focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"
          placeholder="+51 900 000 000"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact-asunto" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#38404b]/80">
          Asunto <span className="font-normal text-[#38404b]/60">(opcional)</span>
        </label>
        <input
          id="contact-asunto"
          type="text"
          className="w-full rounded-lg border border-[#38404b]/10 bg-[#f8f9fa] px-4 py-3 text-sm text-[#38404b] placeholder:text-[#38404b]/60 transition-colors focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"
          placeholder="Perfil de inversión, asesoría, alianza…"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact-mensaje" className="mb-1.5 block text-xs font-semibold tracking-wide text-[#38404b]/80">
          Mensaje
        </label>
        <textarea
          id="contact-mensaje"
          name="mensaje"
          rows={6}
          required
          className="w-full rounded-lg border border-[#38404b]/10 bg-[#f8f9fa] px-4 py-3 text-sm text-[#38404b] placeholder:text-[#38404b]/60 transition-colors focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40 resize-y min-h-[140px]"
          placeholder="Cuéntanos sobre tu perfil, horizonte y lo que buscas."
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#72563f] px-7 py-3.5 text-sm font-semibold text-[#030712] transition-colors hover:bg-[#8c6b4e] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
