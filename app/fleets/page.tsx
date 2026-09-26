import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import TestimonialsSection from "../TestimonialsSection";
import EstimateBannerSection from "../EstimateBannerSection";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Fleets - VanLock Security",
  description:
    "Fleets Protect What Drives Your Business Fleet Security Solutions Criminal attacks on fleets result in not only the theft of cargo and costly repair bills, but also the loss to your business in having that vehicle off the road. VanLock Security have been protecting commercial vehicles from theft and attack for over 20 years.",
};

const benefits = [
  {
    title: "Reduced Theft Risk",
    desc: "Keep your tools, cargo, and vehicles secure",
    icon: (
      <svg className="w-[38px] h-[38px] text-[#2282C6] stroke-[#2282C6]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="#2282C6" />
        <line x1="12" y1="17" x2="12" y2="19" />
      </svg>
    ),
  },
  {
    title: "Increased Driver Confidence",
    desc: "Let your team work without worry",
    icon: (
      <svg className="w-[38px] h-[38px] text-[#2282C6] stroke-[#2282C6]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Lower Insurance Premiums",
    desc: "Security upgrades can help reduce policy costs",
    icon: (
      <svg className="w-[38px] h-[38px] text-[#2282C6] stroke-[#2282C6]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="14" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
        <line x1="14" y1="19" x2="19" y2="14" />
      </svg>
    ),
  },
  {
    title: "Fleet Visibility",
    desc: "GPS and alerts help improve tracking and accountability",
    icon: (
      <svg className="w-[38px] h-[38px] text-[#2282C6] stroke-[#2282C6]" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 14h2" />
        <circle cx="17" cy="15" r="1.5" />
        <path d="M6 4l2-2h8l2 2" />
      </svg>
    ),
  },
];

export default function FleetsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden flex flex-col">
      {/* Transparent Header */}
      <Header activePath="/fleets" />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden w-full bg-[#111111] pt-[150px] pb-[70px] sm:pt-[180px] sm:pb-[100px] lg:pt-[200px] lg:pb-[130px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/blog-deadlock.webp')` }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #2282C6 100%)",
            opacity: 0.83,
          }}
        />
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-onest text-white text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-[1.2] lg:leading-[55px] tracking-tight">
            Fleets
          </h1>
        </div>
      </section>

      {/* Section 2: Fleet Security Solutions */}
      <section className="w-full bg-white py-[60px] sm:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <p className="font-onest text-[14px] sm:text-[15px] font-bold text-[#2282C6] tracking-[2px] uppercase mb-2">
                PROTECT WHAT DRIVES YOUR BUSINESS
              </p>
              <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20] leading-[1.25] mb-6">
                Fleet Security Solutions
              </h2>
              <div className="space-y-4 font-manrope text-[15px] text-[#555555] leading-[26px]">
                <p>
                  Criminal attacks on fleets result in not only the theft of cargo and costly repair bills, but also the loss to your business in having that vehicle off the road.
                </p>
                <p>
                  VanLock Security have been protecting commercial vehicles from theft and attack for over 20 years. Our award-winning range of vehicle specific kits includes everything from locking and shielding solutions, to cargo locks and alarms.
                </p>
                <p>
                  So whether your business is in logistics, construction, parcel delivery, utility, housing maintenance, pharmaceutical, food and beverage or retail, VanLock Security has the widest range of security products available on the market for all major manufacturers.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[420px] rounded-[10px] overflow-hidden shadow-[0px_4px_25px_rgba(0,0,0,0.08)]">
              <Image
                src="/Fleet_Security_Solutions.jpeg"
                alt="Fleet Security Solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits to Your Business */}
      <section className="w-full bg-[#F4F9FD] py-[60px] sm:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Image: Vivaro Van Deadlocks */}
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-[10px] overflow-hidden shadow-[0px_4px_25px_rgba(0,0,0,0.08)] order-2 lg:order-1">
              <Image
                src="/VivaroVanDedalocks.jpeg"
                alt="Benefits to Your Business"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right Content & 4 Benefit Cards */}
            <div className="order-1 lg:order-2">
              <p className="font-onest text-[14px] sm:text-[15px] font-bold text-[#2282C6] tracking-[2px] uppercase mb-2">
                SMART SECURITY SMART INVESTMENT
              </p>
              <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20] leading-[1.25] mb-5">
                Benefits to Your Business
              </h2>
              <p className="font-manrope text-[15px] text-[#555555] leading-[26px] mb-8">
                Investing in VanLock Security not only protects your fleet but also adds long-term value to your operations. From reducing theft and insurance costs to improving driver confidence and operational efficiency, our solutions are designed to secure your assets and support your business growth. Reliable security means fewer disruptions and more peace of mind.
              </p>

              {/* 4 Benefit Items List matching real website screenshot */}
              <div className="flex flex-col space-y-6">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 pt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-onest text-[19px] sm:text-[20px] font-bold text-[#050B20] leading-snug tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-manrope text-[15px] sm:text-[16px] text-[#4a5568] leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Estimate Banner Section */}
      <EstimateBannerSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
