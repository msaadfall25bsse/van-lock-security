import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header';
import TestimonialsSection from '../TestimonialsSection';
import EstimateBannerSection from '../EstimateBannerSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Our Van Security Services | Expert Van Lock Installation',
  description:
    'Explore our van security services, including lock installations, deadlocks, and slamlocks. Protect your van from theft with expert solutions across the UK.',
};

const serviceCards = [
  {
    title: 'Van Dead Locks',
    desc: 'Dead locks are mechanical locks designed to work independently of your vehicle’s existing locking system.',
    href: '/our-services/van-dead-locks/',
    image: '/service_card_1.png',
  },
  {
    title: 'Van hook locks',
    desc: 'The hook lock is a variant of the deadlock that uses a hook bolt to engage with an internal keep.',
    href: '/our-services/van-hook-locks/',
    image: '/service_card_2.png',
  },
  {
    title: 'Van slam locks',
    desc: 'Slam locks guarantee the door is locked every time it is closed, and can only be opened using a key.',
    href: '/our-services/van-slam-locks/',
    image: '/service_card_3.png',
  },
  {
    title: 'Van statement lock',
    desc: 'Statement locks are mounted across your van doors, bracing them to provide security and a clear visual deterrent.',
    href: '/our-services/van-statement-lock/',
    image: '/service_card_4.png',
  },
  {
    title: 'Replacement lock for Ford',
    desc: 'A high-security replacement for your existing lock, our replacement locks address known factory lock vulnerabilities.',
    href: '/our-services/replacement-lock-for-ford/',
    image: '/service_card_5.png',
  },
  {
    title: 'Repair plate or external shield',
    desc: 'Reinforce damaged or vulnerable van doors with heavy-duty repair plates and external shields.',
    href: '/our-services/repair-plate-or-external-shield/',
    image: '/service_card_6.png',
  },
  {
    title: 'Air Vent Installation',
    desc: 'Air Vent Installation is a smart upgrade for any van that transports tools, animals, chemicals, or poor airflow items.',
    href: '/our-services/air-vent-installation/',
    image: '/service_card_7.png',
  },
];

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden flex flex-col">
      {/* 1. Transparent Header */}
      <Header activePath="/our-services" />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden w-full bg-[#111111] pt-[150px] pb-[70px] sm:pt-[180px] sm:pb-[100px] lg:pt-[200px] lg:pb-[130px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/blog-deadlock.webp')`,
          }}
        />

        {/* Gradient Overlay: 180deg from #000000 0% to #2282C6 100% with opacity 0.83 */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #2282C6 100%)',
            opacity: 0.83,
          }}
        />

        {/* Hero Title */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-onest text-white text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-[1.2] lg:leading-[55px] tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="bg-white py-[60px] sm:py-[80px] lg:py-[100px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-8 shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] border border-[#f0f0f0] flex flex-col items-center text-center transition-all duration-200"
              >
                {/* Image */}
                <div className="relative w-[110px] h-[110px] mb-6 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-jakarta font-bold text-[20px] sm:text-[22px] text-[#050B20] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-[15px] text-[#555555] leading-[26px] mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Learn More Button */}
                <Link
                  href={service.href}
                  className="font-manrope text-[16px] font-semibold text-[#2282C6] hover:text-[#1a6ea8] inline-flex items-center gap-2 transition-colors group"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <TestimonialsSection />

      {/* 5. Estimate Banner Section */}
      <EstimateBannerSection />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
