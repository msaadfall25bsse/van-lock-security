import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'PEUGEOT - VanLock Security',
  description: 'PEUGEOT vans are known for their smart design, fuel efficiency, and dependable performance. Built to support a variety of business needs, they offer spacious cargo areas, advanced safety systems, and a comfortable driving experience. Please select your vehicle below. Security solutions for Peugeot',
};

const peugeotVehicles = [
  {
    name: 'Bipper 2008>',
    slug: '/peugeot/bipper-2008/',
    image: '/Peugeot-Bipper-2008-ab05f72f.png',
  },
  {
    name: 'Boxer 2006>',
    slug: '/peugeot/boxer-2006/',
    image: '/peugeot_boxer_003-72793c3c.jpeg',
  },
  {
    name: 'Expert 2007-2015',
    slug: '/peugeot/expert-2007-2015/',
    image: '/Peugeot-Expert-2007-2015-8e489be4.jpeg',
  },
  {
    name: 'Expert 2016>',
    slug: '/peugeot/expert-2016/',
    image: '/Peugeot-Bipper-2008-ab05f72f.png',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
  {
    name: 'Partner 2008-2018',
    slug: '/peugeot/partner-2008-2018/',
    image: '/Peugeot-Partner-2008-2018-e5e9a2fc.png',
  },
  {
    name: 'Partner 2018>',
    slug: '/peugeot/partner-2018/',
    image: '/Peugeot-Partner-2019-acbdd0d8.jpeg',
  },
];

export default function PeugeotPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="relative w-[180px] h-[95px] sm:w-[210px] sm:h-[105px] mb-6">
            <Image
              src="/peugeot-hero-logo.png"
              alt="Peugeot Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            PEUGEOT vans are known for their smart design, fuel efficiency, and dependable performance. Built to support a variety of business needs, they offer spacious cargo areas, advanced safety systems, and a comfortable driving experience.
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
            <h2 className="font-onest text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-[#050B20] tracking-tight">
              Security Solutions For Peugeot
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {peugeotVehicles.map((vehicle, idx) => (
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
                  <h3 className="font-onest font-semibold text-[17px] text-[#111111] group-hover:text-[#2282C6] transition-colors mb-1">
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
