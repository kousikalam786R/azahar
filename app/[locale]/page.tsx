import About from "@/components/About";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
