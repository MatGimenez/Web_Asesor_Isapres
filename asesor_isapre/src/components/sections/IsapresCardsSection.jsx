// src/components/sections/IsapresCardsSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { isapres } from "../../components/JS/Items_Isapres"

const IsapresCardsSection = () => {
  return (
    <section id="isapres-cards" className="py-12 md:py-16 bg-white">
      <Container className="space-y-15">
        <SectionTitle
          eyebrow="Isapres con las que trabajamos"
          title="Evaluamos alternativas en distintas isapres para ti"
          /* subtitle="Estas son algunas de las isapres con las que podemos revisar opciones de planes, siempre en función de tu ingreso, carga familiar y necesidades de salud." */
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isapres.map((isapre) => (
            <article
              key={isapre.id}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                p-4 md:p-5
                flex flex-col
                gap-3
                shadow-sm
                hover:shadow-md
                transition-shadow
              "
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="h-20 w-30 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 overflow-hidden">
                  <img
                    src={isapre.logo}
                    alt={isapre.name}
                    className="w-full h-full object-contain filter"
                  />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    {isapre.name}
                  </h3>
                  {isapre.tagline && (
                    <p className="text-xs text-slate-500">
                      {isapre.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Texto adicional */}
              {/* {isapre.note && (
                <p className="text-xs md:text-sm text-slate-600">
                  {isapre.note}
                </p>
              )} */}

              {/* Footer de la card (opcional) */}
              {isapre.url && (
                <div className="mt-auto pt-2 border-t border-slate-100">
                  <a
                    href={isapre.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-800"
                  >
                    Ver sitio oficial
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="text-[11px] text-slate-500 text-center max-w-2xl mx-auto">
          La asesoría se realiza siempre de forma independiente, explicando en
          simple las diferencias entre planes y condiciones. La oferta concreta
          de coberturas y valores depende de cada isapre y de tu situación
          particular.
        </p>
      </Container>
    </section>
  );
};

export default IsapresCardsSection;
