import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqContent } from "@/components/faq/FaqContent";
import { FaqContactCta } from "@/components/faq/FaqContactCta";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Soporte y Cobertura en Mar del Plata",
  description: "Resolvé tus dudas sobre horarios, zonas de cobertura en Mar del Plata y métodos de pago. Todo lo que necesitás saber para tus envíos DosRuedas.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <FaqHero />
      <FaqContent />
      <FaqContactCta />
      <Footer />
    </main>
  );
}
