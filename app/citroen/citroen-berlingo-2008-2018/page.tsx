import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhiteHeader from "../../WhiteHeader";
import Footer from "../../Footer";
import TestimonialsSection from "../../TestimonialsSection";
import EstimateBannerSection from "../../EstimateBannerSection";

export const metadata: Metadata = {
  title: "Citroen Berlingo 2008-2018 - VanLock Security",
  description:
    "Citroen Berlingo 2008-2018 Locks and Security Solutions. Also Includes Electric & Hybrid Variants. Browse L4V's range of locks and security solutions for the Citroen Berlingo 2008-2018. Call 07367674000.",
};

const serviceCards = [
  {
    title: "Van Dead Locks",
    desc: "Dead locks are mechanical locks designed to work independently of your",
    img: "/service-card-deadlock.png",
    href: "/our-services/van-dead-locks/",
  },
  {
    title: "Van Hook Locks",
    desc: "The hook lock is a variant of the deadlock that uses a hook bolt to engage",
    img: "/service-card-hooklock.png",
    href: "/our-services/van-hook-locks/",
  },
  {
    title: "Van Slam Locks",
    desc: "Slam locks guarantee the door is locked every time it is closed.",
    img: "/service-card-slamlock.png",
    href: "/our-services/van-slam-locks/",
  },
  {
    title: "Van Statement Lock",
    desc: "Statement locks are mounted across your van doors, bracing them to provide security",
    img: "/service-card-statement.png",
    href: "/our-services/van-statement-lock/",
  },
  {
    title: "Replacement Lock For Ford",
    desc: "A high-security replacement for your existing lock, our replacement locks",
    img: "/service-card-fordrepl.png",
    href: "/our-services/replacement-lock-for-ford/",
  },
  {
    title: "Repair Plate Or External Shield",
    desc: "A high-security replacement for your existing lock, our replacement locks",
    img: "/service-card-repairplate.png",
    href: "/our-services/repair-plate-or-external-shield/",
  },
];

