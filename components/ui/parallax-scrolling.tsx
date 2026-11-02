import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const LAYER_1 = "/hero/layer-1.webp";
const LAYER_2 = "/hero/layer-2.webp";
const LAYER_4 = "/hero/layer-4.webp";

// Riscrittura del componente Osmo "ParallaxComponent" (gsap ScrollTrigger +
// Lenis): stesso effetto e stessi 3 layer immagine (montagna di notte,
// stessa scena divisa in 3 ritagli — layer 1 foto intera, layer 2 solo
// montagna, layer 4 solo sagoma persona, entrambi con alpha), ma:
// - pacchetto "lenis" al posto di "@studio-freight/lenis" (deprecato);
// - gsap.context()+ctx.revert() per il cleanup, invece di
//   ScrollTrigger.getAll().forEach(kill) che ucciderebbe anche altri
//   ScrollTrigger eventualmente presenti altrove nella pagina;
// - ticker gsap rimosso esplicitamente nel cleanup;
// - Lenis vive solo quanto questo componente è montato (solo Home, mai
//   /lab/lavori) e intercetta i click sui link-ancora (#lavori, #contatti…)
//   della pagina per scorrere con lenis.scrollTo invece del salto nativo;
// - prefers-reduced-motion: niente Lenis, niente ScrollTrigger, layer statici.
export const ParallaxScrolling = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const triggerElement = parallaxRef.current?.querySelector<HTMLElement>("[data-parallax-layers]");
      if (!triggerElement) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "+=150%",
          scrub: 0,
          pin: true,
        },
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          { yPercent: layerObj.yPercent, ease: "none" },
          idx === 0 ? undefined : "<"
        );
      });
    }, parallaxRef);

    const lenis = new Lenis();
    const onTick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Link alle ancore della pagina (Navbar, Footer, CTA "#lavori"…):
    // scorrono con Lenis finché è montato, invece del salto nativo del browser.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.startsWith("#") && !href.startsWith("/#")) return;
      const id = href.split("#")[1];
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      event.preventDefault();
      const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
      lenis.scrollTo(el, { offset: -navHeight });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={parallaxRef} className="relative w-full overflow-hidden bg-background">
      <section
        data-parallax-layers
        aria-hidden="true"
        className="relative h-svh w-full overflow-hidden"
      >
        <img
          data-parallax-layer="1"
          src={LAYER_1}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          data-parallax-layer="2"
          src={LAYER_2}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div data-parallax-layer="3" className="absolute inset-0 flex items-center justify-center px-4">
          <span className="select-none whitespace-nowrap font-display font-bold uppercase leading-none tracking-tighter text-foreground text-[14vw] md:text-[9vw]">
            GNWEBAGENCY
          </span>
        </div>
        <img
          data-parallax-layer="4"
          src={LAYER_4}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-background" />
      </section>
    </div>
  );
};
