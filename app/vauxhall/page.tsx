import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'VAUXHALL - VanLock Security',
  description: 'Vauxhall vans are designed for efficiency, reliability, and everyday practicality. With fuel-efficient engines, smart storage solutions, and advanced safety features, they’re ideal for both small businesses and large fleets. Please select your vehicle below. Security solutions for Vauxhall',
};

const vauxhallVehicles = [
  {
    name: 'Combo 2012-2018',
    slug: '/vauxhall/combo-2012-2018/',
    image: '/Vauxhall-Combo-2012-2018-10d6f267.jpeg',
  },
  {
    name: 'Combo 2018>',
    slug: '/vauxhall/combo-2018/',
    image: '/Vauxhall-Combo-2019-5f7a7246.jpeg',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
  {
    name: 'Movano 2010 - 2021',
    slug: '/vauxhall/movano-2010-2021/',
    image: '/Vauxhall-Movano-2010-5fbc50dd.jpeg',
  },
  {
    name: 'Vivaro 2001-2014',
    slug: '/vauxhall/vivaro-2001-2014/',
    image: '/Vauxhall_Vivaro_2001-2014-f6cc1020.jpeg',
  },
  {
    name: 'Vivaro 2014-2018',
    slug: '/vauxhall/vivaro-2014-2018/',
    image: '/Vauxhall-Vivaro-2014-0fef85b8.jpeg',
  },
  {
    name: 'Vivaro 2019>',
    slug: '/vauxhall/vivaro-2019/',
    image: '/Vauxhall-Vivaro-2019-d190905d-1.png',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
];

export default function VauxhallPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="relative w-[180px] h-[95px] sm:w-[210px] sm:h-[105px] mb-6">
            <Image
              src="/vauxhall-hero-logo.png"
              alt="Vauxhall Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            Vauxhall vans are designed for efficiency, reliability, and everyday practicality. With fuel-efficient engines, smart storage solutions, and advanced safety features, they&apos;re ideal for both small businesses and large fleets.
          </p>
        </div>
      </section>

      {/* Vehicles Grid Section */}
      <section className="bg-white pt-14 pb-20 sm:pt-16 sm:pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
              PLEASE SELECT YOUR VEHICLE BELOW.
            </p>
            <h2 className="font-jakarta text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-[#050B20] tracking-tight">
              Security Solutions For Vauxhall
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vauxhallVehicles.map((vehicle, idx) => (
              <Link
                key={idx}
                href={vehicle.slug}
                className="group block bg-white rounded-[10px] p-5 shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] border border-[#f0f0f0] transition-colors duration-200"
              >
                <div className="relative w-full h-[180px] mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-jakarta font-semibold text-[17px] text-[#111111] group-hover:text-[#2282C6] transition-colors mb-1">
                    {vehicle.name}
                  </h3>
                  {vehicle.subtitle && (
                    <p className="font-manrope text-[13px] text-[#2282C6] font-medium leading-snug">
                      {vehicle.subtitle}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EstimateBannerSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
