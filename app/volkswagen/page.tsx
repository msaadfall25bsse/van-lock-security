import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhiteHeader from '../WhiteHeader';
import EstimateBannerSection from '../EstimateBannerSection';
import TestimonialsSection from '../TestimonialsSection';
import Footer from '../Footer';

export const metadata: Metadata = {
  title: 'Volkswagen - VanLock Security',
  description: 'Volkswagen vans are a perfect blend of style, performance, and practicality. Renowned for their build quality and reliability, they offer smooth driving experiences with advanced technology and safety features. Please select your vehicle below. Security solutions for Volkswagen',
};

const volkswagenVehicles = [
  {
    name: 'Caddy 2004-2016',
    slug: '/volkswagen/caddy-2004-2016/',
    image: '/Volkswagen_Caddy_2004-2016-1f72a5ff.png',
  },
  {
    name: 'Caddy 2016-2020',
    slug: '/volkswagen/caddy-2016-2020/',
    image: '/Volkswagen_Caddy_2016-459c7b0f.png',
  },
  {
    name: 'Caddy 5 2021>',
    slug: '/volkswagen/caddy-5-2021/',
    image: '/VW_Caddy_5-2fbdf9f2.jpeg',
    subtitle: 'Also Includes the Caddy Maxi',
  },
  {
    name: 'Crafter 2006-2016',
    slug: '/volkswagen/crafter-2006-2016/',
    image: '/Volkswagen-Crafter-2006-2016-5c3bf106.png',
  },
  {
    name: 'Crafter 2017>',
    slug: '/volkswagen/crafter-2017/',
    image: '/Volkswagen_Crafter_2017-11cd4f49.jpeg',
  },
  {
    name: 'Transporter T5 2003-2014',
    slug: '/volkswagen/transporter-t5-2003-2014/',
    image: '/Volkswagen-Transporter-T5-2003-2014-c17c2853.png',
  },
  {
    name: 'Transporter T6 2015-2020',
    slug: '/volkswagen/transporter-t6-2015-2020/',
    image: '/Volkdwagen-Transporter-T6-2015-2020-87dcbf26.png',
  },
  {
    name: 'Transporter T6.1 2020>',
    slug: '/volkswagen/transporter-t6-1-2020/',
    image: '/Volkswagen-Transporter-T6.1-2020-ba857b93-1.jpeg',
    subtitle: 'Also Includes Electric & Hybrid Variants',
  },
  {
    name: 'ID. Buzz Cargo',
    slug: '/volkswagen/id-buzz-cargo/',
    image: '/VW-ID.-Buzz-58997e49.jpeg',
    subtitle: 'Electric Variant Only',
  },
];

export default function VolkswagenPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden">
      <WhiteHeader activePath="/choose-your-van" />

      {/* Top Banner / Hero Section */}
      <section className="bg-[#EBF6FC] pt-14 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <div className="relative w-[180px] h-[95px] sm:w-[210px] sm:h-[105px] mb-6">
            <Image
              src="/volkswagen-hero-logo.png"
              alt="Volkswagen Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="font-manrope text-[15px] sm:text-[17px] text-[#2b2b2b] leading-[26px] sm:leading-[28px] max-w-[760px]">
            Volkswagen vans are a perfect blend of style, performance, and practicality. Renowned for their build quality and reliability, they offer smooth driving experiences with advanced technology and safety features.
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
              Security Solutions For Volkswagen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volkswagenVehicles.map((vehicle, idx) => (
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
