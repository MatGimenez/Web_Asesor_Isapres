// src/components/sections/HowItWorksSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-slate-50">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Proceso"
          title="Así de simple es cambiarte de isapre"
          subtitle="Trabajamos 100% online, con pasos claros y tiempos acotados."
        />

        <ol className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
          <li className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-sky-600 mb-1">
              Paso 1
            </p>
            <h3 className="font-semibold text-slate-900 mb-2">
              Agenda tu asesoría
            </h3>
            <p>
              Generamos el contacto por formulario o WhatsApp y agendamos una llamada
              breve para entender tu situación.
            </p>
          </li>

          <li className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-sky-600 mb-1">
              Paso 2
            </p>
            <h3 className="font-semibold text-slate-900 mb-2">
              Revisión y propuesta
            </h3>
            <p>
              Analizamos tu plan actual y preparamos alternativas con diferencias
              claras en precio y cobertura.
            </p>
          </li>

          <li className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-sky-600 mb-1">
              Paso 3
            </p>
            <h3 className="font-semibold text-slate-900 mb-2">
              Cambio de plan
            </h3>
            <p>
              Si decides avanzar, te acompañamos en todo el proceso de cambio y
              seguimiento inicial del nuevo plan.
            </p>
          </li>
        </ol>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
