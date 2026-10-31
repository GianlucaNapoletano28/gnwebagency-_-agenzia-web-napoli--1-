// Costanti condivise del sito. Un solo punto da aggiornare per numero WhatsApp,
// email e nome del brand — evita che i valori divergano tra sezioni.

export const WHATSAPP_NUMBER = "393887397246";
export const WHATSAPP_DISPLAY = "+39 388 739 7246";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT_EMAIL = "gnwebagency@gmail.com";
export const BRAND_NAME = "GN Web Agency";
