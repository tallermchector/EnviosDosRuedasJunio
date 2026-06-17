
"use client";

import { useState } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { customerOptimizedShippingQuote, type CustomerOptimizedShippingQuoteOutput } from "@/ai/flows/customer-optimized-shipping-quote-flow";
import { Calculator, Check, Loader2, Sparkles } from "lucide-react";

export function QuoteEngine() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CustomerOptimizedShippingQuoteOutput | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const data = await customerOptimizedShippingQuote({
        length: Number(formData.get('length')),
        width: Number(formData.get('width')),
        height: Number(formData.get('height')),
        weight: Number(formData.get('weight')),
        urgency: formData.get('urgency') as any,
      });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="quote" className="py-16 px-4 bg-primary text-white overflow-hidden border-y-4 border-black">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-headline leading-tight">
            Cotizador <span className="text-accent italic">Inteligente</span>
          </h2>
          <p className="text-xl font-medium opacity-90 max-w-md">
            Nuestro sistema IA analiza las dimensiones y urgencia para ofrecerte la tarifa más optimizada en tiempo real.
          </p>
          <BrutalistCard variant="secondary" className="text-white p-4">
             <div className="flex items-center gap-3">
               <Sparkles className="w-6 h-6 text-accent animate-pulse" />
               <p className="font-subheadline text-lg">Impulsado por Gemini 2.5 Flash</p>
             </div>
          </BrutalistCard>
        </div>

        <BrutalistCard className="text-black">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length" className="font-subheadline text-lg">Largo (cm)</Label>
                <Input id="length" name="length" type="number" required className="border-2 border-black bg-white rounded-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width" className="font-subheadline text-lg">Ancho (cm)</Label>
                <Input id="width" name="width" type="number" required className="border-2 border-black bg-white rounded-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height" className="font-subheadline text-lg">Alto (cm)</Label>
                <Input id="height" name="height" type="number" required className="border-2 border-black bg-white rounded-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="font-subheadline text-lg">Peso (kg)</Label>
                <Input id="weight" name="weight" type="number" required className="border-2 border-black bg-white rounded-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency" className="font-subheadline text-lg">Urgencia</Label>
              <Select name="urgency" defaultValue="standard">
                <SelectTrigger className="border-2 border-black bg-white rounded-none">
                  <SelectValue placeholder="Seleccionar urgencia" />
                </SelectTrigger>
                <SelectContent className="border-2 border-black rounded-none">
                  <SelectItem value="express">Express (Inmediato)</SelectItem>
                  <SelectItem value="standard">Estándar (24hs)</SelectItem>
                  <SelectItem value="flex">Flex (Económico)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={loading} className="w-full brutalist-button text-2xl h-14 bg-primary text-white">
              {loading ? <Loader2 className="mr-2 animate-spin" /> : <Calculator className="mr-2" />}
              CALCULAR TARIFA IA
            </Button>
          </form>

          {result && (
            <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4">
              <div className="grid grid-cols-2 gap-4">
                <BrutalistCard variant="accent" className="p-4 shadow-brutal-sm">
                  <p className="font-subheadline text-xl">EXPRESS</p>
                  <p className="font-headline text-3xl">${result.expressEstimate.cost}</p>
                  <p className="text-xs font-bold uppercase">{result.expressEstimate.estimatedDeliveryDays} DÍAS ESTIMADOS</p>
                </BrutalistCard>
                <BrutalistCard className="p-4 shadow-brutal-sm bg-blue-100">
                  <p className="font-subheadline text-xl">FLEX</p>
                  <p className="font-headline text-3xl">${result.flexEstimate.cost}</p>
                  <p className="text-xs font-bold uppercase">{result.flexEstimate.estimatedDeliveryDays} DÍAS ESTIMADOS</p>
                </BrutalistCard>
              </div>
              {result.notes && (
                <div className="bg-yellow-100 border-2 border-black p-3 text-sm font-medium">
                   <strong>Nota IA:</strong> {result.notes}
                </div>
              )}
              <Button className="w-full brutalist-button bg-green-500 text-white h-12">
                RESERVAR ENVÍO AHORA
              </Button>
            </div>
          )}
        </BrutalistCard>
      </div>
    </section>
  );
}
