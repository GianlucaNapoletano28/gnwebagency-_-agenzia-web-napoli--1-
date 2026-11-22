import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 selection:bg-[#00ff88]/30">
      <Helmet>
        <title>Pagina non trovata | GN Web Agency</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#00ff88] mb-12 hover:gap-3 transition-all font-mono text-sm">
          <ArrowLeft size={16} /> TORNA ALLA HOME
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          PAGINA NON <span className="text-[#00ff88]">TROVATA</span>
        </h1>

        <p className="font-light text-gray-400 leading-relaxed">
          Questa pagina non esiste o è stata spostata. Dalla home trovi i lavori e i contatti.
        </p>
      </div>
    </div>
  );
};
