"use client";
import Image from "next/image";
import { useState } from "react";

export default function GuidesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const guides = [
    {
      title: "How to choose the best Engagement Ring for your partner?",
      description:
        "Choosing the perfect engagement ring is a deeply personal process, and understanding your partner's preferences, lifestyle, and values will ensure you select something they'll treasure forever.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2Fdcb26964d5cc4a1f87e6b8a4863b40f9?format=webp&width=800",
    },
    {
      title: "Our Lab Grown Diamond Guide",
      description:
        "Lab grown diamonds are transforming luxury in the modern era—blending advanced science with responsible elegance.",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F01d7fcc2ed68482c88a9df97b120187d?format=webp&width=800",
    },
    {
      title: "How your Ring is Made",
      description:
        "There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4087529e7509937f60d9fcd08484608145ccd292?width=853",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guides.length) % guides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const slidesToShow = 3; // Show 3 guides at a time on desktop
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % guides.length;
      slides.push(guides[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black font-normal italic leading-tight tracking-wide mb-6">
            Browse our Expert Diamond & Jewellery Guides
          </h2>
          <p className="text-black text-base lg:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            Take a quick look at our featured diamond & jewellery resources or go to our Complete Guides
            Page written and curated by our expert jewellers in Hatton Garden.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Guides Display */}
          <div className="mx-16 relative">
            {/* Left Arrow - positioned relative to image height */}
            <button
              onClick={prevSlide}
              className="absolute left-[-64px] top-[calc(50%-3rem)] z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
              aria-label="Previous guides"
              style={{ top: 'calc(40% - 1.5rem)' }}
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

            {/* Right Arrow - positioned relative to image height */}
            <button
              onClick={nextSlide}
              className="absolute right-[-64px] top-[calc(50%-3rem)] z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
              aria-label="Next guides"
              style={{ top: 'calc(40% - 1.5rem)' }}
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
            {/* Desktop: Show 3 guides */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {getVisibleSlides().map((guide, index) => (
                <div
                  key={`${guide.title}-${currentSlide}-${index}`}
                  className="group cursor-pointer"
                  onClick={() =>
                    goToSlide((currentSlide + index) % guides.length)
                  }
                >
                  <div className="relative aspect-[4/5] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-6">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-black leading-[150%] tracking-[-0.198px] mb-4 group-hover:text-stone-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-base font-medium text-black leading-[150%] tracking-[-0.176px] group-hover:text-stone-700 transition-colors">
                    {guide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tablet: Show 2 guides */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
              {getVisibleSlides()
                .slice(0, 2)
                .map((guide, index) => (
                  <div
                    key={`${guide.title}-${currentSlide}-${index}`}
                    className="group cursor-pointer"
                    onClick={() =>
                      goToSlide((currentSlide + index) % guides.length)
                    }
                  >
                    <div className="relative aspect-[4/5] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-6">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-black leading-[150%] tracking-[-0.198px] mb-4 group-hover:text-stone-700 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-base font-medium text-black leading-[150%] tracking-[-0.176px] group-hover:text-stone-700 transition-colors">
                      {guide.description}
                    </p>
                  </div>
                ))}
            </div>

            {/* Mobile: Show 1 guide */}
            <div className="md:hidden">
              <div className="max-w-sm mx-auto">
                {getVisibleSlides()
                  .slice(0, 1)
                  .map((guide, index) => (
                    <div
                      key={`${guide.title}-${currentSlide}-${index}`}
                      className="group cursor-pointer"
                      onClick={() =>
                        goToSlide((currentSlide + index) % guides.length)
                      }
                    >
                      <div className="relative aspect-[4/5] bg-stone-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-6">
                        <Image
                          src={guide.image}
                          alt={guide.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-black leading-[150%] tracking-[-0.198px] mb-4 group-hover:text-stone-700 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-base font-medium text-black leading-[150%] tracking-[-0.176px] group-hover:text-stone-700 transition-colors">
                        {guide.description}
                      </p>
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
