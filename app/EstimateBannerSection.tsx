import React from "react";
import Link from "next/link";

export default function EstimateBannerSection() {
  return (
    <section className="relative w-full overflow-hidden py-[70px] md:py-[85px] px-4 sm:px-6">
      {/* 1. Background Image: main-banner-images.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/main-banner-images.jpg')`,
        }}
      />

      {/* 2. Gradient Overlay: linear-gradient(90deg, #2282C6 0%, #000000 100%) with opacity 0.87 */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(34, 130, 198, 0.88) 0%, rgba(0, 0, 0, 0.87) 100%)",
        }}
      />

      {/* 3. Content Container */}
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
            className="font-onest inline-flex items-center gap-2.5 bg-[#2282c6] hover:bg-[#1a6ea9] text-white text-[16px] font-semibold px-[30px] py-[12px] rounded-[5px] shadow-md transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
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
  );
}
