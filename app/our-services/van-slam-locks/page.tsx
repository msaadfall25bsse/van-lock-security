import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../Header';
import TestimonialsSection from '../../TestimonialsSection';
import ServiceFaqAccordion from '../ServiceFaqAccordion';
import Footer from '../../Footer';

export const metadata: Metadata = {
  title: 'Van Slam Locks - VanLock Security',
  description:
    'A Guide to Van Slam Locks. Automatic locking mechanism ensures immediate protection upon door closure — ideal for couriers and multi-drop delivery fleets.',
};

const keyFeatures = [
  'Automatic Engagement – Lock activates the moment the door closes.',
  'Zero Human Error – No forgetting to lock; always secured.',
  'Ideal for Couriers & Fleets – Especially beneficial in fast-paced environments.',
  'Anti-Theft Cylinders – Resists picking, drilling, and tampering.',
  'Custom Vehicle Fitment – Designed to integrate seamlessly into your van.',
  'Keeps You Moving – Fast operation, no lock fiddling required.',
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
    q: 'How does a van slam lock work, and what is it?',
    a: 'The van slam lock is a locking mechanism whereby when the door is closed, the door is automatically locked. It has a bolt or hook that is opened using a key only; this means it has good security against theft.',
  },
  {
    q: 'Why I should install a van slam lock in the car?',
    a: 'Having a van slam lock installed means that there is an extra level of security in your vehicle; thus, it takes longer to get in. It is very beneficial to commercial vans which carry valuables.',
  },
  {
    q: 'How does the security of a van slam lock compare to that of a regular van lock?',
    a: 'Compared with ordinary van locks, van slam locks are very secure. They are made tamper-proof, and as a result, they are much harder to get around than the traditional locks.',
  },
  {
    q: 'Is it necessary to install the van slam lock?',
    a: 'While it is possible to install a van slam lock on your own, we recommend seeking professional assistance to ensure its proper and functional installation.',
  },
  {
    q: 'Is every van slam lock alike?',
    a: 'No, there are varieties of van slam locks, i.e., single door, double door, heavy-duty, and auto-slam locks. They have different models of van suitable and security requirements that suit them.',
  },
];

export default function VanSlamLocksPage() {
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
            Van Slam Locks
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
                Automatic Locking for<br />High-Speed Workflows
              </h2>
              <div className="space-y-4 font-manrope text-[15px] sm:text-[15.5px] text-[#4a5568] leading-[26px]">
                <p>
                  Slam locks guarantee the door is locked every time it is closed, and can only be opened using a key, making them ideal for users like couriers where frequent access to the vehicle is required.
                </p>
                <p>
                  The locks are mechanical and engage automatically when the door is closed — despite the name, they don’t need slamming — they connect with the vehicle’s existing locking system, bypassing the handle. The locks also feature internal shielding to prevent ‘spring’ attacks.
                </p>
                <p>
                  Installation is straightforward with door-specific kits, and locks can be keyed to your requirements. Slam locks provide additional security that is as simple as closing your van door.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[460px] rounded-[20px] overflow-hidden">
              <Image
                src="/s-l1200.jpg"
                alt="Automatic Locking for High-Speed Workflows - Van Slam Locks"
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
                src="/58b0209e52bcc-c1-62-slamlocks-1.jpg"
                alt="Key Features & Benefits - Van Slam Locks"
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
                Slam Locks instantly secure your van door upon closing — no key or manual locking required. Perfect for delivery drivers or tradespeople who need both speed and security.
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
              Lock in a Second. Drive with Confidence
            </h2>
            <p className="font-manrope text-white text-[16px] md:text-[18px] leading-[26px] md:leading-[32px] md:mr-[24%]">
              Equip your vehicle or delivery fleet with reliable, automatic slam locks installed nationwide.
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
                If your van has been attacked or you want to prevent one, Slam Locks provide automatic, hands-free protection every time the door shuts.
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
