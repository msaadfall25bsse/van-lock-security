import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../Header';
import TestimonialsSection from '../../TestimonialsSection';
import ServiceFaqAccordion from '../ServiceFaqAccordion';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Van Statement Lock - VanLock Security',
  description:
    'Maximum Deterrence, Bold Protection. Statement locks are surface mounted across van doors, providing visual deterrence and physical bracing.',
};

const features = [
  'Bold Visible Design – Makes your van a hard target to opportunist thieves.',
  'Heavy-Duty Construction – Stainless steel or alloy housing resists brute force attacks.',
  'Padlock-Style Bracing System – Comes with high-security deadlock cylinder.',
  'Tamper Evident – Any tampering is immediately obvious, serving as a powerful visual warning.',
  'Easy Visual Verification – Check lock engagement instantly at a single glance.',
];

const faqs = [
  {
    q: 'Will the statement lock affect my van’s look?',
    a: 'They are designed to look professional, robust, and authoritative — enhancing the professional image of high-value fleet vehicles.',
  },
  {
    q: 'Is it weatherproof?',
    a: 'Yes, it is precision manufactured with rust-resistant and weatherproof materials for long-term UK climate durability.',
  },
  {
    q: 'Can I still open my doors normally?',
    a: 'Yes, with the high-security key, it unlocks smoothly without interfering with regular day-to-day door operation.',
  },
];

export default function VanStatementLockPage() {
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
            Van Statement Lock
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
                src="/statement-lock-hero.webp"
                alt="Van Statement Lock"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Text */}
            <div>
              <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
                MAXIMUM VISUAL DETERRENCE
              </p>
              <h2 className="font-jakarta text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20] leading-tight mb-6">
                Maximum Deterrence, Bold Protection
              </h2>
              <p className="font-manrope text-[15px] sm:text-[16px] text-[#555555] leading-[28px] mb-8">
                Statement locks are mounted across your van doors, bracing them to provide security and a clear visual deterrent. They can be mounted on both side and rear doors, and are permanently attached, so there’s no risk of the lock being lost or misplaced. Our statement locks feature anti-drill and anti-cut protection to keep your van secure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2282C6] hover:bg-[#1a6ea8] text-white font-manrope font-semibold text-[15px] px-8 py-[14px] rounded-[5px] transition-colors shadow-sm"
              >
                Get a Statement Lock Quote
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
              ENGINEERED FOR STRENGTH
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
            Scare Off Thieves Before They Try
          </h2>
          <p className="font-manrope text-[16px] text-white/90 mb-6">
            Make your van an impossible target with high-visibility, heavy-duty statement locks.
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
