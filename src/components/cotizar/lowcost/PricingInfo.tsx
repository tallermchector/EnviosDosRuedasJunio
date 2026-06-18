'use client';

import React from 'react';
import { Info } from 'lucide-react';

export function PricingInfo() {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-4xl">
        <div className="flex items-start gap-6 p-8 bg-blue-50 border-l-8 border-secondary rounded-2xl">
          <Info className="w-10 h-10 text-secondary shrink-0" />
          <div className="space-y-2">
            <h4 className="text-primary font-subhead text-2xl uppercase m-0 leading-none">Información sobre la Tarifa</h4>
            <p className="text-slate-600 font-body m-0 text-lg">
              Las tarifas Low Cost están diseñadas para <strong>volúmenes masivos</strong>. El precio final puede variar según la cantidad de bultos adicionales y el peso excedente (+5kg). No se permite la elección de franja horaria específica para mantener la eficiencia del ruteo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
