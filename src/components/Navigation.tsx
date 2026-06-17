
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Truck } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 border-2 border-black shadow-brutal-sm group-hover:rotate-12 transition-transform">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <span className="font-headline text-3xl hidden sm:inline-block leading-none uppercase">Envíos DosRuedas</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-subheadline text-2xl">
          <Link href="#tracking" className="hover:text-secondary transition-colors">RASTREO</Link>
          <Link href="#services" className="hover:text-secondary transition-colors">PLANES</Link>
          <Link href="#quote" className="hover:text-secondary transition-colors">COTIZAR</Link>
          <Link href="#contact" className="hover:text-secondary transition-colors">PARTNERS</Link>
          <a href="https://wa.me/5492230000000" className="flex items-center gap-2 brutalist-button hover-ring">
            <Phone className="w-6 h-6" /> WHATSAPP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-black p-4 space-y-4 font-subheadline text-2xl flex flex-col items-center animate-in slide-in-from-top-4">
          <Link href="#tracking" onClick={() => setIsOpen(false)}>RASTREO</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>PLANES</Link>
          <Link href="#quote" onClick={() => setIsOpen(false)}>COTIZAR</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>PARTNERS</Link>
          <Button className="w-full brutalist-button py-6 text-2xl">
            <Phone className="mr-2" /> CONTACTO
          </Button>
        </div>
      )}
    </nav>
  );
}
