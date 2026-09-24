import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 border-b border-white/[0.14] h-[100px] flex items-center">
      <div className="w-full max-w-[1300px] mx-auto px-0 h-full flex items-center justify-between">
        
        {/* 1. Column 1: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="inline-block transition-opacity hover:opacity-95">
            <Image
              src="/logo.png"
              alt="VanLock Security"
              width={160}
              height={58}
              priority
              unoptimized
              className="w-[125px] sm:w-[145px] md:w-[165px] h-auto object-contain block"
            />
          </Link>
        </div>

        {/* 2. Column 2: Navigation Menu */}
        <div className="hidden lg:flex flex-initial items-center justify-center">
          <nav className="flex items-center">
            <ul className="flex items-center whitespace-nowrap text-[15px] font-medium tracking-normal text-white font-jakarta">
              <li>
                <Link
                  href="/"
                  className="px-3.5 py-2 text-[#2282c6] transition-colors duration-150 inline-block whitespace-nowrap"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="px-3.5 py-2 text-white hover:text-[#2282c6] transition-colors duration-150 inline-block whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>

              {/* Choose Your Van dropdown */}
              <li className="relative group cursor-pointer">
                <Link
                  href="/choose-your-van"
                  className="px-3.5 py-2 text-white group-hover:text-[#2282c6] transition-colors duration-150 inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Choose Your Van</span>
                  <svg
                    className="w-3.5 h-3.5 text-white/90 group-hover:text-[#2282c6] transition-transform duration-200 group-hover:rotate-180 stroke-[2.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </li>

              {/* Our Services dropdown */}
              <li className="relative group cursor-pointer">
                <Link
                  href="/our-services"
                  className="px-3.5 py-2 text-white group-hover:text-[#2282c6] transition-colors duration-150 inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Our Services</span>
                  <svg
                    className="w-3.5 h-3.5 text-white/90 group-hover:text-[#2282c6] transition-transform duration-200 group-hover:rotate-180 stroke-[2.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="/fleets"
                  className="px-3.5 py-2 text-white hover:text-[#2282c6] transition-colors duration-150 inline-block whitespace-nowrap"
                >
                  Fleets
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="px-3.5 py-2 text-white hover:text-[#2282c6] transition-colors duration-150 inline-block whitespace-nowrap"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* 3. Column 3: Get a Quote button */}
        <div className="flex-1 flex items-center justify-end">
          <Link
            href="/contact"
            className="font-onest inline-flex items-center gap-2 bg-[#2282c6] hover:bg-[#1a6ea9] text-white font-medium text-[15px] px-[26px] py-[11px] rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
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

          {/* Mobile hamburger icon */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:text-white/80 ml-3"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
