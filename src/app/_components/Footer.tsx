export function Footer() {
    return (
        <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-2xl font-bold font-display text-background">Jonildo Reis</div>
          <p className="text-background/60 text-sm mt-1">Advogados de confiança</p>
        </div>
        <div className="text-background/50 text-sm">
          © {new Date().getFullYear()} Jonildo Reis. Todos os direitos reservados.
        </div>
      </div>
    </div>
  </footer>
    )
}