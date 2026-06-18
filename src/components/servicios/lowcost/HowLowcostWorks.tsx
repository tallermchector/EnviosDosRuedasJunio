"use client";

import React from "react";
import { Upload, Truck, Layers, CheckCircle } from "lucide-react";

export function HowLowcostWorks() {
  const steps = [
    {
      title: "Carga de Pedidos",
      desc: "Subí tus órdenes a nuestro panel antes de las 13:00 hs.",
      icon: <Upload className="w-6 h-6" />
    },
    {
      title: "Recolección",
      desc: "Retiramos todos tus bultos en un solo movimiento por tu local o depósito.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Ruteo Inteligente",
      desc: "Agrupamos los destinos para lograr la máxima eficiencia por kilómetro.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Entrega en el Día",
      desc: "Tus clientes reciben sus paquetes entre las 15:00 y 19:00 hs.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
          
          <h2 className="text-white text-4xl md:text-6xl font-display uppercase mb-16">¿Cómo funciona LowCost?</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-secondary/20 border-2 border-secondary text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:-translate-y-2">
                  {s.icon}
                </div>
                <h4 className="text-white font-subhead text-xl uppercase tracking-widest mb-3">{s.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-[150px]">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(25%*i+18%)] w-[14%] h-[2px] bg-white/10" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col items-center">
            <p className="text-white/60 text-xl font-body mb-8">¿Necesitás una cuenta corporativa con facturación mensual?</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5492236602699&text=Hola!+Necesito+asesoramiento+para+una+cuenta+corporativa+LowCost." 
              target="_blank"
              className="btn bg-secondary text-white border-secondary hover:bg-white hover:text-primary hover:border-white transition-all shadow-[6px_6px_0px_rgba(59,130,246,0.5)] h-16 rounded-xl px-12"
            >
              Hablar con un Asesor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
