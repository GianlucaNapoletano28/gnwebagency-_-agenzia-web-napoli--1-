/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Home } from "@/src/pages/Home";
import { PrivacyPolicy } from "@/src/pages/PrivacyPolicy";
import { CookiePolicy } from "@/src/pages/CookiePolicy";
import { FAQ } from "@/src/pages/FAQ";
import { LavoriLab } from "@/src/pages/lab/LavoriLab";
import { CookieBanner } from "@/src/components/ui/CookieBanner";
import { SocialSidebar } from "@/src/components/ui/SocialSidebar";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <main className="min-h-screen bg-black text-white selection:bg-[#00ff88]/30 selection:text-white scroll-smooth flex flex-col font-sans relative overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/lab/lavori" element={<LavoriLab />} />
          </Routes>
          <SocialSidebar />
          <CookieBanner />
        </main>
      </Router>
    </HelmetProvider>
  );
}

