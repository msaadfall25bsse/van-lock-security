import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Fiat - VanLock Security',
  description: 'Fiat vans, such as the Fiat Ducato, Talento, and Fiorino, are trusted by thousands of tradespeople for their practicality, load capacity, and cost-efficiency. Please select your vehicle below. Security solutions for Fiat',
};

const fiatVehicles = [
  {
    name: 'Doblo 2010>2021',
    slug: '/fiat/doblo-20102021/',
    image: '/fiat-doblo-2010.jpeg',
  },
  {
    name: 'Ducato 2006>',
    slug: '/fiat/ducato-2006/',
    image: '/fiat-ducato-2006.jpeg',
  },
  {
    name: 'Fiorino 2008',
    slug: '/fiat/fiorino-2008/',
    image: '/fiat-fiorino-2008.jpeg',
  },
  {
    name: 'Scudo 2007-2016>',
    slug: '/fiat/scudo-2007-2016/',
    image: '/fiat-scudo-2007-2015.jpeg',
  },
  {
    name: 'Talento 2014>',
    slug: '/fiat/talento-2014/',
    image: '/fiat-talento-2014.png',
  },
  {
    name: 'Scudo 2022>',
    slug: '/fiat/scudo-2022/',
    image: '/fiat-scudo-2022.jpeg',
  },
  {
    name: 'Doblo 2022>',
    slug: '/fiat/doblo-2022/',
    image: '/fiat-doblo-2022.jpeg',
  },
];

export default function FiatPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      {/* Header */}
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section with light blue background */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          {/* Centered Fiat Brand Logo */}
          <div className="relative w-[150px] h-[95px] sm:w-[170px] sm:h-[105px] mb-6">
            <Image
              src="/fiat-hero-logo.png"
              alt="Fiat Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Centered Description */}
          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            Fiat vans, such as the Fiat Ducato, Talento, and Fiorino, are trusted by thousands of tradespeople for their practicality, load capacity, and cost-efficiency.
          </p>
        </div>
      </section>

      {/* Vehicles Grid Section with White Background */}
      <section className="bg-white pt-14 pb-20 sm:pt-16 sm:pb-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blue Subheading & Main Title */}
          <div className="text-center mb-12 sm:mb-14">
            <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
              PLEASE SELECT YOUR VEHICLE BELOW.
            </p>
            <h2 className="font-onest text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-[#050B20] tracking-tight">
              Security Solutions For Fiat
            </h2>
          </div>

          {/* 4-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fiatVehicles.map((vehicle, idx) => (
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Banner Section */}
      <EstimateBannerSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
