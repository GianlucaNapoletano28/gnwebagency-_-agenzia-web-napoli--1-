// components/LavoriWheel.tsx
//
// Ruota 3D dei lavori (da crafterui), su desktop con puntatore fine; lista
// semplice sotto 768px o su touch. Perché il fallback: su touch lo stage usa
// `touch-pan-x`, quindi un trascinamento verticale gira la ruota invece di
// scorrere la pagina — e agli estremi non "rilascia" lo scroll come fa la
// rotella del mouse. Su telefono la sezione intrappolerebbe l'utente.
//
// Montata solo sulla route di prova /lab/lavori (noindex, fuori menu) finché
// non si decide se sostituire le card editoriali della Home.
import * as React from "react";
import { useSearchParams } from "react-router-dom";

import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { LAVORI } from "@/src/data/lavori";

function useIsDesktop() {
  const [desktop, setDesktop] = React.useState(false);
  React.useEffect(() => {
    const q = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const read = () => setDesktop(q.matches);
    read();
    q.addEventListener("change", read);
    return () => q.removeEventListener("change", read);
  }, []);
  return desktop;
}

/** ?n=8 duplica i lavori reali fino a N elementi, per simulare un portfolio più ricco. */
function useItems(): (WorksWheelItem & { settore: string })[] {
  const [params] = useSearchParams();
  const requested = Number(params.get("n"));
  const n = Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : LAVORI.length;

  return Array.from({ length: n }, (_, i) => {
    const lavoro = LAVORI[i % LAVORI.length];
    return {
      title: lavoro.titolo,
      image: lavoro.immagine,
      href: lavoro.url,
      settore: lavoro.settore,
    };
  });
}

export default function LavoriWheel() {
  const desktop = useIsDesktop();
  const items = useItems();

  return (
    <section id="lavori" className="bg-background text-foreground">
      {desktop ? (
        <div className="h-screen w-full">
          <WorksWheel items={items} label={`${items.length} Lavori`} action="Vedi il sito" />
        </div>
      ) : (
        <div className="px-4 py-16">
          <h2 className="mb-8 text-4xl tracking-tight">Lavori</h2>
          <ul className="space-y-10">
            {items.map((l, i) => (
              <li key={`${l.href}-${i}`}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={l.image}
                    alt={l.title}
                    className="bg-muted aspect-[1.45] w-full rounded-lg object-cover object-top"
                  />
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="text-lg">{l.title}</span>
                    <span className="text-muted-foreground font-mono text-xs">{l.settore}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
