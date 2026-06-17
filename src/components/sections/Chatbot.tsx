
"use client";

import { useState } from "react";
import { BrutalistCard } from "@/components/BrutalistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { inquireLogistics } from "@/ai/flows/customer-logistics-chatbot-inquiry";
import { Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente de Envíos DosRuedas. ¿En qué puedo ayudarte hoy sobre zonas, tiempos o servicios?' }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await inquireLogistics({ question: userMsg });
      setMessages(prev => [...prev, { role: 'bot', text: response.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Lo siento, hubo un error procesando tu consulta.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-headline text-center mb-12">Consulta a nuestra <span className="bg-accent px-4 py-1 -rotate-1 inline-block">IA de Soporte</span></h2>
        
        <BrutalistCard className="h-[600px] flex flex-col bg-white">
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 border-2 border-black font-medium ${m.role === 'user' ? 'bg-secondary text-white shadow-brutal-sm' : 'bg-white shadow-brutal-sm'}`}>
                  <div className="flex items-center gap-2 mb-2 font-headline text-sm uppercase opacity-70">
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    {m.role === 'user' ? 'Tú' : 'Asistente DosRuedas'}
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black p-4 shadow-brutal-sm animate-pulse">
                  <Loader2 className="animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t-2 border-black p-4 flex gap-2">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre zonas de envío o tiempos..." 
              className="flex-grow border-2 border-black rounded-none h-12"
            />
            <Button onClick={handleSend} className="brutalist-button h-12 w-12 p-0">
              <Send className="w-6 h-6" />
            </Button>
          </div>
        </BrutalistCard>
      </div>
    </section>
  );
}
