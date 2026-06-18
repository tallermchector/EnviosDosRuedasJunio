'use client';

import React from 'react';
import { Route, MapPin, Layers } from 'lucide-react';

export function MapFeatures() {
  const features = [
    { title: "Ruta Optimizada", desc: "Agrupamiento inteligente de pedidos para reducir huella de carbono y costos.", icon: <Route className="w-6 h-6" /> },
    { title: "Puntos de Retiro", desc: "Logística circular: retiramos y entregamos en un mismo circuito masivo.", icon: <Layers className="w-6 h-6" /> },
    { title: "Entrega Garantizada", desc: "Certeza total de recepción antes de las 19:00 hs para pedidos del día.", icon: <MapPin className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 bg-white border-y-2 border-slate-100">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-5 p-6 bg-light rounded-2xl border-2 border-transparent hover:border-secondary hover:bg-white transition-all group">
              <div className="w-12 h-12 bg-primary text-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div>
                <h4 className="font-subhead text-xl uppercase text-primary mb-1">{f.title}</h4>
                <p className="text-slate-500 text-sm font-body">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
