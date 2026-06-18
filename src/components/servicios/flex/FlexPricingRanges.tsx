"use client";

import React from "react";
import { Calculator, Check } from "lucide-react";

export function FlexPricingRanges() {
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
          <div className="section-badge mb-4">Transparencia en Costos</div>
          <h2 className="text-primary text-5xl font-display uppercase">TARIFAS FLEX (ESTRUCTURA LOWCOST)</h2>
          <p className="text-slate-500 text-lg font-body max-w-2xl mx-auto">Aplicamos nuestra tarifa más competitiva para que el costo de envío no afecte tu margen de ganancia.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-dark rounded-[32px] overflow-hidden shadow-[15px_15px_0px_rgba(234,179,8,1)]">
            <div className="bg-primary text-white p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-3xl font-display m-0 leading-none">VALORES POR DISTANCIA</h3>
                <p className="text-accent m-0 mt-2 text-sm font-bold uppercase tracking-widest">Especial para Vendedores MeLi</p>
              </div>
              <div className="w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center shadow-lg">
                <Calculator className="w-8 h-8" />
              </div>
            </div>

            <div className="divide-y-2 divide-slate-100">
              {ranges.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 md:px-12 hover:bg-slate-50 transition-colors">
                  <span className="font-subhead text-2xl text-slate-500 uppercase tracking-wider">{item.range}</span>
                  <span className="font-display text-4xl text-primary">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="p-10 bg-slate-50 border-t-2 border-slate-100">
              <h4 className="font-subhead text-xl text-primary uppercase mb-4">El servicio incluye:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Retiro por domicilio/local",
                  "Escaneo masivo de etiquetas",
                  "Notificación digital al comprador",
                  "Reintentos de entrega incluidos",
                  "Seguro de paquetería básico",
                  "Soporte post-venta 24/7"
                ].map((incl, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> {incl}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
