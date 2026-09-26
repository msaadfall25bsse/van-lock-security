import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import TestimonialsSection from "../TestimonialsSection";
import Footer from "../Footer";

export const metadata = {
  title: "About VanLockSecurity | Experts in Vehicle Theft Protection",
  description:
    "We are specialists in advanced van security solutions. Our systems inspire confidence and protect every vehicle with assurance.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Header with About Us active */}
      <Header activePath="/about-us" />

      {/* 2. Top Banner (Hero with blog-deadlock background) */}
      <section className="relative w-full overflow-hidden pt-[140px] pb-[70px] sm:pt-[180px] sm:pb-[100px] lg:pt-[200px] lg:pb-[130px] px-4 sm:px-6">
        {/* Background Image: blog-deadlock.webp */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/about-us-hero-banner.webp')`,
          }}
        />

        {/* Gradient Overlay: linear-gradient(180deg, #000000 0%, #2282C6 100%) opacity 0.83 */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.83) 0%, rgba(34, 130, 198, 0.83) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1300px] mx-auto text-center">
          <h1 className="font-onest text-white text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-bold tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* 3. Section 2: "About us" + "Secure, Track & Protect – Bring It All Together" */}
      <section className="w-full bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image Card */}
            <div className="w-full flex items-center justify-start">
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-sm">
                <Image
                  src="/about-side-van.webp"
                  alt="Van Lock Security About Us"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-right"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full flex flex-col justify-center text-left lg:pl-2">
              {/* Subtitle */}
              <span className="font-manrope text-[13px] font-bold text-[#2282C6] uppercase tracking-[1.8px] mb-2.5 block">
                ABOUT US
              </span>

              {/* Main Heading */}
              <h2 className="font-onest text-[#0d131f] text-[26px] sm:text-[32px] lg:text-[35px] font-semibold leading-[1.2] tracking-normal mb-4 pr-[10px]">
                Secure, Track &amp; Protect – Bring It All Together
              </h2>

              {/* Description Paragraph */}
              <p className="font-manrope text-[#52525b] text-[14.5px] sm:text-[15px] leading-[24px] mb-7 font-normal">
                A permanent solution to protection requires a combination of strategies, which include, among others, innovative locking systems, powerful hardware, intelligent monitoring, and frequent maintenance. Van Lock Security in central London uses the latest technology to protect every vehicle with assurance, and we learn from real-world threats.
              </p>

              {/* 2 Light Blue Card Boxes for Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Box 1 */}
                <div className="bg-[#EBF7FD] rounded-[12px] px-5 py-4 flex flex-col justify-center space-y-3">
                  {["Pre-Construction", "Design Services", "Residential"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                        <svg className="w-[17px] h-[17px] fill-[#2282C6]" viewBox="0 0 512 512">
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                      </span>
                      <span className="font-manrope text-[14px] text-[#1e293b] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Box 2 */}
                <div className="bg-[#EBF7FD] rounded-[12px] px-5 py-4 flex flex-col justify-center space-y-3">
                  {["Commercial", "Industrial", "Outdoor Living"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                        <svg className="w-[17px] h-[17px] fill-[#2282C6]" viewBox="0 0 512 512">
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                      </span>
                      <span className="font-manrope text-[14px] text-[#1e293b] font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Section 3: Testimonials Section (Identical to live site) */}
      <TestimonialsSection />

      {/* 5. Section 4: "Why Choose Us?" (Text Left, Image Right with Our Mission & Our Vision) */}
      <section className="w-full bg-white py-[60px] md:py-[90px] px-4 sm:px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left 50%: Content */}
            <div className="w-full flex flex-col justify-center text-left">
              {/* Subtitle */}
              <p className="font-onest text-[16px] font-semibold text-[#2282C6] uppercase tracking-[2px] leading-tight mb-3">
                Why Choose Us?
              </p>

              {/* Main Heading */}
              <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] md:leading-[48px] mb-8">
                Secure, Track &amp; Protect –<br />
                Bring It All Together
              </h2>

              {/* Our Mission */}
              <div className="mb-6">
                <h3 className="font-onest text-[#111111] text-[20px] sm:text-[22px] font-bold mb-2">
                  Our Mission
                </h3>
                <p className="font-manrope text-[#555555] text-[15px] sm:text-[16px] leading-[27px]">
                  VanLock is a company that exclusively works on van security. We make solutions that are exact, reliable, and new. Our solutions work with various vans, so you may protect either one van or your whole fleet. We make sure your vehicle is safe 24/7 using the latest technology and parts that are made for professionals.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h3 className="font-onest text-[#111111] text-[20px] sm:text-[22px] font-bold mb-2">
                  Our Vision
                </h3>
                <p className="font-manrope text-[#555555] text-[15px] sm:text-[16px] leading-[27px]">
                  We know plenty about the demands of mobile businesses, which sets us apart. We work directly with van owners to come up with smart, simple methods that fit right in with their everyday duties. Security Van Lock is the company you can trust for mobile security, from installation to continuous support.
                </p>
              </div>
            </div>

            {/* Right 50%: Image */}
            <div className="w-full flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-[10px] overflow-hidden shadow-sm">
                <Image
                  src="/mission-side-van.webp"
                  alt="Van Lock Security Mission and Vision"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Section 5: Estimate Banner Section */}
      <section className="relative w-full overflow-hidden py-[60px] md:py-[75px] px-4 sm:px-6">
        {/* Background Image: main-banner-images.jpg */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/main-banner-images.jpg')`,
          }}
        />

        {/* Gradient Overlay: linear-gradient(90deg, #2282C6 0%, #000000 100%) opacity 0.87 */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(34, 130, 198, 0.88) 0%, rgba(0, 0, 0, 0.87) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-onest text-[13px] sm:text-[14px] font-semibold text-[#ffffff] uppercase tracking-[2px] mb-2.5 opacity-90">
              ESTIMATE FOR YOUR PROJECT
            </p>
            <h2 className="font-onest text-white text-[26px] sm:text-[32px] md:text-[40px] font-semibold leading-[1.25]">
              Ready to get an Estimate
              <br className="hidden sm:inline" /> for your Project?
            </h2>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="font-onest inline-flex items-center gap-2.5 bg-[#2282c6] hover:bg-[#1a6ea9] text-white text-[16px] font-semibold px-[30px] py-[13px] rounded-[5px] shadow-md transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <svg
                className="w-4 h-4 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Global Footer */}
      <Footer />
    </div>
  );
}
