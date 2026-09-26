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
    'Maximum Deterrence, Bold Protection. Statement locks are mounted across your van doors, bracing them to provide security and a clear visual deterrent.',
};

const keyFeatures = [
  'Bold Visible Design – Makes your van a hard target.',
  'Heavy-Duty Construction – Stainless steel or alloy housing resists brute force.',
  'Padlock-Style System – Comes with high-security padlock or disc lock.',
  'Tamper Evident – Any tampering is obvious — a strong deterrent.',
  'Easy Visual Verification – Check lock engagement at a glance.',
];

const comparisonHeaders = [
  'Features',
  'Dead Lock',
  'Hook Lock',
  'Slam Lock',
  'Slam Handle',
  'Statement Lock',
  'Ford Replacement',
  'Shield Plate',
];

const comparisonRows = [
  {
    feature: 'Operated independently of your van’s locking system',
    values: ['✖', '✖', '–', '–', '✖', '✖', '✖'],
  },
  {
    feature: 'Mechanical, key-operated lock, offering reliable, hands-on security',
    values: ['✖', '✖', '✖', '✖', '–', '✖', '–'],
  },
  {
    feature: 'Automatically secures the door every time it closes',
    values: ['–', '–', '✖', '✖', '–', '–', '–'],
  },
  {
    feature: 'Designed for fast, low-impact installation using van-specific kits',
    values: ['✖', '✖', '✖', '✖', '✖', '✖', '✖'],
  },
  {
    feature: 'Maintains your van’s original appearance',
    values: ['✖', '✖', '✖', '✖', '–', '✖', '–'],
  },
  {
    feature: 'Ideal for tradespeople, couriers, and fleet operators',
    values: ['✖', '✖', '✖', '✖', '✖', '✖', '✖'],
  },
  {
    feature: 'Custom keying options available — perfect for fleets or multiple vans',
    values: ['✖', '✖', '✖', '–', '–', '–', '–'],
  },
  {
    feature: 'Provides a deterrent, as well as additional physical security',
    values: ['✖', '✖', '–', '–', '✖', '–', '✖'],
  },
  {
    feature: 'Gives you passive defence without needing any driver interaction',
    values: ['–', '–', '–', '–', '–', '–', '✖'],
  },
];

const faqs = [
  {
    q: 'Will the statement lock affect my van’s look?',
    a: 'They are designed to be professional-looking and authoritative — great for branding security.',
  },
  {
    q: 'Is it weatherproof?',
    a: 'Yes, it’s made with rust-resistant materials for long-term durability.',
  },
  {
    q: 'Can I still open my doors normally?',
    a: 'Yes, with the proper key or code — it doesn’t interfere with regular function.',
  },
];

export default function VanStatementLockPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden flex flex-col">
      {/* Header */}
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

      {/* Section 1: Overview */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-[560px]">
              <h2 className="font-onest text-[35px] font-bold text-[#000000] leading-[42px] tracking-[-0.02em] mb-6">
                Maximum Deterrence,<br />Bold Protection
              </h2>
              <div className="space-y-4 font-manrope text-[15px] sm:text-[15.5px] text-[#4a5568] leading-[26px]">
                <p>
                  Statement locks are mounted across your van doors, bracing them to provide security and a clear visual deterrent.
                </p>
                <p>
                  They can be mounted on both side and rear doors, and are permanently attached, so there’s no risk of the lock being lost or misplaced. Our statement locks feature anti-drill and anti-cut protection to keep your van secure.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[460px] rounded-[20px] overflow-hidden">
              <Image
                src="/staement-lock-Van-Deadlock-Solutions-1.webp"
                alt="Maximum Deterrence, Bold Protection - Van Statement Lock"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features & Benefits */}
      <section className="bg-[#E9F7FE] py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[480px] lg:h-[530px] mx-auto lg:mx-0 rounded-[24px] overflow-hidden order-2 lg:order-1 shadow-[0px_4px_25px_rgba(0,0,0,0.06)]">
              <Image
                src="/image_42fe57b1-11ef-4b13-8cab-19e5d0859dd9_1024x1024@2x.webp"
                alt="Key Features & Benefits - Van Statement Lock"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 max-w-[580px]">
              <h2 className="font-onest text-[32px] sm:text-[35px] font-bold text-[#000000] leading-[1.2] mb-5 tracking-tight">
                Key Features &amp; Benefits
              </h2>
              <p className="font-manrope text-[15px] sm:text-[15.5px] text-[#4a5568] leading-[26px] mb-6">
                Make it clear that your van is professionally protected. Statement Locks are visible, external locks built to deter criminals before they even try.
              </p>

              {/* Bullet list with custom blue dots matching real site */}
              <ul className="space-y-4">
                {keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#2282C6] mt-2.5"></span>
                    <span className="font-manrope text-[15px] sm:text-[15.5px] text-[#2d3748] leading-[25px]">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action Strip */}
      <section
        className="relative overflow-hidden py-[40px] md:py-[70px] px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('/main-banner-images.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(34, 130, 198, 0.92) 0%, rgba(0, 0, 0, 0.87) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-auto text-left">
            <h2 className="font-onest text-white text-[26px] md:text-[40px] font-bold leading-[35px] md:leading-[50px] mb-2 tracking-tight">
              Scare Off Thieves Before They Try
            </h2>
            <p className="font-manrope text-white text-[16px] md:text-[18px] leading-[26px] md:leading-[32px] md:mr-[24%]">
              Don’t wait for a break-in attempt. Protect your cargo with our heavy-duty Statement Locks today.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="tel:07446898025"
              className="inline-flex items-center gap-[9px] bg-[#2282C6] hover:bg-[#1a6ea9] text-white font-onest text-[18px] font-semibold px-[30px] py-[15px] rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+44 07446898025</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <TestimonialsSection />

      {/* Section 5: Comparison Table */}
      <section className="bg-white py-[60px] sm:py-[80px] lg:py-[100px] border-b border-[#f0f0f0]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto shadow-[0px_4px_25px_rgba(0,0,0,0.06)] rounded-[8px] border border-[#e5e5e5]">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#2282C6] text-white">
                  {comparisonHeaders.map((head, i) => (
                    <th
                      key={i}
                      className={`py-4 px-4 font-jakarta text-[14px] sm:text-[15px] font-bold ${
                        i === 0 ? 'text-left pl-6 w-[34%]' : 'text-center border-l border-white/20'
                      }`}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e5e5] font-manrope text-[14px]">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FBFC]'}
                  >
                    <td className="py-4 px-4 pl-6 text-[#333333] font-medium leading-relaxed">
                      {row.feature}
                    </td>
                    {row.values.map((val, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`py-4 px-4 text-center font-bold border-l border-[#e5e5e5] ${
                          val === '✖'
                            ? 'text-[#2282C6] text-[16px]'
                            : 'text-[#888888] text-[18px]'
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: Frequently Asked Questions (2 Column Layout) */}
      <section className="bg-white py-[60px] sm:py-[80px] lg:py-[100px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading and short summary */}
            <div>
              <h2 className="font-onest text-[28px] sm:text-[34px] lg:text-[35px] font-semibold text-[#050B20] leading-[1.25] mb-5">
                Frequently Asked Question
              </h2>
              <p className="font-manrope text-[15px] sm:text-[16px] text-[#555555] leading-[26px]">
                If your van has been attacked or you want to prevent one, Statement Locks act as an unmissable deterrent and impenetrable barrier.
              </p>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div>
              <ServiceFaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
