import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import MissionVisionSection from "./MissionVisionSection";
import EstimateBannerSection from "./EstimateBannerSection";
import PopularVansSection from "./PopularVansSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialsSection from "./TestimonialsSection";
import HowItWorksSection from "./HowItWorksSection";
import DifferenceSection from "./DifferenceSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Header Section */}
      <Header />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Our Services Section */}
      <ServicesSection />

      {/* 4. About Us Section */}
      <AboutSection />

      {/* 5. Mission & Vision Section */}
      <MissionVisionSection />

      {/* 6. Estimate Banner Section */}
      <EstimateBannerSection />

      {/* 7. Popular Vans Section */}
      <PopularVansSection />

      {/* 8. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. How It Works Section */}
      <HowItWorksSection />

      {/* 11. The Van Lock Difference Section */}
      <DifferenceSection />

      {/* 12. Contact Us & Form Section */}
      <ContactSection />

      {/* 13. Footer Section */}
      <Footer />
    </div>
  );
}
