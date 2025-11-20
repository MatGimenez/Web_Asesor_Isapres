// src/components/sections/TestimonialsSection.jsx
import { useEffect, useState } from "react";
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
      "Me explicó en simple las diferencias entre planes y pude elegir con tranquilidad.",
    name: "Rodrigo, 41 años – Viña del Mar",
  },
  {
    quote:
      "Nos cambiamos considerando la llegada de nuestro primer hijo. Revisamos bien la cobertura de maternidad.",
    name: "Daniela y Felipe – Concepción",
  },
];

const AUTO_PLAY_DELAY = 6000; // ms

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play infinito
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-slate-50">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Testimonios"
          title="Personas que ya evaluaron su plan"
          subtitle="Cuando tengas testimonios reales, solo reemplazas estos textos."
          align="center"
        />

        <div className="max-w-2xl mx-auto">
          <div className="relative h-48 md:h-40">
            {/* Pila de slides con animación de fade/slide */}
            {testimonials.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`
                    absolute inset-0 rounded-2xl border border-slate-400 bg-zinc-100 shadow-md
                    px-6 py-6 md:px-8 md:py-7
                    transition-all duration-500 ease-out
                    ${isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-4 pointer-events-none"
                    }
                  `}
                >
                  <p className="text-sm md:text-base text-slate-700 mb-4 text-zinc-700 ">
                    “{item.quote}”
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 text-zinc-500">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bullets de navegación (también se pueden clickear) */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`
                  h-2.5 w-2.5 rounded-full transition-all
                  ${index === currentIndex
                    ? "bg-sky-600 scale-110"
                    : "bg-slate-300 hover:bg-slate-400"
                  }
                `}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
