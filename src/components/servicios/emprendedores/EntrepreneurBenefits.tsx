"use client";

import React from "react";
import { TrendingUp, UserCheck, Calculator, Target } from "lucide-react";

export function EntrepreneurBenefits() {
  const benefits = [
    {
      title: "Escalabilidad",
      desc: "Adaptamos el espacio y el personal según el crecimiento de tus ventas mensuales.",
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      title: "Profesionalismo",
      desc: "Tus productos manejados por expertos en última milla y manipulación de carga.",
      icon: <UserCheck className="w-10 h-10" />
    },
    {
      title: "Reducción de Costos",
      desc: "Eliminá gastos fijos de alquiler, servicios y personal de depósito.",
      icon: <Calculator className="w-10 h-10" />
    },
    {
      title: "Foco en Ventas",
      desc: "Dedicá tu tiempo a la estrategia de negocio mientras nosotros operamos el backend.",
      icon: <Target className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-30" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-display uppercase">Ventajas Estratégicas</h2>
          <p className="text-white/60 text-xl font-body max-w-2xl mx-auto">Por qué las marcas líderes de Tiendanube y Shopify eligen nuestro Fulfillment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group border-b-4 hover:border-b-accent">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-2xl font-subhead uppercase mb-4 tracking-wider">{b.title}</h3>
              <p className="text-white/60 font-body leading-relaxed text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
