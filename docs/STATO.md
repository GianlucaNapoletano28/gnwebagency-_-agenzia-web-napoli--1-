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
- **Hero parallax (fuori sequenza, tra S7 e S8)** — `components/ui/
  parallax-scrolling.tsx`: riscrittura del componente Osmo "ParallaxComponent"
  (gsap ScrollTrigger + Lenis), integrata in cima alla Home sotto la Navbar,
  sopra la Hero esistente (H1 invariato, resta lei il titolo vero della
  pagina). Stessa scena delle 3 immagini originali (montagna di notte,
  scaricate in `public/hero/layer-{1,2,4}.webp` da cdn.21st.dev — layer 1
  foto intera, layer 2 solo montagna e layer 4 solo sagoma persona, questi
  ultimi due con alpha) e stessi valori di parallax (yPercent 70/55/40/10).
  Scelte tecniche:
  - pacchetto `lenis` (non il deprecato `@studio-freight/lenis`);
  - **pinning via `ScrollTrigger`'s `pin: true`**, non `position: sticky`:
    `<main>` in `App.tsx` ha `overflow-x-hidden`, che per spec CSS forza
    anche `overflow-y` a un valore diverso da `visible` sugli antenati e
    rompe `position: sticky` per qualunque discendente — non solo per
    questo componente. `pin: true` non ha questo problema e gestisce da
    solo lo spazio di scroll (`end: "+=150%"`), quindi non serve un wrapper
    alto artificialmente;
  - cleanup con `gsap.context()` + `ctx.revert()` (non
    `ScrollTrigger.getAll().forEach(kill)`, che spegnerebbe anche altri
    ScrollTrigger eventualmente presenti altrove) + rimozione esplicita del
    ticker gsap;
  - Lenis vive solo quanto il componente è montato (quindi solo sulla Home,
    mai su `/lab/lavori`) e intercetta i click sui link-ancora della pagina
    (Navbar, Footer, CTA "#lavori"…) per scorrere con `lenis.scrollTo`
    invece del salto nativo, con offset pari all'altezza della Navbar fissa;
  - `prefers-reduced-motion`: niente Lenis, niente ScrollTrigger/pin, layer
    statici (stesso pattern già usato in `/lab/hero`, vedi sotto).
  - Peso bundle aggiunto: +138 kB JS / +52 kB gzip (gsap+ScrollTrigger+lenis),
    CSS invariato. Non è stato fatto code-splitting per route.
  - **Non verificato a 375px**: la finestra Chrome in questo ambiente non
    scende sotto ~800px di larghezza (limite dell'automazione browser, non
    del codice) — il CSS usa solo `h-svh`/`object-cover`/percentuali, nessun
    valore fisso che possa causare overflow, ma serve una verifica reale su
    device/DevTools da parte di Gianluca.
  - Prova precedente (`/lab/hero`, route noindex fuori menu, +15 kB JS/+4,6
    kB gzip) resta a parte: non tocca la Hero reale, usa `motion` invece di
    gsap/Lenis e layer propri (screenshot dei lavori, non le montagne);
    nessuna relazione di codice con questo step.

- **Font display: Space Grotesk → Quantico (fuori sequenza, dopo l'hero
  parallax)** — `--font-display` in `src/index.css` e link Google Fonts in
  `index.html` aggiornati; Space Grotesk non più caricato (nessun altro
  riferimento in `src/`/`components/`, solo nei mockup Stitch in `design/`,
  non toccati). Quantico caricato solo pesi 400/700, niente italic.
  - `font-semibold` (600, peso non incluso) sul titolo "GNWEBAGENCY" del
    parallax sostituito con `font-bold` (700) in entrambi i punti dove
    compare (`components/ui/parallax-scrolling.tsx`, Home reale, e
    `src/components/sections/HeroParallax.tsx`, prova isolata su
    `/lab/hero`) per evitare il grassetto finto del browser.
  - Font del cliente nel design system del case study (Cormorant Garamond /
    Plus Jakarta Sans di Terrazza Partenopea) non toccato: resta caricato
    via Helmet solo in quella pagina, fuori da `--font-display`.
  - Verifica visiva reale a 1440 e 375px (quest'ultima tramite iframe
    `contentWindow` da 375px iniettato nella pagina, perché la finestra
    Chrome in questo ambiente non scende sotto ~500px — vedi nota nello
    step Hero parallax): nessun overflow su H1, titolo GNWEBAGENCY, card
    lavori/case study, numeri Metodo, menu mobile; accenti italiani (à è é
    ì ò ù) leggibili.
  - `tsc --noEmit` e `npm run build` senza errori.

- **Prerender e 404 (fuori sequenza, 22/11/2026, fatto da Jarvis su richiesta di Gianluca)** — prima il sito serviva `<div id="root"></div>` vuoto: niente testo né H1 per Google e crawler AI, e `/faq`, `/privacy`, `/cookies` aperte direttamente rispondevano 404 (nessun redirect su Netlify).
  - `scripts/prerender.mjs`: dopo `vite build` apre ogni pagina in Chrome (headless, reduced motion) con `playwright-core` e salva l'HTML disegnato in `dist/` (`/`, `/faq`, `/privacy`, `/cookies`, `/lavori/terrazza-partenopea`, `404.html`). Tiene una sola copia di title, meta e canonical (React 19 porta nell'head i tag di Helmet accanto a quelli di `index.html`). Fallisce se una pagina esce senza H1. `npm run build` lo esegue da solo; usa Google Chrome installato sul Mac.
  - `src/pages/NotFound.tsx` + rotta `*` (noindex): Netlify serve `dist/404.html` con stato 404 vero.
  - `CaseStudio.tsx`: il `<title>` era vuoto (React 19 vuole una sola stringa come figlio): ora è un template string.
  - Verifica: `tsc --noEmit` e build ok; HTML di ogni pagina con H1, un title, una description, un canonical; home a 390 e 1440 px uguale al sito live, con e senza JS; nessun errore in console.
  - **Da sistemare in S8 (in attesa di Gianluca):** title e description della home dicono ancora "da €299" e la FAQ parla di prezzi; con il prerender ora lo leggono anche i crawler AI.

## Step rimanenti

### S8 — Pulizia testi e SEO (proposta fatta in chat, non ancora applicata)

Proposta dettagliata già condivisa con Gianluca (FAQ domanda per domanda,
title/meta/og vecchio→nuovo, naming "GN Web Agency" ovunque, nessun H2
SEO-spam residuo trovato). In attesa del suo OK prima di scrivere codice —
tre punti aperti: stack tecnologico reale da scrivere in FAQ,
e-commerce/copywriting come servizi reali sì/no, e se togliere
`priceRange` dallo schema.org della Home. Checklist originale:

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
