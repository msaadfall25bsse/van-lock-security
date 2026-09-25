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
    <section className="w-full bg-white py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <p className="font-onest text-[14px] font-semibold text-[#2282c6] uppercase tracking-[2px] mb-2">
            testimonials
          </p>
          <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2]">
            Why Van Owners Trust VanLock
          </h2>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#fcfcfc] border border-slate-200/70 rounded-[12px] p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 text-[#f59e0b] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-manrope text-[#444444] text-[16px] leading-[1.7] italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#2282c6]">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-onest text-[#111111] text-[17px] font-bold">
                    {item.name}
                  </h4>
                  <p className="font-manrope text-[14px] text-[#777777]">
                    {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
