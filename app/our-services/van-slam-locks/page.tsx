import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../Header';
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

      {/* Section 1: A Guide to Van Slam Locks */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-[560px]">
              <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] tracking-[-0.02em] mb-6 capitalize">
                A Guide to Van Slam Locks
              </h2>
              <div className="space-y-4 font-manrope text-[16px] sm:text-[18px] text-[#4a5568] leading-[30px] sm:leading-[32px]">
                <p>
                  Van slam locks are among the best ways of securing your vehicle, particularly when it is for business purposes. When your van is most important to your livelihood, it is necessary to keep it safe from theft.
                </p>
                <p>
                  The slam lock effectively protects the van. It also aids in curbing opportunist thieves who get to enter your car. Its design is minimalist but very strong. The slam lock also makes your van more secure.
                </p>
                <p>
                  As a tradesman or fleet owner, having van slam locks ensures the safety of your tools and products.
                </p>
                <p>
                  Here, the guide will show you the reasons why a van slam lock is an excellent option for your vehicle, how it would be installed, and what would be the best option to suit the security requirements of the van. VanLock Security Services provides top-notch slam locks to ensure optimal protection for your van.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[460px] rounded-[20px] overflow-hidden">
              <Image
                src="/s-l1200.jpg"
                alt="A Guide to Van Slam Locks"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Are Van Slam Locks Suitable for All Types of Vans? */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative w-full max-w-[560px] h-[340px] sm:h-[440px] lg:h-[460px] mx-auto lg:mx-0 rounded-[20px] overflow-hidden order-2 lg:order-1 shadow-[0px_4px_25px_rgba(0,0,0,0.06)]">
              <Image
                src="/row-of-white-vans-istock.jpg"
                alt="Are Van Slam Locks Suitable for All Types of Vans?"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 max-w-[580px]">
              <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] tracking-tight mb-6 capitalize">
                Are Van Slam Locks Suitable for All Types of Vans?
              </h2>
              <div className="space-y-4 font-manrope text-[16px] sm:text-[18px] text-[#4a5568] leading-[30px] sm:leading-[32px]">
                <p>
                  Van slam locks could fit most kinds of vans, both small-sized and large ones. Nevertheless, you should ensure that you order the correct type of lock based on the type and model of your van.
                </p>
                <p>
                  Some manufacturers offer custom-matched slam lock kits that are suitable for specific vehicles. These kits make the process of installation smooth and enable the locking mechanism to take effect.
                </p>
                <p>
                  No matter what type of van you want to affix a slam lock to, whether a small personal vehicle or a venerable commercial model, you will find a locking solution that will suit your needs. Such solutions will help you have the best protection possible. They can guarantee your van’s safety and safety of your van and of the precious products it transports.
                </p>
                <p>
                  Want to buy the best van slam locks in terms of security? Our quality lock will be a quality lock that will be reliable against picking, drilling and all other forced entries to ensure high security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Best Van Slam Locks for Security (6 Feature Cards) */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] mb-4">
              Best Van Slam Locks for Security
            </h2>
            <p className="font-manrope text-[15px] sm:text-[16px] text-[#4a5568] leading-[26px]">
              VanLock Security Services is a locked security company. And sells wide range of products and services to insure personal and business vehicles.
              <br className="hidden sm:inline" />
              The van slam locks we provide are one of the finest alternatives to van theft, and they include: VanLock boasts of being the best company to buy high-tech, reliable, and long-lasting protection. Our services and products are focused on satisfying the requirements of both small-scale owners of one van and extensive fleets of vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'CCTV Installations',
                desc: 'Car cameras to observe the surrounding your van so that it does not get stolen or even vandalised.',
              },
              {
                title: '24/7 Control',
                desc: 'Your van and assets are monitored 24/7, and in case anything suspicious happens, you can be immediately notified.',
              },
              {
                title: 'Custom Locking Systems',
                desc: 'Locking devices tailored to the specifications of your van, along with personal notification features.',
              },
              {
                title: 'Fleet tracking solutions',
                desc: 'GPS tracking guarantees the safety and whereabouts of your vans.',
              },
              {
                title: 'Alarm and theft prevention',
                desc: 'These are the kinds of systems which notify the owner in case there is a case of intrusion or any type of mischief around the van.',
              },
              {
                title: 'Smart Access Control',
                desc: 'State-of-the-art access control system which allows easy and affordable access to the van and uses a mobile app to open it.',
                href: '/our-services/air-vent-installation/',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] sm:text-[20px] text-[#000000] mb-3">
                  {card.href ? (
                    <Link href={card.href} className="hover:text-[#2282C6] transition-colors">
                      {card.title}
                    </Link>
                  ) : (
                    card.title
                  )}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What is a Van Slam Lock? */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="max-w-[560px]">
              <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] tracking-tight mb-6 capitalize">
                What is a Van Slam Lock?
              </h2>
              <div className="space-y-4 font-manrope text-[16px] sm:text-[18px] text-[#4a5568] leading-[30px] sm:leading-[32px]">
                <p>
                  Van slam lock is a high-security lock. It automatically locks the door when it closes; thus, the name Slam. In contrast to the usual locks, slam locks are independent of the supply system of your car.
                </p>
                <p>
                  They excel a bolt or hook which can only be opened by a key. This makes the van a very difficult target to thieves. Additional security is provided by use of slam locks.
                </p>
                <p>
                  They are almost jacking up the cost of opening without the right key. This makes hacking impossible and cuts down theft potential.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-[560px] h-[340px] sm:h-[440px] lg:h-[460px] mx-auto lg:mx-0 rounded-[20px] overflow-hidden shadow-[0px_4px_25px_rgba(0,0,0,0.06)]">
              <Image
                src="/slamlocks-62.jpg"
                alt="What is a Van Slam Lock?"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Should You Install a Van Slam Lock? (5 Cards) */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px]">
              Why Should You Install a Van Slam Lock?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {[
              {
                title: 'Increased Security',
                desc: 'A van slam lock will provide much enhanced security compared to ordinary locks. It can be unlocked neither with lockpicks or by brute force. VanLock Security Services has a high-security slam lock which is tamper proof and has added protection.',
              },
              {
                title: 'Theft Deterrence',
                desc: 'Dwelling by criminals to carry out stealing activities on the vehicle equipped with these van slam locks is less likely because of the high security level. The higher the level of security detailing on your car the fewer chances of the car being targeted by thieves.',
              },
              {
                title: 'Restrict Forced Entry',
                desc: 'A van slam lock will offer a physical obstruction to an entrance. The slam will keep the door safe even when a thief attempts to break in using the outside lock. These measures will ensure that you avoid break-ins and will keep whatever you value intact.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] sm:text-[20px] text-[#000000] mb-3">
                  {card.title}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[900px] mx-auto">
            {[
              {
                title: 'Commercial Van Security',
                desc: 'Commercially, security on your van is essential, especially where you are using your van to deliver goods. This is because it gives you certainty that your van and the cargo are safe regardless of where you take the van.',
              },
              {
                title: 'Reasonable Prices',
                desc: 'Van slam locks carry very reasonable prices as they offer good prices against the kind of security they provide. Installation is done by professionals, and with the top-of-the-game products, you are sure your van would be well protected.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] sm:text-[20px] text-[#000000] mb-3">
                  {card.title}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How Van Slam Locks Work */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="relative w-full max-w-[560px] h-[340px] sm:h-[440px] lg:h-[460px] mx-auto lg:mx-0 rounded-[20px] overflow-hidden order-2 lg:order-1 shadow-[0px_4px_25px_rgba(0,0,0,0.06)]">
              <Image
                src="/img-2390.jpg"
                alt="How Van Slam Locks Work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 max-w-[580px]">
              <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] tracking-tight mb-6 capitalize">
                How Van Slam Locks Work
              </h2>
              <div className="space-y-4 font-manrope text-[16px] sm:text-[18px] text-[#4a5568] leading-[30px] sm:leading-[32px]">
                <p>
                  Van slam lock is not complex but rather effective. Unlike the normal locks in which it is possible to bypass the lock using the central locking mechanism, a slam lock automatically locks the door as soon as it is closed. It operates a bolt or hook that can only be opened by using a key. This enhances the security of the van and makes it more difficult to breach.
                </p>
                <p>
                  Additionally, you should equip vans with slam locks, as they offer an extra layer of security that ordinary locks may not provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Types of Van Slam Locks (4 Cards) */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] mb-4">
              Types of Van Slam Locks
            </h2>
            <p className="font-manrope text-[15px] sm:text-[16px] text-[#4a5568] leading-[26px]">
              Van slam locks come in different varieties; they depend on what you would need in terms of security:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Slam Single door lock',
                desc: 'It will suit smaller vans that have less access. It is simple to install and offers good security to a single point.',
              },
              {
                title: 'Double Van Slam Lock',
                desc: 'This unit caters to larger commercial vans with numerous access points. Such a lock will lock all doors that allow entrance and is usually complemented by other safety solutions, such as alarm systems or GPS tracking.',
              },
              {
                title: 'Heavy Duty Slam Lock',
                desc: 'This type of lock is applied on high-security vehicles or vans where there are good stuff. They are very difficult to open up and force.',
              },
              {
                title: 'Auto-Slam Van Lock',
                desc: 'A higher-tech one, which automatically locks the door immediately it is closed. Such a kind of slam lock will make sure that your van is never in danger, even when you forget to turn the normal lock on.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] text-[#000000] mb-3">
                  {card.title}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: How to Install a Van Slam Lock (4 Cards) */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] mb-4">
              How to Install a Van Slam Lock
            </h2>
            <p className="font-manrope text-[15px] sm:text-[16px] text-[#4a5568] leading-[26px]">
              Installing a van slam lock is essential for enhancing the safety of your vehicle. The process is the following way:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Slam Lock Kit',
                desc: 'Pick a Correct Slam Lock Kit Pick a slam lock kit that fits your type of van, which is model and make. Check whether the kit suits your security requirements.',
              },
              {
                title: 'Select a Professional Installer',
                desc: 'Although it is possible to install the lock yourself, it is better to get a professional to put it up to make sure that it is secured and installed properly. Using a professional installer will make sure that the fitment of the lock will be done without damaging your van.',
              },
              {
                title: 'Locking Mechanism',
                desc: 'The locking is a slam lock mechanism designed to fit on the van door, and the installer will mount this locking mechanism with necessary holes drilled on the door and ensure a good fit.',
              },
              {
                title: 'Try Out Lock',
                desc: 'It is always good to try out the lock after its performance to make sure that everything is functioning smoothly.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] text-[#000000] mb-3">
                  {card.title}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Advantages of Van Slam Locks Maintenance (3 Cards) */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] mb-4">
              Advantages of Van Slam Locks Maintenance
            </h2>
            <p className="font-manrope text-[15px] sm:text-[16px] text-[#4a5568] leading-[26px]">
              To ensure your van slam locks are in good working condition, you need to make sure that you care about them.
              <br className="hidden sm:inline" />
              These were the key advantages of having a van with a slam lock in operational condition:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Longer Life',
                desc: 'Regular maintenance provides longer life support to your slam locks and they continue to work efficiently even beyond several years.',
              },
              {
                title: 'More Security',
                desc: 'Locks that are well taken care of have fewer chances of getting faulty putting your car under security.',
              },
              {
                title: 'Cost Savings',
                desc: 'Regular servicing of your locks will help you save money in the long-run as you do not have to repair their locks and replace them completely.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] sm:text-[20px] text-[#000000] mb-3">
                  {card.title}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Tips for Maintaining Your Van Slam Locks (4 Cards) */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] mb-4">
              Tips for Maintaining Your Van Slam Locks
            </h2>
            <p className="font-manrope text-[15px] sm:text-[16px] text-[#4a5568] leading-[26px]">
              These are some of the simple maintenance practices that you can practice in order to keep your van slam locks in perfect shape:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Clean regularly',
                desc: 'Clean your slam locks with a soft cloth to remove the dust and debris that may otherwise jam your mechanism.',
              },
              {
                title: 'Lubricate',
                desc: 'Apply a silicone-based oil on the mechanism that holds the lock to keep the area oiled. Oil-based lubricants should be avoided because they are prone to attracting dirt.',
              },
              {
                title: 'Check Wear',
                desc: 'Look at the locks periodically and see any damages, rust or wear. Once you detect any problems, change the lock before it malfunctions.',
              },
              {
                title: 'Professional Inspections',
                desc: 'Make sure you have your locks checked by professionals so that they can be at their best and in case there is something wrong, then you can ensure that any other issue will not deteriorate.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#E9F7FE] rounded-[20px] p-[30px] text-center flex flex-col justify-center transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-plus-jakarta font-semibold text-[18px] text-[#000000] mb-3">
                  {card.title}
                </h3>
                <p className="font-manrope text-[15px] text-[#4a5568] leading-[25px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Conclusion */}
      <section className="bg-white py-[60px] sm:py-[75px] lg:py-[90px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="max-w-[560px]">
              <h2 className="font-onest text-[30px] sm:text-[35px] font-semibold text-[#000000] leading-[40px] sm:leading-[45px] tracking-tight mb-6 capitalize">
                Conclusion
              </h2>
              <div className="space-y-4 font-manrope text-[16px] sm:text-[18px] text-[#4a5568] leading-[30px] sm:leading-[32px]">
                <p>
                  Van slam locks form a very important attachment in any car, in particular business cars. They provide maximum security, do not require much to operate, and their theft protection is good. The locks are useful in securing your van and what it contains.
                </p>
                <p>
                  VanLock Security Services provides varieties of slam locks that suit the needs of a particular vehicle. Your van will be safe and secure using our custom slam locks. Our locks are the best option for securing your vehicle, whether you have one or a fleet of vans.
                </p>
                <p>
                  Make sure the unimaginable does not occur by buying the most efficient slam locks to protect your van today. Live without worries, as your car is completely insured.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-[560px] h-[340px] sm:h-[440px] lg:h-[460px] mx-auto lg:mx-0 rounded-[20px] overflow-hidden shadow-[0px_4px_25px_rgba(0,0,0,0.06)]">
              <Image
                src="/van-security-800.jpg"
                alt="Conclusion - Van Slam Locks Security"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>



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
                            ? 'text-[#222222] text-[16px]'
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
