"use client";
import Image from "next/image";
import { useState } from "react";

interface RingStyle {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export default function ShopByStyleSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ringStyles: RingStyle[] = [
    {
      id: "oval-three-stone",
      title: "Oval Three Stone",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F8e37fc8d00724697b9741ed9601cfad3?format=webp&width=800",
      alt: "Oval three stone engagement ring with pear side stones",
    },
    {
      id: "oval-cluster",
      title: "Oval Cluster",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F825abc1c653744efb183237dc044e66c?format=webp&width=800",
      alt: "Oval center stone with diamond cluster band",
    },
    {
      id: "pear-halo",
      title: "Pear Halo",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F494f788903b8478abf0bf1d5404c70c0?format=webp&width=800",
      alt: "Pear shaped diamond with halo setting",
    },
    {
      id: "round-solitaire",
      title: "Round Solitaire",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2Ff2e46a5e919542e1882db3b2c3bf51a2?format=webp&width=800",
      alt: "Classic round solitaire engagement ring",
    },
    {
      id: "emerald-bezel",
      title: "Emerald Bezel",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F941f08162843438ba5d80c1639a9b56a?format=webp&width=800",
      alt: "Emerald cut diamond in bezel setting",
    },
    {
      id: "vintage-oval",
      title: "Vintage Oval",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f258bf9cca6ca64de0cd4a589bbe5ba42b9353b2?width=1265",
      alt: "Vintage inspired oval engagement ring",
    },
    {
      id: "classic-round",
      title: "Classic Round",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6d9e98c2214e077b8ce57ab5061d3aa94c389c44?width=1023",
      alt: "Classic round diamond engagement ring",
    },
    {
      id: "modern-cushion",
      title: "Modern Cushion",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/613c00fdec0bc81f309737405c1a06af29a3cd25?width=1034",
      alt: "Modern cushion cut engagement ring",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ringStyles.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + ringStyles.length) % ringStyles.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const slidesToShow = 3; // Show 3 rings at a time on desktop
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % ringStyles.length;
      slides.push(ringStyles[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black font-normal italic leading-tight tracking-wide mb-6">
            Shop by Engagement Ring Style
          </h2>
          <p className="text-black text-base lg:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            Browse our exclusive engagement ring designs by categories and
            explore a range of timeless or modern styles to pair with your
            selected lab-grown or earth-mined diamond. Our engagement rings
            embody over a decade of expertise and uncompromising quality,
            specific only to Hatton Garden Jewellers & Craftsmen.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
            aria-label="Previous rings"
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
            aria-label="Next rings"
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

          {/* Rings Display */}
          <div className="mx-16">
            {/* Desktop: Show 3 rings */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {getVisibleSlides().map((ring, index) => (
                <div
                  key={`${ring.id}-${currentSlide}-${index}`}
                  className="group cursor-pointer"
                  onClick={() =>
                    goToSlide((currentSlide + index) % ringStyles.length)
                  }
                >
                  <div className="relative aspect-square bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={ring.image}
                      alt={ring.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-center mt-4 text-lg font-medium text-stone-700 group-hover:text-stone-900 transition-colors">
                    {ring.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet: Show 1-2 rings */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {getVisibleSlides()
                  .slice(0, 2)
                  .map((ring, index) => (
                    <div
                      key={`${ring.id}-${currentSlide}-${index}`}
                      className="group cursor-pointer"
                      onClick={() =>
                        goToSlide((currentSlide + index) % ringStyles.length)
                      }
                    >
                      <div className="relative aspect-square bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={ring.image}
                          alt={ring.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-center mt-4 text-lg font-medium text-stone-700 group-hover:text-stone-900 transition-colors">
                        {ring.title}
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {ringStyles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide
                    ? "bg-stone-600"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="bg-stone-800 text-white px-8 py-4 text-base font-semibold uppercase tracking-wide hover:bg-stone-700 transition-colors duration-300">
            View All Ring Styles
          </button>
        </div>
      </div>
    </section>
  );
}
