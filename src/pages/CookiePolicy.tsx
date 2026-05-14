import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 selection:bg-[#00ff88]/30">
      <Helmet>
        <title>Cookie Policy | GnWebAgency - Utilizziamo solo Cookie Tecnici</title>
        <meta name="description" content="Scopri come GnWebAgency utilizza solo i cookie tecnici necessari per il funzionamento del sito. Nessun tracciamento o profilazione." />
        <link rel="canonical" href="https://gnwebagency.com/cookies" />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-[#00ff88] mb-12 hover:gap-3 transition-all font-mono text-sm">
          <ArrowLeft size={16} /> TORNA ALLA HOME
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          COOKIE <span className="text-[#00ff88]">POLICY</span>
        </h1>
        
        <div className="space-y-12 font-light text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro 
              terminali, ove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla 
              visita successiva.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">I nostri cookie</h2>
            <p>
              Questo sito utilizza esclusivamente **cookie tecnici**. Questi sono necessari per 
              consentire la navigazione sul sito e fornire i servizi richiesti dall'utente. 
              In particolare, potremmo utilizzare:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Cookie di sessione: per il funzionamento tecnico della navigazione.</li>
              <li>Cookie di preferenza: per memorizzare la tua scelta relativa alla presa visione di questa informativa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Nessun Cookie di Terze Parti</h2>
            <p>
              Non utilizziamo cookie di terze parti (come Google Analytics, Facebook Pixel, ecc.). 
              Nessun dato viene trasmesso a piattaforme esterne per scopi pubblicitari o statistici.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Nessun Tracciamento</h2>
            <p>
              Non utilizziamo cookie di profilazione o tracciamento del comportamento dell'utente.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Come gestire i cookie</h2>
            <p>
              L'utente può gestire le preferenze relative ai cookie direttamente all'interno delle 
              impostazioni del proprio browser ed impedire — ad esempio — che terze parti possano 
              installarne. Tramite le preferenze del browser è inoltre possibile eliminare i 
              cookie installati in passato.
            </p>
            <div className="mt-4 p-4 border border-white/5 bg-white/5 font-mono text-xs">
              Esempi su come disabilitarli: <br />
              - Chrome: Impostazioni &gt; Privacy e sicurezza &gt; Cookie <br />
              - Safari: Preferenze &gt; Privacy &gt; Blocca tutti i cookie <br />
              - Firefox: Opzioni &gt; Privacy e sicurezza &gt; Cookie
            </div>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-widest">
              Ultimo aggiornamento: maggio 2025
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
