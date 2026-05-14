import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 selection:bg-[#00ff88]/30">
      <Helmet>
        <title>Privacy Policy | GnWebAgency - Trasparenza e Protezione Dati</title>
        <meta name="description" content="Informativa sulla privacy di GnWebAgency. Non raccogliamo dati personali, massima trasparenza per la tua sicurezza." />
        <link rel="canonical" href="https://gnwebagency.com/privacy" />
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
          PRIVACY <span className="text-[#00ff88]">POLICY</span>
        </h1>
        
        <div className="space-y-12 font-light text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Titolare del Trattamento</h2>
            <p>
              GNWEGABENCY <br />
              Napoli, Italia <br />
              Email: info@gnwebagency.com
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Nessun Dato Raccolto</h2>
            <p>
              Il presente sito web è progettato per essere interamente statico e non raccoglie, 
              memorizza o elabora alcun dato personale dell'utente. Non sono presenti database 
              di registrazione, newsletter o altri sistemi di archiviazione dati sul server.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Form Contatti (WhatsApp)</h2>
            <p>
              Il modulo di contatto presente sul sito ha l'unica funzione di generare un messaggio 
              preimpostato da inviare tramite l'applicazione WhatsApp (protocollo wa.me). 
              Nessun dato inserito nel modulo viene trasmesso al nostro server o memorizzato in alcun modo.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Cookie Strettamente Necessari</h2>
            <p>
              Utilizziamo esclusivamente cookie tecnici necessari al corretto funzionamento del sito. 
              Non utilizziamo cookie di profilazione, cookie di terze parti o sistemi di tracciamento 
              (analytical cookies).
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Cessione Dati</h2>
            <p>
              Non raccogliendo dati, non effettuiamo alcuna cessione a terzi né trasferimenti 
              di dati all'estero.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Diritti GDPR</h2>
            <p>
              In conformità con il GDPR, i diritti di accesso, rettifica o cancellazione non sono 
              applicabili in quanto il titolare non effettua alcun trattamento di dati personali.
            </p>
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
