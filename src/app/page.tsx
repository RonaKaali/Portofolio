import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";
import ModernHero from "@/components/home/ModernHero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import Marquee from "@/components/home/Marquee";
import Footer from "@/components/home/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const name = "Ahmad Rona Fatahilah";
  const role = "Web Developer";
  const whatsapp = "088234448888";

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <Preloader name={name} role={role} />
      <Navbar />

      <SmoothScroll>
        <ModernHero />

        <div className="relative z-10 bg-black">
          <Projects />
          <About />
          <Services />
          <Marquee />
          <Contact whatsapp={whatsapp} />
          <Footer />
        </div>
      </SmoothScroll>
    </main>
  );
}
