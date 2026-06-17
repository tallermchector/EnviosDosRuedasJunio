"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

const posts = [
  { img: "/resources/9uqImJ8rV8RevmhuX7m4M0", link: "https://instagram.com/enviosdosruedas" },
  { img: "/resources/87w9mIEHzJJ4KnONh424qf", link: "https://www.facebook.com/enviosdosruedas" },
  { img: "/resources/8ABUMGlR7jB3OJgSw-M_Df", link: "https://instagram.com/enviosdosruedas" },
  { img: "/resources/aBLv2uSUlYX23t6d9jvkNs", link: "https://www.facebook.com/enviosdosruedas" },
  { img: "/resources/8C68LBXNqOu5mZ5lOeJ4bY", link: "https://instagram.com/enviosdosruedas" }
];

export function SocialGallery() {
  const allPosts = [...posts, ...posts]; // Duplicated for infinite scroll illusion

  return (
    <section id="redes" className="py-16 md:py-24 bg-light dark:bg-slate-900 overflow-hidden pb-0">
      <div className="container mx-auto px-4 md:px-8 text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:text-secondary px-4 md:px-5 py-2 rounded-full font-subheadline text-base md:text-[1.2rem] tracking-wider font-bold mb-4"><span className="pulse-dot" /> CONECTA CON NOSOTROS</div>
        <h2 className="text-primary dark:text-white font-headline uppercase mb-8 md:mb-16 text-[clamp(2rem,5vw,3.5rem)]">SIGUE NUESTRO MOVIMIENTO</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-16">
          <a href="https://instagram.com/enviosdosruedas" target="_blank" className="social-btn min-h-[64px] group relative flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white dark:bg-slate-800 border border-[#e2e8f0] dark:border-slate-700 rounded-[12px] w-full max-w-[280px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 hover:border-transparent dark:hover:border-transparent">
            <div className="absolute inset-0 bg-[#E1306C] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <Instagram className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-white group-hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <strong className="block font-subheadline text-xl md:text-2xl tracking-wider text-dark dark:text-white group-hover:text-white transition-colors">Instagram</strong>
              <span className="text-[0.8rem] md:text-[0.85rem] text-[#64748b] dark:text-slate-400 group-hover:text-white/80 transition-colors">Novedades diarias</span>
            </div>
          </a>
          
          <a href="https://www.facebook.com/enviosdosruedas" target="_blank" className="social-btn min-h-[64px] group relative flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white dark:bg-slate-800 border border-[#e2e8f0] dark:border-slate-700 rounded-[12px] w-full max-w-[280px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 hover:border-transparent dark:hover:border-transparent">
            <div className="absolute inset-0 bg-[#1877F2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <Facebook className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-white group-hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <strong className="block font-subheadline text-xl md:text-2xl tracking-wider text-dark dark:text-white group-hover:text-white transition-colors">Facebook</strong>
              <span className="text-[0.8rem] md:text-[0.85rem] text-[#64748b] dark:text-slate-400 group-hover:text-white/80 transition-colors">Comunidad activa</span>
            </div>
          </a>
          
          <a href="https://api.whatsapp.com/send/?phone=5492236602699" target="_blank" className="social-btn min-h-[64px] group relative flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white dark:bg-slate-800 border border-[#e2e8f0] dark:border-slate-700 rounded-[12px] w-full max-w-[280px] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden z-10 hover:border-transparent dark:hover:border-transparent">
            <div className="absolute inset-0 bg-[#25D366] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-white group-hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <strong className="block font-subheadline text-xl md:text-2xl tracking-wider text-dark dark:text-white group-hover:text-white transition-colors">WhatsApp</strong>
              <span className="text-[0.8rem] md:text-[0.85rem] text-[#64748b] dark:text-slate-400 group-hover:text-white/80 transition-colors">Atención inmediata</span>
            </div>
          </a>
        </div>
      </div>

      <div className="infinite-carousel bg-dark dark:bg-slate-950 py-8 md:py-12">
        <div className="carousel-track-anim flex gap-4 md:gap-6 px-4 md:px-8 w-max hover:pause">
          {allPosts.map((p, i) => (
            <div key={i} className="carousel-item relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] shrink-0 group overflow-hidden">
              <Image src={p.img} alt="Social content" fill className="object-cover transition-all duration-500 group-hover:brightness-50 group-hover:grayscale-[50%]" sizes="(max-width: 768px) 250px, 320px" />
              <a href={p.link} target="_blank" className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0" aria-label="Ver post en red social">
                <Instagram className="w-10 h-10 md:w-12 md:h-12 text-accent transition-transform hover:scale-120" />
                <span className="font-subheadline text-[1.4rem] md:text-[1.8rem] tracking-wider uppercase">VER POST</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
