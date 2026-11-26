import { motion } from "motion/react";
import { AVAILABILITY, whatsappLink } from "@/lib/constants";

export const Hero = () => {
  const isAvailable = AVAILABILITY.status === "disponibile";

  return (
    <section className="relative w-full overflow-hidden bg-background px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:gap-14">
        {/* Eyebrow / status bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent">01</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Studio mono-cliente — Napoli
            </span>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-surface-container-low px-4 py-2 md:self-auto">
            <span className="relative flex h-2 w-2">
              {isAvailable && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              )}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${isAvailable ? "bg-accent" : "bg-subdued"}`} />
            </span>
            <span className="font-mono text-[11px] text-foreground">{AVAILABILITY.label}</span>
          </div>
        </div>

        {/* Hero typography + capacity panel */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:col-span-8"
          >
            <h1 className="font-display text-5xl normal-case leading-none tracking-tight text-foreground md:text-7xl">
              Il tuo sito non ti porta clienti?
              <br />
              <span className="font-normal italic text-muted-foreground">Landing in 7 giorni</span> da 350€.
            </h1>
            <p className="max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
              Per ristoranti e attività locali: una landing page su misura, pronta in 7 giorni, fatta per
              farti contattare. Niente template, nessun passaggio di mano: segui sempre e solo me.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-4 rounded-xl bg-surface-container-low p-6 lg:col-span-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Modello</span>
              <span className="font-mono text-xs text-accent">1 cliente alla volta</span>
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              Nessuna delega, nessuna riunione superflua: tutta la mia attenzione è su un solo progetto per
              volta, dalla prima bozza al lancio.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href={whatsappLink("Ciao Gianluca, vorrei informazioni sulla landing in 7 giorni da 350€")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-wider font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Scrivimi su WhatsApp ↗
              </a>
              <a
                href="#lavori"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-high px-4 py-3 font-mono text-[11px] tracking-wide text-foreground transition-colors hover:bg-surface-container-highest"
              >
                Guarda i lavori
              </a>
            </div>
          </motion.div>
        </div>

        {/* Quick facts strip — solo dati veri o verificabili */}
        <div className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-4">
          <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Dove</span>
            <span className="font-display text-lg text-foreground">Napoli</span>
            <span className="font-mono text-[11px] text-subdued">Lavoro da remoto e in presenza</span>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Approccio</span>
            <span className="font-display text-lg text-foreground">Solo codice su misura</span>
            <span className="font-mono text-[11px] text-subdued">Zero builder, zero temi preconfezionati</span>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Accessibilità</span>
            <span className="font-display text-lg text-accent">97/100</span>
            <span className="font-mono text-[11px] text-subdued">Media Lighthouse sui progetti live</span>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Cosa faccio</span>
            <span className="font-display text-lg text-foreground">Design, sviluppo, manutenzione</span>
            <span className="font-mono text-[11px] text-subdued">Dall'idea al sito online</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[160px]" />
    </section>
  );
};
