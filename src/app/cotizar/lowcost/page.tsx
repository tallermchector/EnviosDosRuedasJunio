import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LowCostCalculatorHero } from "@/components/cotizar/lowcost/LowCostCalculatorHero";
import { LowCostCalculator } from "@/components/cotizar/lowcost/LowCostCalculator";
import { MapFeatures } from "@/components/cotizar/lowcost/MapFeatures";
import { PricingInfo } from "@/components/cotizar/lowcost/PricingInfo";
import { CalculatorTips } from "@/components/cotizar/lowcost/CalculatorTips";
import { CalculatorContact } from "@/components/cotizar/lowcost/CalculatorContact";

export const metadata: Metadata = {
  title: "Presupuesto Logístico E-commerce | Envíos en Mar del Plata",
  description: "Solicitá tu presupuesto para envíos por volumen en Mar del Plata. Cotizá tu logística e-commerce con las mejores tarifas del mercado local hoy.",
};

export default function LowCostQuoterPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      
      <LowCostCalculatorHero />
      
      <LowCostCalculator />

      <MapFeatures />

      <PricingInfo />

      <CalculatorTips />

      <CalculatorContact />

      <Footer />
    </main>
  );
}
