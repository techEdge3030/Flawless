import Image from "next/image";

export default function RingStylesSection() {
  const ringStyles = [
    {
      name: "Trilogy",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ada194cfd62bbfbc7fcaa06bbaa45fdf2dafd553?width=658",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/d44c550c786c5dd31a84606ce55baee0fc18d1d8?width=1214",
        "https://api.builder.io/api/v1/image/assets/TEMP/34b9acac2638ae9d2c346ccccc95ad68ff7a60be?width=1250",
        "https://api.builder.io/api/v1/image/assets/TEMP/f258bf9cca6ca64de0cd4a589bbe5ba42b9353b2?width=1265",
      ],
      underlined: true,
    },
    {
      name: "Solitaire",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6da5b7432687e809b74f23583c48ce79096dfc98?width=1070",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/6d9e98c2214e077b8ce57ab5061d3aa94c389c44?width=1023",
      ],
      underlined: true,
    },
    {
      name: "Cluster",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ccd55977c59fe0d90a6241733df3c8eb269f1957?width=1176",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/fcd6801fc2b6c45e32773b23100b521d56afb55f?width=1222",
      ],
      underlined: false,
    },
    {
      name: "Bezel",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b5805d144ffb26184f4475427fa356cef583c464?width=1300",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/d86dd7affd047037187653cfcf39bc930b0b96e8?width=1133",
        "https://api.builder.io/api/v1/image/assets/TEMP/2dcde9430ce16f1d7bdc425b1ae2fd2be45cf3bb?width=1010",
      ],
      underlined: false,
    },
    {
      name: "Hidden Halo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/281cbb67b738917be02d4dc56320f171308a9166?width=1004",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/613c00fdec0bc81f309737405c1a06af29a3cd25?width=1034",
      ],
      underlined: true,
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
            Shop by Engagement Ring Style
          </h2>
          <p className="font-helvetica text-base font-medium text-black leading-[150%] tracking-[-0.176px] max-w-4xl mx-auto">
            Browse our exclusive engagement ring designs by categories and
            explore a range of timeless or modern styles to pair with your
            selected lab-grown or earth-mined diamond. Our engagement rings
            embody over a decade of expertise and uncompromising quality,
            specific only to Hatton Garden Jewellers & Craftsmen.
          </p>
        </div>

        {/* Ring styles grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {ringStyles.map((style, index) => (
            <div key={style.name} className="group cursor-pointer">
              <div className="w-full h-[482px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay images for visual depth */}
                {style.overlayImages.map((overlayImg, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="absolute inset-0 opacity-90"
                    style={{
                      transform: `translate(${imgIndex * -20}px, ${imgIndex * -30}px) ${imgIndex === 1 ? "rotate(-0.846deg)" : ""}`,
                      zIndex: imgIndex + 1,
                    }}
                  >
                    <Image
                      src={overlayImg}
                      alt={`${style.name} detail ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3
                className={`font-hiragino text-[22px] font-semibold text-black text-center leading-[150%] tracking-[-0.242px] ${
                  style.underlined ? "underline" : ""
                }`}
              >
                {style.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
