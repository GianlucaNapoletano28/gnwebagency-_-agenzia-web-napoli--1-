import { Helmet } from "react-helmet-async";
import { HeroParallax } from "@/src/components/sections/HeroParallax";

// Pagina di prova per valutare la Hero con parallax (layer da lavori.ts).
// Non indicizzata, non linkata dal menu. La Hero della home non viene toccata.
export const HeroLab = () => {
  return (
    <>
      <Helmet>
        <title>Lab — Hero Parallax</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="fixed left-1/2 top-3 z-50 -translate-x-1/2 rounded-full bg-surface-container-high px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        Lab — pagina di prova, non indicizzata
      </div>
      <HeroParallax />
    </>
  );
};
