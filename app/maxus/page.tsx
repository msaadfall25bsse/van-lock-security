import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'MAXUS - VanLock Security',
  description: 'MAXUS vans are known for their modern design, advanced technology, and efficient performance. They offer a range of electric and diesel options to suit different business needs. Please select your vehicle below. Security solutions for Maxus',
};

const maxusVehicles = [
  {
    name: 'V80 2017>',
    slug: '/maxus/v80-2017/',
    image: '/Fiat-Doblo-2010-5b4ffa43.jpeg',
  },
  {
    name: 'eDeliver 3',
    slug: '/maxus/edeliver-3/',
    image: '/eDeliver_3_800x600_on_white-ced71c48.jpeg',
    subtitle: 'Electric Variant Only',
  },
  {
    name: 'eDeliver 9',
    slug: '/maxus/edeliver-9/',
    image: '/Deliver_9_800x600-on-white-f7e0cf15.jpeg',
  },
];

export default function MaxusPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="relative w-[180px] h-[75px] sm:w-[210px] sm:h-[85px] mb-6">
            <Image
              src="/maxus-hero-logo.png"
              alt="MAXUS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            MAXUS vans are known for their modern design, advanced technology, and efficient performance. They offer a range of electric and diesel options to suit different business needs.
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
              Security Solutions For Maxus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maxusVehicles.map((vehicle, idx) => (
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
