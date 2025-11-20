// src/App.jsx
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import WhyChangeSection from "./components/sections/WhyChangeSection";
import ValuePropositionSection from "./components/sections/ValuePropositionSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <WhyChangeSection />
        <ValuePropositionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
