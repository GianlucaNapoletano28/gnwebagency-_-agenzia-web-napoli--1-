import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    descrizione: ""
  });

  const handleWhatsApp = () => {
    const text = `Ciao GNWEBAGENCY, sono ${formData.nome} ${formData.cognome}. %0A%0A${formData.descrizione}`;
    window.open(`https://wa.me/393887397246?text=${text}`, '_blank');
  };

  return (
    <section id="contatti" className="relative bg-black overflow-hidden py-20">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              QUANTO COSTA UN <br />
              <span className="text-[#00ff88] mt-1 text-5xl md:text-8xl">
                SITO WEB A NAPOLI?
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-12">Richiedi un preventivo gratuito per la tua attività</p>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full p-4 md:p-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                PRONTO A <br />
                <span className="text-[#00ff88]">INIZIARE?</span>
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light mb-8 max-w-md">
                Stiamo offrendo un numero limitato di versioni Beta gratuite per aziende selezionate a Napoli e in Italia.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">EMAIL</span>
                  <span className="text-white">gnwebagency@gmail.com</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">RISPOSTA RAPIDA</span>
                  <span className="text-[#00ff88] tracking-widest uppercase text-sm">~15 minuti</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-[10px] uppercase tracking-widest text-gray-500">NOME</Label>
                <Input 
                  id="nome" 
                  placeholder="Nome" 
                  className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#00ff88]/50 transition-colors h-10 md:h-12"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cognome" className="text-[10px] uppercase tracking-widest text-gray-500">COGNOME</Label>
                <Input 
                  id="cognome" 
                  placeholder="Cognome" 
                  className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#00ff88]/50 transition-colors h-10 md:h-12"
                  value={formData.cognome}
                  onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="descrizione" className="text-[10px] uppercase tracking-widest text-gray-500">LA TUA DOMANDA</Label>
              <Textarea 
                id="descrizione" 
                placeholder="Come possiamo aiutarti?" 
                className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#00ff88]/50 transition-colors min-h-[80px] md:min-h-[120px] resize-none"
                value={formData.descrizione}
                onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })}
              />
            </div>

            <Button 
              className="w-full bg-[#00ff88] text-black hover:bg-[#00ff88]/90 py-4 md:py-6 rounded-none font-bold uppercase tracking-widest text-xs transition-all group"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              INVIA SU WHATSAPP
            </Button>
          </div>
        </div>

        {/* Decorative accent glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00ff88]/10 blur-[60px] rounded-full pointer-events-none" />
      </ContainerScroll>

      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#00ff88]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};


