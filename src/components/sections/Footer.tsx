import { Link } from "react-router-dom";
import { BRAND_NAME, CONTACT_EMAIL, SOCIAL_LINKS, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";

const navigation = [
  { num: "01", name: "Lavori", href: "/#lavori" },
  { num: "02", name: "Metodo", href: "/#metodo" },
  { num: "03", name: "Chi sono", href: "/#chi-sono" },
];

const legal = [
  { name: "Privacy Policy", to: "/privacy" },
  { name: "Cookie Policy", to: "/cookies" },
  { name: "Domande Frequenti (FAQ)", to: "/faq" },
];

const social = [
  { name: "Instagram", href: SOCIAL_LINKS.instagram },
  { name: "TikTok", href: SOCIAL_LINKS.tiktok },
  { name: "Facebook", href: SOCIAL_LINKS.facebook },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-20 pb-10">
        <div className="mb-16 max-w-3xl">
          <span className="mb-3 block font-mono text-[11px] uppercase tracking-widest text-accent">
            Un cliente alla volta
          </span>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground leading-tight">
            Fatto a Napoli, con rigore e passione.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-subdued">Navigazione</span>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span className="font-mono text-xs text-subdued">{item.num}</span>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-subdued">Contatti Diretti</span>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-col gap-0.5">
                <span className="text-[11px] text-muted-foreground">WhatsApp</span>
                <a
                  href={whatsappLink(`Ciao ${BRAND_NAME.split(" ")[0]} Gianluca, ti scrivo dal sito.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {WHATSAPP_DISPLAY} ↗
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[11px] text-muted-foreground">Email</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[11px] text-muted-foreground">Sede</span>
                <span className="text-sm text-muted-foreground">Napoli, Italia</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-subdued">Note Legali</span>
            <ul className="flex flex-col gap-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-subdued">Presenza Digitale</span>
            <ul className="flex flex-col gap-3">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="font-mono text-xs text-subdued group-hover:text-accent">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-xs text-subdued">
            © {new Date().getFullYear()} {BRAND_NAME}. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Crafted in Napoli
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
