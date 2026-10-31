# Stato del rifacimento — gnwebagency.com

## Obiettivo

Rifare gnwebagency.com (Vite + React + TS + Tailwind v4) traducendo il
riferimento visivo Stitch (`design/stitch_gn_web_agency_portfolio/`) in
componenti reali, con l'obiettivo principale di mostrare i lavori. Gianluca
disegna e sviluppa siti su misura, un cliente alla volta.

## Regole di lavoro

- Diagnosi → proposta → OK esplicito di Gianluca prima di scrivere codice.
- Si lavora a step. Per ogni step: delta-only (non toccare file o sezioni
  fuori dallo step corrente), poi `npm run build` + `npm run lint`
  (`tsc --noEmit`) senza errori, poi un commit per step.
- La verifica legge cosa fa davvero la pagina (build, render nel browser,
  comportamento), non cosa dice il file. Ogni step chiude con una verifica
  visiva reale (screenshot a 1440 e/o 375px, a volte via Playwright quando
  il resize del browser non è affidabile).

## Decisioni prese

- **Alias `@/`**: punta alla **root** del progetto (non a `src/`, come
  assumeva la guida originale INTEGRAZIONE-works-wheel.md — la guida era
  sbagliata su questo). `cn`, `clsx`, `tailwind-merge` già presenti in
  `lib/utils.ts`.
- **`lib/constants.ts`**: unica fonte per WhatsApp (`+39 388 739 7246`),
  email (`gnwebagency@gmail.com`), `BRAND_NAME`, `SOCIAL_LINKS` e
  `AVAILABILITY` (`{ status: "disponibile" | "occupato", label }` — nessuna
  data hardcoded nei componenti, Navbar/Hero/Contact leggono solo da qui).
- **`src/data/lavori.ts`** come fonte unica dei lavori: card editoriali
  (Home), ruota (`LavoriWheel`) e pagina case study leggono tutte da qui.
  Campi opzionali (sfida, approccio, risultato, design system, testimonial)
  sono **assenti**, non stringhe vuote, quando il dato reale manca — i
  componenti nascondono il blocco corrispondente. **In produzione non deve
  mai comparire la parola "TODO".**
- **Niente numeri inventati**: zero metriche di business (prenotazioni,
  conversioni, commissioni, ROI, ranking) senza dati reali del cliente.
  Solo dati tecnici misurati da noi o fatti verificabili.
- **Nelle card Lavori**: solo **Accessibilità misurata** (Lighthouse
  mobile), stesso criterio per tutte. Niente performance né LCP pubblici
  (quei dati restano in `docs/TODO-performance.md`, uso interno).
- **Prima persona singolare** in tutto il nuovo copy (Hero, Metodo,
  Manifesto, Chi sono, Contatti).
- **Nome uniforme**: "GN Web Agency" (non più "GnWebAgency"/"GNWEBAGENCY" —
  uniformato dove riscritto; FAQ/meta residui da sistemare in S8).
- **Ruota (`LavoriWheel`)**: resta **solo** su `/lab/lavori` (noindex, fuori
  menu, `Disallow: /lab/` in robots.txt). Si rivaluta per la Home quando i
  lavori reali saranno almeno 6 (con 3-4 l'anello è troppo rado).
- **Font dei clienti** (es. Cormorant Garamond / Plus Jakarta Sans di
  Terrazza Partenopea): caricati **solo** nella pagina case study
  corrispondente via Helmet, con `&text=` per limitare il subset — mai in
  `index.html`.
- **Stitch** (`design/stitch_gn_web_agency_portfolio/`) resta **solo
  riferimento visivo**, mai copiato 1:1, mai buildato; quando immagine e
  codice del mockup divergono vale l'immagine; i dati/metriche del mockup
  sono narrativa fittizia, mai usati senza conferma.

## Step completati

- **S1** — Fondamenta: Stitch spostato in `design/`; token `@theme` dalla
  palette Stitch (Neapolitan Editorial Modernism); font Space Grotesk
  aggiunto; `lib/constants.ts` creato.
- **S2** — Navbar e Footer in stile Stitch, dati reali (WhatsApp, email,
  social, pill disponibilità).
- **S3** — Hero riscritto, solo dati verificati/misurati (Lighthouse
  reale); `Services.tsx` eliminato (bundle −4.5MB circa).
- **S4** — `src/data/lavori.ts` creato; card editoriali Lavori in Home;
  `LavoriWheel` (ex `LavoriSection`) spostata su `/lab/lavori`; screenshot
  reali via Playwright in `public/works/`; Lighthouse reale sui 4 siti
  clienti; `circular-gallery.tsx`/`PortfolioSection.tsx` eliminati.
- **S5** — Template case study `/lavori/:slug`, data-driven al 100%,
  attivo solo per Terrazza Partenopea (design system reale estratto dal
  sito live, non da Stitch); redirect a `/#lavori` per slug inesistenti o
  senza case study.
- **S6** — Sezioni Metodo ("Come lavoro", 4 fasi), Manifesto ("Perché un
  cliente alla volta"), Chi sono (bio, foto in attesa).
- **S7** — Form Contatti riscritto (Nome, Attività, Tipo progetto,
  Tempistica, Messaggio) → WhatsApp + email precompilati; rimossi "Beta
  gratuita"/"Quanto costa"; `ContainerScroll` rimosso (non più usato).

## Step rimanenti

### S8 — Pulizia testi e SEO

- FAQ (`src/pages/FAQ.tsx`) senza alcun riferimento ai prezzi (oggi "da
  €299", pacchetti, rateizzazione), riscritta in prima persona singolare.
- Naming uniforme "GN Web Agency" ovunque (FAQ, `index.html`, meta,
  schema.org — oggi coesistono "GnWebAgency"/"GNWEBAGENCY").
- H2 SEO-spam residui da individuare e correggere (keyword in title/meta/
  testo naturale, non in intestazioni urlate).
- Aggiornare `title`, `meta description` e `og:*` nello stesso tono del
  resto del sito.
- Keyword "web designer Napoli", "siti web su misura", "sviluppo siti web"
  da inserire in modo naturale in Hero, Metodo e Chi sono (oltre ai meta).

### S9 — Verifica finale

- Build.
- Controllo responsive a 375, 768 e 1440.
- `prefers-reduced-motion`.
- Navigazione da tastiera della ruota (`/lab/lavori`).
- Lighthouse su performance e accessibilità, con report dei problemi.
- Spostare `INTEGRAZIONE-works-wheel.md` in `docs/`.

## TODO aperti per Gianluca

- **Foto "Chi sono"**: sezione pronta, colonna ritratto nascosta finché non
  arriva la foto (`src/components/sections/ChiSono.tsx`, `FOTO_URL`).
- **Testi case study** per B&B Napulè e Di Franco Company (sfida/approccio/
  risultato) — le card portano al sito esterno finché non ci sono.
- **Ottimizzazione performance** dei siti clienti: vedi
  `docs/TODO-performance.md` (Di Franco Company 74/100 e LCP 4.1s, Condass
  LCP 3.1s — da ottimizzare quando concordato con i clienti, fuori dallo
  scope di questo redesign).
