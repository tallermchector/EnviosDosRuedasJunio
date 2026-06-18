'use client';

import React from 'react';
import { MessageCircle, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CalculatorContact() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Box className="absolute -top-10 -right-10 w-64 h-64 rotate-12" />
        <Box className="absolute -bottom-10 -left-10 w-48 h-48 -rotate-12" />
      </div>
      
      <div className="container relative z-10 text-center">
        <h2 className="text-white text-5xl md:text-7xl font-display uppercase mb-8">¿Envío muy voluminoso?</h2>
        <p className="text-white/60 text-xl md:text-2xl font-body mb-12 max-w-2xl mx-auto">
          Si necesitás enviar más de 5 bultos o mercadería de gran tamaño, consultá con un asesor para un plan a medida.
        </p>
        <Button 
          asChild
          className="h-20 px-12 bg-[#25D366] hover:bg-white text-white hover:text-dark font-subhead text-3xl uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(0,0,0,0.3)] border-none"
        >
          <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" className="flex items-center gap-4">
            <MessageCircle className="w-8 h-8" /> Consultar por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
