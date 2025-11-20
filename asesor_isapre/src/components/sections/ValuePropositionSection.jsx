// src/components/sections/ValuePropositionSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const ValuePropositionSection = () => {
  return (
    <section id="value" className="py-12 md:py-16 bg-slate-50">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Qué hago por ti"
          title="Te acompaño en todo el proceso, de inicio a fin"
          subtitle="No tienes que aprenderte todos los detalles de cada isapre. Yo traduzco el lenguaje técnico a decisiones simples."
        />

        <div className="grid md:grid-cols-4 gap-6 text-sm text-slate-700">
          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              1. Análisis de tu situación
            </h3>
            <p>
              Revisamos tu plan actual, tu ingreso, cargas familiares y tus
              prioridades de salud.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              2. Comparación de planes
            </h3>
            <p>
              Busco alternativas en distintas isapres con foco en cobertura
              real, no solo en el precio.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              3. Recomendación clara
            </h3>
            <p>
              Te presento pocas opciones concretas, con pros y contras explicados
              en simple.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              4. Gestión del cambio
            </h3>
            <p>
              Te acompaño en el trámite para actualizar o cambiar tu plan,
              minimizando tiempos y errores.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ValuePropositionSection;
