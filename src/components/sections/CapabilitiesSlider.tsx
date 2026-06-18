"use client";

import { Bolt, Microchip, ShieldHalf, ChartLine } from "lucide-react";

const caps = [
  { title: "Ruteo Inteligente", icon: <Bolt className="w-10 h-10" />, desc: "Optimización en tiempo real de rutas de entrega para minimizar tiempos y costos operativos." },
  { title: "Integración API", icon: <Microchip className="w-10 h-10" />, desc: "Conexión directa con tu tienda online para automatizar la gestión de despachos sin fricción." },
  { title: "Seguridad Extrema", icon: <ShieldHalf className="w-10 h-10" />, desc: "Protocolos estrictos de custodia de mercadería y seguros de cobertura total para tu tranquilidad." },
  { title: "Métricas en Vivo", icon: <ChartLine className="w-10 h-10" />, desc: "Dashboard analítico con datos precisos de performance y tiempos de entrega en tiempo real." }
];

export function CapabilitiesSlider() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container">
        <div className="mb-16 space-y-4">
          <div className="section-badge !bg-white/10 !text-white border-white/30">CAPACIDADES DINÁMICAS</div>
          <h2 className="text-white">SOLUCIONES A MEDIDA</h2>
          <p className="text-white/80 max-w-[700px]">Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real.</p>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {caps.map((c, i) => (
            <div key={i} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_23%] snap-start bg-white/5 border border-white/10 p-10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-3 hover:border-accent hover:shadow-2xl relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-accent after:transition-all hover:after:w-full rounded-lg">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl mb-8 group-hover:scale-115 group-hover:rotate-12 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                {c.icon}
              </div>
              <h3 className="text-accent text-3xl mb-4">{c.title}</h3>
              <p className="text-white/90 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
