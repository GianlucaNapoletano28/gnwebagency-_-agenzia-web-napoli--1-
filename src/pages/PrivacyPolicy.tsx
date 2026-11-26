import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";

const linkClass = "text-[#00ff88] hover:underline";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 selection:bg-[#00ff88]/30">
      <Helmet>
        <title>Privacy Policy | GN Web Agency - Informativa sul trattamento dei dati</title>
        <meta name="description" content="Informativa privacy di GN Web Agency (GDPR, Reg. UE 2016/679): quali dati tratto quando mi contatti dal sito, da WhatsApp, via email o dai moduli delle inserzioni Facebook e Instagram, perché e per quanto tempo." />
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

        <p className="mb-12 font-light text-gray-400 leading-relaxed">
          Questa informativa spiega, ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 (GDPR),
          quali dati personali tratto quando mi contatti, perché, per quanto tempo e quali sono i tuoi diritti.
        </p>

        <div className="space-y-12 font-light text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Titolare del Trattamento</h2>
            <p>
              Gianluca Napoletano — GN Web Agency <br />
              Napoli, Italia <br />
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a> <br />
              WhatsApp:{" "}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className={linkClass}>{WHATSAPP_DISPLAY}</a>
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Quali Dati Tratto</h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white font-medium">1. Moduli di contatto, compresi quelli delle inserzioni.</strong>{" "}
                Se compili un modulo nelle mie inserzioni su Facebook o Instagram (Meta Lead Ads), ricevo i dati
                che inserisci: nome, numero di telefono, tipo di attività e se hai già un sito. Il modulo dei contatti
                di questo sito non invia dati a un server: prepara un messaggio che parte dalla tua app WhatsApp
                o dalla tua email, quindi ricevo quello che decidi di inviarmi (ad esempio nome, attività, tipo di
                progetto, tempistica e messaggio).
              </p>
              <p>
                <strong className="text-white font-medium">2. Messaggi WhatsApp ed email.</strong>{" "}
                Se mi scrivi su WhatsApp o via email tratto il tuo numero o indirizzo, il nome con cui ti presenti
                e il contenuto dei messaggi.
              </p>
              <p>
                <strong className="text-white font-medium">3. Dati tecnici del sito.</strong>{" "}
                Il sito non usa strumenti di statistica, pixel pubblicitari o cookie di profilazione. Quando lo visiti:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  il servizio di hosting (Netlify) riceve, come qualsiasi server web, dati tecnici della connessione
                  come indirizzo IP, browser e pagina richiesta, necessari a mostrarti il sito e a proteggerlo;
                </li>
                <li>
                  i caratteri tipografici sono caricati da Google Fonts: il tuo browser si collega ai server di Google,
                  che riceve il tuo indirizzo IP;
                </li>
                <li>
                  il browser salva in memoria locale (localStorage) solo la voce "cookie-consent", per non mostrarti
                  di nuovo l'avviso sui cookie dopo che l'hai chiuso. Non contiene dati personali.
                </li>
              </ul>
              <p>
                I link a WhatsApp, Instagram, TikTok e Facebook ti portano su quelle piattaforme, che trattano i dati
                secondo le proprie informative.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Perché li Tratto e Base Giuridica</h2>
            <p>
              Uso i tuoi dati solo per rispondere alla tua richiesta, ricontattarti e inviarti un preventivo.
              La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta
              (art. 6, par. 1, lett. b GDPR). Se diventi cliente, tratto i dati anche per eseguire il contratto
              e per gli obblighi di legge, ad esempio fiscali e contabili (art. 6, par. 1, lett. b e c).
              I dati tecnici del sito servono a farlo funzionare e a mantenerlo sicuro (legittimo interesse,
              art. 6, par. 1, lett. f).
            </p>
            <p className="mt-4">
              Fornire i dati è facoltativo, ma senza un recapito non posso risponderti. Non vendo i tuoi dati,
              non li cedo a terzi per marketing e non prendo decisioni automatizzate su di te.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">A Chi Arrivano i Dati</h2>
            <p>I dati li tratto io personalmente. Per farlo mi servo di questi fornitori:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Meta Platforms Ireland Ltd. — Facebook, Instagram e moduli delle inserzioni;</li>
              <li>WhatsApp Ireland Ltd. (gruppo Meta) — messaggi WhatsApp;</li>
              <li>Google — posta elettronica (Gmail) e caratteri tipografici del sito (Google Fonts);</li>
              <li>Netlify, Inc. — hosting del sito.</li>
            </ul>
            <p className="mt-4">
              Possono ricevere i dati anche il commercialista o le autorità, quando lo richiede la legge.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Trasferimenti Fuori dall'UE</h2>
            <p>
              Alcuni di questi fornitori hanno sede o server negli Stati Uniti. In questi casi il trasferimento
              avviene con le garanzie previste dal GDPR: la decisione di adeguatezza UE-USA (EU-U.S. Data Privacy
              Framework) per le società aderenti oppure le clausole contrattuali standard approvate dalla
              Commissione europea.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Per Quanto Tempo</h2>
            <p>
              Le richieste che non diventano un lavoro vengono cancellate entro 12 mesi dall'ultimo contatto.
              Se diventi cliente, conservo i dati per la durata del rapporto e poi per il tempo richiesto dalla
              legge (ad esempio 10 anni per i documenti fiscali e contabili).
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">I Tuoi Diritti</h2>
            <p>
              Puoi chiedermi in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne
              il trattamento, opporti al trattamento o riceverli in un formato leggibile (portabilità), secondo
              gli articoli 15-21 del GDPR. Basta scrivere a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a> o su WhatsApp:
              rispondo entro 30 giorni.
            </p>
            <p className="mt-4">
              Se ritieni che il trattamento non sia corretto puoi proporre reclamo al Garante per la protezione
              dei dati personali:{" "}
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={linkClass}>
                www.garanteprivacy.it
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ff88] font-mono text-xs uppercase tracking-widest mb-4">Modifiche</h2>
            <p>
              Se cambia il modo in cui tratto i dati aggiorno questa pagina e la data qui sotto.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-widest">
              Ultimo aggiornamento: 26 novembre 2026
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
