import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../Header';
import TestimonialsSection from '../../TestimonialsSection';
import ServiceFaqAccordion from '../ServiceFaqAccordion';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Van Hook Locks - VanLock Security',
  description:
    'Reinforced Security with Hook Lock Systems. Anti-crowbar hook mechanism offers maximum resistance to jemmying and door peel.',
};

const features = [
  'Anti-Crowbar Design – Hook mechanism offers maximum resistance to jemmying and levering.',
  'Independent Operation – Not connected to central locking; ideal for high-value cargo protection.',
  'Model-Specific Kits – Perfect fit and finish with no impact on van aesthetics.',
  'High-Security Keys – Anti-pick, anti-drill cylinders for extra peace of mind.',
  'Fleet Keying Options – Can be keyed alike for businesses with multiple vans.',
  'Visual Deterrence – Reinforces that your van is professionally protected.',
];

const faqs = [
  {
    q: 'What is a Van Hook Lock?',
    a: 'A Van Hook Lock is a high-security mechanical lock installed on the rear or side doors of commercial vans. It features a hook-shaped bolt that locks into a specially reinforced keep, providing much stronger resistance against forced entry compared to standard locks.',
  },
  {
    q: 'Are hook locks suitable for all types of vans?',
    a: 'Yes, hook locks can be fitted to most makes and models of commercial vans. At Vanlock Security, our installation experts will assess your specific van and recommend the most secure configuration for your side and rear doors.',
  },
  {
    q: 'How are Van Hook Locks operated?',
    a: 'They are manually operated using a high-security key. This means you have full control over when and how the van is secured, without relying on electronic systems that could fail or be hacked.',
  },
];

export default function VanHookLocksPage() {
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
            Van Hook Locks
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
                src="/Hooklock-10.jpg"
                alt="Van Hook Locks"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Text */}
            <div>
              <p className="font-manrope text-[#2282C6] font-bold text-[13px] sm:text-[14px] tracking-[0.14em] uppercase mb-2">
                ANTI-PEEL PROTECTION
              </p>
              <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20] leading-tight mb-6">
                Reinforced Security with Hook Lock Systems
              </h2>
              <p className="font-manrope text-[15px] sm:text-[16px] text-[#555555] leading-[28px] mb-8">
                The hook lock is a variant of the deadlock that uses a hook bolt to engage with an internal keep. The strong hook makes it difficult to force the door open and makes it effective on side and rear doors where there isn’t a part of the vehicle’s frame where a normal bolt can securely engage. It’s also a mechanical, key-controlled lock that works in addition to your van’s central locking system. Hook locks share the benefits of traditional deadlocks, like custom keying, easy installation with minimal cutting, and compact designs. Protecting against ‘peel and steal’ thefts by helping prevent door bending, they are a good option for those that use their vans to transport valuable tools and supplies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#2282C6] hover:bg-[#1a6ea8] text-white font-manrope font-semibold text-[15px] px-8 py-[14px] rounded-[5px] transition-colors shadow-sm"
              >
                Get a Hook Lock Quote
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
              SUPERIOR ENGINEERING
            </p>
            <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20]">
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
          <h2 className="font-onest text-[26px] sm:text-[32px] font-bold mb-4">
            Protect Your Van — Upgrade Now!
          </h2>
          <p className="font-manrope text-[16px] text-white/90 mb-6">
            Upgrade to heavy-duty hook locks and eliminate door peel vulnerability across your fleet.
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
            <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#050B20]">
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
