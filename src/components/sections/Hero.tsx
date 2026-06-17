import { Button } from "@/components/ui/button";
import { BrutalistCard } from "@/components/BrutalistCard";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Truck } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-delivery');

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-accent border-2 border-black px-4 py-1 font-subheadline text-xl shadow-brutal-sm -rotate-2">
            MÁS QUE UN ENVÍO, UNA SOLUCIÓN
          </div>
          <h1 className="text-6xl md:text-8xl leading-[0.9] font-headline">
            Logística <span className="text-secondary">E-commerce</span> en Mar del Plata
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-lg">
            Envíos Express, Flex y LowCost. Conectamos tu tienda directamente con tus clientes en MDP y la zona.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="brutalist-button text-2xl h-auto py-4">
              COTIZAR ENVÍO <ArrowRight className="ml-2 w-8 h-8" />
            </Button>
            <Button variant="outline" className="border-2 border-black bg-white shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all h-auto py-4 font-headline text-2xl">
              SERVICIOS 3PL
            </Button>
          </div>
        </div>
        <div className="relative">
          <BrutalistCard className="p-0 overflow-hidden -rotate-1 min-h-[400px] flex items-center justify-center bg-muted">
            {heroImage?.imageUrl ? (
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description || "Envíos DosRuedas Delivery"} 
                width={1200}
                height={800}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                data-ai-hint="delivery motorcycle"
                priority
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <Truck className="w-16 h-16 opacity-20" />
                <p className="font-headline text-sm uppercase opacity-40">Cargando Imagen...</p>
              </div>
            )}
          </BrutalistCard>
          <div className="absolute -bottom-6 -left-6 z-10">
            <BrutalistCard variant="secondary" className="py-2 px-6 flex items-center gap-3">
              <Truck className="w-8 h-8" />
              <div>
                <p className="font-subheadline text-lg leading-tight">ENTREGA PROMEDIO</p>
                <p className="font-headline text-2xl leading-tight">90 MINUTOS</p>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </div>
    </section>
  );
}
