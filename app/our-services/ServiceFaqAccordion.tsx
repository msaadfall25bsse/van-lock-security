'use client';

import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

export default function ServiceFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-[#e5e5e5] rounded-[8px] overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-jakarta font-semibold text-[17px] text-[#050B20] hover:text-[#2282C6] transition-colors"
            >
              <span>{faq.q}</span>
              <svg
                className={`w-5 h-5 text-[#2282C6] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 font-manrope text-[15px] text-[#555555] leading-[26px]">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
