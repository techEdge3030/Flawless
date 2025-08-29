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
          <div>
            <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-8 tracking-[-0.44px]">
              What is Bespoke Diamond Jewellery
            </h2>

            <p className="font-helvetica text-lg font-normal text-black leading-[150%] mb-8">
              The term &apos;bespoke&apos; refers to jewellery designed and
              crafted from scratch. From necklaces to bracelets, engagement rings
              to anniversary gifts, milestone birthdays and more, we offer an
              intimate and personalised service, available both virtually or in
              person. Our team of jewellers in Hatton Garden, London are experts
              at working with customers all over the world to bring their bespoke
              visions to life.
            </p>

            <button className="bg-[#806C63] text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-[#6d5a52] transition-colors duration-200">
              BOOK A FREE CONSULTATION
            </button>
          </div>

          {/* Right Column - Dropdown Menu */}
          <div className="space-y-0">
            {bespokeFeatures.map((feature, index) => (
              <div key={index} className="border-b border-[#7f6c62] last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-black/5 transition-colors duration-200"
                >
                  <span className="font-helvetica text-sm font-medium text-[#7f6c62] uppercase tracking-wide">
                    {feature.title}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#7f6c62] transition-transform duration-200 ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openItem === index && (
                  <div className="pb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
