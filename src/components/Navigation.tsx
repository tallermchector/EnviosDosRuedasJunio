"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bike } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b-4 border-black sticky top-0 z-50 shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-headline text-2xl uppercase tracking-wider text-black min-h-[44px]">
            <Bike className="h-6 w-6 stroke-[3]" />
            <span>Dos Ruedas</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#servicios" className="font-bold text-black hover:text-primary transition-colors min-h-[44px] flex items-center px-2">Servicios</Link>
            <Link href="#cobertura" className="font-bold text-black hover:text-primary transition-colors min-h-[44px] flex items-center px-2">Cobertura</Link>
            <Link href="#cotizar" className="border-2 border-black bg-primary text-primary-foreground px-4 py-2 font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
              Cotizar Ya
            </Link>
          </div>

          {/* Mobile Menu Button - Mínimo 44x44px */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none min-w-[44px] min-h-[44px]"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu con Adaptive Layout */}
      <div className={`md:hidden transition-all duration-300 ease-in-out border-t-2 border-black bg-yellow-50 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-2 font-bold uppercase tracking-wide">
          <Link
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black rounded-lg transition-all"
          >
            Servicios
          </Link>
          <Link
            href="#cobertura"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black rounded-lg transition-all"
          >
            Cobertura
          </Link>
          <div className="pt-2 px-4">
            <Link
              href="#cotizar"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block border-4 border-black bg-primary text-primary-foreground py-3 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Cotizar Ya
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
