import { Helmet } from "react-helmet-async";
import LavoriWheel from "@/components/LavoriWheel";

// Pagina di prova per valutare la ruota WorksWheel con i dati reali di lavori.ts.
// Non indicizzata, non linkata dal menu. ?n=8 simula un portfolio più ricco
// duplicando i lavori reali.
export const LavoriLab = () => {
  return (
    <>
      <Helmet>
        <title>Lab — Ruota Lavori</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="fixed left-1/2 top-3 z-50 -translate-x-1/2 rounded-full bg-surface-container-high px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        Lab — pagina di prova, non indicizzata · aggiungi ?n=8 all'URL per simulare più lavori
      </div>
      <LavoriWheel />
    </>
  );
};
