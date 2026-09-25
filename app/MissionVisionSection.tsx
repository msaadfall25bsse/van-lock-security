import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-white py-[60px] md:py-[85px] px-4 sm:px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12">
          <h2 className="font-jakarta text-[#111111] text-[40px] font-bold leading-[1.25] tracking-tight">
            Secure, Track &amp; Protect
            <br />
            Bring It All Together
          </h2>
        </div>

        {/* 2 Columns: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* Mission Card */}
          <div className="bg-[#e8f6fd] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center justify-start transition-all duration-300">
            <h3 className="font-jakarta text-[#111111] text-[22px] md:text-[24px] font-bold mb-5 tracking-tight">
              Our Mission
            </h3>
            <p className="font-manrope text-[#334155] text-[15px] sm:text-[16px] leading-[1.7] max-w-[500px]">
              VanLock is a company that exclusively works on van security. We make solutions that are exact, reliable, and new. Our solutions work with various vans, so you may protect either one van or your whole fleet. We make sure your vehicle is safe 24/7 using the latest technology and parts that are made for professionals.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#e8f6fd] rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center justify-start transition-all duration-300">
            <h3 className="font-jakarta text-[#111111] text-[22px] md:text-[24px] font-bold mb-5 tracking-tight">
              Our Vision
            </h3>
            <p className="font-manrope text-[#334155] text-[15px] sm:text-[16px] leading-[1.7] max-w-[500px]">
              We know plenty about the demands of mobile businesses, which sets us apart. We work directly with van owners to come up with smart, simple methods that fit right in with their everyday duties. Security Van Lock is the company you can trust for mobile security, from installation to continuous support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
