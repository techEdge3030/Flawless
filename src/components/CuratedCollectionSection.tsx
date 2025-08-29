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

  const getVisibleSlides = () => {
    const slidesToShow = 4; // Show 4 items at a time on desktop
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % sliderItems.length;
      slides.push(sliderItems[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-4 items-stretch">
          {/* Left Section - Image Slider */}
          <div className="lg:col-span-5 relative flex flex-col">
            {/* Only Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg hover:bg-stone-50 rounded-full transition-all duration-200 group border border-gray-200"
              aria-label="Previous items"
            >
              <svg
                className="w-5 h-5 text-stone-600 group-hover:text-stone-800 transition-colors"
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
              {/* Desktop: Show 4 items */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                {getVisibleSlides().map((item, index) => (
                  <div
                    key={`${item.id}-${currentSlide}-${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[3/5] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-3">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="text-left">
                      <h4 className="font-eb-garamond text-lg font-normal text-black leading-[150%] tracking-[-0.22px] mb-1">
                        {item.title}
                      </h4>
                      <p className="font-helvetica text-sm font-medium text-black leading-[150%] tracking-[-0.176px]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tablet: Show 2 items */}
              <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
                {getVisibleSlides()
                  .slice(0, 2)
                  .map((item, index) => (
                    <div
                      key={`${item.id}-${currentSlide}-${index}`}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[3/5] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-left">
                        <h4 className="font-eb-garamond text-xl font-normal text-black leading-[150%] tracking-[-0.22px] mb-1">
                          {item.title}
                        </h4>
                        <p className="font-helvetica text-base font-medium text-black leading-[150%] tracking-[-0.176px]">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Mobile: Show 1 item */}
              <div className="md:hidden">
                {getVisibleSlides()
                  .slice(0, 1)
                  .map((item, index) => (
                    <div
                      key={`${item.id}-${currentSlide}-${index}`}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[3/5] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4 mx-auto max-w-xs">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center">
                        <h4 className="font-eb-garamond text-xl font-normal text-black leading-[150%] tracking-[-0.22px] mb-1">
                          {item.title}
                        </h4>
                        <p className="font-helvetica text-base font-medium text-black leading-[150%] tracking-[-0.176px]">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="lg:col-span-2 lg:pl-4 flex flex-col justify-center">
            {/* Subtitle */}
            <div className="mb-3">
              <span className="font-hiragino text-xs lg:text-sm font-semibold text-black tracking-[1.26px] uppercase">
                CURATED COLLECTION
              </span>
            </div>

            {/* Title */}
            <h2 className="font-eb-garamond text-2xl lg:text-3xl font-normal italic text-black leading-[150%] tracking-[-0.44px] mb-4">
              Engagement Rings
            </h2>

            {/* Description */}
            <div className="font-helvetica text-sm lg:text-base font-medium text-black leading-[150%] tracking-[-0.198px] mb-6">
              <p className="mb-0">
                Let us choose you the perfect diamond.
              </p>
              <p className="mb-0">
                All you have to do is select from Ring
              </p>
              <p className="mb-0">
                Designs that have been chosen over and
              </p>
              <p className="mb-0">
                over again as perfect heirlooms. These
              </p>
              <p className="mb-0">
                engagement rings are crafted by hand
              </p>
              <p className="mb-0">
                using sustainable methods and heritage
              </p>
              <p className="mb-0">
                techniques in Hatton Garden. They are
              </p>
              <p className="mb-0">
                made to order and take 6-8 weeks to
              </p>
              <p>
                complete.
              </p>
            </div>

            {/* Button */}
            <button className="border border-black bg-transparent text-black py-2 px-3 text-xs lg:text-sm font-semibold uppercase tracking-wide rounded hover:bg-black hover:text-white transition-all duration-200 self-start">
              SHOP DIAMOND ENGAGEMENT RINGS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
