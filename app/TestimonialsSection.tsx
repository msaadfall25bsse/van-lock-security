import React from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Daniel Morris",
    city: "West Yorkshire",
    avatar: "/testi-1.jpg",
    content:
      "VanLock transformed the way we secure our vans. Their team was prompt, professional, and the system works flawlessly. Highly recommended.",
  },
  {
    id: "t-2",
    name: "Karen Doyle",
    city: "Surrey",
    avatar: "/testi-2.jpg",
    content:
      "Reliable service from start to finish. The GPS tracking and smart lock system gave us peace of mind. VanLock truly understands van owners’ needs.",
  },
  {
    id: "t-3",
    name: "Stephen Patel",
    city: "Greater Manchester",
    avatar: "/testi-3.jpg",
    content:
      "Excellent experience with VanLock. Installation was quick, and support is always responsive. Our vans feel safer than ever. Very satisfied with their service.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#E9F7FE] py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto p-[15px]">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto -mt-[10px] mb-10 md:mb-12">
          <p className="font-onest text-[16px] font-semibold text-[#2282C6] uppercase tracking-[2px] leading-tight mb-3">
            testimonials
          </p>
          <h2 className="font-onest text-[#111111] text-[26px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] md:leading-[45px] mt-[10px]">
            Why Van Owners Trust VanLock
          </h2>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[10px] pt-[35px] px-[30px] pb-[25px] flex flex-col justify-between h-full"
            >
              <div>
                {/* 5 Blue Stars */}
                <div className="flex items-center gap-[3px] text-[#2282C6] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-[17px] h-[17px] fill-current"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-jakarta text-[#555555] text-[16px] sm:text-[17px] font-normal leading-[30px] sm:leading-[31px] mb-8">
                  {item.content}
                </p>
              </div>

              {/* Author Bio */}
              <div className="flex items-center gap-4 pt-2">
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="font-onest text-[#111111] text-[18px] font-bold leading-tight mb-1">
                    {item.name}
                  </strong>
                  <span className="font-manrope text-[14px] text-[#777777] font-normal">
                    {item.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
