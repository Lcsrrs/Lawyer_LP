import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556293927788";

export function CTASection() {
    return (
    <section className="py-24 bg-primary">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
        Tem algum problema legal?
      </h2>
      <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
        Não espere mais, sua primeira consulta é <span className="text-accent font-semibold">100% gratuita</span>. Contate-nos pelo WhatsApp e te responderemos em 24h.
      </p>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xl px-12 py-5">
        <WhatsAppIcon className="w-7 h-7" />
        Consulta Grátis Agora
      </a>
    </div>
  </section>
    )
}