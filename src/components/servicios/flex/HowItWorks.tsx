"use client";

import React from "react";
import { Tag, Truck, BellRing, PackageCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Etiquetado Flex",
      desc: "Preparás tus ventas con la etiqueta de Flex desde tu panel de MercadoLibre.",
      icon: <Tag className="w-8 h-8" />
    },
    {
      title: "Retiro",
      desc: "Pasamos por tu local o depósito en la franja acordada para retirar la carga.",
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: "Entrega Prioritaria",
      desc: "Entregamos el 100% de tus paquetes en el mismo día (Same-Day).",
      icon: <PackageCheck className="w-8 h-8" />
    },
    {
      title: "Notificación",
      desc: "El sistema informa automáticamente al comprador y a MercadoLibre.",
      icon: <BellRing className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <h2 className="text-primary text-4xl md:text-6xl font-display uppercase text-center mb-16">¿Cómo funciona la operativa?</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-50 border-4 border-slate-100 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-accent group-hover:border-primary transition-all duration-500">
                {s.icon}
              </div>
              <h4 className="text-primary font-subhead text-2xl uppercase mb-3">{s.title}</h4>
              <p className="text-slate-500 font-body leading-relaxed">{s.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-full h-[2px] bg-slate-100 -z-10" />
              )}
              <div className="mt-4 text-primary/10 font-display text-8xl absolute -top-4 -z-20 group-hover:text-accent/10 transition-colors">0{i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
