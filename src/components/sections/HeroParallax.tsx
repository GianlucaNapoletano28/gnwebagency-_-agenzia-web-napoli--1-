import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AVAILABILITY, whatsappLink } from "@/lib/constants";
import { LAVORI } from "@/src/data/lavori";

// Prova di parallax per /lab/hero. Non è la Hero della home: riscrive lo
// stesso contenuto (H1, sottotitolo, pill, CTA) sotto ai livelli decorativi,
// senza toccare src/components/sections/Hero.tsx.

const domainOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const bySlug = (slug: string) => LAVORI.find((l) => l.slug === slug)!;

// Livelli dal fondo verso il primo piano. Layer 4 riusa Terrazza Partenopea
// (già in Layer 2) come screenshot in mockup browser: stesso lavoro, due
// trattamenti diversi, per dare continuità visiva al "ingresso in primo piano".
const LAYER_1 = [bySlug("bb-napule"), bySlug("di-franco-company")];
const LAYER_2 = [bySlug("condass"), bySlug("terrazza-partenopea")];
const LAYER_4 = bySlug("terrazza-partenopea");

export const HeroParallax = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax disattivato (statico) con prefers-reduced-motion; ridotto su mobile.
  const disabled = Boolean(prefersReducedMotion);
  const scale = disabled ? 0 : isMobile ? 0.4 : 1;

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", `${-10 * scale}%`]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", `${-22 * scale}%`]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", `${-16 * scale}%`]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", `${-40 * scale}%`]);

  const isAvailable = AVAILABILITY.status === "disponibile";

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-background">
      {/* Zona decorativa: alta più del viewport per dare spazio al parallax,
          i livelli vivono solo nei primi 100vh e si allontanano scrollando. */}
      <div className="relative h-[115vh] overflow-hidden md:h-[130vh]">
        <div className="absolute inset-x-0 top-0 h-screen w-full">
          {/* Layer 1 — più lontano e lento: piccolo, sfocato, opacità ridotta */}
          <motion.div style={{ y: y1 }} aria-hidden="true" className="absolute inset-0">
            <img
              src={LAYER_1[0].immagine}
              alt=""
              width={320}
              height={200}
              loading="lazy"
              className="absolute left-[6%] top-[16%] w-[120px] rounded-lg object-cover opacity-30 blur-sm md:w-[200px]"
            />
            <img
              src={LAYER_1[1].immagine}
              alt=""
              width={320}
              height={200}
              loading="lazy"
              className="absolute right-[8%] top-[52%] w-[130px] rounded-lg object-cover opacity-30 blur-sm md:w-[220px]"
            />
          </motion.div>

          {/* Layer 2 — più grande, meno sfocato */}
          <motion.div style={{ y: y2 }} aria-hidden="true" className="absolute inset-0">
            <img
              src={LAYER_2[0].immagine}
              alt=""
              width={480}
              height={300}
              loading="lazy"
              className="absolute left-[10%] bottom-[14%] w-[180px] rounded-xl object-cover opacity-50 md:w-[320px]"
            />
            <img
              src={LAYER_2[1].immagine}
              alt=""
              width={480}
              height={300}
              loading="lazy"
              className="absolute right-[6%] top-[10%] w-[190px] rounded-xl object-cover opacity-50 md:w-[340px]"
            />
          </motion.div>

          {/* Layer 3 — scritta decorativa, non è l'H1 */}
          <motion.div
            style={{ y: y3 }}
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <span className="select-none whitespace-nowrap font-display font-bold uppercase leading-none tracking-tighter text-foreground text-[16vw] md:text-[12vw]">
              GN<span className="text-accent">WEB</span>AGENCY
            </span>
          </motion.div>

          {/* Layer 4 — più vicino e veloce: mockup browser in primo piano */}
          <motion.div style={{ y: y4 }} className="absolute inset-x-0 bottom-[-6%] flex justify-center px-6">
            <div className="w-full max-w-md overflow-hidden rounded-t-xl shadow-2xl md:max-w-xl">
              <div className="flex items-center justify-between bg-surface-container-high px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-container-highest" />
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-container-highest" />
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-container-highest" />
                </div>
                <span className="rounded bg-surface-container-lowest px-4 py-1 font-mono text-xs text-muted-foreground">
                  {domainOf(LAYER_4.url)}
                </span>
                <span className="w-4" />
              </div>
              <img
                src={LAYER_4.immagine}
                alt={`Anteprima del sito ${LAYER_4.titolo}`}
                width={640}
                height={420}
                loading="eager"
                className="w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Sfumatura verso il background del sito */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>
      </div>

      {/* Contenuto reale, nel flusso della pagina — stesso testo/CTA della Hero attuale */}
      <div className="relative z-10 -mt-20 flex flex-col gap-10 px-6 pb-20 md:-mt-28 md:gap-14 md:px-12 md:pb-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-14">
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

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-8">
              <h1 className="font-display text-5xl normal-case leading-none tracking-tight text-foreground md:text-7xl">
                Siti su misura.
                <br />
                <span className="font-normal italic text-muted-foreground">Un cliente</span> alla volta.
              </h1>
              <p className="max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
                Progetto, sviluppo e metto online il sito della tua attività — poi resto io a occuparmi di
                manutenzione e aggiornamenti. Niente template, nessun passaggio di mano: dall'idea al codice
                in produzione segui sempre e solo me.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-xl bg-surface-container-low p-6 lg:col-span-4">
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
                  href="#lavori"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-wider font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Guarda i lavori
                </a>
                <a
                  href={whatsappLink("Ciao Gianluca, vorrei informazioni per il mio nuovo sito web")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-high px-4 py-3 font-mono text-[11px] tracking-wide text-foreground transition-colors hover:bg-surface-container-highest"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  WhatsApp diretto ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
