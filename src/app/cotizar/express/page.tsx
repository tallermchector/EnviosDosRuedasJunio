import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { CalculatorHero } from "@/components/cotizar/express/CalculatorHero";
import { ExpressCalculator } from "@/components/cotizar/express/ExpressCalculator";
import { MapFeatures } from "@/components/cotizar/express/MapFeatures";
import { PricingInfo } from "@/components/cotizar/express/PricingInfo";
import { CalculatorTips } from "@/components/cotizar/express/CalculatorTips";
import { CalculatorContact } from "@/components/cotizar/express/CalculatorContact";

export const metadata: Metadata = {
  title: "Cotizador de Mensajería Express Online | Mar del Plata",
  description: "Calculá en tiempo real el costo de tu envío express en Mar del Plata. Cotizador online de cadetería en moto para entregas rápidas y seguras.",
};

export default function ExpressQuoterPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      
      <CalculatorHero />
      
      <ExpressCalculator />

      <MapFeatures />

      <PricingInfo />

      <CalculatorTips />

      <CalculatorContact />

      <Footer />
    </main>
  );
}
