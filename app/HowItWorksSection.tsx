import React from "react";

const steps = [
  {
    step: "01.",
    title: "Register a Free Consultation",
    desc: "Quality support and suggest the most appropriate solutions for your van.",
  },
  {
    step: "02.",
    title: "Choose What Works for You.",
    desc: "Choose a complete range of secure brands such as deadlocks, hook locks, slam locks, alarms and trackers. We will assist you in selecting the right combination that is suitable for your van and ensures you feel safe at any time, day, or night.",
  },
  {
    step: "03.",
    title: "Professional Installation",
    desc: "Our mobile installation division goes out to you at home, at work, and on-site. Fitters are fast, well trained and fully certified, so all fittings are completed to the highest standard.",
  },
  {
    step: "04.",
    title: "Ongoing Support",
    desc: "We have a presence even after installation. Do you require repairs, enhancements, or guidance? VanLock is available to provide lifelong support and maintain peace of mind.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto p-[10px]">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12">
          <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] md:leading-[45px] mb-4">
            How It Works
          </h2>
          <p className="font-manrope text-[#555555] text-[15px] sm:text-[16px] font-normal leading-[26px] max-w-[780px] mx-auto">
            Van protection at VanLock is easy, smooth, and stress-free. Seeking protection of a single van, or a fleet of several ones, our workflow is tailored towards your convenience.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-[10px]">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#E9F7FE] rounded-[20px] py-[30px] px-3 sm:px-4 my-[10px] flex flex-col items-center text-center h-full"
            >
              {/* Step Number: 01., 02., etc. */}
              <span className="font-jakarta text-[32px] sm:text-[34px] font-[800] text-[#1e83c7] leading-none mb-5 tracking-tight">
                {item.step}
              </span>

              {/* Title */}
              <h3 className="font-onest text-[#1a1a1a] text-[14.5px] xl:text-[16px] font-semibold leading-[1.3] mb-3 whitespace-nowrap">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-manrope text-[#555555] text-[14.5px] sm:text-[15px] font-[400] leading-[26px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
