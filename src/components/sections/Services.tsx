import { motion, useMotionValue, useSpring } from "motion/react";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, Search, Layout, RefreshCw, Loader2 } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const services = [
  {
    title: "Creazione Siti Web Moderni",
    description: "Sviluppo di piattaforme web ad alte prestazioni con le ultime tecnologie (React, Vite, Next.js).",
    icon: Globe,
  },
  {
    title: "SEO Ottimizzazione Google Italia",
    description: "Strategie mirate per dominare le ricerche locali e nazionali in Italia, portando clienti reali.",
    icon: Search,
  },
  {
    title: "Web Design Minimalista",
    description: "Design pulito, premium e orientato alla conversione. Meno rumore, più risultati.",
    icon: Layout,
  },
  {
    title: "Manutenzione & Aggiornamenti",
    description: "Supporto continuo per garantire che il tuo sito web sia sempre sicuro, veloce e all'avanguardie.",
    icon: RefreshCw,
  },
];

export const Services = () => {
  return (
    <section id="servizi" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20">
      <div className="container mx-auto px-6 relative h-full flex items-center justify-center">
        
        {/* Central 3D Robot */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <Suspense fallback={
            <div className="flex items-center justify-center">
              <Loader2 className="w-12 h-12 text-accent animate-spin opacity-20" />
            </div>
          }>
            <div className="w-full h-[600px] lg:h-full relative overflow-visible">
              <Spline 
                scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode" 
                className="w-full h-full transform scale-110 lg:scale-[1.3]"
              />
            </div>
          </Suspense>
        </div>

        {/* Floating Cards Content */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-between py-10 lg:py-0">
          
          <div className="text-center mb-16 lg:hidden">
            <h2 className="text-3xl font-bold font-mono tracking-tighter text-white">
              I NOSTRI <span className="text-accent underline decoration-accent/30">SERVIZI</span>
            </h2>
          </div>
          <span className="sr-only">
            <h2>Migliore Web Agency Napoli per Piccole Attività: I Nostri Servizi SEO e Web Design</h2>
          </span>
          
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:mb-24">
            {/* Top Left: 01 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[320px]"
            >
              <FloatingCard 
                number="01"
                title="CREAZIONE SITI WEB MODERNI"
                description="Sviluppo di piattaforme web ad alte prestazioni con le ultime tecnologie (React, Vite, Next.js)."
                icon={Globe}
              />
            </motion.div>

            {/* Top Right: 02 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-[320px]"
            >
              <FloatingCard 
                number="02"
                title="SEO OTTIMIZZAZIONE GOOGLE ITALIA"
                description="Strategie mirate per dominare le ricerche locali e nazionali in Italia, portando clienti reali."
                icon={Search}
              />
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:mt-24">
            {/* Bottom Left: 03 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-[320px]"
            >
              <FloatingCard 
                number="03"
                title="WEB DESIGN MINIMALISTA"
                description="Design pulito, premium e orientato alla conversione. Meno rumore, più risultati."
                icon={Layout}
              />
            </motion.div>

            {/* Bottom Right: 04 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full lg:w-[320px]"
            >
              <FloatingCard 
                number="04"
                title="MANUTENZIONE & AGGIORNAMENTI"
                description="Supporto continuo per garantire che il tuo sito web sia sempre sicuro, veloce e all'avanguardia."
                icon={RefreshCw}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Unified composition glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[180px] rounded-full pointer-events-none z-0" />
    </section>
  );
};

const FloatingCard = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 rounded-2xl hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-500 group shadow-2xl overflow-hidden relative">
    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
    
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-accent text-xs tracking-widest">{number}</span>
        <div className="w-8 h-8 flex items-center justify-center rounded-lg glass border-accent/20 group-hover:border-accent/50 transition-colors">
          <Icon className="w-4 h-4 text-accent" />
        </div>
      </div>
      
      <div>
        <h3 className="text-[13px] font-bold uppercase tracking-wider text-white mb-3 leading-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-[11px] text-gray-400 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  </Card>
);
