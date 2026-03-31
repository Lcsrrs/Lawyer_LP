import Image from "next/image"
import backgroundImage from "../../../public/Jonildo_bg.png"
import WhatsAppIcon from "./WhatsAppIcon"

const WHATSAPP_URL = "https://wa.me/556293927788"

export function Hero() {
    return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="Advogado profissional vestindo terno, de braços cruzados e com uma estante cheia de livros ao fundo" className="w-full h-full object-cover" width={1280} height={800} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(220,40%,12%,0.92), hsla(220,40%,18%,0.75))" }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-32">
      <div className="max-w-2xl">
        <div className="gold-divider mb-8" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Defesa legal<br />
          <span className="text-accent text-yellow-500">com resultados</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg font-body leading-relaxed">
          Mais de 15 anos protegendo os direitos de nossos clientes. Faça uma consulta sem compromisso.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp bg-emerald-600">
          <WhatsAppIcon />
          Consulta Grátis por WhatsApp
        </a>
      </div>
    </div>

    </section>
    )
}

/* <section className="relative min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Abogado profesional" className="w-full h-full object-cover" width={1280} height={800} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(220,40%,12%,0.92), hsla(220,40%,18%,0.75))" }} />
    </div>
    <div className="relative z-10 container mx-auto px-6 py-32">
      <div className="max-w-2xl">
        <div className="gold-divider mb-8" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Defensa legal<br />
          <span className="text-accent">con resultados</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg font-body leading-relaxed">
          Más de 15 años protegiendo los derechos de nuestros clientes. Consulta gratuita y sin compromiso.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <WhatsAppIcon />
          Consulta Gratis por WhatsApp
        </a>
      </div>
    </div>
  </section> */