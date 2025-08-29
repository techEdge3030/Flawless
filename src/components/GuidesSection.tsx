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
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 hover:opacity-80 transition-opacity duration-200 group"
            aria-label="Previous guides"
          >
            <svg
              width="23"
              height="35"
              viewBox="0 0 23 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[17px] rotate-90"
            >
              <path
                d="M3.00009 17.2884L19.1045 2.54736L20.0811 3.46285L4.97569 17.2895L20.0699 31.1359L19.0923 32.0504L3.00009 17.2884Z"
                fill="#A39186"
                stroke="#A39986"
                strokeWidth="3"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 hover:opacity-80 transition-opacity duration-200 group"
            aria-label="Next guides"
          >
            <svg
              width="23"
              height="36"
              viewBox="0 0 23 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[17px] -rotate-90"
            >
              <path
                d="M19.9999 18.054L3.89549 33.1636L2.91895 32.2252L18.0243 18.0529L2.93006 3.86033L3.90772 2.92301L19.9999 18.054Z"
                fill="#A39186"
                stroke="#A39986"
                strokeWidth="3"
              />
            </svg>
          </button>

          {/* Guides Display */}
          <div className="mx-16">
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

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {guides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-stone-600" : "bg-stone-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
