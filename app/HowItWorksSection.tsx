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
    <section className="w-full bg-[#f8f9fa] py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] mb-4">
            How It Works
          </h2>
          <p className="font-manrope text-[#666666] text-[16px] md:text-[18px] leading-[1.6]">
            Van protection at VanLock is easy, smooth, and stress-free. Seeking protection of a single van, or a fleet of several ones, our workflow is tailored towards your convenience.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[12px] p-7 border border-slate-200/60 shadow-sm flex flex-col justify-start transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <span className="font-onest text-[36px] font-extrabold text-[#2282c6] mb-4">
                {item.step}
              </span>
              <h3 className="font-onest text-[#111111] text-[19px] font-bold mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-manrope text-[#666666] text-[15px] leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
