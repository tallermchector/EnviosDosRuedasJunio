"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, CreditCard, PackageCheck } from "lucide-react";

export function FaqContent() {
  const faqData = [
    {
      category: "Servicios Generales",
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      questions: [
        {
          q: "¿Cuál es la zona de cobertura?",
          a: "Cubrimos la totalidad del ejido urbano de Mar del Plata. Por el momento, no cubrimos zonas aledañas o interurbanas para mantener nuestros estándares de velocidad."
        },
        {
          q: "¿Cuáles son los horarios de atención?",
          a: "Nuestra operativa funciona de Lunes a Viernes de 08:00 a 18:00 hs y los Sábados de 09:00 a 15:00 hs. Domingos y feriados permanecemos cerrados."
        }
      ]
    },
    {
      category: "Precios y Pagos",
      icon: <CreditCard className="w-6 h-6 text-accent" />,
      questions: [
        {
          q: "¿Cómo se calculan los precios?",
          a: "Las tarifas se calculan en base a la distancia (puntos de retiro y entrega) y adicionales por características del envío como bultos extra, días de lluvia o tiempos de espera prolongados."
        },
        {
          q: "¿Qué métodos de pago aceptan?",
          a: "Podés abonar en efectivo al momento del servicio o mediante transferencia bancaria. Para comercios y PyMEs, ofrecemos la posibilidad de abrir una cuenta corriente con facturación quincenal (Factura C disponible)."
        }
      ]
    },
    {
      category: "Proceso de Envío",
      icon: <PackageCheck className="w-6 h-6 text-accent" />,
      questions: [
        {
          q: "¿Cómo realizo el seguimiento de mi envío?",
          a: "Toda la gestión y seguimiento se centraliza vía WhatsApp. Recibirás una notificación directa de nuestro equipo una vez que el paquete haya sido entregado con éxito."
        },
        {
          q: "¿Existen límites de peso o tamaño?",
          a: "Sí, para garantizar la agilidad en moto, el peso máximo por bulto es de 5 kg y las dimensiones máximas permitidas son de 40x40x30 cm."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-light utility-bg">
      <div className="container max-w-5xl">
        <div className="grid gap-16">
          {faqData.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-4 border-b-4 border-primary pb-4">
                <div className="p-3 bg-primary rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-primary text-3xl md:text-4xl font-display uppercase m-0">{section.category}</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {section.questions.map((item, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`${idx}-item-${i}`} 
                    className="bg-white border-2 border-slate-100 px-8 rounded-2xl hover:border-secondary transition-all duration-300 shadow-sm"
                  >
                    <AccordionTrigger className="text-xl md:text-2xl font-subhead text-primary hover:text-secondary hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-slate-600 pb-6 leading-relaxed font-body">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
