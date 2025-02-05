import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Submit from "@/components/Submit";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <HeroSection />
      <Submit />
      <Services />
      <HowItWorks />

      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
