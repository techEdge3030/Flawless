"use client";

import { useState } from "react";

export default function BespokeSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const bespokeFeatures = [
    {
      title: "MADE IN HATTON GARDEN, LONDON",
      content: "Our jewellery is handcrafted in the heart of London's historic diamond district, Hatton Garden, where skilled artisans have been creating exquisite pieces for generations."
    },
    {
      title: "PERSONALISATION MADE EASY",
      content: "Work with our expert designers to create a piece that reflects your unique style and story, with every detail tailored to your preferences."
    },
    {
      title: "SUSTAINABLE & CONFLICT-FREE DIAMONDS",
      content: "We are committed to ethical sourcing, ensuring all our diamonds are conflict-free and responsibly mined with full traceability."
    },
    {
      title: "BESPOKE JEWELLERY PROCESS",
      content: "From initial consultation to final creation, our transparent process keeps you involved at every step of your bespoke journey."
    },
    {
      title: "YOUR VISION BROUGHT TO LIFE",
      content: "Our skilled craftspeople transform your ideas into reality, creating heirloom pieces that will be treasured for generations."
    },
    {
      title: "WARRANTY & AFTER CARE",
      content: "Every piece comes with comprehensive warranty and lifetime aftercare service to ensure your jewellery remains beautiful forever."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#ede7e4]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Content */}
          <div className="text-center">
            <h2 className="font-eb-garamond text-[32px] italic font-medium text-[#806C63] mb-8 leading-[150%] tracking-[-0.352px]">
              What is Bespoke Diamond Jewellery
            </h2>

            <p className="text-[20px] font-normal text-[#806C63] leading-[168%] tracking-[-0.22px] mb-8 max-w-[647px] mx-auto" style={{ fontFamily: 'Helvetica Now Text, -apple-system, Roboto, Helvetica, sans-serif' }}>
              The term &apos;bespoke&apos; refers to jewellery designed and crafted from scratch. From necklaces to bracelets, engagement rings to anniversary gifts, milestone birthdays and more, we offer an intimate and personalised service, available both virtually or in person. Our team of jewellers in Hatton Garden, London are experts at working with customers all over the world to bring their bespoke visions to life.
            </p>

            <button className="bg-[#A39186] text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-[#8B7F73] transition-all duration-200 rounded">
              BOOK A FREE CONSULTATION
            </button>
          </div>

          {/* Right Column - Dropdown Menu */}
          <div className="flex flex-col h-full">
            {bespokeFeatures.map((feature, index) => (
              <div key={index} className="border-b border-[#806C63] last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-black/5 transition-colors duration-200"
                >
                  <span
                    className="text-base font-normal text-[#806C63] leading-[150%] tracking-[-0.22px] flex-1"
                    style={{ fontFamily: 'Helvetica Now Text, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    {feature.title}
                  </span>
                  <svg
                    className={`w-[16px] h-[8px] text-[#806C63] transition-transform duration-300 ml-4 flex-shrink-0 ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                    width="27"
                    height="15"
                    viewBox="0 0 27 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.04883 1.62891L13.4932 11.0537L23.9521 1.63574L24.2842 1.33691L24.6182 1.63281L25.3311 2.26172L25.751 2.63281L25.335 3.00879L13.8262 13.3711L13.4912 13.6729L13.1572 13.3711L1.66504 3L1.24902 2.62402L1.66992 2.25391L2.38281 1.625L2.71777 1.33008L3.04883 1.62891Z"
                      fill="#806C63"
                      stroke="#806C63"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
