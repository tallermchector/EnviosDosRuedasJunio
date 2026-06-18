import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { EntrepreneurHero } from "@/components/servicios/emprendedores/EntrepreneurHero";
import { PlanInformation } from "@/components/servicios/emprendedores/PlanInformation";
import { EntrepreneurBenefits } from "@/components/servicios/emprendedores/EntrepreneurBenefits";
import { EntrepreneurPricingRanges } from "@/components/servicios/emprendedores/EntrepreneurPricingRanges";

export const metadata: Metadata = {
  title: "Fulfillment y Logística 3PL para Emprendedores en Mar del Plata",
  description: "Soluciones de almacenamiento, picking y fulfillment en Mar del Plata. Logística 3PL estratégica para marcas de Tiendanube, Shopify y ventas online.",
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navigation />
      <EntrepreneurHero />
      <PlanInformation />
      <EntrepreneurBenefits />
      <EntrepreneurPricingRanges />
      <Footer />
    </main>
  );
}
