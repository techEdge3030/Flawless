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
      id: "trilogy",
      title: "Trilogy",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/16dd20e0179bb63e2af497b425538239c373393c?width=922",
      alt: "Trilogy engagement ring with three stones",
    },
    {
      id: "solitaire",
      title: "Solitaire",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2890df9d1e9b338c5e7032db8bc6d5446ac707af?width=759",
      alt: "Classic solitaire engagement ring",
    },
    {
      id: "cluster",
      title: "Cluster",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/31a695519a172dec718fbc9e6600927e17006ce5?width=899",
      alt: "Cluster engagement ring with multiple stones",
    },
    {
      id: "bezel",
      title: "Bezel",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/cb86112fdd740f3bb78bd803a7aa135751de9937?width=728",
      alt: "Bezel set engagement ring",
    },
    {
      id: "hidden-halo",
      title: "Hidden Halo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0be5fd26f5e95bc4cf6f383f4972f17372cc3f98?width=736",
      alt: "Hidden halo engagement ring",
    },
    {
      id: "floral",
      title: "Floral",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/08779eb2d8fe0a83c0c4d82bfeab5f2b606b498d?width=620",
      alt: "Floral design engagement ring",
    },
    {
      id: "celtic",
      title: "Celtic",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ee47f00d037ad8985031404c1c2f619f5f215aa7?width=738",
      alt: "Celtic design engagement ring",
    },
    {
      id: "halo",
      title: "Halo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/571d0eb51d4e94747f07216d12d04af94a156d6a?width=804",
      alt: "Halo engagement ring",
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
    const slidesToShow = 5; // Show 5 rings at a time on desktop
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
            {/* Desktop: Show 5 rings */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-6">
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
        </div>
      </div>
    </section>
  );
}
