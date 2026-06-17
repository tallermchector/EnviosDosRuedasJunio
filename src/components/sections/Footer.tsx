
"use client";

import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, ShieldHalf, Bolt, Globe, Radio } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary dark:bg-slate-950 text-white pt-16 md:pt-20 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand Col */}
          <div className="footer-col flex flex-col items-start">
            <div className="relative h-[50px] w-[50px] mb-4 transition-transform hover:scale-105">
              <Image src="/logo_envios.webp" alt="Envíos DosRuedas Logo" fill className="object-contain" sizes="50px" />
            </div>
            <h3 className="text-white mb-0 font-headline text-[1.5rem] md:text-[1.8rem]">Envíos DosRuedas</h3>
            <p className="text-accent text-[0.95rem] mb-6 tracking-[0.5px]">tu solución confiable</p>
            <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">La mensajería y logística de última milla líder en Mar del Plata, impulsando el crecimiento de negocios locales con tecnología y precisión.</p>
            <div className="flex gap-4">
              <a href="#" target="_blank" className="w-[44px] h-[44px] bg-white/10 flex items-center justify-center rounded-full transition-all hover:bg-accent hover:text-primary hover:-translate-y-1 hover:scale-115" aria-label="Visitar nuestro Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="w-[44px] h-[44px] bg-white/10 flex items-center justify-center rounded-full transition-all hover:bg-accent hover:text-primary hover:-translate-y-1 hover:scale-115" aria-label="Visitar nuestro Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="footer-col">
            <h4 className="font-subheadline text-xl md:text-2xl text-accent mb-6 md:mb-8 uppercase tracking-wider">Nosotros</h4>
            <ul className="list-none space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block relative min-h-[44px] flex items-center">Sobre Nosotros</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block relative min-h-[44px] flex items-center">Preguntas Frecuentes</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block relative min-h-[44px] flex items-center">Nuestras Redes</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4 className="font-subheadline text-xl md:text-2xl text-accent mb-6 md:mb-8 uppercase tracking-wider">Servicios</h4>
            <ul className="list-none space-y-3">
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block min-h-[44px] flex items-center">Envíos Express</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block min-h-[44px] flex items-center">Envíos LowCost</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block min-h-[44px] flex items-center">Envíos Flex (MeLi)</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-accent hover:translate-x-2 transition-all block min-h-[44px] flex items-center">E-Commerce & 3PL</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h4 className="font-subheadline text-xl md:text-2xl text-accent mb-6 md:mb-8 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4 text-white/80">
              <p className="flex items-start gap-4 transition-colors hover:text-accent min-h-[44px]">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" /> <span>Friuli 1972, Mar del Plata<br/>Buenos Aires, AR</span>
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-accent min-h-[44px]">
                <Phone className="w-5 h-5 text-accent shrink-0" /> <span>+54 9 2236 60-2699</span>
              </p>
              <p className="flex items-center gap-4 transition-colors hover:text-accent min-h-[44px]">
                <Mail className="w-5 h-5 text-accent shrink-0" /> <span>matiascejas@enviosdosruedas.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Banners */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10 py-8 md:py-12 border-y border-white/10 mb-8">
          <span className="flex items-center gap-3 font-subheadline text-lg md:text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <ShieldHalf className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> SEGURIDAD CERTIFICADA
          </span>
          <span className="flex items-center gap-3 font-subheadline text-lg md:text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <Bolt className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> VELOCIDAD MÁXIMA
          </span>
          <span className="flex items-center gap-3 font-subheadline text-lg md:text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <Globe className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> COBERTURA DISTRITAL
          </span>
          <span className="flex items-center gap-3 font-subheadline text-lg md:text-[1.3rem] tracking-wider text-accent transition-transform hover:scale-105 hover:-translate-y-[3px]">
            <Radio className="w-5 h-5 md:w-6 md:h-6 shrink-0" /> STATUS ONLINE
          </span>
        </div>

        <div className="text-center text-white/60 text-[0.8rem] md:text-[0.9rem] pt-6 md:pt-8 border-t border-white/10 font-bold">
          <p>&copy; 2026 Envios DosRuedas. Todos los derechos reservados. | <Link href="#" className="hover:text-accent underline min-h-[44px] inline-flex items-center">Privacidad</Link> | <Link href="#" className="hover:text-accent underline min-h-[44px] inline-flex items-center">Términos</Link></p>
        </div>
      </div>
    </footer>
  );
}
