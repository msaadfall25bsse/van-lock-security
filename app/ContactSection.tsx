"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#f8f9fa] py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Direct Call & Email Card with Van Graphic */}
          <div className="w-full lg:w-5/12 bg-white rounded-[16px] p-8 md:p-10 shadow-sm border border-slate-200/70 flex flex-col justify-between">
            <div>
              {/* Call info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#E9F7FE] text-[#2282c6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-onest text-[14px] font-medium text-[#777777] uppercase tracking-wide">
                    Call Support Center 24/7
                  </p>
                  <a
                    href="tel:07367674000"
                    className="font-onest text-[20px] sm:text-[22px] font-bold text-[#111111] hover:text-[#2282c6] transition-colors"
                  >
                    07367674000
                  </a>
                </div>
              </div>

              {/* Email info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#E9F7FE] text-[#2282c6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-onest text-[14px] font-medium text-[#777777] uppercase tracking-wide">
                    Write To Us
                  </p>
                  <a
                    href="mailto:info@vanlocksecurity.co.uk"
                    className="font-onest text-[18px] sm:text-[20px] font-bold text-[#111111] hover:text-[#2282c6] transition-colors"
                  >
                    info@vanlocksecurity.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Van Illustration / Graphic */}
            <div className="relative w-full h-[220px] mt-4 flex items-center justify-center">
              <Image
                src="/contact-info-img.png"
                alt="Contact Van Lock Security"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="w-full lg:w-7/12 bg-white rounded-[16px] p-8 md:p-10 shadow-sm border border-slate-200/70 flex flex-col justify-center">
            <p className="font-onest text-[14px] font-semibold text-[#2282c6] uppercase tracking-[2px] mb-2">
              Contact us
            </p>
            <h3 className="font-onest text-[#111111] text-[26px] sm:text-[32px] font-bold mb-6">
              Get in touch with us
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full h-[50px] px-4 rounded-[6px] border border-slate-200 focus:border-[#2282c6] focus:outline-none font-manrope text-[15px] bg-[#fafafa]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full h-[50px] px-4 rounded-[6px] border border-slate-200 focus:border-[#2282c6] focus:outline-none font-manrope text-[15px] bg-[#fafafa]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-[50px] px-4 rounded-[6px] border border-slate-200 focus:border-[#2282c6] focus:outline-none font-manrope text-[15px] bg-[#fafafa]"
                />
                <input
                  type="tel"
                  placeholder="Phone No"
                  required
                  className="w-full h-[50px] px-4 rounded-[6px] border border-slate-200 focus:border-[#2282c6] focus:outline-none font-manrope text-[15px] bg-[#fafafa]"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full p-4 rounded-[6px] border border-slate-200 focus:border-[#2282c6] focus:outline-none font-manrope text-[15px] bg-[#fafafa] resize-none"
                />
              </div>

              <button
                type="submit"
                className="font-onest bg-[#2282c6] hover:bg-[#1a6ea9] text-white font-semibold text-[16px] px-8 py-3.5 rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Submit Form
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
