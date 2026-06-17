import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Tracking } from "@/components/sections/Tracking";
import { QuoteEngine } from "@/components/sections/QuoteEngine";
import { Services } from "@/components/sections/Services";
import { Chatbot } from "@/components/sections/Chatbot";
import { Analytics } from "@/components/sections/Analytics";
import { PartnerContact } from "@/components/sections/PartnerContact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="border-y-4 border-black bg-accent py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-8 font-headline text-2xl uppercase">
          {[1,2,3,4,5,6].map(i => (
            <span key={i} className="flex items-center gap-4">
              Logística Inteligente MDP • Entregas Express • 3PL Solutions • API Integration • E-commerce Ready • Mar del Plata y Zona •
            </span>
          ))}
        </div>
      </div>
      <Tracking />
      <QuoteEngine />
      <Services />
      <Analytics />
      <Chatbot />
      <PartnerContact />
      <Footer />
    </main>
  );
}
