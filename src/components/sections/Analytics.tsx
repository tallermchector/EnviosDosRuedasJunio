
"use client";

import { BrutalistCard } from "@/components/BrutalistCard";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const data = [
  { name: 'Lun', envios: 400 },
  { name: 'Mar', envios: 300 },
  { name: 'Mie', envios: 600 },
  { name: 'Jue', envios: 800 },
  { name: 'Vie', envios: 500 },
  { name: 'Sab', envios: 900 },
  { name: 'Dom', envios: 200 },
];

export function Analytics() {
  return (
    <section className="py-24 px-4 bg-slate-100 border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-headline">Panel para Partners</h2>
          <p className="text-xl font-medium mt-4">Métricas en tiempo real para nuestros socios estratégicos y tiendas e-commerce.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <BrutalistCard className="lg:col-span-2 bg-white">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-headline">Rendimiento de Envíos</h3>
              <div className="font-subheadline text-xl bg-yellow-100 px-3 border-2 border-black">ESTA SEMANA</div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="envios" fill="#1E3A8A" stroke="#000" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </BrutalistCard>

          <div className="space-y-8">
            <BrutalistCard variant="primary" className="p-8">
              <p className="font-subheadline text-2xl mb-2">TASA DE ÉXITO</p>
              <h4 className="text-6xl font-headline">99.8%</h4>
              <p className="text-sm font-bold opacity-80 mt-4 uppercase">MDP & ZONA NORTE</p>
            </BrutalistCard>
            
            <BrutalistCard variant="accent" className="p-8">
              <p className="font-subheadline text-2xl mb-2">TIEMPO PROMEDIO</p>
              <h4 className="text-6xl font-headline">112m</h4>
              <p className="text-sm font-bold opacity-80 mt-4 uppercase">SERVICIO EXPRESS</p>
            </BrutalistCard>
          </div>
        </div>
      </div>
    </section>
  );
}
