"use client";
import Image from "next/image";
import { useState } from "react";

interface DiamondShape {
  name: string;
  image: string;
  alt: string;
}

export default function DiamondShapesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const diamondShapes: DiamondShape[] = [
    {
      name: "Princess",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e3d1bb81fa85289460b8aebab192735c269412ba?width=284",
      alt: "Princess cut diamond shape",
    },
    {
      name: "Round",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3b4dafc2710104af8156637db913a023a22ebe98?width=278",
      alt: "Round cut diamond shape",
    },
    {
      name: "Emerald",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7bf7eee2190a787ca7c6018118b484761c89d46e?width=283",
      alt: "Emerald cut diamond shape",
    },
    {
      name: "Oval",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dd49b988c09e91a15e14def700456b9bc01bff39?width=284",
      alt: "Oval cut diamond shape",
    },
    {
      name: "Radiant",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a9bcd636bd52fef806b92c60267cf9fee9535d92?width=276",
      alt: "Radiant cut diamond shape",
    },
    {
      name: "Pear",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/11937282582d2c8f59acb5ae2455f4c0e5351c04?width=270",
      alt: "Pear cut diamond shape",
    },
    {
      name: "Cushion",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/cfa39929805c97c42fc67c08f487924284daccb7?width=280",
      alt: "Cushion cut diamond shape",
    },
    {
      name: "Marquise",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6495eb8bfce1c089ba39bdbd67a0a5d68bc0ebfe?width=286",
      alt: "Marquise cut diamond shape",
    },
    {
      name: "Asscher",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f1148c0a38258bc9d07567e9c8119f1bad7c0048?width=284",
      alt: "Asscher cut diamond shape",
    },
    {
      name: "Elongated Cushion",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e575cdb7afeda888cb28fcf850781a2c2f263a7c?width=284",
      alt: "Elongated cushion cut diamond shape",
    },
    {
      name: "Heart",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/81b63715c75bc39d32da84ce2c8f5ead46b888db?width=226",
      alt: "Heart cut diamond shape",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % diamondShapes.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + diamondShapes.length) % diamondShapes.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const slidesToShow = 10; // Show 10 items at a time on desktop
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % diamondShapes.length;
      slides.push(diamondShapes[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
            Shop by Diamond Shape
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
            aria-label="Previous diamond shapes"
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

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
            aria-label="Next diamond shapes"
          >
            <svg
              className="w-6 h-6 text-stone-500 group-hover:text-stone-700 transition-colors"
              viewBox="0 0 26 47"
              fill="none"
            >
              <path
                d="M1.45984 43.7205L20.5048 23.7195L1.47351 3.69019L1.15027 3.34937L1.47058 3.00464L2.72449 1.65894L3.08679 1.27026L3.453 1.65601L24.0907 23.3767L24.4188 23.7214L24.0907 24.0662L3.4364 45.7566L3.07019 46.1414L2.70886 45.7527L1.45593 44.405L1.13562 44.0603L1.45984 43.7205Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Diamond Shapes Display */}
          <div className="mx-16">
            {/* Desktop: Show 10 diamond shapes */}
            <div className="hidden lg:grid lg:grid-cols-10 gap-6">
              {getVisibleSlides().map((shape, index) => (
                <div
                  key={`${shape.name}-${currentSlide}-${index}`}
                  className="group cursor-pointer text-center"
                  onClick={() =>
                    goToSlide((currentSlide + index) % diamondShapes.length)
                  }
                >
                  <div className="w-[113px] h-[113px] relative mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={shape.image}
                      alt={shape.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-helvetica text-base font-medium text-black tracking-[-0.176px] leading-[150%]">
                    {shape.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Tablet: Show 5 diamond shapes */}
            <div className="hidden md:grid lg:hidden md:grid-cols-5 gap-6">
              {getVisibleSlides()
                .slice(0, 5)
                .map((shape, index) => (
                  <div
                    key={`${shape.name}-${currentSlide}-${index}`}
                    className="group cursor-pointer text-center"
                    onClick={() =>
                      goToSlide((currentSlide + index) % diamondShapes.length)
                    }
                  >
                    <div className="w-[113px] h-[113px] relative mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={shape.image}
                        alt={shape.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-helvetica text-base font-medium text-black tracking-[-0.176px] leading-[150%]">
                      {shape.name}
                    </h3>
                  </div>
                ))}
            </div>

            {/* Mobile: Show 2 diamond shapes */}
            <div className="md:hidden grid grid-cols-2 gap-6">
              {getVisibleSlides()
                .slice(0, 2)
                .map((shape, index) => (
                  <div
                    key={`${shape.name}-${currentSlide}-${index}`}
                    className="group cursor-pointer text-center"
                    onClick={() =>
                      goToSlide((currentSlide + index) % diamondShapes.length)
                    }
                  >
                    <div className="w-[113px] h-[113px] relative mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={shape.image}
                        alt={shape.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-helvetica text-base font-medium text-black tracking-[-0.176px] leading-[150%]">
                      {shape.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
