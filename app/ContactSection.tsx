"use client";

import React from "react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-[70px] md:py-[90px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Dark Support Center Card (40% width) */}
          <div className="w-full lg:w-[40%] bg-[#303030] rounded-[30px] pt-[50px] px-[30px] sm:px-[40px] pb-0 flex flex-col justify-between items-center text-center overflow-hidden">
            <div className="w-full flex flex-col items-center">
              
              {/* Call Support Center Block */}
              <div className="flex flex-col items-center mb-8 sm:mb-10">
                <div className="text-[#2282C6] mb-3 flex items-center justify-center">
                  <svg
                    className="w-9 h-9 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <p className="font-onest text-[17px] font-normal text-white/75 mb-1.5">
                  Call Support Center 24/7
                </p>
                <a
                  href="tel:07367674000"
                  className="font-onest text-[20px] font-medium text-white hover:text-[#2282C6] transition-colors"
                >
                  07367674000
                </a>
              </div>

              {/* Write To Us Block */}
              <div className="flex flex-col items-center">
                <div className="text-[#2282C6] mb-3 flex items-center justify-center">
                  <svg
                    className="w-9 h-9 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className="font-onest text-[17px] font-normal text-white/75 mb-1.5">
                  Write To Us
                </p>
                <a
                  href="mailto:info@vanlocksecurity.co.uk"
                  className="font-onest text-[20px] font-medium text-white hover:text-[#2282C6] transition-colors"
                >
                  info@vanlocksecurity.co.uk
                </a>
              </div>
            </div>

            {/* Representative Image sitting at bottom of dark container */}
            <div className="relative w-[70%] max-w-[260px] h-[280px] sm:h-[320px] mt-8 flex items-end justify-center">
              <Image
                src="/contact-info-img.png"
                alt="Support Representative"
                fill
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* Right Column: Contact & Quote Form Card (60% width) */}
          <div className="w-full lg:w-[60%] bg-[#E9F7FE] rounded-[30px] p-[35px_25px] sm:p-[50px] flex flex-col justify-center text-left">
            <p className="font-onest text-[16px] font-semibold text-[#2282C6] uppercase tracking-[2px] mb-2 leading-none">
              CONTACT US
            </p>
            <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.2] md:leading-[45px] mb-7 sm:mb-8">
              Get In Touch With Us
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full h-[52px] px-5 rounded-[5px] border-none bg-white text-[#111111] placeholder:text-[#888888] font-onest text-[15px] focus:outline-none focus:ring-2 focus:ring-[#2282C6]/30 shadow-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full h-[52px] px-5 rounded-[5px] border-none bg-white text-[#111111] placeholder:text-[#888888] font-onest text-[15px] focus:outline-none focus:ring-2 focus:ring-[#2282C6]/30 shadow-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-[52px] px-5 rounded-[5px] border-none bg-white text-[#111111] placeholder:text-[#888888] font-onest text-[15px] focus:outline-none focus:ring-2 focus:ring-[#2282C6]/30 shadow-none"
                />
                <input
                  type="tel"
                  placeholder="Phone No"
                  required
                  className="w-full h-[52px] px-5 rounded-[5px] border-none bg-white text-[#111111] placeholder:text-[#888888] font-onest text-[15px] focus:outline-none focus:ring-2 focus:ring-[#2282C6]/30 shadow-none"
                />
              </div>

              <div>
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full p-5 rounded-[5px] border-none bg-white text-[#111111] placeholder:text-[#888888] font-onest text-[15px] focus:outline-none focus:ring-2 focus:ring-[#2282C6]/30 resize-none shadow-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="font-onest bg-[#2282C6] hover:bg-[#1a6ea9] text-white font-medium text-[16px] px-8 py-3.5 rounded-[5px] transition-all duration-200"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
