'use client';

import React from 'react';

export function LowCostCalculatorHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden border-b-4 border-secondary">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container relative z-10 text-center">
        <div className="section-badge !bg-secondary !text-white border-secondary/20 mb-8 uppercase tracking-[0.2em] font-bold">
          Cotizador Low Cost
        </div>
        <h1 className="text-white mb-6 font-display text-5xl md:text-7xl uppercase">
          Cotizador de <br /><span className="text-secondary">Envíos LowCost</span>
        </h1>
        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-body">
          Eficiencia y rentabilidad para tu comercio. Calcula tu envío de ruteo masivo con entrega garantizada en el día.
        </p>
      </div>
    </section>
  );
}
