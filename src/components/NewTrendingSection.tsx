"use client";
import Image from "next/image";
import React, { useState } from "react";

interface TrendingItem {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export default function NewTrendingSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingItems: TrendingItem[] = [
    {
      id: "toi-et-moi",
      name: "Toi et Moi",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/41708f5e26e2fbe444cf8cb1a85d0d43afb1f297?width=1293",
      alt: "Toi et Moi engagement ring",
    },
    {
      id: "marquise-diamonds",
      name: "Marquise Diamonds",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=624",
      alt: "Marquise diamond engagement ring",
    },
    {
      id: "pink-diamond-morning-star",
      name: "Pink Diamond Morning Star",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/eb6c104d8ba08b83785da235ba0c7f87d5a55062?width=674",
      alt: "Pink diamond morning star engagement ring",
    },
    {
      id: "elongated-cushion-cuts",
      name: "Elongated Cushion Cuts",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d8b23fc844969be7d2cfeb54e478749004767002?width=634",
      alt: "Elongated cushion cut engagement ring",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % trendingItems.length,
    );
  };

  const getVisibleSlides = () => {
    const slidesToShow = 4; // Show 4 items at a time on desktop
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % trendingItems.length;
      slides.push(trendingItems[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 px-4 lg:px-8" style={{ backgroundColor: '#ede7e4' }}>
      <div className="w-full max-w-none mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Section - Content */}
          <div className="lg:col-span-3 lg:pr-8 flex flex-col justify-center">
            {/* Subtitle */}
            <div className="mb-3">
              <span className="text-lg font-semibold text-black tracking-[1.26px] uppercase">
                SHOP
              </span>
            </div>

            {/* Title - Keep on one line */}
            <h2 className="font-eb-garamond text-3xl lg:text-4xl font-medium italic text-black leading-tight tracking-[-0.418px] mb-4 whitespace-nowrap">
              What&apos;s New & Trending?
            </h2>

            {/* Description with proper text chunking */}
            <div className="text-base font-medium text-black leading-[150%] tracking-[-0.198px] mb-6">
              <p>
                A space to find the latest designs,<br />
                encounter the most loved diamond<br />
                rings and browse enchanting<br />
                coloured gemstone collections.
              </p>
            </div>

            {/* Button */}
            <button className="bg-[#A39186] text-white py-2 px-4 text-xs lg:text-sm font-semibold uppercase tracking-wide rounded hover:bg-[#8B7F73] transition-all duration-200 self-start">
              BOOK A CONSULTATION
            </button>
          </div>

          {/* Right Section - Image Slider */}
          <div className="lg:col-span-9 relative flex flex-col">
            {/* Only Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg hover:bg-stone-50 rounded-full transition-all duration-200 group border border-gray-200"
              aria-label="Next items"
            >
              <svg
                className="w-5 h-5 text-stone-600 group-hover:text-stone-800 transition-colors"
                viewBox="0 0 26 47"
                fill="none"
              >
                <path
                  d="M1.45984 43.7205L20.5048 23.7195L1.47351 3.69019L1.15027 3.34937L1.47058 3.00464L2.72449 1.65894L3.08679 1.27026L3.453 1.65601L24.0907 23.3767L24.4188 23.7214L24.0907 24.0662L3.4364 45.7566L3.07019 46.1414L2.70886 45.7527L1.45593 44.405L1.13562 44.0603L1.45984 43.7205Z"
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
                    <div className="relative aspect-[3/4] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-3">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="text-center">
                      <h4 className="font-eb-garamond text-lg font-normal text-black leading-[150%] tracking-[-0.22px]">
                        {item.name}
                      </h4>
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
                      <div className="relative aspect-[3/4] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center">
                        <h4 className="font-eb-garamond text-xl font-normal text-black leading-[150%] tracking-[-0.22px]">
                          {item.name}
                        </h4>
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
                      <div className="relative aspect-[3/4] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4 mx-auto max-w-xs">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center">
                        <h4 className="font-eb-garamond text-xl font-normal text-black leading-[150%] tracking-[-0.22px]">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
