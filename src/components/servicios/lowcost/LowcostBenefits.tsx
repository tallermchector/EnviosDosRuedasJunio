"use client";

import React from "react";
import { Scaling, TrendingDown, Map, RotateCcw } from "lucide-react";

export function LowcostBenefits() {
  const benefits = [
    {
      title: "Escalabilidad",
      desc: "Crece sin límites. Nuestra infraestructura soporta desde 10 hasta 1000 envíos diarios por cliente.",
      icon: <Scaling className="w-10 h-10" />
    },
    {
      title: "Reducción de Costos",
      desc: "Ahorra hasta un 40% comparado con servicios de mensajería tradicional o apps de última milla.",
      icon: <TrendingDown className="w-10 h-10" />
    },
    {
      title: "Trazabilidad",
      desc: "Seguimiento unificado de toda tu carga masiva. Dashboard corporativo para monitoreo de performance.",
      icon: <Map className="w-10 h-10" />
    },
    {
      title: "Logística Inversa",
      desc: "Gestión simplificada de cambios y devoluciones con las mismas tarifas competitivas.",
      icon: <RotateCcw className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <div className="text-secondary mb-6 group-hover:scale-110 group-hover:text-accent transition-all">
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
