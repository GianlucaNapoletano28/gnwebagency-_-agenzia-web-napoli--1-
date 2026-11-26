import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const categories = [
  {
    title: "Costi e Tempi",
    icon: "💰",
    description: "Trasparenza su investimenti e roadmap di sviluppo.",
    items: [
      {
        question: "Quanto costa un sito web con GnWebAgency?",
        answer: "La landing page parte da 350€ ed è pronta in 7 giorni. Il costo finale dipende dalla complessità del progetto: numero di pagine, funzionalità specifiche (come prenotazioni o e-commerce), livello di personalizzazione del design e integrazioni esterne. Offriamo preventivi trasparenti e personalizzati per adattarci al budget di ogni piccola attività a Napoli e in Italia."
      },
      {
        question: "Quanto tempo serve per creare un sito web?",
        answer: "Una landing page è pronta in 7 giorni. Per un sito vetrina professionale, i tempi medi di consegna sono di circa 1-2 settimane. Se il progetto richiede funzionalità e-commerce o sviluppi custom più complessi, la tempistica può variare tra le 3 e le 4 settimane. La rapidità dipende anche dalla velocità con cui il cliente fornisce i materiali necessari."
      },
      {
        question: "Cosa include il vostro servizio base?",
        answer: "La landing page da 350€ include: design moderno, sviluppo tecnico, registrazione dominio (1° anno), configurazione hosting, SEO on-page, ottimizzazione mobile responsive e collegamento social. È la soluzione ideale per professionisti e piccoli negozi."
      },
      {
        question: "Si può pagare a rate?",
        answer: "Attualmente, per mantenere i nostri prezzi di partenza estremamente competitivi (da 350€), non offriamo la possibilità di pagamento rateizzato. Il pagamento è diviso in due tranche: acconto per l'avvio e saldo alla consegna."
      },
      {
        question: "Quanto costa il dominio e l'hosting?",
        answer: "Il costo si aggira tra i €10 e i €30 all'anno. In GnWebAgency includiamo il costo del primo anno nel pacchetto di sviluppo, così non dovrai preoccuparti di nulla al momento del lancio."
      }
    ]
  },
  {
    title: "Tecnologia e SEO",
    icon: "⚡",
    description: "Il cuore tecnico dei nostri progetti digitali.",
    items: [
      {
        question: "Il sito sarà ottimizzato per mobile?",
        answer: "Certamente. Progettiamo ogni sito con un approccio mobile-first. Il tuo sito web si adatterà automaticamente a smartphone, tablet e desktop, garantendo un'esperienza d'uso eccellente su ogni dispositivo."
      },
      {
        question: "Il sito sarà ottimizzato SEO?",
        answer: "Sì, la SEO on-page è inclusa. Ottimizziamo struttura, tempi di caricamento, meta tag e implementiamo schema markup JSON-LD (fondamentale per Google nel 2026). Garantiamo visibilità locale e nazionale."
      },
      {
        question: "Su che piattaforma sviluppate?",
        answer: "Utilizziamo stack moderni come React e Next.js per soluzioni custom ad alte prestazioni. Scegliamo la tecnologia migliore in base alle tue esigenze specifiche: velocità e SEO sono le nostre priorità."
      },
      {
        question: "Vi occupate anche di e-commerce?",
        answer: "Sì, realizziamo negozi online con Shopify, WooCommerce o soluzioni custom. Ogni nostro e-commerce è progettato per essere veloce, sicuro e focalizzato sulla massimizzazione delle vendite."
      }
    ]
  },
  {
    title: "Processo e Supporto",
    icon: "🤝",
    description: "Come lavoriamo insieme alla tua crescita.",
    items: [
      {
        question: "Posso modificare il sito da solo?",
        answer: "Sì, forniamo soluzioni che permettono al cliente di gestire i contenuti principali in autonomia. Ti forniremo istruzioni chiare durante la consegna del progetto."
      },
      {
        question: "Offrite assistenza dopo la consegna?",
        answer: "Assolutamente sì. Offriamo piani di manutenzione che includono aggiornamenti di sicurezza, backup periodici e supporto tecnico rapido per qualsiasi esigenza futura."
      },
      {
        question: "Cosa serve per iniziare il progetto?",
        answer: "Abbiamo bisogno di un brief, il tuo logo e materiali (testi/foto). Se non li hai, offriamo servizi di copywriting e produzione immagini per aiutarti a presentare al meglio il tuo brand."
      },
      {
        question: "Cosa succede se voglio cambiare agenzia?",
        answer: "Tutti i file e gli accessi sono di tua proprietà. Non applichiamo alcun tipo di 'lock-in'. Sarai libero di portare il tuo sito altrove in qualsiasi momento, senza penali."
      },
      {
        question: "Cosa succede se non sono soddisfatto?",
        answer: "Lavoriamo con revisioni illimitate durante la fase di design. Svilupperemo il codice solo dopo la tua approvazione completa del layout visuale."
      }
    ]
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/5 transition-all duration-500 ${isOpen ? "bg-white/[0.03] -mx-4 px-4 rounded-xl" : ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${isOpen ? "text-[#00ff88]" : "text-gray-300 group-hover:text-white"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 ${isOpen ? "bg-[#00ff88] border-[#00ff88] rotate-180" : "group-hover:border-[#00ff88]/50"}`}>
          {isOpen ? <Minus size={12} className="text-black" /> : <Plus size={12} className="text-[#00ff88]" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-gray-400 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categories.flatMap(cat => cat.items).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 selection:bg-[#00ff88]/30 overflow-x-hidden">
      <Helmet>
        <title>FAQ | Domande Frequenti GnWebAgency - Web Agency Napoli</title>
        <meta name="description" content="Risposte alle domande più frequenti su costi, tempi e SEO per la creazione del tuo sito web professionale a Napoli." />
        <link rel="canonical" href="https://gnwebagency.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Decorative background atoms */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-[#00ff88] mb-16 hover:gap-3 transition-all font-mono text-sm group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> TORNA ALLA HOME
        </Link>
        
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 border border-[#00ff88]/30 rounded-full bg-[#00ff88]/5 text-[#00ff88] text-[10px] font-mono uppercase tracking-[0.3em] mb-6"
          >
            Supporto Clienti
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
            DOMANDE <br />
            <span className="text-[#00ff88] drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]">FREQUENTI</span>
          </h1>
          <p className="text-gray-400 font-light text-xl max-w-2xl leading-relaxed">
            Trasparenza totale. Abbiamo raggruppato tutto ciò che devi sapere per avviare la tua trasformazione digitale insieme a noi.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {categories.map((cat, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:border-[#00ff88]/30 transition-colors">
                    {cat.icon}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    {cat.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-500 font-light mb-8 max-w-[280px]">
                  {cat.description}
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mb-12 lg:hidden" />
              </div>

              <div className="space-y-2 lg:mt-0">
                {cat.items.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 p-1 bg-gradient-to-br from-[#00ff88]/20 via-white/5 to-transparent rounded-[2.5rem]"
        >
          <div className="bg-black/80 backdrop-blur-3xl p-12 md:p-20 rounded-[2.4rem] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#00ff88]/2 pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Hai un progetto <br className="md:hidden" /> in mente?</h2>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
              Non lasciare che le tue domande frenino la tua crescita. Parlaci della tua idea e ricevi una consulenza gratuita.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                to="/#contatti" 
                className="w-full md:w-auto inline-flex items-center justify-center bg-[#00ff88] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,255,136,0.2)] hover:shadow-[0_0_60px_rgba(0,255,136,0.4)]"
              >
                Inizia ora
              </Link>
              <a 
                href="https://wa.me/393887397246" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/10"
              >
                WhatsApp Rapido
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Footer-like note */}
      <footer className="mt-20 text-center pb-20">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          GNWEBAGENCY © 2025 • Napoli, Italia
        </p>
      </footer>
    </div>
  );
};
