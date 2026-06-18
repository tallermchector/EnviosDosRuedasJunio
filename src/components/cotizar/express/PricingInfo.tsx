'use client';

import React from 'react';
import { Info } from 'lucide-react';

export function PricingInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-4xl">
        <div className="flex items-start gap-6 p-8 bg-blue-50 border-l-8 border-primary rounded-2xl">
          <Info className="w-10 h-10 text-primary shrink-0" />
          <div className="space-y-2">
            <h4 className="text-primary font-subhead text-2xl uppercase m-0 leading-none">Información sobre la Tarifa</h4>
            <p className="text-slate-600 font-body m-0 text-lg">
              El precio Express incluye <strong>prioridad máxima</strong> y entrega garantizada en menos de 2 horas desde el momento del retiro. El costo final puede variar si existen recargos por bultos excedentes o tiempos de espera superiores a 10 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
