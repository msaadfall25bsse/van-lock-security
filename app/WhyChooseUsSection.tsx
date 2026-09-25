import React from "react";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: "f-1",
    title: "Specialists in Van Lock Security",
    desc: "Our expertise lies solely in van security lock systems, leaving no room for distractions.",
    icon: "/feature-1.png",
  },
  {
    id: "f-2",
    title: "Custom Solutions for All Van Types",
    desc: "Whether it’s one van or a fleet, we offer customised security van lock solutions to meet your exact needs Whether you drive around Ilford, Dagenham, or across London.",
    icon: "/feature-2.png",
  },
  {
    id: "f-3",
    title: "Cutting-Edge Technology",
    desc: "Our advanced Vanlock security systems offer smart tracking, real-time alerts, and remote monitoring.",
    icon: "/feature-3.png",
  },
  {
    id: "f-4",
    title: "Professional-Grade Components",
    desc: "We use only high-quality, durable components designed specifically for van security locks.",
    icon: "/feature-4.png",
  },
  {
    id: "f-5",
    title: "Designed for Mobile Businesses",
    desc: "Our deep knowledge of mobile operations makes us a go-to for Central London Vanlock security and beyond.",
    icon: "/feature-5.png",
  },
  {
    id: "f-6",
    title: "User-Friendly Systems",
    desc: "Intuitive and easy to use, our Vanlock security systems integrate seamlessly into your daily routine.",
    icon: "/feature-6.png",
  },
  {
    id: "f-7",
    title: "End-to-End Service",
    desc: "From expert installation to ongoing support, VanLock is trusted for reliable Vanlock security in Central London.",
    icon: "/feature-7.png",
  },
  {
    id: "f-8",
    title: "Your Trusted Partner in Security",
    desc: "VanLock works closely with customers to deliver reliable security Vanlock solutions that provide 24/7 peace of mind.",
    icon: "/feature-8.png",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#fbfbfb] py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <p className="font-onest text-[14px] font-semibold text-[#2282c6] uppercase tracking-[2px] mb-3">
            Why Choose Us?
          </p>
          <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] md:leading-[48px]">
            Secure, Track &amp; Protect
            <br />
            Bring It All Together
          </h2>
        </div>

        {/* 8 Feature Boxes: 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[12px] p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="font-onest text-[#111111] text-[18px] sm:text-[19px] font-bold mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="font-manrope text-[#666666] text-[15px] sm:text-[16px] leading-[1.6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
