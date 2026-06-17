"use client";

import { Bolt, Clock, Box, Truck, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Envíos Express",
    badge: "ALTA PRIORIDAD",
    icon: <Bolt className="w-10 h-10" />,
    desc: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
    href: "/servicios/envios-express",
    cta: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    icon: <Clock className="w-10 h-10" />,
    desc: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.",
    href: "/servicios/envios-lowcost",
    cta: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex",
    icon: <Box className="w-10 h-10" />,
    desc: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde.",
    href: "/servicios/enviosflex",
    cta: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    icon: <Truck className="w-10 h-10" />,
    desc: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada.",
    href: "/servicios/plan-emprendedores",
    cta: "Hablar con un asesor"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-[#f1f5f9] dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-primary dark:text-white font-headline text-[clamp(2rem,5vw,3.5rem)]">Soluciones Logísticas</h2>
          <p className="text-base md:text-[1.2rem] max-w-[700px] mx-auto px-4 dark:text-slate-300">Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="modern-card group bg-white dark:bg-slate-900 p-6 md:p-10 flex flex-col relative border-t-4 border-transparent hover:border-accent hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-[0_15px_30px_-5px_rgba(30,58,138,0.15)] dark:hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.05)] transition-all duration-300 z-10 after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/0 after:to-secondary/[0.03] dark:after:to-white/[0.02] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:-z-10 rounded-lg">
              {s.badge && <div className="absolute top-4 right-4 bg-accent/20 text-[#b45309] dark:text-accent px-3 py-1 text-[0.75rem] font-bold rounded-[4px]">{s.badge}</div>}
              
              <div className="text-secondary dark:text-accent text-[2.5rem] mb-6 group-hover:scale-115 group-hover:rotate-5 group-hover:text-primary dark:group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              
              <h3 className="text-primary dark:text-white text-[1.5rem] md:text-[1.8rem] mb-4 group-hover:text-secondary dark:group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="flex-grow mb-8 text-[0.95rem] md:text-[1.05rem] dark:text-slate-400">{s.desc}</p>
              
              <Link href={s.href} className="inline-flex min-h-[44px] items-center gap-2 text-primary dark:text-secondary font-bold font-subheadline text-lg md:text-xl tracking-wider uppercase group/link relative self-start after:absolute after:bottom-[6px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary dark:after:bg-accent after:transition-all hover:text-secondary dark:hover:text-accent hover:after:w-full" aria-label={`Conocer más sobre ${s.title}`}>
                {s.cta} <ChevronRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
