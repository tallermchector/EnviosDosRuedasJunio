
"use client";

import { useState } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Package, Clock, CheckCircle2 } from "lucide-react";

export function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <section id="tracking" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-6xl font-headline">Rastrea tu Envío</h2>
        <p className="text-xl font-medium max-w-lg mx-auto">
          Ingresa tu número de guía único para conocer el estado exacto de tu paquete en tiempo real.
        </p>
      </div>

      <BrutalistCard className="bg-white">
        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="EJ: ED-98234-MDP" 
            className="text-xl border-4 border-black h-16 rounded-none font-bold"
          />
          <Button onClick={() => setShowResult(true)} className="brutalist-button h-16 px-8 text-2xl">
            <Search className="mr-2 w-8 h-8" /> RASTREAR
          </Button>
        </div>

        {showResult && (
          <div className="mt-12 space-y-8 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b-4 border-black pb-4">
              <div className="flex items-center gap-4">
                <span className="pulse-indicator"></span>
                <p className="font-headline text-2xl uppercase">En Tránsito</p>
              </div>
              <p className="font-subheadline text-xl text-muted-foreground">ID: {trackingId || 'ED-12345'}</p>
            </div>

            <div className="relative">
              <div className="absolute left-[1.125rem] top-0 bottom-0 w-1 bg-black"></div>
              
              <div className="space-y-12 relative">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-accent border-2 border-black flex items-center justify-center z-10">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-headline text-xl leading-none">Recibido en Centro de Distribución</p>
                    <p className="text-sm font-medium text-muted-foreground">Mar del Plata, Zona Puerto - 08:30 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-secondary text-white border-2 border-black flex items-center justify-center z-10">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-headline text-xl leading-none">En proceso de clasificación</p>
                    <p className="text-sm font-medium text-muted-foreground">Hub Central - 10:15 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-yellow-400 border-2 border-black flex items-center justify-center z-10 animate-bounce">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-headline text-xl leading-none">En camino a destino</p>
                    <p className="text-sm font-medium text-muted-foreground">MDP Sur - Repartidor asignado</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 opacity-30">
                  <div className="w-10 h-10 bg-gray-200 border-2 border-black flex items-center justify-center z-10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-headline text-xl leading-none">Entregado</p>
                    <p className="text-sm font-medium text-muted-foreground">Ubicación final del cliente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </BrutalistCard>
    </section>
  );
}

function Truck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-2.39-2.83a1 1 0 0 0-.77-.36H15v4h7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
