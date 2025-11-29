// src/components/sections/IsapresSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// IMPORTA AQUÍ TUS LOGOS
// Ajusta las rutas según donde hayas dejado las imágenes
import isapre1 from "../../assets/Banmédica-logo.webp";
import isapre2 from "../../assets/Colmena Golden Cross-logo.webp";
import isapre3 from "../../assets/Cruz Blanca-logo.webp";
import isapre4 from "../../assets/Nueva Masvida-logo.webp";
import isapre5 from "../../assets/VidaTres-logo.webp";
import isapre6 from "../../assets/Consalud-logo.webp";
import isapre7 from "../../assets/Esencial-logo.webp";
// Agrega más imports si tienes más logos

const isapreLogos = [isapre1, isapre2, isapre3, isapre4, isapre5, isapre6];

const IsapresSection = () => {
  const loopLogos = [...isapreLogos, ...isapreLogos];

  return (
    <section id="isapres" className="py-12 md:py-16 bg-white">
      <Container>
        <div className="flex flex-col xl:flex-row md:items-center gap-8 md:gap-10">
          {/* Texto (full width en mobile, 1/4 en desktop) */}
          <div className="xl:w-1/4 space-y-4">
            <SectionTitle
              eyebrow="Nuestras isapres"
              title="Podemos cotizar con estas isapres líderes en Chile"
              /* subtitle="Evaluamos alternativas según tu situación y vemos qué plan se ajusta mejor a tu ingreso, familia y necesidades médicas."
              align="left" */
            />
            {/* <p className="text-xs md:text-sm text-slate-500">
              Los logos se muestran solo como referencia. La disponibilidad y
              condiciones específicas de los planes dependen de cada isapre.
            </p> */}
          </div>

          {/* Carrusel (full width en mobile, 3/4 en desktop) */}
          <div className="md:w-3/4 relative">
            {/* Gradientes laterales para difuminado */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="overflow-hidden">
              <div className="isapres-track gap-6 md:gap-10">
                {loopLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="
                      flex-none
                      w-28 sm:w-32 md:w-36 lg:w-40
                      flex items-center justify-center
                    "
                  >
                    <img
                      src={logo}
                      alt={`Logo isapre ${index + 1}`}
                      className="
                        w-full h-auto object-contain
                        max-h-12 md:max-h-14
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
        </div>
      </Container>
    </section>
  );
};

export default IsapresSection;