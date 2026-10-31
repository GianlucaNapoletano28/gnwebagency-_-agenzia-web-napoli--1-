import { motion } from "motion/react";

const STEP = [
  {
    numero: "01",
    titolo: "Analisi",
    testo: "Parto dalla tua attività: chi sono i tuoi clienti, cosa deve fare il sito per te, cosa fanno i concorrenti.",
  },
  {
    numero: "02",
    titolo: "Proposta",
    testo: "Ti presento struttura, stile e contenuti del sito prima di scrivere una riga di codice. Si parte solo quando sei convinto.",
  },
  {
    numero: "03",
    titolo: "Design e sviluppo",
    testo: "Disegno e sviluppo il tuo sito web su misura, senza template: veloce, accessibile e pensato per farti trovare su Google.",
  },
  {
    numero: "04",
    titolo: "Lancio e supporto",
    testo: "Metto il sito online, ti mostro come gestirlo e resto il tuo riferimento per aggiornamenti e manutenzione.",
  },
];

export const Metodo = () => {
  return (
    <section id="metodo" className="w-full bg-background px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent">03</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Il Metodo di Lavoro
            </span>
          </div>
          <h2 className="font-display text-3xl normal-case tracking-tight text-foreground md:text-5xl">
            Come lavoro
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEP.map((step, i) => (
            <motion.div
              key={step.numero}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-4 rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container"
            >
              <span className="font-display text-4xl text-surface-container-highest">{step.numero}</span>
              <h3 className="font-display text-xl normal-case text-foreground">{step.titolo}</h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.testo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
