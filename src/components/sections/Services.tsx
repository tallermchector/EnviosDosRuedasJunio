
import { BrutalistCard } from "@/components/BrutalistCard";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Shield, BarChart3 } from "lucide-react";

const services = [
  {
    title: "EXPRESS",
    desc: "Envíos inmediatos en menos de 120 minutos dentro de MDP.",
    icon: <Zap className="w-12 h-12" />,
    color: "bg-accent",
    price: "Desde $800"
  },
  {
    title: "E-COMMERCE",
    desc: "Ideal para tiendas online. Retiros y entregas masivas programadas.",
    icon: <BarChart3 className="w-12 h-12" />,
    color: "bg-secondary text-white",
    price: "Desde $450"
  },
  {
    title: "FLEX",
    desc: "Entregas en el día o 24hs. Equilibrio perfecto entre costo y velocidad.",
    icon: <Clock className="w-12 h-12" />,
    color: "bg-primary text-white",
    price: "Desde $600"
  },
  {
    title: "LOW COST",
    desc: "Envíos económicos para mercadería sin urgencia. Optimizado para volumen.",
    icon: <Shield className="w-12 h-12" />,
    color: "bg-white",
    price: "Desde $350"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-headline mb-4">Nuestros Planes</h2>
          <p className="text-xl font-medium">
            Selecciona el nivel de servicio que mejor se adapte a tus necesidades de entrega.
          </p>
        </div>
        <div className="font-subheadline text-2xl border-b-4 border-black pb-2">
          LOGÍSTICA TOTAL MDP
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <BrutalistCard key={i} className={`flex flex-col h-full ${s.color}`}>
            <div className="mb-6 border-b-2 border-black pb-4 flex justify-between items-start">
              {s.icon}
              <span className="font-headline text-xl">{s.price}</span>
            </div>
            <h3 className="text-3xl font-headline mb-4">{s.title}</h3>
            <p className="font-medium mb-8 flex-grow">{s.desc}</p>
            <Button className="w-full brutalist-button bg-white text-black hover:bg-black hover:text-white border-2 border-black">
              ELEGIR PLAN
            </Button>
          </BrutalistCard>
        ))}
      </div>
    </section>
  );
}
