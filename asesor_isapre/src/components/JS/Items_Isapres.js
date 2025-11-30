import cruzBlancaLogo from "../../assets/Cruz Blanca-logo.webp";
import colmenaLogo from "../../assets/Colmena Golden Cross-logo.webp";
import consaludLogo from "../../assets/Consalud-logo.webp";
import banmedicaLogo from "../../assets/Banmédica-logo.webp";
import vidaTresLogo from "../../assets/VidaTres-logo.webp";
import nuevaMasvidaLogo from "../../assets/Nueva Masvida-logo.webp";

// Array principal reutilizable en toda la app
export const isapres = [
  {
    id:1,
    ident: "cruz-blanca",
    name: "Cruz Blanca",
    logo: cruzBlancaLogo,
    tagline2: "Planes de salud con foco en clínicas privadas.",
    tagline:"Descripción breve de la isapre. Características principales.",
    note: "Recomendable para quienes priorizan red privada y atención rápida.",
    url: "https://www.cruzblanca.cl",
    active: true,
  },
  {
    id:2,
    ident: "colmena",
    name: "Colmena",
    logo: colmenaLogo,
    tagline2: "Cobertura amplia y enfoque en medicina preventiva.",
    tagline:"Descripción breve de la isapre. Características principales.",
    note: "Interesante para familias que usan con frecuencia consultas y exámenes.",
    url: "https://www.colmena.cl",
    active: true,
  },
  {
    id:3,
    ident: "consalud",
    name: "Consalud",
    logo: consaludLogo,
    tagline2: "Planes flexibles según ingreso y carga familiar.",
    tagline:"Descripción breve de la isapre. Características principales.",
    note: "Ofrece alternativas para distintos niveles de renta y realidades familiares.",
    url: "https://www.consalud.cl",
    active: true,
  },
  {
    id:4,
    ident: "banmedica",
    name: "Banmédica",
    logo: banmedicaLogo,
    tagline2: "Tradición y red clínica consolidada.",
    tagline:"Descripción breve de la isapre. Características principales.",
    note: "Interesante cuando se prioriza red de clínicas específicas.",
    url: "https://www.banmedica.cl/",
    active: true,
  },
  {
    id:5,
    ident: "vida-tres",
    name: "Vida Tres",
    logo: vidaTresLogo,
    tagline2: "Planes orientados a segmentos de alta demanda clínica.",
    tagline:"Descripción breve de la isapre. Características principales.",
    note: "Suele ser considerada por usuarios que usan bastante prestaciones privadas.",
    url: "https://www.vidatres.cl",
    active: true,
  },
  {
    id:6,
    ident: "nueva-masvida",
    name: "Nueva MasVida",
    logo: nuevaMasvidaLogo,
    tagline2: "Cobertura en distintas regiones del país.",
    tagline:"Descripción breve de la isapre. Características principales.",
    note: "Alternativa a considerar fuera de la Región Metropolitana.",
    url: "https://www.nuevamasvida.cl",
    active: true,
  },
];

// Si en algún momento quieres destacar algunas isapres en particular
export const featuredIsapres = isapres.filter((i) => i.active);
