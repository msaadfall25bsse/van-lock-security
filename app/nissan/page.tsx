import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Nissan - VanLock Security',
  description: 'Nissan vans offer a perfect balance of performance, reliability, and versatility for both commercial and personal use. Please select your vehicle below. Security solutions for Nissan',
};

const nissanVehicles = [
  {
    name: 'NV200 2010>',
    slug: '/nissan/nv200-2010/',
    image: '/Peugeot-Bipper-2008-ab05f72f.png',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
  {
    name: 'Primastar 2014> (NV300)',
    slug: '/nissan/primastar-2014-nv300/',
    image: '/Nissan-NV300-2014-fc17b892.jpeg',
  },
  {
    name: 'Interstar 2011> (NV400)',
    slug: '/nissan/interstar-2011-nv400/',
    image: '/Nissan-NV400-2011-e30661ff.png',
  },
  {
    name: 'Primastar 2001-2014',
    slug: '/nissan/primastar-2001-2014/',
    image: '/Nissan-Primastar-2001-d5d28972.jpeg',
  },
  {
    name: 'NV250 2009-2022',
    slug: '/nissan/nv250-2009-2022/',
    image: '/nissan-nv250-ed8aec7e.png',
  },
  {
    name: 'Interstar 2024>',
    slug: '/nissan/interstar-2024/',
    image: '/Peugeot-Partner-2019-acbdd0d8.jpeg',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
];

export default function NissanPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="relative w-[180px] h-[95px] sm:w-[210px] sm:h-[105px] mb-6">
            <Image
              src="/nissan-hero-logo.png"
              alt="Nissan Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            Nissan vans offer a perfect balance of performance, reliability, and versatility for both commercial and personal use.
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
              Security Solutions For Nissan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nissanVehicles.map((vehicle, idx) => (
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
