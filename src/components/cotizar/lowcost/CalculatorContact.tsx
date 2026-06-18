'use client';

import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CalculatorContact() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <Building2 className="absolute -top-10 -right-10 w-64 h-64 rotate-12" />
        <Building2 className="absolute -bottom-10 -left-10 w-48 h-48 -rotate-12" />
      </div>
      
      <div className="container relative z-10 text-center">
        <h2 className="text-white text-5xl md:text-7xl font-display uppercase mb-8">¿Necesitás una cuenta corporativa?</h2>
        <p className="text-white/60 text-xl md:text-2xl font-body mb-12 max-w-2xl mx-auto">
          Si realizás más de 10 envíos diarios, accedé a tarifas preferenciales y facturación quincenal simplificada.
        </p>
        <Button 
          asChild
          className="h-20 px-12 bg-secondary hover:bg-white text-white hover:text-dark font-subhead text-3xl uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(59,130,246,0.3)] border-none"
        >
          <a href="https://api.whatsapp.com/send/?phone=5492236602699&text=Hola!+Vengo+del+cotizador+Low+Cost+y+necesito+asesoramiento+corporativo." target="_blank" className="flex items-center gap-4">
            Hablar con un Asesor <ChevronRight className="w-8 h-8" />
          </a>
        </Button>
      </div>
    </section>
  );
}
