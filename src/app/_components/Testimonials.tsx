import { Star } from "lucide-react";

const testimonials = [
  { name: "María García", text: "Resolveu meu caso de guarda de forma rápida e profissional. Muito agradecida.", area: "Direito de Família" },
  { name: "Carlos Rodríguez", text: "Excelente advogado. Me ajudou com minha demissão injustificada e obtive a melhor rescisão.", area: "Direito Trabalhista" },
  { name: "Ana López", text: "Confiável, honesto e sempre disponível. Recomendo amplamente.", area: "Direito Penal" },
];

export function Testimonials() {
    return (
    <section className="py-24 bg-secondary/50" id="testimonios">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">O que dizem nossos clientes</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card p-8 rounded-xl border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
            <div>
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.area}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    )
}