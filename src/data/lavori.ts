// Fonte unica dei lavori: card editoriali (Home), ruota (LavoriWheel) e pagina
// case study (S5) leggono tutte da qui. I campi opzionali sono assenti finché
// non abbiamo un dato reale — i componenti nascondono il blocco corrispondente,
// non devono mai mostrare testo segnaposto tipo "TODO".

export interface LavoroMetrica {
  /** Es. "Accessibilità" */
  label: string;
  /** Es. "97/100" */
  value: string;
}

export interface LavoroTono {
  nome: string;
  hex: string;
  /** Es. "sfondo principale", "accento primario" */
  ruolo: string;
}

export interface LavoroPaletteScala {
  /** Nome della scala, es. "Oro" */
  nome: string;
  toni: LavoroTono[];
}

export interface LavoroTestimonial {
  citazione: string;
  autore: string;
  ruolo?: string;
}

export interface LavoroDesignSystem {
  /** Colori base del sito, uno swatch ciascuno (es. Avorio, Crema, Quasi-nero). */
  base: LavoroTono[];
  /** Scale di colore (es. Oro in 5 toni), mostrate come striscia unica, non swatch separati. */
  scale?: LavoroPaletteScala[];
  fontDisplay?: string;
  fontBody?: string;
}

export interface LavoroCaseStudy {
  sfida?: string;
  approccio?: string;
  risultato?: string;
  designSystem?: LavoroDesignSystem;
  testimonial?: LavoroTestimonial;
}

export interface Lavoro {
  slug: string;
  titolo: string;
  cliente: string;
  settore: string;
  citta: string;
  anno: number;
  servizi: string[];
  url: string;
  immagine: string;
  /** Accessibilità misurata (Lighthouse mobile). Nessuna metrica di performance/business. */
  metriche?: LavoroMetrica[];
  /** true solo quando esiste davvero /lavori/:slug (S5). Finché manca, la card porta al sito esterno. */
  hasCaseStudy?: boolean;
  caseStudy?: LavoroCaseStudy;
}

export const LAVORI: Lavoro[] = [
  {
    slug: "condass",
    titolo: "Condass",
    cliente: "Condass S.r.l.",
    settore: "Climatizzazione industriale · B2B",
    citta: "San Sebastiano al Vesuvio (NA)",
    anno: 2026,
    servizi: ["Design", "Sviluppo", "SEO locale", "Form richiesta intervento"],
    url: "https://condass.it/",
    immagine: "/works/condass.webp",
    metriche: [{ label: "Accessibilità", value: "100/100" }],
  },
  {
    slug: "terrazza-partenopea",
    titolo: "Terrazza Partenopea",
    cliente: "Terrazza Partenopea",
    settore: "B&B · Napoli",
    citta: "Napoli",
    anno: 2026,
    servizi: ["Design", "Sviluppo"],
    url: "https://terrazzapartenopea.it/",
    immagine: "/works/terrazza-partenopea.webp",
    metriche: [{ label: "Accessibilità", value: "96/100" }],
    hasCaseStudy: true,
    caseStudy: {
      sfida:
        "Terrazza Partenopea riceveva quasi tutte le prenotazioni dalle piattaforme. Serviva un sito che portasse gli ospiti a prenotare direttamente, senza intermediari e senza commissioni.",
      approccio:
        "Ho disegnato un sito che trasmette l'accoglienza della struttura prima ancora di arrivare: toni caldi, tipografia elegante, foto protagoniste. La prenotazione diretta su WhatsApp è sempre a portata di mano, su ogni pagina. I contenuti sono scritti e strutturati per essere capiti sia da Google sia dagli assistenti AI.",
      risultato:
        "Il sito ha generato tantissime richieste di prenotazione diretta. Oggi Terrazza Partenopea compare nelle risposte degli assistenti AI quando si cerca dove dormire a Napoli.",
      designSystem: {
        // Estratti dagli stili calcolati di terrazzapartenopea.it (non dal mockup Stitch).
        base: [
          { nome: "Avorio", hex: "#FDFCF8", ruolo: "Sfondo principale" },
          { nome: "Crema", hex: "#F7F2EA", ruolo: "Sfondo secondario" },
          { nome: "Quasi-nero", hex: "#1A1A1A", ruolo: "Testo principale" },
        ],
        scale: [
          {
            nome: "Oro",
            toni: [
              { nome: "Oro — testo chiaro", hex: "#E8C98A", ruolo: "Testo su sfondo scuro" },
              { nome: "Oro chiaro", hex: "#D9B870", ruolo: "Hover / variante chiara" },
              { nome: "Oro", hex: "#C9A96E", ruolo: "Accento primario (CTA)" },
              { nome: "Oro scuro", hex: "#B8954A", ruolo: "Variante scura" },
              { nome: "Oro — testo scuro", hex: "#9B7A38", ruolo: "Testo su sfondo chiaro" },
            ],
          },
        ],
        fontDisplay: "Cormorant Garamond",
        fontBody: "Plus Jakarta Sans",
      },
    },
  },
  {
    slug: "bb-napule",
    titolo: "B&B Napulè",
    cliente: "B&B Napulè",
    settore: "B&B · Napoli",
    citta: "Napoli",
    anno: 2026,
    servizi: ["Brand Identity", "Design", "Sviluppo"],
    url: "https://bebnapule.it/",
    immagine: "/works/bb-napule.webp",
    metriche: [{ label: "Accessibilità", value: "100/100" }],
  },
  {
    slug: "di-franco-company",
    titolo: "Di Franco Company",
    cliente: "Di Franco Company",
    settore: "Beauty tech · Napoli",
    citta: "Napoli",
    anno: 2025,
    servizi: ["Design", "Sviluppo", "Animazioni 3D"],
    url: "https://difrancocompany.it/",
    immagine: "/works/di-franco-company.webp",
    metriche: [{ label: "Accessibilità", value: "95/100" }],
  },
];
