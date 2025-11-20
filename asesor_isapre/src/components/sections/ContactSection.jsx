// src/components/sections/ContactSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phone = "569XXXXXXXX"; // Reemplaza por el número real
    const message = encodeURIComponent(
      "Hola, quiero que evalúes mi plan de isapre."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectas con Netlify Forms, API propia o servicio externo
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-slate-900 text-slate-50"
    >
      <Container className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Contacto"
            title="Solicita la evaluación de tu plan"
            subtitle="Completa el formulario o escríbeme por WhatsApp para coordinar una asesoría breve."
            align="left"
          />
          <div className="space-y-2 text-sm text-slate-300">
            <p>• Atención a todo Chile.</p>
            <p>• Respuesta en menos de 24 horas hábiles.</p>
            <p>• Tus datos se utilizan solo para esta asesoría.</p>
          </div>

          <Button
            variant="outline"
            size="md"
            className="mt-2 border-slate-300 text-slate-50 hover:bg-slate-800"
            onClick={handleWhatsAppClick}
          >
            Prefiero hablar por WhatsApp
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-5 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Ciudad / Región
              </label>
              <input
                type="text"
                name="city"
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Ej: Santiago, RM"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="+56 9 ..."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              ¿Qué te gustaría mejorar de tu plan actual?
            </label>
            <textarea
              name="message"
              rows={3}
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Ej: bajar el costo, mejorar cobertura hospitalaria, maternidad, etc."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Enviar solicitud de evaluación
          </Button>

          <p className="text-[11px] text-slate-400">
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
