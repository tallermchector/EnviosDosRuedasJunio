"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";

// Carga asíncrona para evitar errores de SSR en Next.js con Shaders de Canvas
const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function HeroDitheringCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contenedor adaptado a la estética Brutalista del repositorio */}
        <div className="relative overflow-hidden rounded-[32px] border-4 border-black bg-card shadow-brutal min-h-[600px] flex flex-col items-center justify-center p-6 text-center transition-all duration-300">

          {/* Fondo interactivo con Shader Dithering */}
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20 animate-pulse" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparente
                colorFront="hsl(var(--primary))" // Vinculado al color primario del repositorio
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          {/* Contenido */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

            {/* Badge superior */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-black bg-light px-4 py-1.5 text-sm font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Envíos en Dos Ruedas
            </div>

            {/* Titular utilizando font-headline (Anton) adaptado al repositorio */}
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-normal text-foreground mb-6 uppercase leading-none selection:bg-primary selection:text-white">
              Tus envíos, <br />
              <span className="text-primary bg-black text-white px-4 inline-block transform -rotate-1 my-2">
                entregados a tiempo.
              </span>
            </h1>

            {/* Descripción utilizando la fuente base */}
            <p className="text-black font-medium text-lg md:text-xl max-w-2xl mb-10 leading-relaxed dark:text-muted-foreground">
              La red de mensajería en moto más rápida, segura y confiable. Soluciones logísticas inmediatas adaptadas a las necesidades de tu negocio.
            </p>

            {/* Botón con diseño e interacciones brutalistas */}
            <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl border-4 border-black bg-primary px-12 text-lg font-black text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span className="relative z-10">Cotizar Envío</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
