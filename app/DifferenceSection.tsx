import React from "react";
import Image from "next/image";

interface DiffItem {
  id: string;
  title: string;
  desc: string;
}

const differences: DiffItem[] = [
  {
    id: "d-1",
    title: "No Generic Solutions - Just Customised Solutions",
    desc: "Risks vary in every van. To this end, we conduct detailed evaluations to suggest the appropriate products, including slam locks and GPS trackers.",
  },
  {
    id: "d-2",
    title: "Install with Your Convenience",
    desc: "You will not need to come up and see us since we are a certified mobile service, and therefore the service will be brought to you where you want.",
  },
  {
    id: "d-3",
    title: "Round-the-Clock Monitoring and Real-Time Alert",
    desc: "Our connected systems provide protection when you're not present. You receive an immediate call on your phone in case strange activity is spotted.",
  },
  {
    id: "d-4",
    title: "Easy Upgrades and Repairs",
    desc: "Is there a need to change your Van Lock Security system or repair damages due to wear? We’re just a call away — fast response, zero stress.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="w-full bg-white py-[70px] md:py-[90px] px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Column: 4 Key Value Points */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            <h2 className="font-onest text-[#111111] text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.2] mb-8">
              The Van Lock Difference
            </h2>

            <div className="space-y-6">
              {differences.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E9F7FE] text-[#2282c6] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-onest text-[#111111] text-[18px] sm:text-[19px] font-bold mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-[#666666] text-[15px] sm:text-[16px] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Original Van Lock Difference Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[480px] rounded-[12px] overflow-hidden shadow-md">
              <Image
                src="/difference-side.webp"
                alt="The Van Lock Difference"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
