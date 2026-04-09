import { Stats } from "./_components/Stats";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import { Hero } from "./_components/hero";
import { PracticeAreas } from "./_components/PracticeAreas";
import { Testimonials } from "./_components/Testimonials";
import { CTASection } from "./_components/CTASection";
import { Footer } from "./_components/Footer";
import { About } from "./_components/About";

export default function Home() {
  return(
    <main>
      <Hero />
      <Stats />
      <PracticeAreas />
      <About />
      <Testimonials />
      <CTASection />
      <Footer/>
      <FloatingWhatsApp />
    </main>
  )
}