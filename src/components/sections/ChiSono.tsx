// Foto di Gianluca: finché non è disponibile, la colonna ritratto resta
// nascosta e il testo occupa tutta la larghezza — niente placeholder grafico.
const FOTO_URL: string | null = null;

export const ChiSono = () => {
  return (
    <section id="chi-sono" className="w-full bg-background px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-accent">05</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Chi c'è dietro
          </span>
        </div>

        <div className={`grid grid-cols-1 items-center gap-10 ${FOTO_URL ? "lg:grid-cols-12" : ""}`}>
          {FOTO_URL && (
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl bg-surface-container p-2 shadow-2xl">
                <img
                  src={FOTO_URL}
                  alt="Gianluca Napoletano, web designer a Napoli"
                  className="aspect-square w-full rounded-xl object-cover grayscale"
                />
              </div>
            </div>
          )}

          <div className={`flex flex-col gap-6 ${FOTO_URL ? "lg:col-span-7" : "max-w-3xl"}`}>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              Sono <span className="text-foreground">Gianluca Napoletano</span>, web designer a Napoli.
              Disegno e sviluppo siti web su misura per attività che vogliono distinguersi: strutture
              ricettive, aziende, brand. Studio Ingegneria e Scienze Informatiche per la Cybersecurity, e
              porto questa attenzione alla sicurezza e alla qualità del codice in ogni progetto. Lavoro con
              un cliente alla volta, perché è l'unico modo che conosco per fare le cose bene.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
