// Costanti condivise del sito. Un solo punto da aggiornare per numero WhatsApp,
// email e nome del brand — evita che i valori divergano tra sezioni.

export const WHATSAPP_NUMBER = "393887397246";
export const WHATSAPP_DISPLAY = "+39 388 739 7246";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT_EMAIL = "gnwebagency@gmail.com";
export const BRAND_NAME = "GN Web Agency";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/gnwebagency?igsh=MXFmZGx4OGR1Ynlpag==",
  tiktok: "https://www.tiktok.com/@gn.web.agency?_r=1&_t=ZN-96M6rMKa5l0",
  facebook: "https://www.facebook.com/share/1ZCuCDWs8K/?mibextid=wwXIfr",
};

// Pannello unico per la pill di disponibilità (Navbar, Hero). Nessuna data
// hardcoded nei componenti: aggiornare solo qui.
export const AVAILABILITY: { status: "disponibile" | "occupato"; label: string } = {
  status: "disponibile",
  label: "Disponibile ora",
};
