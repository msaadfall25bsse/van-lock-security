import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";

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
    </div>
  );
}
