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

        {/* Collections grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {collections.map((collection, index) => (
            <div key={collection.name} className="group cursor-pointer">
              <div className="w-full h-[576px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay images for visual depth */}
                {collection.overlayImages.map((overlayImg, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="absolute"
                    style={{
                      transform: `translate(${imgIndex * -15}px, ${imgIndex * -25}px) ${imgIndex === 2 ? "rotate(-170.078deg)" : ""}`,
                      zIndex: imgIndex + 1,
                      left: imgIndex * -10,
                      top: imgIndex * -20,
                    }}
                  >
                    <Image
                      src={overlayImg}
                      alt={`${collection.name} detail ${imgIndex + 1}`}
                      width={imgIndex === 0 ? 420 : imgIndex === 1 ? 907 : 409}
                      height={
                        imgIndex === 0 ? 551 : imgIndex === 1 ? 1360 : 576
                      }
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="font-hiragino text-[22px] font-semibold text-black text-center leading-[150%] tracking-[0.22px]">
                {collection.name}
              </h3>
            </div>
          ))}
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
