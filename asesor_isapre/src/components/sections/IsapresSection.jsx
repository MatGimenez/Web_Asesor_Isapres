// src/components/sections/IsapresSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { isapres } from "../../components/JS/Items_Isapres"


const IsapresSection = () => {
  const isapreLogos = isapres.map((isapre) => isapre.logo);
  const loopLogos = [...isapreLogos, ...isapreLogos];

  return (
    <section id="isapres" className="py-12 md:py-16 bg-white">
      <Container>
        <div className="flex flex-col md:items-center gap-8 md:gap-10">
          {/* Texto (full width en mobile, 1/4 en desktop) */}
          <div className="xl:w-full space-y-4">
            {/* <SectionTitle
              eyebrow="Nuestras alianzas"
              title="Nuestras alianzas"
               subtitle="Evaluamos alternativas según tu situación y vemos qué plan se ajusta mejor a tu ingreso, familia y necesidades médicas."
              align="left"
            /> */}
             {/* <p className="text-xs md:text-sm text-slate-500 -mt-5">
              Evaluamos alternativas según tu situación y vemos qué plan se ajusta mejor a tu ingreso, familia y necesidades médicas.
            </p> */}
            <div className="text-center mt-10">
              <h2 className="text-xl md:text-2xl font-semibold text-sky-600 uppercase tracking-[0.16em]">Nuestras alianzas</h2>
            </div>
          </div>

          {/* Carrusel (full width en mobile, 3/4 en desktop) */}
          <div className="md:w-full relative">
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
                        transition
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