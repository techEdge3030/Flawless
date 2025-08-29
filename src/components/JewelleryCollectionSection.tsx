"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Collection {
  name: string;
  image: string;
  alt: string;
}

export default function JewelleryCollectionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const collections: Collection[] = [
    {
      name: "Engagement Rings",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F7281cc8b0e654e528ea459ca745721e9?format=webp&width=800",
      alt: "Elegant engagement rings collection",
    },
    {
      name: "Wedding Rings",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2Ff5346253ad9e4cb0bb7a9ddfa59efaf0?format=webp&width=800",
      alt: "Beautiful wedding rings collection",
    },
    {
      name: "Necklaces",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F72732b04ea3d47a7a4eae2b9daf79d89?format=webp&width=800",
      alt: "Stunning necklaces collection",
    },
    {
      name: "Bracelets",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F75bcb099b547406f9e547414baf48c91?format=webp&width=800",
      alt: "Exquisite bracelets collection",
    },
    {
      name: "Earrings",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2Fc7b340f90a1b45a698ad712fcc5c108c?format=webp&width=800",
      alt: "Beautiful earrings collection",
    },
    {
      name: "Mens Rings",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2F84b9ea9e6c4a46d191dd322f16d5234a?format=webp&width=800",
      alt: "Sophisticated mens rings collection",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + collections.length) % collections.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const slidesToShow = 4; // Show 4 items at a time on desktop
    const slides = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % collections.length;
      slides.push(collections[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
            Shop Jewellery
          </h2>
          {/* Desktop view with specific line breaks */}
          <div className="hidden lg:block font-helvetica text-xl font-medium text-secondary leading-[150%] tracking-[-0.22px] max-w-5xl mx-auto text-center">
            <p className="mb-0">
              Our curated collection of jewellery features stunning rings, wedding bands, pendants,
            </p>
            <p>
              bracelets and more, all crafted with the finest diamonds and heritage techniques.
            </p>
          </div>

          {/* Mobile/Tablet view - single line */}
          <p className="lg:hidden font-helvetica text-xl font-medium text-secondary leading-[150%] tracking-[-0.22px] max-w-5xl mx-auto">
            Our curated collection of jewellery features stunning rings, wedding bands, pendants, bracelets and more, all crafted with the finest diamonds and heritage techniques.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative mb-12">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-stone-100 rounded-full transition-colors duration-200 group"
            aria-label="Previous collections"
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
            aria-label="Next collections"
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

          {/* Collections Display */}
          <div className="mx-16">
            {/* Desktop: Show 4 collections */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6">
              {getVisibleSlides().map((collection, index) => (
                <div
                  key={`${collection.name}-${currentSlide}-${index}`}
                  className="group cursor-pointer"
                  onClick={() =>
                    goToSlide((currentSlide + index) % collections.length)
                  }
                >
                  <div className="w-full h-[576px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4 hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={collection.image}
                      alt={collection.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-hiragino text-[22px] font-semibold text-black text-center leading-[150%] tracking-[0.22px]">
                    {collection.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Tablet: Show 2 collections */}
            <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
              {getVisibleSlides()
                .slice(0, 2)
                .map((collection, index) => (
                  <div
                    key={`${collection.name}-${currentSlide}-${index}`}
                    className="group cursor-pointer"
                    onClick={() =>
                      goToSlide((currentSlide + index) % collections.length)
                    }
                  >
                    <div className="w-full h-[576px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4 hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={collection.image}
                        alt={collection.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="font-hiragino text-[22px] font-semibold text-black text-center leading-[150%] tracking-[0.22px]">
                      {collection.name}
                    </h3>
                  </div>
                ))}
            </div>

            {/* Mobile: Show 1 collection */}
            <div className="md:hidden">
              {getVisibleSlides()
                .slice(0, 1)
                .map((collection, index) => (
                  <div
                    key={`${collection.name}-${currentSlide}-${index}`}
                    className="group cursor-pointer"
                    onClick={() =>
                      goToSlide((currentSlide + index) % collections.length)
                    }
                  >
                    <div className="w-full h-[576px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4 hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={collection.image}
                        alt={collection.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="font-hiragino text-[22px] font-semibold text-black text-center leading-[150%] tracking-[0.22px]">
                      {collection.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Curated Collection Call-to-Action */}
        <div className="max-w-md ml-auto">
          <div className="mb-4">
            <span className="font-hiragino text-lg font-semibold text-black tracking-[1.26px] uppercase">
              CURATED COLLECTION
            </span>
          </div>

          <h3 className="font-eb-garamond text-4xl font-normal text-black leading-[150%] tracking-[-0.44px] mb-6">
            Engagement Rings
          </h3>

          <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] mb-8">
            Let us choose you the perfect diamond. All you have to do is select
            from Ring Designs that have been chosen over and over again as
            perfect heirlooms. These engagement rings are crafted by hand using
            sustainable methods and heritage techniques in Hatton Garden. They
            are made to order and take 6-8 weeks to complete.
          </p>

          <button className="w-full btn-primary py-4 rounded text-lg font-semibold">
            SHOP DIAMOND ENGAGEMENT RINGS
          </button>
        </div>
      </div>
    </section>
  );
}
