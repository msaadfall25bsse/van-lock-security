import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../Header';
import TestimonialsSection from '../../TestimonialsSection';
import ServiceFaqAccordion from '../ServiceFaqAccordion';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Repair Plate or External Shield - VanLock Security',
  description:
    'Reinforce Damaged or Vulnerable Van Doors. Repair plates and external shields cover break-in damage and protect critical lock mechanisms from future attacks.',
};

const features = [
  'Covers Vulnerable Areas – Especially door handles, locks, and surrounding metal skins.',
  'Reinforces Weak Points – Adds an impenetrable second layer of high-grade steel protection.',
  'Cleans Up Break-In Damage – Neatly conceals holes and damage, restoring your van’s clean appearance.',
  'Cost-Effective Solution – Avoids expensive full door shell replacements after an attack.',
  'Custom Fit for Vans – Precision engineered for various commercial vehicle makes and models.',
];

const faqs = [
  {
    q: 'Is the shield visible?',
    a: 'It is discreet yet noticeable enough to act as an effective visual deterrent against would-be thieves.',
  },
  {
    q: 'Can it be color-matched to my van?',
    a: 'Yes, select shields come in powder-coated black, stainless steel, or can be painted to match your van body color.',
  },
  {
    q: 'Will this fix existing damage?',
    a: 'Yes, repair plates are specifically designed to cover puncture or pry damage around handles and locks while restoring full security.',
  },
];

export default function RepairPlateOrExternalShieldPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden flex flex-col">
      <Header activePath="/our-services" />

      {/* Hero Banner */}
      <section className="relative overflow-hidden w-full bg-[#111111] pt-[150px] pb-[70px] sm:pt-[180px] sm:pb-[100px] lg:pt-[200px] lg:pb-[130px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('/blog-deadlock.webp')` }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #2282C6 100%)',
            opacity: 0.83,
          }}
        />
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-onest text-white text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-[1.2] lg:leading-[55px] tracking-tight">
            Repair Plate or External Shield
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-[60px] sm:py-[80px] lg:py-[100px] border-b border-[#f0f0f0]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-[10px] overflow-hidden shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] border border-[#f0f0f0]">
              <Image
                src="/repair-plate-hero.jpg"
                alt="Repair Plate or External Shield"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Text */}
            <div>
              <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
                BODYWORK REINFORCEMENT
              </p>
              <h2 className="font-jakarta text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20] leading-tight mb-6">
                Reinforce Damaged or Vulnerable Van Doors
              </h2>
              <p className="font-manrope text-[15px] sm:text-[16px] text-[#555555] leading-[28px] mb-8">
                If your van has been attacked or you want to prevent one, Repair Plates and External Shields are a simple but powerful defense. Thieves often target the thin sheet metal around handles and internal locking rods. Our stainless steel repair plates shield these critical points from being punctured or levered, keeping your cargo safe.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2282C6] hover:bg-[#1a6ea8] text-white font-manrope font-semibold text-[15px] px-8 py-[14px] rounded-[5px] transition-colors shadow-sm"
              >
                Get a Shield Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="bg-[#FCFCFC] py-[60px] sm:py-[80px] lg:py-[100px] border-b border-[#f0f0f0]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
              PROVEN RESISTANCE
            </p>
            <h2 className="font-jakarta text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20]">
              Key Features &amp; Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-[10px] shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] border border-[#f0f0f0] flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#EBF6FC] text-[#2282C6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-manrope text-[15px] text-[#333333] leading-[24px]">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-[#2282C6] to-[#0A4A7A] py-12 text-white text-center">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="font-jakarta text-[26px] sm:text-[32px] font-bold mb-4">
            Repair &amp; Protect Your Van — All in One Step
          </h2>
          <p className="font-manrope text-[16px] text-white/90 mb-6">
            Conceal damage and stop repeat break-in attempts with our heavy-duty repair plates.
          </p>
          <a
            href="tel:07367674000"
            className="inline-flex items-center justify-center bg-white text-[#2282C6] hover:bg-gray-100 font-manrope font-bold text-[16px] px-8 py-3.5 rounded-[5px] transition-colors"
          >
            Call Us: 07367674000
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="bg-white py-[60px] sm:py-[80px] lg:py-[100px]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
              FREQUENTLY ASKED
            </p>
            <h2 className="font-jakarta text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20]">
              Frequently Asked Questions
            </h2>
          </div>
          <ServiceFaqAccordion faqs={faqs} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
