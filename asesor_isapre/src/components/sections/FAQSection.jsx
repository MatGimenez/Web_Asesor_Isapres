// src/components/sections/FAQSection.jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    question: "¿La asesoría tiene costo?",
    answer:
      "No, mi asesoría no tiene costo directo para ti. Mi trabajo se financia a través de la intermediación con las isapres.",
  },
  {
    question: "¿Atiendes solo en Santiago o a todo Chile?",
    answer:
      "Trabajo de forma remota, por lo que puedo asesorarte estés donde estés dentro de Chile.",
  },
  {
    question: "¿Cuánto demora el proceso de cambio?",
    answer:
      "Depende de la isapre y la documentación, pero en promedio puede tomar entre algunos días y pocas semanas.",
  },
  {
    question: "¿Qué pasa si tengo preexistencias?",
    answer:
      "Revisamos tu situación particular y evaluamos qué alternativas son viables según las políticas de cada isapre.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Preguntas frecuentes sobre el cambio de isapre"
          title="Lo que la mayoría quiere saber antes de cambiarse"
        />

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl p-4 bg-slate-50"
            >
              <p className="text-sm font-semibold text-slate-900">
                {item.question}
              </p>
              <p className="text-sm text-slate-600 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
