"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative">
      {/* Main Top Footer Section */}
      <div className="w-full bg-[#303030] text-white py-[50px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30.577%_21.024%_25.411%_22.704%] gap-y-10 lg:gap-y-0">
          
          {/* Col 1: Logo, Bio, Social Icons */}
          <div className="lg:pr-6">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://vanlocksecurity.co.uk/wp-content/uploads/2025/01/Artboard-new-logo.png"
                alt="VanLock Security"
                width={700}
                height={256}
                className="w-[180px] sm:w-[200px] h-auto object-contain"
                priority
              />
            </Link>
            <p className="font-manrope text-[16px] text-white leading-[1.6] mb-6">
              We are specialists in advanced van security solutions. Our systems inspire confidence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-[10px]">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61576853046703"
                target="_blank"
                rel="noreferrer"
                className="w-[30px] h-[30px] bg-white rounded-[2px] flex items-center justify-center text-[#2282C6] hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-[15px] h-[15px] fill-[#2282C6]" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vanlocksecurity?igsh=MXhuYW4zMzZnc3FjMw=="
                target="_blank"
                rel="noreferrer"
                className="w-[30px] h-[30px] bg-white rounded-[2px] flex items-center justify-center text-[#2282C6] hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-[15px] h-[15px] fill-[#2282C6]" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vanlock-security"
                target="_blank"
                rel="noreferrer"
                className="w-[30px] h-[30px] bg-white rounded-[2px] flex items-center justify-center text-[#2282C6] hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-[15px] h-[15px] fill-[#2282C6]" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:pl-[50px]">
            <h4 className="font-onest text-[22px] font-bold text-white mb-[18px]">
              Quick Links
            </h4>
            <ul className="space-y-[13px] font-manrope text-[15px] text-white">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us/" },
                { label: "Fleets", href: "/fleets/" },
                { label: "Contact", href: "/contact/" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-[9px] hover:text-[#2282C6] transition-colors group"
                  >
                    <span className="text-[#2282C6] font-bold text-[14px] leading-none select-none">&gt;</span>
                    <span className="text-white group-hover:text-[#2282C6] transition-colors">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="font-onest text-[22px] font-bold text-white mb-[18px]">
              Our Services
            </h4>
            <ul className="space-y-[13px] font-manrope text-[15px] text-white">
              {[
                { label: "Van Dead Locks", href: "/our-services/van-dead-locks/" },
                { label: "Van Hook Locks", href: "/our-services/van-hook-locks/" },
                { label: "Van Slam Locks", href: "/our-services/van-slam-locks/" },
                { label: "Van Statement Lock", href: "/our-services/van-statement-lock/" },
                { label: "Replacement Lock For Ford", href: "/our-services/replacement-lock-for-ford/" },
                { label: "Repair Plate Or External Shield", href: "/our-services/repair-plate-or-external-shield/" },
                { label: "Air Vent Installation", href: "/our-services/air-vent-installation/" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-[9px] hover:text-[#2282C6] transition-colors group"
                  >
                    <span className="text-[#2282C6] font-bold text-[14px] leading-none select-none">&gt;</span>
                    <span className="text-white group-hover:text-[#2282C6] transition-colors">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="font-onest text-[22px] font-bold text-white mb-[18px]">
              Contact Details
            </h4>
            <ul className="space-y-[18px] font-manrope text-[15px] text-white">
              <li>
                <a
                  href="tel:07367674000"
                  className="inline-flex items-center gap-[12px] hover:text-[#2282C6] transition-colors group"
                >
                  {/* Phone Icon */}
                  <span className="w-[21px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                    <svg className="w-[21px] h-[21px] fill-none stroke-[#2282C6]" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="text-white group-hover:text-[#2282C6] transition-colors">07367674000</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@vanlocksecurity.co.uk"
                  className="inline-flex items-center gap-[12px] hover:text-[#2282C6] transition-colors group"
                >
                  {/* Mail Icon */}
                  <span className="w-[21px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                    <svg className="w-[21px] h-[21px] fill-none stroke-[#2282C6]" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span className="text-white group-hover:text-[#2282C6] transition-colors">info@vanlocksecurity.co.uk</span>
                </a>
              </li>

              <li className="flex items-start gap-[12px]">
                {/* Location Marker Icon */}
                <span className="w-[21px] flex-shrink-0 flex items-center justify-center text-[#2282C6] mt-[3px]">
                  <svg className="w-[21px] h-[21px] fill-none stroke-[#2282C6]" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-white leading-[1.4]">
                  Van lock security 594 green lane<br className="hidden sm:inline" /> , Ilford
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar in #2282C6 */}
      <div className="w-full bg-[#2282C6] text-white py-[15px] px-4 relative">
        <div className="max-w-[1300px] mx-auto text-center">
          <p className="font-onest text-[15px] sm:text-[16px] text-white font-normal">
            Copyright © 2026 VanLock Security | All Rights Reserved
          </p>
        </div>

        {/* Scroll to top arrow on the right side */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-white/80 p-2 transition-transform hover:-translate-y-[60%] flex items-center justify-center"
        >
          <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

