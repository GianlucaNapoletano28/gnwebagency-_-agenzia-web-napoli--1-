import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AVAILABILITY, BRAND_NAME } from "@/lib/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { num: "01", name: "Lavori", href: "/#lavori" },
    { num: "02", name: "Metodo", href: "/#metodo" },
    { num: "03", name: "Chi sono", href: "/#chi-sono" },
    { num: "04", name: "Contatti", href: "/#contatti" },
  ];

  const isAvailable = AVAILABILITY.status === "disponibile";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-12 py-6 bg-background/85 backdrop-blur-xl border-b border-border">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface-container-low font-display text-sm text-foreground group-hover:border-accent/50 transition-colors">
            GN
          </span>
          <span className="flex items-center gap-1.5">
            <span className="font-display text-base tracking-tight text-foreground">
              {BRAND_NAME}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.15em]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-subdued">{link.num}</span>
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-surface-container-low px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              {isAvailable && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${
                  isAvailable ? "bg-accent" : "bg-subdued"
                }`}
              />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {AVAILABILITY.label}
            </span>
          </div>

          <a
            href="/#contatti"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-mono text-[11px] uppercase tracking-wider font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Parliamo
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden text-foreground p-2" aria-label="Apri il menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay — outside <nav> to avoid backdrop-filter stacking context */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-start bg-background pt-48 px-6 lg:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-accent/20 via-transparent to-accent/20 blur-[150px] rounded-full" />
            </div>

            <div className="flex flex-col items-center gap-10 relative z-10 w-full mb-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl tracking-tight text-foreground hover:text-accent transition-colors block py-2"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 font-mono text-[10px] uppercase tracking-[0.5em] text-subdued"
              >
                Napoli, Italia
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