export default function CitroenBerlingo2008To2018Page() {
  return (
    <div className="min-h-screen bg-white text-[#303030] font-manrope selection:bg-[#2282C6] selection:text-white">
      {/* Light/White Header */}
      <WhiteHeader activePath="/choose-your-van" />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION - Citroen Berlingo 2008-2018                      */}
        {/* ========================================================================= */}
        <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              {/* Text Container */}
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-center lg:pr-[20px]">
                <h1 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-semibold text-[#000000] leading-[1.25] lg:leading-[48px] capitalize mb-3">
                  Citroen Berlingo 2008-2018 Locks<br className="hidden sm:inline" /> And Security Solutions
                </h1>

                <p className="font-manrope text-[15px] sm:text-[16px] text-[#2282C6] font-semibold mb-5">
                  Also Includes Electric &amp; Hybrid Variants
                </p>

                <p className="font-manrope text-[16px] lg:text-[18px] text-[#333333] leading-[28px] lg:leading-[30px] mb-8 font-normal lg:pr-[16%]">
                  Browse L4V&apos;s range of locks and security solutions for the Citroen Berlingo 2008-2018.
                </p>

                <a
                  href="tel:07367674000"
                  className="inline-flex items-center gap-2.5 bg-[#2282C6] hover:bg-[#1a6ea9] text-white font-onest font-semibold text-[16px] px-[30px] py-[15px] rounded-[5px] shadow-sm hover:shadow transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-white stroke-[2.5]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>07367674000</span>
                </a>
              </div>

              {/* Image Container */}
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:pl-[20px]">
                <div className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center">
                  <Image
                    src="/citroen-berlingo-2008-2018.jpeg"
                    alt="Citroen Berlingo 2008-2018"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 580px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: Hooklock/Deadlock fitting positions available                  */}
        {/* ========================================================================= */}
        <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            <h2 className="font-onest text-[26px] sm:text-[30px] lg:text-[34px] font-bold text-[#050B20] text-center mb-8 tracking-tight">
              Hooklock/Deadlock Fitting Positions Available
            </h2>

            <div className="bg-[#EBF7FD] rounded-[16px] p-6 sm:p-8 border border-[#D8EFFC]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200/80">
                {/* Left Half: Side Door */}
                <div className="flex flex-col items-center lg:pr-8">
                  <h3 className="font-onest text-[22px] sm:text-[24px] font-bold text-[#050B20] mb-8 text-center">
                    Side Door
                  </h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full text-center">
                    {/* High: Icon */}
                    <div className="flex flex-col items-center justify-between min-h-[140px]">
                      <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#050B20]">High</span>
                      <div className="my-auto py-2">
                        <Image
                          src="/Hooklock-Icon.png"
                          alt="Hooklock"
                          width={32}
                          height={46}
                          className="object-contain h-[44px] w-auto"
                        />
                      </div>
                      <span className="font-manrope text-[12px] sm:text-[13px] text-transparent leading-tight select-none">-</span>
                    </div>

                    {/* Mid: Cross */}
                    <div className="flex flex-col items-center justify-between min-h-[140px]">
                      <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#050B20]">Mid</span>
                      <div className="my-auto py-2">
                        <span className="text-[26px] text-[#222222] font-normal leading-none select-none">✕</span>
                      </div>
                      <span className="font-manrope text-[12px] sm:text-[13px] text-transparent leading-tight select-none">-</span>
                    </div>

                    {/* Low: Icon */}
                    <div className="flex flex-col items-center justify-between min-h-[140px]">
                      <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#050B20]">Low</span>
                      <div className="my-auto py-2">
                        <Image
                          src="/Hooklock-Icon.png"
                          alt="Hooklock"
                          width={32}
                          height={46}
                          className="object-contain h-[44px] w-auto"
                        />
                      </div>
                      <span className="font-manrope text-[12px] sm:text-[13px] text-transparent leading-tight select-none">-</span>
                    </div>
                  </div>
                </div>

                {/* Right Half: Barn Doors */}
                <div className="flex flex-col items-center lg:pl-8">
                  <h3 className="font-onest text-[22px] sm:text-[24px] font-bold text-[#050B20] mb-8 text-center">
                    Barn Doors
                  </h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full text-center">
                    {/* High: Cross */}
                    <div className="flex flex-col items-center justify-between min-h-[140px]">
                      <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#050B20]">High</span>
                      <div className="my-auto py-2">
                        <span className="text-[26px] text-[#222222] font-normal leading-none select-none">✕</span>
                      </div>
                      <span className="font-manrope text-[12px] sm:text-[13px] text-transparent leading-tight select-none">-</span>
                    </div>

                    {/* Mid: Icon (Not suitable for glazed) */}
                    <div className="flex flex-col items-center justify-between min-h-[140px]">
                      <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#050B20]">Mid</span>
                      <div className="my-auto py-2">
                        <Image
                          src="/Hooklock-Icon.png"
                          alt="Hooklock"
                          width={32}
                          height={46}
                          className="object-contain h-[44px] w-auto"
                        />
                      </div>
                      <span className="font-manrope text-[12px] sm:text-[13px] text-[#555555] leading-tight">
                        (Not suitable for glazed)
                      </span>
                    </div>

                    {/* Low: Cross */}
                    <div className="flex flex-col items-center justify-between min-h-[140px]">
                      <span className="font-jakarta font-semibold text-[15px] sm:text-[16px] text-[#050B20]">Low</span>
                      <div className="my-auto py-2">
                        <span className="text-[26px] text-[#222222] font-normal leading-none select-none">✕</span>
                      </div>
                      <span className="font-manrope text-[12px] sm:text-[13px] text-transparent leading-tight select-none">-</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 6 Security Service Cards Grid                                  */}
        {/* ========================================================================= */}
        <section className="bg-white py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-[10px] p-[30px] flex flex-col items-center text-center shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] border border-[#f0f0f0]"
                >
                  <div className="w-[100px] h-[100px] relative mb-[15px] flex items-center justify-center">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={120}
                      height={120}
                      className="object-contain max-h-[90px] w-auto"
                    />
                  </div>

                  <h3 className="font-onest text-[19px] sm:text-[22px] font-bold text-[#000000] leading-[22px] capitalize mb-[15px] pt-[10px]">
                    {card.title}
                  </h3>

                  <p className="font-jakarta text-[16px] text-[#333333] leading-[28px] mb-[15px] flex-grow max-w-[340px]">
                    {card.desc}
                  </p>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 font-manrope font-semibold text-[16px] text-[#2282C6] hover:text-[#050B20] transition-colors mt-auto group"
                  >
                    <span>Learn More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Estimate Banner */}
        <EstimateBannerSection />

        {/* SECTION 5: Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
