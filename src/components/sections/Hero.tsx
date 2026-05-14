import { motion } from "motion/react";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Layer 1: Falling Pattern */}
      <div className="absolute inset-0 opacity-20">
        <FallingPattern 
          className="h-screen [mask-image:radial-gradient(ellipse_at_center,transparent,black)]"
          color="#00ff88" 
          backgroundColor="#000000" 
          duration={150} 
          blurIntensity="0.8rem" 
          density={1.5} 
        />
      </div>

      {/* Background Layer 2: GLSL Hills */}
      <div className="absolute inset-0 opacity-60">
        <GLSLHills color="#00ff88" speed={0.3} />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 glass px-3 py-1 rounded-full border-accent/20 mb-4 animate-float">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">Napoli, Italia</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter text-white font-mono">
            <span className="sr-only">Web Agency Napoli: Creazione Siti Web Professionali | </span>
            FORGIAMO <br />
            <span className="text-accent drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]">FUTURI DIGITALI</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Creiamo siti web moderni e minimalisti per aziende italiane <br className="hidden md:block" />
            che vogliono essere trovate online e distinguersi dal rumore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button 
              size="lg" 
              className="group bg-accent text-black hover:bg-accent/90 px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all duration-300 shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:scale-105"
              onClick={scrollToContact}
            >
              Richiedi Beta Gratuita
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href="#servizi" 
              className="text-xs uppercase tracking-[0.3em] font-mono hover:text-accent transition-colors"
            >
              I nostri servizi
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative side rail text */}
      <div className="absolute left-10 bottom-24 hidden lg:block">
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent/40 rotate-90 origin-left">
          gnwebagency // aesthetics
        </p>
      </div>
      
      <div className="absolute right-10 bottom-24 hidden lg:block">
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent/40 -rotate-90 origin-right">
          digital craft // since 2024
        </p>
      </div>

      {/* Hero glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
