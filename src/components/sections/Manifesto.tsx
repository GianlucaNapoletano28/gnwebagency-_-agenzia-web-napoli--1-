const PUNTI = [
  {
    titolo: "Attenzione totale",
    testo: "Mentre lavoro al tuo sito, lavoro solo al tuo sito. Nessun progetto in coda che ti rubi tempo.",
  },
  {
    titolo: "Un solo interlocutore",
    testo: "Parli sempre con chi disegna e sviluppa, non con un commerciale o un account.",
  },
  {
    titolo: "Niente template",
    testo: "Ogni sito nasce da zero, dalle esigenze della tua attività.",
  },
];

export const Manifesto = () => {
  return (
    <section className="w-full bg-surface-container-lowest px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-accent">04</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Il Manifesto
          </span>
        </div>

        <div className="flex flex-col gap-10 rounded-2xl bg-surface-container p-8 md:p-14">
          <h2 className="max-w-3xl font-display text-3xl normal-case tracking-tight text-foreground md:text-5xl">
            Perché un cliente alla volta
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PUNTI.map((punto) => (
              <div key={punto.titolo} className="flex flex-col gap-2">
                <h3 className="font-display text-xl normal-case text-foreground">{punto.titolo}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{punto.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
