import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-black border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400 font-mono">
              <p>
                Questo sito non usa cookie di profilazione né strumenti di tracciamento.
                I dati che mi invii (modulo, WhatsApp, email) li uso solo per risponderti.{" "}
                <Link to="/privacy" className="text-[#00ff88] hover:underline">
                  Informativa privacy
                </Link>.
              </p>
            </div>
            <button
              onClick={acceptCookies}
              className="whitespace-nowrap bg-[#00ff88] text-black px-8 py-3 rounded-none font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#00ff88]/90"
            >
              Ho capito
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
