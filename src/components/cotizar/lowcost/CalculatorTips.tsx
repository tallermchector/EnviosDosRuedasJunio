'use client';

import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export function CalculatorTips() {
  return (
    <section className="py-20 bg-light">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-primary text-4xl font-display uppercase">Tips para tu Envío Low Cost</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <h4 className="font-subhead text-2xl text-primary uppercase mb-2">Dirección Exacta</h4>
              <p className="text-slate-600 font-body">Asegurate de ingresar la dirección exacta y referencias de entrega. El ruteo optimizado depende de la precisión de los datos para no demorar la cadena de entregas.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
            <Clock className="w-8 h-8 text-secondary shrink-0" />
            <div>
              <h4 className="font-subhead text-2xl text-primary uppercase mb-2">Horario de Corte</h4>
              <p className="text-slate-600 font-body">Recordá que el horario de corte es a las <strong>13:00 hs</strong>. Los pedidos cargados luego de ese horario serán procesados y entregados el siguiente día hábil.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
