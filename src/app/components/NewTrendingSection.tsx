import Image from "next/image";

export default function NewTrendingSection() {
  const trendingItems = [
    {
      name: "Toi et Moi bbf",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/41708f5e26e2fbe444cf8cb1a85d0d43afb1f297?width=1293",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/5e1a4be4e1287d6aa39a9256c5197aef1efcc458?width=1211",
        "https://api.builder.io/api/v1/image/assets/TEMP/83dd22769310e834cc4bd3e355d32d53666f39e8?width=630",
      ],
    },
    {
      name: "Marquise Diamonds",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=624",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/410f991cdf411a59b1210b74a877078a16b9e8cc?width=1048",
      ],
    },
    {
      name: "Pink Diamond Morning Star",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/eb6c104d8ba08b83785da235ba0c7f87d5a55062?width=674",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/98cdc4e5ebc340922a2c8e5a85ab57eb2f8ad290?width=1146",
      ],
    },
    {
      name: "Elongated Cushion Cuts",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d8b23fc844969be7d2cfeb54e478749004767002?width=634",
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="font-hiragino text-lg font-semibold text-black tracking-[1.26px] uppercase block mb-4">
            SHOP
          </span>
          <h2 className="font-eb-garamond text-[38px] italic font-medium text-black mb-6 tracking-[-0.418px]">
            What&apos;s New & Trending?
          </h2>
          <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] max-w-md">
            A space to find the latest designs, encounter the most loved diamond
            rings and browse enchanting coloured gemstone collections.
          </p>
        </div>

        {/* Trending items grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {trendingItems.map((item, index) => (
            <div key={item.name} className="group cursor-pointer">
              <div className="w-full h-[451px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4">
                {index === 0 && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {index === 1 && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {index === 2 && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {index === 3 && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {/* Overlay images for visual depth */}
                {item.overlayImages?.map((overlayImg, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="absolute"
                    style={{
                      transform: `translate(${imgIndex * -30}px, ${imgIndex * -40}px)`,
                      zIndex: imgIndex + 1,
                      left: imgIndex * -20,
                      top: imgIndex * -30,
                    }}
                  >
                    <Image
                      src={overlayImg}
                      alt={`${item.name} detail ${imgIndex + 1}`}
                      width={index === 0 ? 606 : index === 1 ? 524 : 573}
                      height={index === 0 ? 933 : index === 1 ? 716 : 740}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="font-eb-garamond text-[26px] font-normal text-black leading-[150%] tracking-[-0.286px]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Book Consultation button */}
        <div className="text-center">
          <button className="btn-secondary px-8 py-4 rounded text-lg font-semibold">
            BOOK A CONSULTATION
          </button>
        </div>
      </div>

      {/* Hero section overlay with background */}
      <div className="relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="relative z-10 text-center py-20 text-white">
          <h2 className="font-eb-garamond text-5xl font-normal leading-[150%] tracking-[-0.528px] mb-6">
            Love Made Visible ...
          </h2>
          <p className="font-helvetica text-[22px] font-medium leading-[150%] tracking-[-0.242px] max-w-3xl mx-auto">
            <span className="font-bold">
              Handcrafted by our expert Hatton Garden Jewellers,
            </span>{" "}
            our diamond engagement rings are British heritage, heirloom-quality
            pieces. Every ring is a promise: exquisitely designed, consciously
            crafted and perfected to last lifetimes. Time to share your love
            story.
          </p>
        </div>
      </div>
    </section>
  );
}
