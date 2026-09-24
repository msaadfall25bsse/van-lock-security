import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about-us-section"
      className="w-full bg-[#E9F7FE] py-[60px] md:py-[90px] px-4 sm:px-6"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* Column 1 (Left 50%): Image Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-[10px] overflow-hidden shadow-md">
              <Image
                src="/about-us-hero.webp"
                alt="Van Lock Security Approach"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_right]"
              />
            </div>
          </div>

          {/* Column 2 (Right 50%): Content Container */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            {/* Subtitle: ABOUT US */}
            <p className="font-onest text-[14px] font-semibold text-[#2282c6] uppercase tracking-[2px] mb-3">
              About us
            </p>

            {/* Main Heading: Our Approach to Smart Security */}
            <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] md:leading-[50px] mb-5">
              Our Approach to Smart Security
            </h2>

            {/* Description Paragraph */}
            <p className="font-manrope text-[#303030] text-[16px] md:text-[18px] font-normal leading-[1.75] md:leading-[32px] mb-8">
              A permanent solution to protection requires a combination of strategies, which include, among others, innovative locking systems, powerful hardware,{" "}
              <Link
                href="/about-us"
                className="text-[#2282c6] underline hover:text-[#1a6ea9] font-medium transition-colors"
              >
                intelligent monitoring
              </Link>
              , and frequent maintenance. Van Lock Security in London uses the latest technology to protect every vehicle with assurance, and we learn from real-world threats.
            </p>

            {/* Action Button: Read More */}
            <div>
              <Link
                href="/about-us"
                className="font-onest inline-flex items-center gap-2.5 bg-[#2282c6] hover:bg-[#1a6ea9] text-white text-[16px] font-semibold px-[30px] py-[15px] rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Read More</span>
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

        </div>
      </div>
    </section>
  );
}
