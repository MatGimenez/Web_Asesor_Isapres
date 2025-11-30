// src/components/sections/TestimonialsSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    quote:
      "Logré bajar el valor de mi plan y mantener la clínica que utilizaba. El proceso fue claro y rápido.",
    name: "Carla, 34 años – Santiago",
  },
  {
    quote:
      "Me explicaron en simple las diferencias entre planes y pude elegir con tranquilidad.",
    name: "Rodrigo, 41 años – Viña del Mar",
  },
  {
    quote:
      "Nos cambiamos considerando la llegada de nuestro primer hijo. Revisamos bien la cobertura de maternidad.",
    name: "Daniela y Felipe – Concepción",
  },
  {
    quote:
      "Pude ajustar mi plan a mi nueva renta sin perder la red de clínicas que utilizo.",
    name: "Marcelo, 39 años – Talca",
  },
];

const TestimonialsSection = () => {
  // Duplicamos para lograr un loop continuo
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-slate-50">
      <Container className="space-y-15">
        <SectionTitle
          eyebrow="Testimonios"
          title="Personas que ya evaluaron su plan"
          /* subtitle="Cuando tengas testimonios reales, solo reemplazas estos textos." */
          align="center"
        />

        <div className="relative">
          {/* Gradientes de difuminado en los bordes */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          {/* Carrusel infinito */}
          <div className="overflow-hidden">
            <div className="testimonials-track gap-4 md:gap-6">
              {loopTestimonials.map((item, index) => (
                <article
                  key={index}
                  className="
                    flex-none
                    w-72 md:w-80
                    bg-white border border-slate-100 rounded-2xl
                    px-5 py-5 md:px-6 md:py-6
                    shadow-sm
                    text-sm text-slate-700
                  "
                >
                  <p className="mb-3 md:mb-4">
                    “{item.quote}”
                  </p>
                  <p className="text-xs md:text-sm text-slate-500">
                    {item.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
