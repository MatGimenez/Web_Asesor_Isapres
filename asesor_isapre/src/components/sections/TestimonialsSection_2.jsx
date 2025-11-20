// src/components/sections/TestimonialsSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-slate-50">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Testimonios"
          title="Personas que ya evaluaron su plan"
          subtitle="Cuando tengas testimonios reales, solo reemplazas estos textos."
        />

        <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div className="bg-white border border-slate-100 rounded-xl p-4 space-y-3">
            <p className="text-slate-700">
              “Logré bajar el valor de mi plan y mantener la clínica que
              utilizaba. El proceso fue claro y rápido.”
            </p>
            <p className="text-xs text-slate-500">
              Carla, 34 años – Santiago
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-4 space-y-3">
            <p className="text-slate-700">
              “Me explicó en simple las diferencias entre planes y pude elegir
              con tranquilidad.”
            </p>
            <p className="text-xs text-slate-500">
              Rodrigo, 41 años – Viña del Mar
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-4 space-y-3">
            <p className="text-slate-700">
              “Nos cambiamos considerando la llegada de nuestro primer hijo.
              Revisamos bien la cobertura de maternidad.”
            </p>
            <p className="text-xs text-slate-500">
              Daniela y Felipe – Concepción
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
