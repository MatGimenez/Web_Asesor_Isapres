// src/components/sections/WhyChangeSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const WhyChangeSection = () => {
  return (
    <section id="why-change" className="py-12 md:py-16 bg-white">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="¿Por qué cambiar de isapre?"
          title="¿Pagas demasiado por tu plan de salud?"
          subtitle="Con el tiempo tu situación cambia: ingreso, familia, prioridades médicas. Tu plan de isapre debería ajustarse a esa realidad, no al revés."
        />

        <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              Subidas de precio sin explicación clara
            </h3>
            <p>
              Revisamos si el valor que estás pagando hoy se justifica según la
              cobertura que realmente recibes.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              Cambios en tu familia o trabajo
            </h3>
            <p>
              Nuevos hijos, matrimonio, cambio de renta o empleador impactan en
              el tipo de plan que más te conviene.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              Necesidades médicas específicas
            </h3>
            <p>
              Maternidad, cirugías programadas o tratamientos crónicos requieren
              evaluar bien la red y la cobertura.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChangeSection;
