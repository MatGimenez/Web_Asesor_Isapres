// src/components/layout/Footer.jsx
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-6 text-sm text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Asesor Isapre. Todos los derechos
          reservados.
        </p>
        <p className="text-xs">
          La información proporcionada en este sitio es de carácter referencial
          y no sustituye el análisis de cada isapre ni las condiciones
          particulares de cada contrato.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
