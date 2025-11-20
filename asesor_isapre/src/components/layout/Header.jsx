// src/components/layout/Header.jsx
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Items_Navbar } from "../JS/Items_Navbar";

const Header = () => {
  const items = Items_Navbar;
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          {/* Logo simple, luego lo puedes reemplazar */}
          <div className="h-9 w-9 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-sm">
            AEY
          </div>
          <div>
            <p className="font-semibold leading-tight">Asesor Isapre</p>
            <p className="text-xs text-slate-500">
              Asesoría en planes de salud en Chile
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          { items.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.byId)?.scrollIntoView({ behavior: "smooth" })} className="text-slate-600 hover:text-sky-700">{item.label}</button>))
          }
          {/* <button
            onClick={() => document.getElementById("why-change")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-600 hover:text-sky-700"
          >
            ¿Por qué cambiar?
          </button>
          <button
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-600 hover:text-sky-700"
          >
            Cómo funciona
          </button>
          <button
            onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-600 hover:text-sky-700"
          >
            Preguntas
          </button> */}
          <Button size="sm" onClick={handleScrollToContact}>
            Evaluar mi plan
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
