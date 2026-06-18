import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { EnviosFlexHero } from "@/components/servicios/flex/EnviosFlexHero";
import { EnviosFlexContent } from "@/components/servicios/flex/EnviosFlexContent";
import { MercadoLibreBenefits } from "@/components/servicios/flex/MercadoLibreBenefits";
import { FlexPricingRanges } from "@/components/servicios/flex/FlexPricingRanges";
import { HowItWorks } from "@/components/servicios/flex/HowItWorks";
import { Requirements } from "@/components/servicios/flex/Requirements";

export const metadata: Metadata = {
  title: "Mercado Libre Flex Mar del Plata | Envíos en el Mismo Día",
  description: "Logística certificada para Mercado Libre Flex en Mar del Plata. Asegurá tus entregas Same-Day y mejorá tu reputación con el líder en última milla.",
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <EnviosFlexHero />
      <EnviosFlexContent />
      <MercadoLibreBenefits />
      <FlexPricingRanges />
      <HowItWorks />
      <Requirements />
      <Footer />
    </main>
  );
}
