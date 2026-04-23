import Image from "next/image"
import backgroundImage from "../../../public/Jonildo_bg.png"
import WhatsAppIcon from "./WhatsAppIcon"

const WHATSAPP_URL = "https://wa.me/556293927788"

export function Hero() {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background com overlay em duas camadas para mais profundidade */}
  <div className="absolute inset-0">
    <Image
      src={backgroundImage}
      alt="Advogado profissional vestindo terno, de braços abaixados e com uma estante cheia de livros ao fundo"
      className="w-full h-full object-cover object-center scale-105"
      width={1280}
      height={800}
      priority
    />
    {/* Gradiente principal */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(120deg, hsla(220,40%,8%,0.95) 0%, hsla(220,40%,15%,0.80) 55%, hsla(220,40%,20%,0.50) 100%)",
      }}
    />
    {/* Vinheta nas bordas */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 40%, hsla(220,40%,5%,0.6) 100%)",
      }}
    />
  </div>

  <div className="relative z-10 container mx-auto px-6 py-32">
    <div className="max-w-2xl animate-fade-in">

      {/* Badge de credencial */}
      {/* <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
        <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
          +20 anos de experiência
        </span>
      </div> */}

      {/* Título principal */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
        Advocacia
        <br />
        <span className="text-white/70 font-light italic">Especializada</span>
      </h1>

      {/* Divisor dourado */}
      <div className="flex items-center gap-4 my-7">
        <div className="h-px flex-1 max-w-[60px]" style={{ background: "#ca9a3e" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ca9a3e" }} />
        <div className="h-px flex-1 max-w-[200px]" style={{ background: "linear-gradient(to right, #ca9a3e, transparent)" }} />
      </div>

      {/* Subtítulo com destaque */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
        Defesa legal com{" "}
        <span
          className="relative inline-block"
          style={{
            background: "linear-gradient(90deg, #f0c060, #ca9a3e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          resultados reais
        </span>
      </h2>

      {/* Descrição */}
      <p className="text-lg text-white/70 mb-10 max-w-md leading-relaxed">
        Há mais de 20 anos protegendo os direitos de nossos clientes com dedicação, ética e estratégia.
        Agende uma consulta sem compromisso.
      </p>

      {/* Botão WhatsApp */}
      
        <a href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
        style={{
          background: "linear-gradient(135deg, #1db954, #158f3e)",
          boxShadow: "0 8px 32px rgba(29,185,84,0.35)",
        }}>
        <WhatsAppIcon className="w-6 h-6" />
        Consulta por WhatsApp
      </a>

    </div>
  </div>
</section>
    )
}