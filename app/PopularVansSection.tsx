import React from "react";
import Image from "next/image";
import Link from "next/link";

interface VanItem {
  id: string;
  brand: string;
  model: string;
  image: string;
  href: string;
}

const vans: VanItem[] = [
  {
    id: "vauxhall-vivaro-2019",
    brand: "Vauxhall",
    model: "Vivaro 2019",
    image: "/vauxhall-vivaro.png",
    href: "/choose-your-van/vauxhall-vivaro-2019",
  },
  {
    id: "vw-transporter-2020",
    brand: "Volkswagen",
    model: "Transporter T6.1 2020",
    image: "/vw-transporter.jpeg",
    href: "/choose-your-van/volkswagen-transporter",
  },
  {
    id: "ford-transit-2014",
    brand: "Ford",
    model: "Transit 2014",
    image: "/ford-transit.png",
    href: "/choose-your-van/ford-transit-2014",
  },
  {
    id: "ford-custom-2012",
    brand: "Ford",
    model: "Custom 2012-2023",
    image: "/ford-custom-2012.png",
    href: "/choose-your-van/ford-custom-2012",
  },
  {
    id: "renault-trafic-2014",
    brand: "Renault",
    model: "Trafic 2014",
    image: "/renault-trafic.jpeg",
    href: "/choose-your-van/renault-trafic",
  },
  {
    id: "ford-custom-2023",
    brand: "Ford",
    model: "Custom 2023>",
    image: "/ford-custom-2023.png",
    href: "/choose-your-van/ford-custom-2023",
  },
  {
    id: "fiat-talento-2014",
    brand: "Fiat",
    model: "Talento 2014>",
    image: "/fiat-talento.png",
    href: "/choose-your-van/fiat-talento",
  },
  {
    id: "citroen-relay-2006",
    brand: "Citroen",
    model: "Relay 2006>",
    image: "/citroen-relay.jpeg",
    href: "/choose-your-van/citroen-relay",
  },
];

export default function PopularVansSection() {
  return (
    <section className="w-full bg-[#E9F7FE] py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Header row with Title on Left, View All Button on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="font-onest text-[14px] font-semibold text-[#2282c6] uppercase tracking-[2px] mb-2.5">
              CHOOSE YOUR VAN
            </p>
            <h2 className="font-onest text-[#111111] text-[30px] sm:text-[36px] md:text-[40px] font-bold leading-[1.2] md:leading-[50px]">
              Security Solutions for Popular
              <br />
              Vans
            </h2>
          </div>

          <div>
            <Link
              href="/choose-your-van"
              className="font-onest inline-flex items-center gap-2 bg-[#2282c6] hover:bg-[#1a6ea9] text-white text-[16px] font-semibold px-[30px] py-[15px] rounded-[5px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>View All Vans</span>
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 8 Vans Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {vans.map((van) => (
            <Link
              key={van.id}
              href={van.href}
              className="group bg-white rounded-[10px] p-5 shadow-[0px_0px_71px_0px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="relative w-full h-[180px] mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={van.image}
                  alt={`${van.brand} ${van.model}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="font-jakarta text-[20px] font-bold text-[#111111] mb-1 group-hover:text-[#2282c6] transition-colors leading-tight">
                {van.brand}
              </h3>
              <p className="font-jakarta text-[12px] font-medium text-[#666666]">
                {van.model}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
