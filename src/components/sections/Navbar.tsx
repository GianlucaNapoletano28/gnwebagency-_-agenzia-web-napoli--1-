import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Servizi", href: "/#servizi" },
    { name: "FAQ", href: "/faq", isLink: true },
    { name: "Contatti", href: "/#contatti" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-black/50 backdrop-blur-md">
      <Link to="/" className="font-mono font-bold text-xl tracking-tighter text-white relative z-[60]">
        GNWEB<span className="text-accent">AGENCY</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70 text-white">
        {navLinks.map((link) => (
          link.isLink ? (
            <Link key={link.name} to={link.href} className="hover:text-accent transition-colors">{link.name}</Link>
          ) : (
            <a key={link.name} href={link.href} className="hover:text-accent transition-colors">{link.name}</a>
          )
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block px-4 py-1.5 border border-white/20 rounded-full text-[10px] uppercase tracking-widest bg-white/5 backdrop-blur-sm text-white">
          Napoli, IT
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white relative z-[60] p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[50] flex flex-col items-center justify-start pt-48 px-6 md:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-[#00ff88]/20 via-transparent to-accent/20 blur-[150px] rounded-full" />
            </div>
            
            <div className="flex flex-col items-center gap-12 relative z-10 w-full mb-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  {link.isLink ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-bold font-mono tracking-tighter text-white hover:text-[#00ff88] transition-colors block py-2"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-bold font-mono tracking-tighter text-white hover:text-[#00ff88] transition-colors block py-2"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 text-[10px] uppercase tracking-[0.5em] text-gray-600 font-mono"
              >
                Napoli, Italia
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
