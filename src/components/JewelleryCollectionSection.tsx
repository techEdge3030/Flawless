import Image from "next/image";
import React from "react";

export default function JewelleryCollectionSection() {
  const collections = [
    {
      name: "Engagement Rings",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/16ed31e4e075f6ce9a18bbef0964305656dfd5b0?width=803",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/86453644248c168a7f517d5dbc37042de8fef1da?width=839",
        "https://api.builder.io/api/v1/image/assets/TEMP/501c32165341dbc63b4e8000f1ee73b045cb2943?width=817",
      ],
    },
    {
      name: "Wedding Rings",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6f8fcad43172f2ec937885e62a6c57070a435633?width=803",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/36b590ca832ef990ca074e428a0c007c8c14607d?width=880",
        "https://api.builder.io/api/v1/image/assets/TEMP/ae682195825d7fa22f29fde2aa766e15cd73524c?width=1814",
        "https://api.builder.io/api/v1/image/assets/TEMP/7c04e3f7e95bae8e4e34a8db7e5063ed1a663b68?width=1093",
      ],
    },
    {
      name: "Necklaces",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d3a7cb6b1ff7abf12d4a4057f236aaf31f21c153?width=803",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/35c1bc2448f6c424d0accfc77abd8b969a9f87d8?width=857",
      ],
    },
    {
      name: "Bracelets",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9f477a64986008b15ae0744e0eaec0e072792e9c?width=803",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/378a7ec6009f02f71ccd120e19de44ddba71b258?width=1004",
        "https://api.builder.io/api/v1/image/assets/TEMP/b6d4ee4e9386211729a3b94bdc84ecdb357ae130?width=1013",
        "https://api.builder.io/api/v1/image/assets/TEMP/0939f898bbaec7a08ea0525211657421a2c5a33a?width=864",
      ],
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
            Shop Jewellery
          </h2>
          <p className="font-helvetica text-xl font-medium text-secondary leading-[150%] tracking-[-0.22px] max-w-5xl mx-auto">
            Our collection of jewellery features stunning rings,{" "}
            <span className="text-secondary">wedding bands</span>,{" "}
            <span className="text-secondary">pendants</span>,{" "}
            <span className="text-secondary">bracelets</span> and more, all
            crafted with the finest diamonds and heritage techniques.
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
