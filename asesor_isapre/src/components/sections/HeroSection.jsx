// src/components/sections/HeroSection.jsx
import Container from "../ui/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/doctor-paciente-3.webp";

const HeroSection = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phone = "569XXXXXXXX"; // Reemplazar por el número real
    const message = encodeURIComponent(
      "Hola, quiero evaluar mi plan de isapre."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="border-b border-slate-200 bg-gradient-to-b from-sky-50/60 to-slate-50 -mt-8 px-4 md:px-0"
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
              Te ayudamos a encontrar el mejor plan de salud según tu ingreso,
              familia y necesidades médicas. Evaluación sin costo para ti, con
              atención a todo Chile.
            </p>
          </div>

          <ul className="text-sm text-slate-700 space-y-1.5">
            <li>• Análisis de tu plan actual y alternativas.</li>
            <li>• Comparación entre distintas isapres.</li>
            <li>• Acompañamiento en todo el proceso de cambio.</li>
          </ul>

          {/* CUADRO DE BENEFICIO ANUAL */}
          <div className="rounded-2xl border border-emerald-500 bg-emerald-50 px-4 py-3 flex items-start gap-3">
            <div className="mt-3 w-16 h-7 lg:w-11 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold">
              <span><i class="fa-solid fa-trophy"></i></span>
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-900">
                1 asesoría anual sin costo
              </p>
              <p className="text-xs text-emerald-700">
                Al evaluarte con nosotros, todos los años tendrás una asesoría
                totalmente gratuita para revisar si tu plan sigue siendo el más
                conveniente.
              </p>
              <div className="gap-4 py-3 lg:inline-flex">
                <div >
                  <p className="text-sm text-emerald-900 font-semibold">Toma tu plan con Asesores certificados por la Superintendencia de Salud.</p>
                </div>
                <div className="w-30 my-2" >
                  <img src="https://www.superdesalud.gob.cl/app/themes/supersalud/assets/img/logo-supersalud-16.svg" alt="logo-superintentencia" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={handleScrollToContact} size="lg">
              Evaluar mi plan 
            </Button>
            <Button
              variant=""
              size="lg"
              className="border-none text-slate-50 bg-green-500 hover:bg-green-600"
              onClick={handleWhatsAppClick}
            >
              Hablar por WhatsApp <span className="px-2 text"><i className="fa-brands fa-whatsapp"></i></span>
            </Button>
          </div>

          {/* SUPERINTENDENCIA */}
          {/* <div className="items-center gap-4 p-2 rounded-lg border-slate-200 border bg-sky-50 inline-flex">
            <div >
              <p className="text-sm text-sky-600 font-bold">Toma tu plan con Asesores certificados por la Superintendencia de Salud.</p>
            </div>
            <div className="w-25 my-2" >
              <img src="https://www.superdesalud.gob.cl/app/themes/supersalud/assets/img/logo-supersalud-16.svg" alt="logo-superintentencia" />
            </div>
          </div> */}

          <p className="text-xs text-slate-500">
            Respuesta en menos de 24 horas hábiles. Tus datos se usan solo para
            contactarte por esta asesoría.
          </p>
        </div>

        {/* Lado visual */}
        <div className="relative">
          {/* Imagen de fondo*/}
          <div className="relative h-100 md:h-100 lg:h-135 overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
            <img
              src={heroImage}
              alt="Atención en salud en ámbito hospitalario"
              className="w-full h-full object-cover"
            />
            {/* Capa de color para integrar con tu paleta */}
            {/* <div className="absolute inset-0 bg-sky-900/25 mix-blend-multiply" /> */}
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
