import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { AVAILABILITY, CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";

const TIPI_PROGETTO = ["Nuovo sito", "Restyling", "E-commerce", "Social", "Consulenza"] as const;
const TEMPISTICHE = ["Il prima possibile", "Entro 1-2 mesi", "Più avanti"] as const;

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    attivita: "",
    tipoProgetto: TIPI_PROGETTO[0] as string,
    tempistica: TEMPISTICHE[0] as string,
    messaggio: "",
  });

  const isAvailable = AVAILABILITY.status === "disponibile";

  const buildMessage = () => {
    const righe = [
      `Ciao Gianluca, sono ${formData.nome || "..."}${formData.attivita ? ` di ${formData.attivita}` : ""}.`,
      `Tipo di progetto: ${formData.tipoProgetto}`,
      `Quando vorrei partire: ${formData.tempistica}`,
    ];
    if (formData.messaggio) righe.push("", formData.messaggio);
    return righe.join("\n");
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Richiesta progetto — ${formData.nome || "nuovo sito"}`);
    const body = encodeURIComponent(buildMessage());
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contatti" className="w-full bg-surface-container-lowest px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-accent">06</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Iniziamo a collaborare
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Colonna sinistra */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-3xl normal-case leading-tight tracking-tight text-foreground md:text-5xl">
                Hai un progetto in mente?
                <br />
                <span className="font-normal italic text-muted-foreground">Parliamone subito.</span>
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Rispondo personalmente a ogni richiesta: niente commerciali, niente passaggi di mano.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface-container-low px-4 py-2">
              <span className="relative flex h-2 w-2">
                {isAvailable && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                )}
                <span className={`relative inline-flex h-2 w-2 rounded-full ${isAvailable ? "bg-accent" : "bg-subdued"}`} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-foreground">
                {AVAILABILITY.label}
              </span>
            </div>

            <div className="flex flex-col gap-4 rounded-xl bg-surface-container p-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </span>
                <span className="font-mono text-sm text-foreground">{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <span className="font-mono text-sm text-foreground">{CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5 rounded-2xl bg-surface-container p-6 shadow-2xl lg:col-span-7 md:p-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-nome" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Nome
                </label>
                <input
                  id="cf-nome"
                  type="text"
                  placeholder="Il tuo nome"
                  className="rounded-lg bg-surface-container-lowest px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:ring-1 focus:ring-accent"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-attivita" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Attività (nome e settore)
                </label>
                <input
                  id="cf-attivita"
                  type="text"
                  placeholder="Es. Bar Mediterraneo, ristorazione"
                  className="rounded-lg bg-surface-container-lowest px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:ring-1 focus:ring-accent"
                  value={formData.attivita}
                  onChange={(e) => setFormData({ ...formData, attivita: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Tipo di progetto
              </span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {TIPI_PROGETTO.map((tipo) => (
                  <label
                    key={tipo}
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-surface-container-lowest p-3 text-foreground transition-colors hover:bg-surface-container-high"
                  >
                    <input
                      type="radio"
                      name="tipoProgetto"
                      value={tipo}
                      checked={formData.tipoProgetto === tipo}
                      onChange={() => setFormData({ ...formData, tipoProgetto: tipo })}
                      className="accent-accent"
                    />
                    <span className="font-mono text-[11px]">{tipo}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Quando vorresti partire?
              </span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {TEMPISTICHE.map((tempo) => (
                  <label
                    key={tempo}
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-surface-container-lowest p-3 text-foreground transition-colors hover:bg-surface-container-high"
                  >
                    <input
                      type="radio"
                      name="tempistica"
                      value={tempo}
                      checked={formData.tempistica === tempo}
                      onChange={() => setFormData({ ...formData, tempistica: tempo })}
                      className="accent-accent"
                    />
                    <span className="font-mono text-[11px]">{tempo}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="cf-msg" className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Messaggio
              </label>
              <textarea
                id="cf-msg"
                rows={4}
                placeholder="Raccontami in breve la tua idea o la situazione attuale del tuo sito."
                className="resize-none rounded-lg bg-surface-container-lowest p-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:ring-1 focus:ring-accent"
                value={formData.messaggio}
                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={whatsappLink(buildMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-mono text-[11px] uppercase tracking-wider font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                Invia su WhatsApp
              </a>
              <p className="text-center font-mono text-[11px] text-muted-foreground">
                Ti rispondo personalmente, di solito in giornata.
              </p>
              <a
                href={mailtoHref()}
                className="text-center font-mono text-[11px] text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
              >
                Preferisci l'email? Scrivi a {CONTACT_EMAIL}
              </a>
            </div>

            <p className="font-mono text-[10px] text-subdued">
              Questo modulo non invia dati a nessun server: apre solo WhatsApp o la tua app email. Leggi
              la{" "}
              <Link to="/privacy" className="underline-offset-2 hover:text-foreground hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
