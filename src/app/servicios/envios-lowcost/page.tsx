import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LowcostHero } from "@/components/servicios/lowcost/LowcostHero";
import { LowcostContent } from "@/components/servicios/lowcost/LowcostContent";
import { PricingComparison } from "@/components/servicios/lowcost/PricingComparison";
import { LowcostBenefits } from "@/components/servicios/lowcost/LowcostBenefits";
import { HowLowcostWorks } from "@/components/servicios/lowcost/HowLowcostWorks";

export const metadata: Metadata = {
  title: "Envíos LowCost en Mar del Plata | Distribución de Paquetería",
  description: "Envíos masivos programados para comercios en Mar del Plata. La tarifa más económica en distribución local de paquetería con logística inteligente.",
};

export default function EnvíosLowCostPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <LowcostHero />
      <LowcostContent />
      <PricingComparison />
      <LowcostBenefits />
      <HowLowcostWorks />
      <Footer />
    </main>
  );
}
