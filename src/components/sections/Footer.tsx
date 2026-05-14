import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-mono tracking-tighter text-white mb-2">
              GN<span className="text-[#00ff88]">WEBAGENCY</span>
            </h2>
            <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-muted-foreground">
              Forging digital futures from Naples
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <motion.a 
              href="#" 
              whileHover={{ color: "#00ff88" }}
              className="transition-colors"
            >
              Napoli, Italia
            </motion.a>
            <Link 
              to="/privacy"
              className="transition-colors hover:text-[#00ff88]"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/cookies"
              className="transition-colors hover:text-[#00ff88]"
            >
              Cookie Policy
            </Link>
            <Link 
              to="/faq"
              className="transition-colors hover:text-[#00ff88]"
            >
              FAQ
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-mono text-muted-foreground opacity-50">
              © {new Date().getFullYear()} GNWEBAGENCY. <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
