import { Shield, Users, Building2, FileText, Scale, Briefcase } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/556293927788";

const areas = [
  { icon: Shield, title: "Direito Penal", desc: "Defesa em processos penais e proteção dos seus direitos." },
  { icon: Users, title: "Direito de Família", desc: "Divórcios, guarda, pensões e assuntos familiares." },
  { icon: Building2, title: "Direito Civil", desc: "Contratos, propriedade, responsabilidade civil e mais." },
  { icon: FileText, title: "Direito Trabalhista", desc: "Demissões injustificadas, rescisões e conflitos trabalhistas." },
  { icon: Scale, title: "Direito Empresarial", desc: "Constituição de empresas, contratos comerciais." },
  { icon: Briefcase, title: "Direito Administrativo", desc: "Trâmites governamentais e defesa perante autoridades." },
];

export function PracticeAreas() {
    return (
    <section className="py-24 bg-background" id="areas">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Áreas de Atuação</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Experiência legal para proteger o que mais importa</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {areas.map((area) => (
          <div key={area.title} className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <area.icon className="w-10 h-10 text-accent mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold font-display text-foreground mb-3">{area.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <WhatsAppIcon />
          Precisa de ajuda? Contate-nos!
        </a>
      </div>
    </div>
  </section>
    )
}