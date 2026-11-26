import { useRef, useState } from "react";
import { motion } from "motion/react";
import { LAVORI } from "@/src/data/lavori";

const domainOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const Lavori = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const onCarouselScroll = () => {
    const el = carouselRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const step = first.offsetWidth + 16; // larghezza card + gap-4
    setCurrent(Math.min(LAVORI.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const goTo = (i: number) => {
    const el = carouselRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="lavori" className="w-full bg-surface-container-lowest px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent">02</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Lavori Selezionati
              </span>
            </div>
            <h2 className="font-display text-3xl normal-case tracking-tight text-foreground md:text-5xl">
              Nessun template. Solo siti web su misura, uno alla volta.
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-muted-foreground">
            Ogni sito è progettato e sviluppato riga per riga: design su misura, codice pulito e tempi di
            caricamento curati fin dal primo pixel.
          </p>
        </div>

        {/* Telefono: carosello orizzontale, una card per volta */}
        <div className="-mx-6 flex flex-col gap-5 md:hidden">
          <div
            ref={carouselRef}
            onScroll={onCarouselScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Lavori, scorri per vederli tutti"
          >
            {LAVORI.map((lavoro) => (
              <article
                key={lavoro.slug}
                className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-surface-container-low shadow-xl"
              >
                <img
                  src={lavoro.immagine}
                  alt={`Anteprima del sito ${lavoro.titolo}`}
                  loading="lazy"
                  className="h-[200px] w-full object-cover object-top"
                />
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {lavoro.settore}
                  </span>
                  <h3 className="font-display text-xl normal-case tracking-tight text-foreground">{lavoro.titolo}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{lavoro.servizi.join(" · ")}</p>
                  <a
                    href={lavoro.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-mono text-[11px] uppercase tracking-wider font-semibold text-accent-foreground"
                  >
                    Vedi il sito <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 px-6">
            {LAVORI.map((lavoro, i) => (
              <button
                key={lavoro.slug}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Vai a ${lavoro.titolo}`}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-accent" : "w-2 bg-surface-container-highest"}`}
              />
            ))}
            <span className="font-mono text-[11px] text-muted-foreground">
              {current + 1}/{LAVORI.length}
            </span>
          </div>
        </div>

        <div className="hidden flex-col gap-10 md:flex">
          {LAVORI.map((lavoro, index) => (
            <motion.article
              key={lavoro.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`group flex flex-col overflow-hidden rounded-xl bg-surface-container shadow-xl lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Testo */}
              <div className="flex flex-col justify-between gap-6 bg-surface-container-low p-8 lg:w-5/12">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded bg-surface-container-highest px-2 py-0.5 font-mono text-xs text-accent">
                      {lavoro.anno}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {lavoro.settore}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl normal-case tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {lavoro.titolo}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lavoro.servizi.map((servizio) => (
                      <span
                        key={servizio}
                        className="rounded bg-surface-container-highest px-2.5 py-1 font-mono text-[11px] text-foreground"
                      >
                        {servizio}
                      </span>
                    ))}
                  </div>
                </div>

                {lavoro.metriche && lavoro.metriche.length > 0 && (
                  <div className="flex flex-wrap gap-6 rounded-lg bg-surface-container p-4">
                    {lavoro.metriche.map((metrica) => (
                      <div key={metrica.label} className="flex flex-col gap-0.5">
                        <span className="font-mono text-[10px] uppercase text-muted-foreground">
                          {metrica.label}
                        </span>
                        <span className="font-display text-lg text-accent">{metrica.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href={lavoro.hasCaseStudy ? `/lavori/${lavoro.slug}` : lavoro.url}
                  target={lavoro.hasCaseStudy ? undefined : "_blank"}
                  rel={lavoro.hasCaseStudy ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {lavoro.hasCaseStudy ? "Leggi il case study" : "Vedi il sito"}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Mockup browser */}
              <div className="flex flex-col justify-center bg-surface-container-lowest p-4 lg:w-7/12 md:p-6">
                <div className="flex items-center justify-between rounded-t-lg bg-surface-container-high px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-surface-container-highest" />
                    <span className="h-2.5 w-2.5 rounded-full bg-surface-container-highest" />
                    <span className="h-2.5 w-2.5 rounded-full bg-surface-container-highest" />
                  </div>
                  <span className="rounded bg-surface-container-lowest px-4 py-1 font-mono text-xs text-muted-foreground">
                    {domainOf(lavoro.url)}
                  </span>
                  <span className="w-4" />
                </div>
                <div className="overflow-hidden rounded-b-lg bg-surface-container-low">
                  <img
                    src={lavoro.immagine}
                    alt={`Anteprima del sito ${lavoro.titolo}`}
                    loading="lazy"
                    className="h-[280px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] md:h-[360px]"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
