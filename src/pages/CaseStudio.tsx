import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import { Navbar } from "@/src/components/sections/Navbar";
import { Footer } from "@/src/components/sections/Footer";
import { LAVORI } from "@/src/data/lavori";

const domainOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// Specimen dei font reali del case study: sottoinsieme di glifi sufficiente per
// il testo mostrato in pagina — niente famiglia completa, solo i pesi/glifi usati.
const FONT_SPECIMEN_TEXT =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèéìòù0123456789.,—'\"";

export const CaseStudio = () => {
  const { slug } = useParams<{ slug: string }>();
  const lavoro = LAVORI.find((l) => l.slug === slug);

  if (!lavoro || !lavoro.hasCaseStudy || !lavoro.caseStudy) {
    return <Navigate to="/#lavori" replace />;
  }

  const { caseStudy } = lavoro;
  const ds = caseStudy.designSystem;
  const currentIndex = LAVORI.findIndex((l) => l.slug === lavoro.slug);
  const next = LAVORI[(currentIndex + 1) % LAVORI.length];
  const ogImage = `https://gnwebagency.com${lavoro.immagine}`;
  const pageUrl = `https://gnwebagency.com/lavori/${lavoro.slug}`;

  const fontFamilies = [ds?.fontDisplay, ds?.fontBody].filter(Boolean) as string[];
  const fontsHref =
    fontFamilies.length > 0
      ? `https://fonts.googleapis.com/css2?${fontFamilies
          .map((f) => `family=${encodeURIComponent(f)}:wght@300;400;600;700`)
          .join("&")}&text=${encodeURIComponent(FONT_SPECIMEN_TEXT)}&display=swap`
      : null;

  return (
    <>
      <Helmet>
        <title>{lavoro.titolo} — Case Study | GN Web Agency</title>
        <meta
          name="description"
          content={`Case study ${lavoro.titolo}: ${lavoro.settore}, progetto ${lavoro.anno}. Design, sviluppo e risultati tecnici misurati.`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${lavoro.titolo} — Case Study | GN Web Agency`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${lavoro.titolo} — Case Study`} />
        <meta name="twitter:image" content={ogImage} />
        {fontsHref && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href={fontsHref} />
          </>
        )}
      </Helmet>

      <Navbar />

      <main className="w-full bg-background px-6 pb-20 pt-32 md:px-12 md:pt-40">
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <a
            href="/#lavori"
            className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Torna a tutti i lavori
          </a>

          {/* Hero */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent">{lavoro.anno}</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {lavoro.settore}
              </span>
            </div>
            <h1 className="font-display text-4xl normal-case tracking-tight text-foreground md:text-6xl">
              {lavoro.titolo}
            </h1>
          </div>

          <div className="overflow-hidden rounded-xl bg-surface-container shadow-2xl">
            <div className="flex items-center justify-between bg-surface-container-high px-5 py-3">
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
            <img
              src={lavoro.immagine}
              alt={`Anteprima del sito ${lavoro.titolo}`}
              className="w-full object-cover object-top"
            />
          </div>

          {/* Sidebar + contenuto */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <aside className="flex flex-col gap-4 rounded-xl bg-surface-container-low p-6 lg:col-span-4 lg:self-start">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Cliente
                </span>
                <span className="font-sans text-sm text-foreground">{lavoro.cliente}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Settore
                </span>
                <span className="font-sans text-sm text-foreground">{lavoro.settore}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Città
                </span>
                <span className="font-sans text-sm text-foreground">{lavoro.citta}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Anno
                </span>
                <span className="font-sans text-sm text-foreground">{lavoro.anno}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Servizi
                </span>
                <div className="flex flex-wrap gap-1.5">
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
              <a
                href={lavoro.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-mono text-[11px] uppercase tracking-wider font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Vedi il sito ↗
              </a>
            </aside>

            <div className="flex flex-col gap-10 lg:col-span-8">
              {caseStudy.sfida && (
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs text-accent">01 / Sfida</span>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground">
                    {caseStudy.sfida}
                  </p>
                </div>
              )}

              {caseStudy.approccio && (
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs text-accent">02 / Approccio</span>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground">
                    {caseStudy.approccio}
                  </p>
                </div>
              )}

              {lavoro.metriche && lavoro.metriche.length > 0 && (
                <div className="flex flex-wrap gap-6 rounded-lg bg-surface-container-low p-5">
                  {lavoro.metriche.map((metrica) => (
                    <div key={metrica.label} className="flex flex-col gap-0.5">
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        {metrica.label}
                      </span>
                      <span className="font-display text-2xl text-accent">{metrica.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Design system reale */}
          {ds && (
            <div className="flex flex-col gap-8 rounded-xl bg-surface-container-low p-6 md:p-10">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-accent">Design System</span>
                <h2 className="font-display text-2xl normal-case tracking-tight text-foreground md:text-3xl">
                  Colori e font reali del sito live
                </h2>
                <p className="font-sans text-sm text-muted-foreground">
                  Estratti dagli stili calcolati di {domainOf(lavoro.url)}, non da un mockup.
                </p>
              </div>

              {/* Colori base */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ds.base.map((tono) => (
                  <div key={tono.nome} className="flex flex-col gap-3 rounded-lg bg-surface-container p-4">
                    <div
                      className="h-20 w-full rounded-md border border-border"
                      style={{ backgroundColor: tono.hex }}
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-sans text-sm text-foreground">{tono.nome}</span>
                      <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                        <span>{tono.hex}</span>
                        <span>{tono.ruolo}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scala Oro: striscia unica */}
              {ds.scale?.map((scala) => (
                <div key={scala.nome} className="flex flex-col gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Scala {scala.nome}
                  </span>
                  <div className="flex overflow-hidden rounded-lg border border-border">
                    {scala.toni.map((tono) => (
                      <div key={tono.hex} className="flex flex-1 flex-col justify-end gap-1 p-3" style={{ backgroundColor: tono.hex }}>
                        <span className="font-mono text-[10px] text-black/70 mix-blend-multiply">{tono.hex}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground">
                    {scala.toni.map((tono) => (
                      <span key={tono.hex}>
                        {tono.nome}: {tono.ruolo}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Specimen font */}
              {fontsHref && (ds.fontDisplay || ds.fontBody) && (
                <div className="grid grid-cols-1 gap-6 rounded-lg bg-surface-container p-6 md:grid-cols-2">
                  {ds.fontDisplay && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        Display — {ds.fontDisplay}
                      </span>
                      <span
                        className="text-4xl text-foreground"
                        style={{ fontFamily: `"${ds.fontDisplay}", serif`, fontWeight: 300 }}
                      >
                        Aa Bb Gg — {lavoro.titolo}
                      </span>
                    </div>
                  )}
                  {ds.fontBody && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        Testo — {ds.fontBody}
                      </span>
                      <span
                        className="text-lg text-foreground"
                        style={{ fontFamily: `"${ds.fontBody}", sans-serif`, fontWeight: 400 }}
                      >
                        Aa Bb Gg Zz — 0123456789
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {caseStudy.testimonial && (
            <div className="flex flex-col gap-3 rounded-xl bg-surface-container-high p-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Feedback del cliente
              </span>
              <p className="font-display text-xl normal-case italic leading-snug text-foreground">
                “{caseStudy.testimonial.citazione}”
              </p>
              <span className="font-mono text-xs text-muted-foreground">
                {caseStudy.testimonial.autore}
                {caseStudy.testimonial.ruolo ? ` — ${caseStudy.testimonial.ruolo}` : ""}
              </span>
            </div>
          )}

          {/* Prossimo lavoro */}
          <a
            href={next.hasCaseStudy ? `/lavori/${next.slug}` : next.url}
            target={next.hasCaseStudy ? undefined : "_blank"}
            rel={next.hasCaseStudy ? undefined : "noopener noreferrer"}
            className="group flex flex-col gap-1 rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container md:flex-row md:items-center md:justify-between"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Prossimo lavoro
            </span>
            <span className="font-display text-xl normal-case text-foreground transition-colors group-hover:text-accent">
              {next.titolo} →
            </span>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};
