import Image from "next/image";

export default function BespokeSection() {
  const serviceFeatures = [
    "A tailored experience in our calm and inviting location in Hatton Garden.",
    "A showcase of unique lab-grown or earth-mined diamonds and coloured gemstones",
    "Education on diamond or gemstone quality, size, certification and prices.",
    "A glimpse into our exquisite range of ring designs to go pair with your preferred gemstone.",
    "Guidance in designing your very own custom ring design or piece of jewellery.",
    "Discussing time frames, delivery options, payment options and aftercare services",
  ];

  return (
    <div>
      {/* Design Your Own Bespoke Ring Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-16">
          {/* Left side - Image */}
          <div className="w-[727px] h-[848px] relative overflow-hidden rounded-lg bg-[#D9D9D9]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/6ac8fef42dd4f9dfac95b896905f1dfc0c0d8faf?width=2676"
              alt="Bespoke ring design process"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="font-hiragino text-base font-semibold text-black tracking-[-0.176px] block mb-4">
                Go on a journey to design your ring from scratch, with one of
                our expert jewellers in Hatton Garden, London.
              </span>
            </div>

            <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-8 tracking-[-0.44px]">
              Design Your Own Bespoke Ring.
            </h2>

            {/* Service features list */}
            <div className="space-y-4 mb-12">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-helvetica text-[22px] font-medium text-black leading-[150%] tracking-[-0.242px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="btn-primary px-12 py-4 rounded text-lg font-semibold mb-8">
              BOOK A COMPLIMENTARY CONSULTATION
            </button>

            {/* Trust indicators */}
            <div className="text-center">
              <p className="font-helvetica text-xl font-medium text-black leading-[150%] tracking-[-0.22px] mb-4">
                Engagement Rings Loved by thousands worldwide
              </p>
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/7f4329e1342426032e18455e40ab3c4efa4cb8eb?width=810"
                alt="Trust indicators"
                width={405}
                height={51}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
