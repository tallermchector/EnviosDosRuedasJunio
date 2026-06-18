'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { calculateExpressQuote, type QuoteResult } from '@/app/cotizar/actions';
import { MapPin, Navigation, Calculator, Loader2, Clock, Zap, Map as MapIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ExpressCalculator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const { toast } = useToast();

  async function handleCalculate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const origin = formData.get('origin') as string;
    const destination = formData.get('destination') as string;

    if (!origin || !destination) {
      toast({
        title: "Campos incompletos",
        description: "Por favor ingresá ambas direcciones.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const quote = await calculateExpressQuote(origin, destination);
      setResult(quote);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo calcular la cotización. Reintentá en unos momentos.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-light utility-bg">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[40px] border-4 border-dark shadow-[12px_12px_0px_rgba(30,58,138,1)]">
              <h2 className="text-primary text-4xl font-display uppercase mb-4">Calculá tu Envío Express</h2>
              <p className="text-slate-500 mb-10 text-lg font-body">
                Ingresá las direcciones de origen y destino para obtener una cotización instantánea basada en el tráfico real de Mar del Plata.
              </p>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="origin" className="font-subhead text-2xl uppercase tracking-wider text-primary flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" /> Dirección de Origen
                  </Label>
                  <Input 
                    id="origin" 
                    name="origin" 
                    placeholder="Ej: Friuli 1972, Mar del Plata" 
                    className="h-16 text-xl rounded-2xl border-2 border-slate-100 focus:border-primary transition-all shadow-inner bg-slate-50"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="destination" className="font-subhead text-2xl uppercase tracking-wider text-primary flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-secondary" /> Dirección de Destino
                  </Label>
                  <Input 
                    id="destination" 
                    name="destination" 
                    placeholder="Ej: San Martín y San Luis, Mar del Plata" 
                    className="h-16 text-xl rounded-2xl border-2 border-slate-100 focus:border-primary transition-all shadow-inner bg-slate-50"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-20 bg-accent hover:bg-dark hover:text-accent text-dark font-subhead text-3xl uppercase tracking-widest rounded-2xl transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  {loading ? (
                    <><Loader2 className="mr-3 w-8 h-8 animate-spin" /> Calculando...</>
                  ) : (
                    <><Calculator className="mr-3 w-8 h-8" /> Calcular Ruta y Precio</>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Results Side */}
          <div className="relative h-full">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-500">
                <div className="bg-primary text-white p-10 rounded-[40px] border-4 border-dark shadow-[12px_12px_0px_var(--color-accent)]">
                  <h3 className="text-accent font-display text-4xl uppercase mb-8 border-b-2 border-white/10 pb-4">Resultado de Cotización</h3>
                  
                  <div className="grid gap-8">
                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <MapIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-white/60 font-subhead text-xl uppercase tracking-widest leading-none mb-1">Distancia</p>
                        <p className="text-4xl font-display">{result.distance} KM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                        <Clock className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-white/60 font-subhead text-xl uppercase tracking-widest leading-none mb-1">Tiempo Estimado</p>
                        <p className="text-4xl font-display">{result.estimatedTime}</p>
                      </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-3xl border-2 border-accent relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent opacity-5 -translate-x-4 translate-y-4 rounded-full scale-150" />
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <p className="text-accent font-subhead text-2xl uppercase tracking-[0.2em] mb-2">Precio Estimado Express</p>
                        <p className="text-7xl md:text-8xl font-display text-white">${result.price.toLocaleString('es-AR')}</p>
                        <div className="mt-6 inline-flex items-center gap-2 bg-accent text-dark px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
                          <Zap className="w-4 h-4 fill-current" /> Máxima Prioridad
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button className="w-full h-16 bg-white hover:bg-accent text-primary hover:text-dark font-subhead text-2xl uppercase tracking-widest rounded-xl transition-all">
                      Confirmar y Solicitar Moto
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-4 border-dashed border-slate-200 rounded-[40px] opacity-40 grayscale">
                <Calculator className="w-24 h-24 text-slate-300 mb-6" />
                <p className="text-2xl font-subhead uppercase tracking-widest text-slate-400">Esperando direcciones...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
