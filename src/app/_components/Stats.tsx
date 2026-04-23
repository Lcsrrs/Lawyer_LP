const stats = [
  { value: "20+", label: "Anos de experiência" },
  { value: "2,500+", label: "Casos resolvidos" },
  { value: "98%", label: "Clientes stisfeitos" },
  { value: "24h", label: "Tempo de resposta" },
];

export function Stats() {
    return (
        <section className="bg-primary py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent font-display mb-2">{stat.value}</div>
            <div className="text-sm md:text-base text-primary-foreground/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
    )
}