import Image from "next/image";

export default function AboutUsSection() {
  const trustFeatures = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/037f5912fe98345ec93350a36df07692afea7a9f?width=85",
      text: "30 Day Returns",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a56b4c3e5efe8b9c7e3cfbcf2312c4f8dd010431?width=1389",
      text: "Sustainable & Responsible",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d6334331b1c47d6909e090cee07bbe3aa2c7ca28?width=112",
      text: "Free Uk Delivery",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8c424f0ecc03cdabdae24c407e60c834d8281f06?width=81",
      text: "GIA & IGI Certified Stones",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/70717e61dab0df21606bd525fbd5614f33556736?width=94",
      text: "Lifetime Guarantee",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a9a05999975143a4e899d35fa08993980e7577dd?width=410",
      text: "Free Ring Resizing",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/192933b5656a48c4dbb23f9cb0fcbb5f0c43c5d2?width=294",
      text: "Aftercare",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4cb4ca9a51f99218730ceb1c78a3983340a8ed12?width=340",
      text: "London Heritage Craftspeople",
    },
  ];

  return (
    <div>
      {/* Trust Features Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 text-center">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    {/* Trust icons would go here - simplified for brevity */}
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="#806C63"
                      opacity="0.1"
                    />
                    <circle cx="32" cy="32" r="20" fill="#806C63" />
                  </svg>
                </div>
                <p className="font-helvetica text-sm font-normal text-black leading-[150%] tracking-[-0.132px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Us Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-16">
          {/* Left side - Image */}
          <div className="w-[856px] h-[665px] relative overflow-hidden rounded-lg">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/d1b2e453c078ba687dd9092c69b01cac22b501c7?width=1712"
              alt="Flawless Fine Jewellery workshop"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="font-hiragino text-base font-semibold text-black tracking-[-0.176px] uppercase block mb-4">
                ABOUT US
              </span>
            </div>

            <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-8 tracking-[-0.44px]">
              Where it all begins...
            </h2>

            <div className="space-y-6 mb-12">
              <p className="font-helvetica text-xl font-medium text-black leading-[134%] tracking-[-0.22px]">
                Nestled in the heart of Hatton Garden, Flawless Fine Jewellery
                stands as a testament to the dedication to fine jewellery making
                in London&apos;s historic jewellery quarter. Since 2014 our
                journey has been one of refining our craft to offer
                uncompromising quality, assembling a team of experts and
                enhancing our customer service.
              </p>

              <p className="font-helvetica text-xl font-medium text-black leading-[134%] tracking-[-0.22px]">
                As reputable Hatton Garden jewellers, we pride ourselves on
                offering an exclusive collection of natural and lab-grown
                diamonds, as well as a variety of hand selected gemstones. Our
                commitment to ethical sourcing ensures that all our diamonds are
                conflict-free, providing our customers with peace of mind.
              </p>

              <p className="font-helvetica text-xl font-medium text-black leading-[134%] tracking-[-0.22px]">
                Flawless is the fine jeweller for modern romantics who value
                craftsmanship, sustainability, and a personal experience. Every
                ring is exclusively handmade in Britain using heritage
                techniques. We strive to be the home of timeless designs,
                ethical luxury, and a Hatton Garden jeweller you can trust for
                life.
              </p>

              <p className="font-helvetica text-xl font-medium text-black leading-[134%] tracking-[-0.22px]">
                Whether you&apos;re seeking a traditional diamond solitaire ring
                or a unique gemstone engagement ring, our team is dedicated to
                bringing your vision to life, your love made visible.
              </p>
            </div>

            {/* CTA Button */}
            <button className="btn-primary px-12 py-4 rounded text-lg font-semibold">
              LEARN ABOUT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
