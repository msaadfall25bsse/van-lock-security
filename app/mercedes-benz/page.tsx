import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Mercedes-Benz - VanLock Security',
  description: 'Mercedes-Benz cars are a symbol of luxury, performance, and advanced engineering. Known for their elegant design and cutting edge technology, these vehicles offer a superior driving experience. Please select your vehicle below. Security solutions for Mercedes-Benz',
};

const mbVehicles = [
  {
    name: 'Citan 2012>',
    slug: '/mercedes-benz/citan-2012/',
    image: '/Mercedes-Citan-2012-b615ae9d.jpeg',
  },
  {
    name: 'Sprinter 2006-2018',
    slug: '/mercedes-benz/sprinter-2006-2018/',
    image: '/Mercedes-Sprinter-2006-2017-a9937da6.png',
  },
  {
    name: 'Sprinter 2018>',
    slug: '/mercedes-benz/sprinter-2018/',
    image: '/Mercedes_Sprinter_2018-8ae11038.jpeg',
  },
  {
    name: 'Vito 2004-2014>',
    slug: '/mercedes-benz/vito-2004-2014/',
    image: '/Mercedes-Vito-2004-2014-dfeb0b01.jpeg',
  },
  {
    name: 'Vito 2015>',
    slug: '/mercedes-benz/vito-2015/',
    image: '/mercedes-benz-vito-2015-onwards-6129fc1b.jpeg',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
  {
    name: 'Citan 2022>',
    slug: '/mercedes-benz/citan-2022/',
    image: '/Mercedes-Citan-2022-e78abff7.jpeg',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
];

export default function MercedesBenzPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="relative w-[180px] h-[95px] sm:w-[210px] sm:h-[105px] mb-6">
            <Image
              src="/mercedes-benz-hero-logo.png"
              alt="Mercedes-Benz Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            Mercedes-Benz cars are a symbol of luxury, performance, and advanced engineering. Known for their elegant design and cutting edge technology, these vehicles offer a superior driving experience.
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
              Security Solutions For Mercedes-Benz
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mbVehicles.map((vehicle, idx) => (
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
