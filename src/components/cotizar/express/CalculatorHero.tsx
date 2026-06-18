'use client';

import React from 'react';

export function CalculatorHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden border-b-4 border-accent">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-accent !text-dark border-accent/20 mb-8 uppercase tracking-[0.2em] font-bold">
          Cotizador Express
        </div>
        <h1 className="text-white mb-6 font-display text-5xl md:text-7xl uppercase">
          Cotizador de <br /><span className="text-accent">Envíos Express</span>
        </h1>
        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-body">
          Calcula el costo de tu envío prioritario al instante. Alta precisión y entrega garantizada en el rango seleccionado.
        </p>
      </div>
    </section>
  );
}
