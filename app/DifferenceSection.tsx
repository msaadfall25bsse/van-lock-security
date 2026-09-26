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
    <section className="w-full bg-[#E9F7FE] py-[60px] md:py-[80px] lg:py-[90px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Column: Title & 4 Text Blocks */}
          <div className="w-full lg:w-[49%] max-w-[580px] flex flex-col justify-center text-left">
            <h2 className="font-onest text-[#111111] text-[32px] sm:text-[38px] md:text-[42px] font-semibold leading-[1.15] md:leading-[48px] tracking-[-0.015em] mb-7">
              The Van Lock Difference
            </h2>

            <div className="space-y-[21px]">
              {differences.map((item) => (
                <div key={item.id} className="flex flex-col text-left">
                  <h3 className="font-onest text-[#111111] text-[17px] sm:text-[18px] font-semibold leading-[1.3] mb-1.5 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-[#555555] text-[15px] sm:text-[16px] font-normal leading-[25px] sm:leading-[26px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Van Lock Difference Image */}
          <div className="w-full lg:w-[52%] flex items-center justify-center">
            <div className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[500px] rounded-[10px] overflow-hidden">
              <Image
                src="/difference-side.webp"
                alt="The Van Lock Difference"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left lg:object-[left_center]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
