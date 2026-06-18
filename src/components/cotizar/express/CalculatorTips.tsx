'use client';

import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export function CalculatorTips() {
  return (
    <section className="py-20 bg-light">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-primary text-4xl font-display uppercase">Tips para tu Envío Express</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <h4 className="font-subhead text-2xl text-primary uppercase mb-2">Verificá disponibilidad</h4>
              <p className="text-slate-600 font-body">Asegurate de que haya alguien en el domicilio de destino para recibir. El servicio express prioriza la velocidad y los reintentos pueden tener costo adicional.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
            <Clock className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="font-subhead text-2xl text-primary uppercase mb-2">Horario Flexible</h4>
              <p className="text-slate-600 font-body">Podes solicitar el retiro ahora mismo o agendarlo para un rango específico del día. Nosotros nos encargamos de que la moto esté puntual.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
