import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/src/components/sections/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { Lavori } from "@/src/components/sections/Lavori";
import { Contact } from "@/src/components/sections/Contact";
import { Footer } from "@/src/components/sections/Footer";

export const Home = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gnwebagency.com/#organization",
        "name": "GnWebAgency",
        "url": "https://gnwebagency.com",
        "logo": "https://gnwebagency.com/logo.png",
        "sameAs": [
          "https://www.instagram.com/gnwebagency",
          "https://www.tiktok.com/@gn.web.agency",
          "https://www.facebook.com/share/1ZCuCDWs8K"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "gnwebagency@gmail.com",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://gnwebagency.com/#website",
        "url": "https://gnwebagency.com",
        "name": "GnWebAgency",
        "publisher": { "@id": "https://gnwebagency.com/#organization" }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "name": "GnWebAgency",
        "image": "https://gnwebagency.com/og-image.png",
        "url": "https://gnwebagency.com",
        "telephone": "",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Napoli",
          "addressRegion": "NA",
          "postalCode": "80100",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.8518,
          "longitude": 14.2681
        },
        "areaServed": ["Napoli", "Italia"],
        "serviceType": ["Creazione Siti Web", "SEO", "Web Design"]
      },
      {
        "@type": "Person",
        "name": "Gianluca Napoletano",
        "jobTitle": "Founder",
        "worksFor": { "@id": "https://gnwebagency.com/#organization" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>GnWebAgency | Web Agency Napoli - Siti Web Professionali da €299</title>
        <meta name="description" content="Siamo la web agency di Napoli specializzata in creazione siti web professionali per piccole attività. SEO inclusa, design moderno e prezzi da €299. Inizia ora!" />
        <link rel="canonical" href="https://gnwebagency.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gnwebagency.com" />
        <meta property="og:title" content="GnWebAgency | Web Agency Napoli - Siti Web da €299" />
        <meta property="og:description" content="Creiamo siti web moderni e minimalisti per piccole attività a Napoli e in tutta Italia. SEO inclusa, design responsive. Richiedi un preventivo." />
        <meta property="og:image" content="https://gnwebagency.com/og-image.png" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="GnWebAgency" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GnWebAgency | Web Agency Napoli" />
        <meta name="twitter:description" content="Creazione siti web professionali per piccole attività a Napoli e in Italia. Da €299." />
        <meta name="twitter:image" content="https://gnwebagency.com/og-image.png" />

        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <Lavori />
      <Contact />
      <Footer />
    </>
  );
};
