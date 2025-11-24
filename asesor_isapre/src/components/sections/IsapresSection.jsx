// src/components/sections/IsapresSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// IMPORTA AQUÍ TUS LOGOS
// Ajusta las rutas según donde hayas dejado las imágenes
import isapre1 from "../../assets/Banmédica-20250525164302.webp";
import isapre2 from "../../assets/Colmena Golden Cross-20250525164241.webp";
import isapre3 from "../../assets/Cruz Blanca-20250525164311.webp";
import isapre4 from "../../assets/Nueva Masvida-20250525164322.webp";
import isapre5 from "../../assets/VidaTres-20250525164333.webp";
// Agrega más imports si tienes más logos

const isapreLogos = [isapre1, isapre2, isapre3, isapre4, isapre5];

const IsapresSection = () => {
  // Duplicamos array para loop continuo
  const loopLogos = [...isapreLogos, ...isapreLogos];

  return (
    <section id="isapres" className="py-12 md:py-16 bg-white">
      <Container className="grid md:grid-cols-4 gap-8 md:gap-10 items-center">
        {/* Texto 1/4 */}
        <div className="md:col-span-1 space-y-6">
          <SectionTitle
            /* eyebrow="Red de isapres" */
            title="Nuestras isapres:"
            /* subtitle="Podemos cotizar con cualquiera de estas isapres líderes en Chile" 
            subtitle="Te ayudamos a evaluar alternativas en distintas isapres para encontrar el plan que mejor se ajuste a tu realidad."
            align="left" */
          />
          <p className="text-xs md:text-sm text-slate-500">
            Podemos cotizar con cualquiera de estas isapres líderes en Chile.
          </p>
        </div>

        {/* Carrusel 3/4 */}
        <div className="md:col-span-3 relative">
          {/* Gradientes de difuminado laterales */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="isapres-track gap-9 md:gap-15">
              {loopLogos.map((logo, index) => (
                <div
                  key={index}
                  className="
                    flex-none
                    w-28 md:w-32 lg:w-40
                    flex items-center justify-center
                  "
                >
                  <img
                    src={logo}
                    alt={`Logo isapre ${index + 1}`}
                    className="
                      w-full h-auto object-contain
                      filter
                      opacity-70
                      transition
                      hover:opacity-100 hover:grayscale-0
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IsapresSection;
