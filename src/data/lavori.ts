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

export interface LavoroPaletteColore {
  nome: string;
  hex: string;
}

export interface LavoroTestimonial {
  citazione: string;
  autore: string;
  ruolo?: string;
}

export interface LavoroCaseStudy {
  sfida?: string;
  approccio?: string;
  palette?: LavoroPaletteColore[];
  fontDisplay?: string;
  fontBody?: string;
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
