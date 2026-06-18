'use client';

import React from 'react';
import { Route, TrafficCone, MapPin } from 'lucide-react';

export function MapFeatures() {
  const features = [
    { title: "Ruta en Tiempo Real", desc: "Cálculo preciso del trayecto más corto entre puntos.", icon: <Route className="w-6 h-6" /> },
    { title: "Estimación de Tráfico", desc: "Ajuste dinámico según el estado de las calles en MDP.", icon: <TrafficCone className="w-6 h-6" /> },
    { title: "Puntos Exactos", desc: "Geolocalización optimizada para retiros rápidos.", icon: <MapPin className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 bg-white border-y-2 border-slate-100">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-5 p-6 bg-light rounded-2xl border-2 border-transparent hover:border-accent hover:bg-white transition-all group">
              <div className="w-12 h-12 bg-primary text-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
