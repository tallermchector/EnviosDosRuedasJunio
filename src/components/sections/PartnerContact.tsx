
import { BrutalistCard } from "@/components/BrutalistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Building2, Rocket } from "lucide-react";

export function PartnerContact() {
  return (
    <section id="contact" className="py-24 px-4 bg-accent">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-headline leading-tight">Impulsa tu <span className="underline decoration-8 decoration-primary">Negocio</span></h2>
          <p className="text-2xl font-medium">¿Eres una empresa 3PL o un e-commerce de alto volumen? Tenemos soluciones escalables diseñadas para potenciar tu logística.</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border-2 border-black bg-white shadow-brutal-sm">
              <Building2 className="w-10 h-10 text-primary" />
              <div>
                <p className="font-headline text-2xl">SOLUCIONES CORPORATIVAS</p>
                <p className="font-medium text-sm">Flota dedicada y almacén inteligente.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border-2 border-black bg-white shadow-brutal-sm">
              <Rocket className="w-10 h-10 text-secondary" />
              <div>
                <p className="font-headline text-2xl">API & INTEGRACIONES</p>
                <p className="font-medium text-sm">Automatiza tus envíos desde tu propia web.</p>
              </div>
            </div>
          </div>
        </div>

        <BrutalistCard className="p-8">
          <h3 className="text-4xl font-headline mb-8">Formulario Enterprise</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-subheadline text-xl">Nombre</Label>
                <Input placeholder="Tu nombre" className="border-2 border-black rounded-none" />
              </div>
              <div className="space-y-2">
                <Label className="font-subheadline text-xl">Empresa</Label>
                <Input placeholder="Nombre de empresa" className="border-2 border-black rounded-none" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="font-subheadline text-xl">Email Corporativo</Label>
              <Input type="email" placeholder="email@empresa.com" className="border-2 border-black rounded-none" />
            </div>
            <div className="space-y-2">
              <Label className="font-subheadline text-xl">Volumen mensual estimado</Label>
              <Input placeholder="+500 envíos/mes" className="border-2 border-black rounded-none" />
            </div>
            <div className="space-y-2">
              <Label className="font-subheadline text-xl">Mensaje</Label>
              <Textarea placeholder="Cuéntanos tus necesidades logísticas..." className="border-2 border-black rounded-none h-32" />
            </div>
            <Button className="w-full brutalist-button bg-primary text-white h-16 text-2xl">
              <Send className="mr-2" /> ENVIAR SOLICITUD
            </Button>
          </form>
        </BrutalistCard>
      </div>
    </section>
  );
}
