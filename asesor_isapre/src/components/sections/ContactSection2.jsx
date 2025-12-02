// src/components/sections/ContactSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import React, { useState } from "react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phone = "5"; // Reemplaza por el número real
    const message = encodeURIComponent(
      "Hola, quiero que evalúes mi plan de isapre."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.target;
    const formData = new FormData(form);

    // Netlify requiere el campo form-name
    formData.append("form-name", "contact-isapre");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus("success");
      form.reset();
      setIsapre("");
      setRangoIngreso("");
    } catch (error) {
      console.error("Error al enviar formulario", error);
      setStatus("error");
    }
  };

  const [isapre, setIsapre] = useState("");
  const [rangoIngreso, setRangoIngreso] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  return (
    <section
      id="contact"
      className="py-12 md:py-16"
    >
      <Container className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Contacto"
            title="Solicita la evaluación de tu plan"
            subtitle="Completa el formulario o escríbenos al WhatsApp para coordinar una asesoría breve."
            align="left"
          />
          <div className="space-y-2 text-sm text-slate-600">
            <p>• Atención a todo Chile.</p>
            <p>• Respuesta en menos de 24 horas hábiles.</p>
            <p>• Tus datos se utilizan solo para esta asesoría.</p>
          </div>

          <Button
            variant=""
            size="md"
            className="mt-2 border-slate-900 text-slate-50 bg-green-500 hover:bg-green-600"
            onClick={handleWhatsAppClick}
          >
            Prefiero hablar por WhatsApp <span className="px-2 text"><i className="fa-brands fa-whatsapp"></i></span>
          </Button>
        </div>

        <form
          name="contact-isapre"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-sky-900 rounded-2xl p-5 space-y-4 shadow-md"
        >
          {/* Honeypot para bots */}
            <input type="hidden" name="form-name" value="contact-isapre" />
            <p className="hidden">
              <label>
                No llenar este campo: <input name="bot-field" />
              </label>
            </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Edad
              </label>
              <input
                type="number"
                name="age"
                className="w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ej: 30"
              />
            </div>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Pasaje/Calle/Avenida, Comuna."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Ciudad
              </label>
              <input
                type="text"
                name="city"
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ej: Santiago, RM"
              />
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="tu@correo.cl"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="+56 9 ..."
              />
            </div>

          </div>


          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Situación actual de Salud
              </label>
              <select name="lista_isapres" id="ls_isapre"
                className="
              w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-500 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600" 
              value={isapre} 
              onChange={(e) => setIsapre(e.target.value)}>
                <option value="" disabled>Selecciona tu situación</option>
                <option value="sin-cobertura">Sin cobertura</option>
                <option value="ls-fonasa">Fonasa</option>
                <option value="ls-banmedica">Banmedica</option>
                <option value="ls-colmena">Colmena</option>
                <option value="ls-consalud">Consalud</option>
                <option value="ls-cruzblanca">Cruz Blanca</option>
                <option value="ls-nuevamasvida">Nueva Masvida</option>
                <option value="ls-esencial">Esencial</option>
                <option value="ls-vidatres">Vida Tres</option>
                <option value="ls-otra-isapre">Otra Isapre</option>
              </select>
              {/* <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="tu@correo.cl"
              /> */}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Rango de ingreso mensual bruto
              </label>
              <select name="rango_ingreso" id="rango_ingreso"
                className="
              w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-500 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
              value={rangoIngreso}
              onChange={(e) => setRangoIngreso(e.target.value)}>
                <option value="" disabled>Selecciona un rango</option>
                <option value="menos-500000">Menos de $500.000</option>
                <option value="500000-1000000">$500.000 - $1.000.000</option>
                <option value="1000000-2000000">$1.000.000 - $2.000.000</option>
                <option value="2000000-3500000">$2.000.000 - $3.500.000</option>
                <option value="mas-3500000">Más de $3.500.000</option>
              </select>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Número de cargas familiares
              </label>
              <input
                type="number"
                name="num_cargas"
                className="w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ej: 3"
              />
            </div>

            {/* <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Rango de ingreso mensual bruto
              </label>
              <select name="rango_ingreso" id="rango_ingreso" 
              className="
              w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500">
                <option value="menos-500000">Menos de $500.000</option>
                <option value="500000-1000000">$500.000 - $1.000.000</option>
                <option value="1000000-2000000">$1.000.000 - $2.000.000</option>
                <option value="2000000-3500000">$2.000.000 - $3.500.000</option>
                <option value="mas-3500000">Más de $3.500.000</option>
              </select>
            </div> */}

          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              ¿Qué te gustaría mejorar de tu plan actual?
            </label>
            <textarea
              name="message"
              rows={3}
              className="w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Ej: bajar el costo, mejorar cobertura hospitalaria, maternidad, etc."
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            data-analytics="lead_form_submit"
            disabled={status === "loading"}>
            Enviar solicitud de evaluación
          </Button>

          <p className="text-[11px] text-slate-50">
            Al enviar este formulario aceptas que te contacte para revisar tu
            plan de salud. No compartiré tus datos con terceros sin tu
            autorización.
          </p>
        </form>
      </Container>
    </section>
  );
};

export default ContactSection;
