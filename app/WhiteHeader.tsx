import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WhiteHeaderProps {
  activePath?: string;
}

export default function WhiteHeader({ activePath = "/" }: WhiteHeaderProps) {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 h-[100px] flex items-center relative z-50">
      <div className="w-full max-w-[1300px] mx-auto px-0 h-full flex items-center justify-between">
        
        {/* 1. Column 1: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="inline-block transition-opacity hover:opacity-95">
            <Image
              src="/Artboard-1.webp"
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
            <ul className="flex items-center whitespace-nowrap text-[15px] font-medium tracking-normal text-[#000000] font-jakarta">
              <li>
                <Link
                  href="/"
                  className={`px-3.5 py-2 transition-colors duration-150 inline-block whitespace-nowrap ${
                    activePath === "/" ? "text-[#2282c6]" : "text-[#000000] hover:text-[#2282c6]"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`px-3.5 py-2 transition-colors duration-150 inline-block whitespace-nowrap ${
                    activePath === "/about-us" ? "text-[#2282c6]" : "text-[#000000] hover:text-[#2282c6]"
                  }`}
                >
                  About Us
                </Link>
              </li>

              {/* Choose Your Van Megamenu dropdown */}
              <li className="relative group py-6">
                <Link
                  href="/choose-your-van"
                  className={`px-3.5 py-2 transition-colors duration-150 inline-flex items-center gap-1.5 whitespace-nowrap ${
                    activePath.startsWith("/ford") || activePath === "/choose-your-van"
                      ? "text-[#2282c6]"
                      : "text-[#000000] group-hover:text-[#2282c6]"
                  }`}
                >
                  <span>Choose Your Van</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#000000] group-hover:text-[#2282c6] transition-transform duration-200 group-hover:rotate-180 stroke-[2.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Megamenu Container */}
                <div className="absolute left-1/2 -translate-x-[45%] top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-[10px] shadow-[0px_0px_88px_0px_rgba(0,0,0,0.08)] p-[20px] w-[1000px] max-w-[95vw] grid grid-cols-1 md:grid-cols-[36.134%_63.866%]">
                    
                    {/* Left Sub-box: Popular Vans (36.134% width, #E9F7FE bg & rounded-10px) */}
                    <div className="bg-[#E9F7FE] rounded-[10px] p-[20px] mr-[30px] flex flex-col justify-start">
                      <h4 className="font-jakarta text-[18px] font-bold text-[#000000] mb-[18px] leading-[18px]">
                        Popular Vans
                      </h4>
                      <ul className="space-y-[14px] font-manrope text-[15px] font-medium">
                        {[
                          { title: "Ford Custom 2023>", href: "/ford/custom-2023/" },
                          { title: "Ford Custom 2012-2023", href: "/ford/custom-2012-2023/" },
                          { title: "Ford Transit 2014>", href: "/ford/transit-2014/" },
                          { title: "Renault Trafic 2014>", href: "/renault/trafic-2014/" },
                          { title: "Vauxhall Vivaro 2019>", href: "/vauxhall/vivaro-2019/" },
                          { title: "Volkswagen Transporter T6.1 2020>", href: "/volkswagen/transporter-t6-1-2020/" },
                        ].map((van) => (
                          <li key={van.title}>
                            <Link
                              href={van.href}
                              className="inline-flex items-center gap-[10px] text-[#303030] hover:text-[#2282C6] transition-colors group/item leading-[22px]"
                            >
                              <span className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                                <svg className="w-[17px] h-[17px] fill-[#2282C6]" viewBox="0 0 512 512">
                                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
                                </svg>
                              </span>
                              <span className="group-hover/item:translate-x-0.5 transition-transform">{van.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Sub-box: Choose by Manufacturer (3 Columns + All Manufacturers button) */}
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-jakarta text-[18px] font-bold text-[#000000] mb-[18px] leading-[18px]">
                          Choose by Manufacturer
                        </h4>
                        
                        <div className="grid grid-cols-[30.295%_31.561%_38.144%]">
                          {/* Col 1 */}
                          <ul className="space-y-[14px] font-manrope text-[15px] font-medium pr-2">
                            {[
                              { title: "Citroen", href: "/citroen/" },
                              { title: "Fiat", href: "/fiat/" },
                              { title: "Ford", href: "/ford/" },
                              { title: "Isuzu", href: "/isuzu/" },
                              { title: "IVECO", href: "/iveco/" },
                              { title: "Land Rover", href: "/land-rover/" },
                            ].map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="inline-flex items-center gap-[10px] text-[#303030] hover:text-[#2282C6] transition-colors group/item leading-[22px]"
                                >
                                  <span className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                                    <svg className="w-[17px] h-[17px] fill-[#2282C6]" viewBox="0 0 512 512">
                                      <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
                                    </svg>
                                  </span>
                                  <span className="group-hover/item:translate-x-0.5 transition-transform">{item.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Col 2 */}
                          <ul className="space-y-[14px] font-manrope text-[15px] font-medium pr-2">
                            {[
                              { title: "LEVC", href: "/levc/" },
                              { title: "MAN", href: "/man-vans/" },
                              { title: "Maxus", href: "/maxus/" },
                              { title: "Mercedes-Benz", href: "/mercedes-benz/" },
                              { title: "Nissan", href: "/nissan/" },
                              { title: "Peugeot", href: "/peugeot/" },
                            ].map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="inline-flex items-center gap-[10px] text-[#303030] hover:text-[#2282C6] transition-colors group/item leading-[22px]"
                                >
                                  <span className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                                    <svg className="w-[17px] h-[17px] fill-[#2282C6]" viewBox="0 0 512 512">
                                      <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
                                    </svg>
                                  </span>
                                  <span className="group-hover/item:translate-x-0.5 transition-transform">{item.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Col 3 */}
                          <div className="flex flex-col justify-between">
                            <ul className="space-y-[14px] font-manrope text-[15px] font-medium">
                              {[
                                { title: "Renault", href: "/renault/" },
                                { title: "Toyota", href: "/toyota/" },
                                { title: "Vauxhall", href: "/vauxhall/" },
                                { title: "Volkswagen", href: "/volkswagen/" },
                              ].map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-[10px] text-[#303030] hover:text-[#2282C6] transition-colors group/item leading-[22px]"
                                  >
                                    <span className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center text-[#2282C6]">
                                      <svg className="w-[17px] h-[17px] fill-[#2282C6]" viewBox="0 0 512 512">
                                        <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
                                      </svg>
                                    </span>
                                    <span className="group-hover/item:translate-x-0.5 transition-transform">{item.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {/* All Manufacturers Button positioned under column 3 */}
                            <div className="pt-4 flex justify-start">
                              <Link
                                href="/choose-your-van/"
                                className="font-manrope text-[14px] font-semibold text-white bg-[#2282C6] hover:bg-[#1a6ea9] px-4 py-2 rounded-[4px] transition-colors inline-block text-center shadow-sm w-[155px]"
                              >
                                All Manufacturers &gt;
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </li>

              {/* Our Services dropdown */}
              <li className="relative group py-6">
                <Link
                  href="/our-services"
                  className="px-3.5 py-2 text-[#000000] group-hover:text-[#2282c6] transition-colors duration-150 inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Our Services</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#000000] group-hover:text-[#2282c6] transition-transform duration-200 group-hover:rotate-180 stroke-[2.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Services Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-[8px] shadow-[0px_10px_35px_rgba(0,0,0,0.12)] py-2.5 w-[260px] border border-gray-100 flex flex-col">
                    {[
                      { title: "Van Dead Locks", href: "/our-services/van-dead-locks/" },
                      { title: "Van Hook Locks", href: "/our-services/van-hook-locks/" },
                      { title: "Van Slam Locks", href: "/our-services/van-slam-locks/" },
                      { title: "Van Statement Lock", href: "/our-services/van-statement-lock/" },
                      { title: "Replacement Lock for Ford", href: "/our-services/replacement-lock-for-ford/" },
                      { title: "Repair Plate or External Shield", href: "/our-services/repair-plate-or-external-shield/" },
                      { title: "Air Vent Installation", href: "/our-services/air-vent-installation/" },
                    ].map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="px-5 py-2.5 font-manrope text-[14px] text-[#303030] hover:text-[#2282C6] hover:bg-[#F0F8FD] transition-colors font-medium text-left"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/fleets"
                  className="px-3.5 py-2 text-[#000000] hover:text-[#2282c6] transition-colors duration-150 inline-block whitespace-nowrap"
                >
                  Fleets
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="px-3.5 py-2 text-[#000000] hover:text-[#2282c6] transition-colors duration-150 inline-block whitespace-nowrap"
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
            className="lg:hidden p-2 text-[#000000] hover:text-gray-700 ml-3"
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
