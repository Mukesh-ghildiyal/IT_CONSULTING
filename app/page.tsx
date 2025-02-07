import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

import Team from "@/components/Team";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <HeroSection />
      <About />
      <Team />
      <Services />
      <HowItWorks />

      {/* <WhyChooseUs /> */}
      <ContactUs />
      <Footer />
    </main>
  );
}
