"use client";

import React from "react";
import { AlertCircle, UserCheck, MapPin, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Requirements() {
  const reqs = [
    { title: "Cuenta en MercadoLibre", desc: "Debés tener habilitada la opción de Envíos Flex en tu panel de ventas.", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Local en Mar del Plata", desc: "El punto de retiro debe estar dentro del ejido urbano de la ciudad.", icon: <MapPin className="w-6 h-6" /> },
    { title: "Volumen Mínimo", desc: "Consúltanos por el volumen de ventas diario para optimizar tu ruteo.", icon: <BarChart2 className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 border-4 border-accent p-12 md:p-20 rounded-[40px] text-center">
            <div className="section-badge !bg-accent !text-dark mb-10">
               <AlertCircle className="w-5 h-5" /> Requisitos del Servicio
            </div>
            
            <h2 className="text-white text-4xl md:text-6xl font-display uppercase mb-16 leading-none">¿Qué necesitás para empezar?</h2>
            
            <div className="grid md:grid-cols-3 gap-12 text-left mb-16">
              {reqs.map((r, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-accent text-dark rounded-xl flex items-center justify-center">
                    {r.icon}
                  </div>
                  <h4 className="font-subhead text-2xl uppercase text-accent tracking-wider">{r.title}</h4>
                  <p className="text-white/60 font-body leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center">
              <p className="text-white text-xl font-body mb-10">¿Cumplís con los requisitos? Contactanos para darte de alta hoy mismo.</p>
              <Button className="h-16 px-12 bg-[#25D366] hover:bg-white hover:text-dark text-white font-subhead text-3xl uppercase tracking-widest rounded-2xl transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
                Hablar con un Asesor Flex
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
