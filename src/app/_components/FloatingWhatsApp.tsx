import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556293927788";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="floating-whatsapp"
    aria-label="Contactar por WhatsApp"
  >
    <WhatsAppIcon className="w-8 h-8 text-whatsapp-foreground" />
  </a>
);

export default FloatingWhatsApp;