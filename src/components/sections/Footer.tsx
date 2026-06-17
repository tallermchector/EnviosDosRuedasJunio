
import { BrutalistCard } from "@/components/BrutalistCard";
import { Truck, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Truck className="w-10 h-10 text-accent" />
              <h2 className="font-headline text-4xl">DOS RUEDAS</h2>
            </div>
            <p className="font-medium opacity-80">
              Líderes en logística de última milla para e-commerce en Mar del Plata. Velocidad, confianza y tecnología aplicada al transporte.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-2xl mb-8 border-b-2 border-accent pb-2 inline-block">CONTACTO</h3>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /> Mar del Plata, Argentina</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /> +54 9 223 123-4567</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /> hola@dosruedas.com.ar</li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-2xl mb-8 border-b-2 border-accent pb-2 inline-block">SERVICIOS</h3>
            <ul className="space-y-4 font-medium uppercase text-sm tracking-wider">
              <li><a href="#" className="hover:text-accent transition-colors">E-commerce 3PL</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Última Milla MDP</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mensajería Express</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integración API</a></li>
            </ul>
          </div>

          <BrutalistCard variant="secondary" className="p-6">
            <h3 className="font-headline text-2xl mb-4 text-white">ÚNETE A NUESTRA RED</h3>
            <p className="text-sm font-bold mb-6 opacity-90">¿Tienes una tienda online? Conecta tu Shopify, TiendaNube o Woocommerce.</p>
            <button className="w-full brutalist-button bg-accent text-black font-headline text-xl">
              CONECTAR TIENDA
            </button>
          </BrutalistCard>
        </div>

        <div className="border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold opacity-60">
          <p>© 2024 ENVÍOS DOSRUEDAS MDP. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8 uppercase">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Legales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
