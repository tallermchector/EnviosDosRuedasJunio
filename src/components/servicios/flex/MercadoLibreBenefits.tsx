"use client";

import React from "react";
import { TrendingUp, Award, ShieldCheck, Headphones } from "lucide-react";

export function MercadoLibreBenefits() {
  const benefits = [
    {
      title: "Medidor en Verde",
      desc: "Mantené tu reputación al máximo cumpliendo siempre con los SLAs de entrega.",
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      title: "Mayor Exposición",
      desc: "Los productos con Flex aparecen primero en los resultados de búsqueda.",
      icon: <Award className="w-10 h-10" />
    },
    {
      title: "Entregas Garantizadas",
      desc: "Flota propia capacitada específicamente para el ecosistema de MercadoLibre.",
      icon: <ShieldCheck className="w-10 h-10" />
    },
    {
      title: "Soporte Post-Venta",
      desc: "Resolución inmediata de incidencias para evitar reclamos en tu cuenta.",
      icon: <Headphones className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FFE600] opacity-30" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-display uppercase">Beneficios para tu Tienda</h2>
          <p className="text-white/60 text-xl font-body max-w-2xl mx-auto">Convertite en el vendedor preferido de Mar del Plata con nuestra logística Same-Day.</p>
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
