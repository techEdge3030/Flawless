"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SliderItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  price: string;
}

export default function CuratedCollectionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderItems: SliderItem[] = [
    {
      id: "oval-vivian",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F7bd2d46ae0df45aabb9d22e98e97b496?format=webp&width=800",
      alt: "Oval Vivian engagement ring - 2.00ct",
      title: "Oval Vivian - 2.00ct",
      price: "£3012",
    },
    {
      id: "yellow-cushion",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F16be445424e7450a889ac55ab38e1477?format=webp&width=800",
      alt: "Yellow Cushion Avian engagement ring - 3.25ct",
      title: "Yellow Cushion Avian - 3.25ct",
      price: "£3900",
    },
    {
      id: "oval-anastasia",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F597d746929a345c98b3d5ee021492579?format=webp&width=800",
      alt: "Oval Anastasia engagement ring - 1.70ct",
      title: "Oval Anastasia - 1.70ct",
      price: "£2724",
    },
    {
      id: "oval-morning-star",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2Fae712d8606cc40678bc604f9a6b06083?format=webp&width=800",
      alt: "Oval Morning Star engagement ring - 1.30ct",
      title: "Oval Morning Star - 1.30ct",
      price: "£2880",
    },
    {
      id: "oval-lucia",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F7546b8e90c7a471d98dcd0669b6d1dfb?format=webp&width=800",
      alt: "Oval Lucia engagement ring - 2.00ct",
      title: "Oval Lucia - 2.00ct",
      price: "£3012",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length,
    );
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image Slider */}
          <div className="relative">
            {/* Only Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
              aria-label="Previous items"
            >
              <svg
                className="w-6 h-6 text-stone-500 group-hover:text-stone-700 transition-colors"
                viewBox="0 0 26 46"
                fill="none"
              >
                <path
                  d="M24.2639 3.66309L5.23267 23.1631L24.2502 42.6914L24.5872 43.0371L24.2542 43.3857L23.0002 44.6982L22.6418 45.0732L22.2805 44.7021L1.64185 23.5107L1.302 23.1611L1.64185 22.8125L22.2961 1.65039L22.6584 1.2793L23.0159 1.65527L24.2688 2.96973L24.6008 3.31836L24.2639 3.66309Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div className="grid grid-cols-4 gap-4">
                {sliderItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-square bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-helvetica text-sm font-medium text-black leading-[150%] tracking-[-0.154px] mb-1">
                        {item.title}
                      </h4>
                      <p className="font-helvetica text-sm font-semibold text-black leading-[150%] tracking-[-0.154px]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="max-w-md">
            {/* Subtitle */}
            <div className="mb-4">
              <span className="font-hiragino text-lg font-semibold text-black tracking-[1.26px] uppercase">
                CURATED COLLECTION
              </span>
            </div>

            {/* Title */}
            <h2 className="font-eb-garamond text-4xl font-normal text-black leading-[150%] tracking-[-0.44px] mb-6">
              Engagement Rings
            </h2>

            {/* Description */}
            <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] mb-8">
              Let us choose you the perfect diamond. All you have to do is select
              from Ring Designs that have been chosen over and over again as
              perfect heirlooms. These engagement rings are crafted by hand using
              sustainable methods and heritage techniques in Hatton Garden. They
              are made to order and take 6-8 weeks to complete.
            </p>

            {/* Button */}
            <button className="w-full btn-primary py-4 rounded text-lg font-semibold">
              SHOP DIAMOND ENGAGEMENT RINGS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
