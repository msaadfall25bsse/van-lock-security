import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  href: string;
  image: string;
  alt: string;
}

const services: ServiceItem[] = [
  {
    id: "van-dead-locks",
    title: "Van dead locks",
    href: "/our-services/van-dead-locks/",
    image: "/service-1.jpg",
    alt: "vanlock security",
  },
  {
    id: "van-hook-locks",
    title: "Van hook locks",
    href: "/our-services/van-hook-locks/",
    image: "/service-2.jpg",
    alt: "van hookn lock security",
  },
  {
    id: "van-slam-locks",
    title: "Van slam locks",
    href: "/our-services/van-slam-locks/",
    image: "/service-3.jpg",
    alt: "van lock security",
  },
  {
    id: "van-statement-lock",
    title: "Van statement lock",
    href: "/our-services/van-statement-lock/",
    image: "/service-4.jpg",
    alt: "van statement lock security",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="our-services-section"
      className="w-full bg-[#fbfbfb] py-[60px] md:py-[90px] px-4 sm:px-6"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header content: subtitle, main heading, and intro paragraph */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          {/* Subtitle: OUR SERVICES */}
          <p className="font-onest text-[14px] font-semibold text-[#2282c6] uppercase tracking-[2px] mb-3">
            Our services
          </p>

          {/* Main Heading: Our Van Lock Services */}
          <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] md:leading-[45px] mb-4">
            Our Van Lock Services
          </h2>

          {/* Intro Paragraph */}
          <p className="font-manrope text-[#555555] text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[760px] mx-auto">
            Van Lock London offers smart, reliable security systems tailored specifically for commercial and personal vans.
          </p>
        </div>

        {/* 4 Service Cards Grid (elementor-inner-section elementor-col-25) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative block w-full h-[340px] rounded-[10px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Background Image with smooth zoom on hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Elementor exact overlay: linear-gradient(0deg, #000000e3 -80%, transparent 100%) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Title pinned at the bottom-left */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="font-onest text-white text-[17px] sm:text-[18px] font-semibold capitalize tracking-wide transition-colors duration-200 group-hover:text-[#2282c6]">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <Link
            href="/our-services/"
            className="font-onest inline-flex items-center gap-2.5 bg-[#2282c6] hover:bg-[#1a6ea9] text-white text-[16px] font-semibold px-[30px] py-[15px] rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>View All Services</span>
            <svg
              className="w-4 h-4 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
