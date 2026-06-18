"use client";

import React from "react";
import { Check } from "lucide-react";

export function PricingComparison() {
  const ranges = [
    { range: "0.00 - 2.99 km", price: "$3000.00" },
    { range: "3.00 - 4.99 km", price: "$4000.00" },
    { range: "5.00 - 6.99 km", price: "$5300.00" },
    { range: "7.00 - 9.99 km", price: "$7000.00" },
    { range: "10.00+ km", price: "Base $7000 + $700.00/km" },
  ];

  return (
    <section className="py-24 bg-light utility-bg">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Ahorro Garantizado</div>
          <h2 className="text-primary text-5xl font-display uppercase">COMPARATIVA DE TARIFAS LOWCOST</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-secondary rounded-[32px] overflow-hidden shadow-[15px_15px_0px_rgba(59,130,246,0.1)]">
            <div className="bg-secondary text-white p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-3xl font-display m-0 leading-none">PLAN LOWCOST</h3>
                <p className="text-white/80 m-0 mt-2 text-sm font-body">Ideal para ruteos masivos de PyMEs</p>
              </div>
              <div className="flex gap-2">
                 <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Entrega en el día</span>
                 <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest">Seguimiento Digital</span>
              </div>
            </div>

            <div className="divide-y-2 divide-slate-100">
              {ranges.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 md:px-12 hover:bg-blue-50/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                    <span className="font-subhead text-2xl text-slate-500 uppercase tracking-wider">{item.range}</span>
                  </div>
                  <span className="font-display text-4xl text-secondary">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="p-10 bg-slate-50 border-t-2 border-slate-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-subhead text-xl text-primary uppercase tracking-widest">Incluye:</h4>
                  <ul className="space-y-2">
                    {["Retiro programado", "Notificación tras entrega", "Seguro de bulto básico", "Ruteo optimizado"].map((incl, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <Check className="w-4 h-4 text-green-500" /> {incl}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-slate-200">
                  <p className="text-slate-500 text-xs italic font-body m-0">
                    * Las tarifas están sujetas a cambios según el volumen y bultos adicionales. No se permite elección de rango horario específico. Entrega unificada de 15 a 19hs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
