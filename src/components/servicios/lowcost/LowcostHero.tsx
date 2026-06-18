"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingDown, Calculator } from "lucide-react";

export function LowcostHero() {
  return (
    <section className="relative pt-32 pb-24 bg-primary overflow-hidden border-b-4 border-accent">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="absolute -left-20 bottom-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-secondary !text-white border-white/20 mb-8">
          <TrendingDown className="w-5 h-5" /> TARIFA OPTIMIZADA
        </div>
        
        <h1 className="text-white mb-6 font-display text-5xl md:text-8xl uppercase tracking-tight leading-[0.9]">
          ENVÍOS LOWCOST: <br /><span className="text-accent">MÁXIMA RENTABILIDAD</span>
        </h1>
        
        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed mb-12">
          Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button className="h-16 px-10 bg-accent hover:bg-white text-dark font-subhead text-2xl uppercase tracking-widest rounded-xl transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95">
            Cotizar Envío LowCost
          </Button>
          <Button variant="outline" className="h-16 px-10 border-2 border-white text-white hover:bg-white hover:text-primary font-subhead text-2xl uppercase tracking-widest rounded-xl transition-all">
            <Calculator className="mr-2 w-6 h-6" /> Ver Tarifas Optimizadas
          </Button>
        </div>
      </div>
    </section>
  );
}
