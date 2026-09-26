import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden w-full bg-[#111111] pt-[140px] pb-[80px] p-[20px]"
    >
      {/* 1. Background image: van banner with exact background properties from Elementor */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/main-banner-images.jpg')`,
        }}
      />

      {/* 2. Gradient overlay matching Elementor original exact CSS:
          linear-gradient(146deg, #000000CC 62%, #2282C6 55%) with opacity 0.89 */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(146deg, rgba(0, 0, 0, 0.80) 58%, rgba(34, 130, 198, 0.89) 58%)",
          opacity: 0.89,
        }}
      />

      {/* 3. Main Hero Container (holds both columns) */}
      <div
        id="hero-main-container"
        className="relative z-10 w-full max-w-[1300px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center w-full min-h-[500px]">
          
          {/* Container 1 (Left Side): Text Container */}
          <div
            id="hero-text-container"
            className="w-full lg:w-1/2 p-[10px] flex flex-col justify-center text-left"
          >
            {/* Heading: Safe. Smart. With Van Lock Security, */}
            <h1 className="font-onest text-white text-[45px] sm:text-[45px] md:text-[45px] lg:text-[45px] font-bold leading-[1.18] tracking-tight mb-6">
              Safe. Smart. With Van Lock
              <br />
              Security,
            </h1>

            {/* Description Paragraph */}
            <p className="font-manrope text-white text-[18px] sm:text-[19px] md:text-[20px] font-normal leading-[1.55] mb-8 max-w-[580px]">
              We specialize in advanced{" "}
              <Link
                href="/"
                className="bg-black text-[#046bd2] px-1.5 py-0.5 rounded font-normal hover:underline inline-block mx-0.5"
              >
                Van Lock Security
              </Link>{" "}
              solutions designed to safeguard your vehicle, tools, and livelihood.
              With expertly installed locks and anti-theft systems, we keep your
              van secure—day and night.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary Button: Get a Quote */}
              <Link
                href="/contact"
                className="font-manrope inline-flex items-center justify-center bg-[#2282c6] hover:bg-[#1b73b2] text-white text-[16px] font-medium min-w-[152px] h-[52px] px-6 rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Get a Quote
              </Link>

              {/* Secondary Button: Our Services */}
              <Link
                href="/our-services"
                className="font-manrope inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#202020] text-[16px] font-medium min-w-[152px] h-[52px] px-6 rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Container 2 (Right Side): Image Container */}
          <div
            id="hero-image-container"
            className="w-full lg:w-1/2 p-[10px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[620px] lg:max-w-[680px] flex justify-center lg:justify-end">
              <Image
                src="/Van-final.png"
                alt="Van Lock Security"
                width={850}
                height={730}
                priority
                unoptimized
                className="w-full h-auto object-contain select-none pointer-events-none transform scale-100 lg:scale-105 xl:scale-110 translate-y-1 lg:translate-y-3 drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
