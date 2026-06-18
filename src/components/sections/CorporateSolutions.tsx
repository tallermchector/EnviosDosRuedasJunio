
"use client";

import { Building2, Box, Laptop, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CorporateSolutions() {
  const corps = [
    {
      title: "Soluciones Corporativas",
      img: PlaceHolderImages.find(img => img.id === 'corp-plans'),
      icon: <Building2 className="w-8 h-8" />,
      features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"]
    },
    {
      title: "Envíos Flex MercadoLibre",
      img: PlaceHolderImages.find(img => img.id === 'envios-flex'),
      icon: <Box className="w-8 h-8" />,
      features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"]
    },
    {
      title: "Logística E-Commerce",
      img: PlaceHolderImages.find(img => img.id === 'ecommerce-logistics'),
      icon: <Laptop className="w-8 h-8" />,
      features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"]
    }
  ];

  return (
    <section className="corp-solutions py-16 md:py-24 bg-light dark:bg-slate-900 utility-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-secondary px-5 py-2 rounded-full font-subheadline text-[1.2rem] font-bold border border-primary/20 dark:border-secondary/20"><Building2 className="w-5 h-5" /> Soluciones Corporativas y PyME</div>
          <h2 className="text-primary dark:text-white font-headline text-[clamp(2rem,5vw,3.5rem)]">Potencia tu Logística con DosRuedas</h2>
          <p className="text-base md:text-[1.2rem] max-w-[700px] px-4 dark:text-slate-300">Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12 mt-6 md:mt-8">
            <span className="flex items-center gap-3 text-base md:text-[1.2rem] hover:scale-105 transition-transform dark:text-slate-200"><strong className="font-headline text-[2rem] md:text-[2.5rem] text-primary dark:text-accent">500+</strong> Empresas</span>
            <span className="flex items-center gap-3 text-base md:text-[1.2rem] hover:scale-105 transition-transform dark:text-slate-200"><strong className="font-headline text-[2rem] md:text-[2.5rem] text-primary dark:text-accent">24/7</strong> Operativa</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">
          {corps.map((c, i) => (
            <div key={i} className="corp-card group bg-white dark:bg-slate-800 border border-[#e2e8f0] dark:border-slate-700 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:-translate-y-2 rounded-lg">
              <div className="corp-img relative h-[200px] md:h-[240px] bg-dark overflow-hidden">
                {c.img && (
                  <Image 
                    src={c.img.imageUrl} 
                    alt={c.title} 
                    fill 
                    data-ai-hint={c.img.imageHint}
                    className="object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:contrast-110 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                  />
                )}
                <div className="absolute -bottom-[20px] md:-bottom-[25px] right-4 md:right-5 w-[44px] h-[44px] md:w-[50px] md:h-[50px] bg-accent text-dark flex items-center justify-center text-xl md:text-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:bg-primary group-hover:text-accent rounded-md">
                  {c.icon}
                </div>
              </div>
              <div className="corp-content p-6 md:p-10 flex flex-col flex-grow">
                <h3 className="text-primary dark:text-white text-[1.4rem] md:text-[1.6rem] mb-6 transition-colors group-hover:text-secondary dark:group-hover:text-accent">{c.title}</h3>
                <ul className="list-none flex-grow mb-8">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 mb-3 text-[#475569] dark:text-slate-300 group-hover:translate-x-[5px] group-hover:text-primary dark:group-hover:text-white transition-all text-sm md:text-base">
                      <Check className="text-secondary dark:text-accent w-4 h-4 shrink-0" /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/servicios/plan-emprendedores" className="btn-link-solid min-h-[44px] block py-3 text-center bg-[#f1f5f9] dark:bg-slate-700 text-primary dark:text-white font-bold font-subheadline text-lg md:text-xl tracking-wider uppercase transition-all duration-300 relative z-10 overflow-hidden after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-primary dark:after:bg-accent after:transition-all after:-z-10 hover:text-white dark:hover:text-black hover:after:left-0 hover:shadow-[0_5px_15px_rgba(30,58,138,0.2)] dark:hover:shadow-[0_5px_15px_rgba(255,255,255,0.1)] rounded-md">
                  Conocer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
