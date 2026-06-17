"use client";

import { Bolt, Microchip, ShieldHalf, ChartLine } from "lucide-react";

const caps = [
  { title: "Ruteo Inteligente", icon: <Bolt className="w-8 h-8" />, desc: "Optimización en tiempo real de rutas de entrega para minimizar tiempos y costos operativos." },
  { title: "Integración API", icon: <Microchip className="w-8 h-8" />, desc: "Conexión directa con tu tienda online para automatizar la gestión de despachos sin fricción." },
  { title: "Seguridad Extrema", icon: <ShieldHalf className="w-8 h-8" />, desc: "Protocolos estrictos de custodia de mercadería y seguros de cobertura total para tu tranquilidad." },
  { title: "Métricas en Vivo", icon: <ChartLine className="w-8 h-8" />, desc: "Dashboard analítico con datos precisos de performance y tiempos de entrega en tiempo real." }
];

export function CapabilitiesSlider() {
  return (
    <section className="slider-section py-16 md:py-24 bg-primary dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center bg-white/10 text-white border border-white/30 px-5 py-2 rounded-full font-subheadline text-[1.2rem] tracking-wider font-bold">CAPACIDADES DINÁMICAS</div>
          <h2 className="text-white font-headline text-[clamp(2rem,5vw,3.5rem)]">SOLUCIONES A MEDIDA</h2>
          <p className="text-white opacity-90 max-w-[700px] text-base md:text-lg">Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real.</p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10">
          {caps.map((c, i) => (
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_23%] snap-start bg-white/5 border border-white/10 p-8 md:p-12 transition-all duration-300 hover:bg-white/10 hover:-translate-y-[5px] md:hover:-translate-y-[10px] hover:border-accent hover:shadow-2xl relative group after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full rounded-lg">
              <div className="cap-icon w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-secondary dark:bg-accent text-white dark:text-black flex items-center justify-center text-xl md:text-2xl mb-6 group-hover:scale-115 group-hover:rotate-12 group-hover:bg-accent dark:group-hover:bg-white group-hover:text-primary dark:group-hover:text-black transition-all duration-500">
                {c.icon}
              </div>
              <h3 className="text-accent dark:text-white text-[1.4rem] md:text-[1.6rem] mb-4 font-headline uppercase">{c.title}</h3>
              <p className="text-white opacity-90 leading-relaxed text-sm md:text-base">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
