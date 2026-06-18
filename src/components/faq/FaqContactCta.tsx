"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FaqContactCta() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-20" />
      <div className="container relative z-10 text-center">
        <h2 className="text-white text-5xl md:text-7xl font-display uppercase mb-8">¿Aún tenés dudas?</h2>
        <p className="text-white/60 text-xl md:text-2xl font-body mb-12 max-w-2xl mx-auto">
          Nuestro equipo de soporte técnico y comercial está listo para ayudarte con cualquier consulta específica.
        </p>
        <Button 
          asChild
          className="h-20 px-12 bg-accent hover:bg-white text-dark font-subhead text-3xl uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0px_rgba(30,58,138,1)]"
        >
          <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" className="flex items-center gap-4">
            <MessageCircle className="w-8 h-8" /> Contactar Soporte
          </a>
        </Button>
      </div>
    </section>
  );
}
