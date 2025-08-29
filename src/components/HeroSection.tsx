"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2Ff6a6f4fa75f4474f9519dde3fca179e8?format=webp&width=2000",
      alt: "Hands showcasing engagement rings",
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets%2Fdb7cf6075ca848d3bdb7e775ee5e9d74%2Fea67d7d4fe884c37921d3e6f75a10a5a?format=webp&width=2000",
      alt: "Elegant rings on fabric background",
    },
  ];

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600 overflow-hidden">
      {/* Banner Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>
      </div>

      {/* Hover Navigation Areas */}
      <div className="absolute inset-0 flex z-20">
        {/* Left hover area */}
        <div
          onClick={prevSlide}
          className="w-[10%] h-full cursor-pointer relative group"
          aria-label="Previous slide"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Center non-interactive area */}
        <div className="w-[80%] h-full"></div>

        {/* Right hover area */}
        <div
          onClick={nextSlide}
          className="w-[10%] h-full cursor-pointer relative group"
          aria-label="Next slide"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-serif text-[50px] font-normal leading-[150%] tracking-[-0.55px] text-center mb-6 sm:mb-8" style={{ color: '#EDE7E5' }}>
            Love Made Visible ...
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-white text-[20px] leading-[150%] tracking-[-0.22px] text-center font-[Helvetica_Now_Text,_-apple-system,_Roboto,_Helvetica,_sans-serif]">
              <span className="font-bold">
                Handcrafted by our expert Hatton Garden Jewellers,
              </span>
              <span className="font-normal">
                our diamond engagement rings are British heritage, heirloom-quality pieces. Every ring is a promise: exquisitely designed, consciously crafted and perfected to last lifetimes.
Time to share your love story.
              </span>
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/engagement"
              className="bg-white text-black px-8 py-4 text-[16px] font-semibold uppercase leading-[150%] tracking-[0.16px] hover:bg-stone-100 transition-colors duration-300 min-w-[280px] text-center font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              Shop Engagement Rings
            </Link>

            <Link
              href="/book-appointment"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-[16px] font-semibold uppercase leading-[150%] tracking-[0.16px] hover:bg-white hover:text-black transition-colors duration-300 min-w-[280px] text-center font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
