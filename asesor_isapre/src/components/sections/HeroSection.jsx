// src/components/sections/HeroSection.jsx
import Container from "../ui/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/doctor-paciente-3.webp"; // Asegúrate de tener esta imagen en assets

const HeroSection = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phone = "569XXXXXXXX"; // Reemplaza por el número real
    const message = encodeURIComponent(
      "Hola, quiero evaluar mi plan de isapre."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="border-b border-slate-200 bg-gradient-to-b from-sky-50/60 to-slate-50"
    >
      <Container className="py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-sky-100 px-3 py-1 text-xs text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Asesoría personalizada en planes de isapre
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Cámbiate de isapre con asesoría experta en Chile
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Te asesoro para encontrar el mejor plan de salud según tu ingreso,
              familia y necesidades médicas. Evaluación sin costo para ti, con
              atención a todo Chile.
            </p>
          </div>

          <ul className="text-sm text-slate-700 space-y-1.5">
            <li>• Análisis de tu plan actual y alternativas.</li>
            <li>• Comparación entre distintas isapres.</li>
            <li>• Acompañamiento en todo el proceso de cambio.</li>
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={handleScrollToContact} size="lg">
              Evaluar mi plan
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppClick}
            >
              Hablar por WhatsApp
            </Button>
          </div>

          <p className="text-xs text-slate-500">
            Respuesta en menos de 24 horas hábiles. Tus datos se usan solo para
            contactarte por esta asesoría.
          </p>
        </div>

        {/* Lado visual */}
        <div className="relative">
          {/* Imagen de fondo en ámbito hospitalario */}
          <div className="relative h-100 md:h-100 lg:h-120 overflow-hidden rounded-3xl">
            <img
              src={heroImage}
              alt="Atención en salud en ámbito hospitalario"
              className="w-full h-full object-cover"
            />
            {/* Capa de color para integrar con tu paleta */}
            <div className="absolute inset-0 bg-sky-900/25 mix-blend-multiply" />
          </div>

          {/* Tarjeta flotante con el ejemplo de caso (lo que ya tenías) */}
          <div className="absolute inset-x-4 md:inset-x-8 bottom-4">
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 md:p-5 space-y-3">
              <p className="text-sm font-semibold text-slate-900">
                Ejemplo de caso:
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• Afiliado en isapre por más de 5 años.</p>
                <p>• Aumento sostenido del valor del plan.</p>
                <p>• Nueva carga familiar (hijos).</p>
              </div>
              <div className="border-t border-slate-200 pt-3 space-y-1">
                <p className="text-xs text-slate-500">Resultado asesoría:</p>
                <p className="text-sm text-slate-800">
                  Reducción del costo mensual con mejor cobertura hospitalaria,
                  manteniendo clínica preferente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-sky-200/40 rounded-full -z-10" />
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 space-y-4">
            <p className="text-sm font-semibold text-slate-900">
              Ejemplo de caso:
            </p>
            <div className="space-y-1 text-xs text-slate-600">
              <p>• Afiliado en isapre por más de 5 años.</p>
              <p>• Aumento sostenido del valor del plan.</p>
              <p>• Nueva carga familiar (hijos).</p>
            </div>
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <p className="text-xs text-slate-500">Resultado asesoría:</p>
              <p className="text-sm text-slate-800">
                Reducción del costo mensual con mejor cobertura hospitalaria,
                manteniendo clínica preferente.
              </p>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default HeroSection;
