"use client";

import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full bg-background py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Contenido de Texto */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-secondary text-secondary-foreground px-3 py-1 text-xs sm:text-sm font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Clock className="h-4 w-4" /> Envíos Express en Minutos
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground uppercase tracking-normal leading-none break-words w-full">
            Mensajería urbana <br />
            <span className="bg-primary text-primary-foreground px-2 sm:px-4 inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-2">
              sin complicaciones.
            </span>
          </h1>

          <p className="text-black font-medium text-base sm:text-lg md:text-xl max-w-xl lg:max-w-none leading-relaxed dark:text-muted-foreground">
            La red logística en dos ruedas diseñada para emprendedores y empresas que exigen inmediatez, seguridad y rastreo en tiempo real.
          </p>

          {/* Botones Interactivos - Optimizados para pantallas táctiles */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button className="group w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 border-4 border-black bg-primary px-8 text-base sm:text-lg font-black text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span>Solicitar Cadete</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center border-4 border-black bg-white px-8 text-base sm:text-lg font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              Ver Tarifas
            </button>
          </div>
        </div>

        {/* Imagen o Elemento Gráfico Responsivo */}
        <div className="lg:col-span-5 w-full flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-square bg-yellow-300 border-4 border-black shadow-brutal rounded-2xl flex flex-col items-center justify-center p-6 sm:p-8 transform rotate-1">
            <div className="absolute -top-4 -left-4 border-2 border-black bg-white px-3 py-1 font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-green-600" /> 100% Seguro
            </div>
            <span className="font-headline text-7xl sm:text-9xl text-black select-none">MOTO</span>
            <span className="font-subheadline text-3xl sm:text-4xl text-black tracking-widest uppercase">YA MISMO</span>
          </div>
        </div>

      </div>
    </section>
  );
}
