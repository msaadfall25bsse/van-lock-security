import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Ford - VanLock Security',
  description: 'Ford vans are among the most popular commercial vehicles on the road, especiallymodels like the Transit, Transit Custom, and Transit Connect. Please select your vehicle below. Security solutions for Ford',
};

const fordVehicles = [
  {
    name: 'Connect 2002-2014',
    slug: '/ford/connect-2002-2014/',
    image: '/fiat-doblo-2010.jpeg',
  },
  {
    name: 'Connect 2014>2024',
    slug: '/ford/connect-20142024/',
    image: '/ford-connect-2014.png',
  },
  {
    name: 'Courier 2014-2024',
    slug: '/ford/courier-2014-2024/',
    image: '/ford-courier-2014.png',
  },
  {
    name: 'Custom 2012-2023',
    slug: '/ford/custom-2012-2023/',
    image: '/ford-custom-2012.png',
  },
  {
    name: 'Transit 2000-2014',
    slug: '/ford/transit-2000-2014/',
    image: '/ford-transit-2000-2014.png',
  },
  {
    name: 'Transit 2014>',
    slug: '/ford/transit-2014/',
    image: '/ford-transit-2014.png',
  },
  {
    name: 'Fiesta 2012-2017',
    slug: '/ford/fiesta-2012-2017/',
    image: '/ford-fiesta-2009-2017.png',
  },
  {
    name: 'Ranger T6 & T7 2012>',
    slug: '/ford/ranger-t6-t7-2012/',
    image: '/ford-ranger-banner.jpeg',
  },
  {
    name: 'Custom 2023>',
    slug: '/ford/custom-2023/',
    image: '/ford-custom-2023.png',
  },
  {
    name: 'Courier 2024>',
    slug: '/ford/courier-2024/',
    image: '/ford-courier-2024.jpeg',
  },
  {
    name: 'Connect 2024>',
    slug: '/ford/connect-2024/',
    image: '/ford-connect-2024.webp',
  },
];

export default function FordPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      {/* Header */}
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section with light blue background */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          {/* Centered Ford Brand Logo */}
          <div className="relative w-[180px] h-[80px] sm:w-[210px] sm:h-[95px] mb-6">
            <Image
              src="/ford-hero-logo.png"
              alt="Ford Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Centered Description */}
          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            Ford vans are among the most popular commercial vehicles on the road, especially models like the Transit, Transit Custom, and Transit Connect.
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
              Security Solutions For Ford
            </h2>
          </div>

          {/* 4-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fordVehicles.map((vehicle, idx) => (
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
