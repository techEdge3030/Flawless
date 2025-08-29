import Image from "next/image";

export default function DesignBespokeSection() {
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
            {/* Title first */}
            <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
              Design Your Own Bespoke Ring.
            </h2>

            {/* Introductory text */}
            <div className="mb-8">
              <p className="text-base font-medium text-black leading-[150%] tracking-[-0.176px]">
                Go on a journey to design your ring from scratch, with one of
                our expert jewellers in Hatton Garden, London.
              </p>
            </div>

            {/* Service features list */}
            <div className="space-y-4 mb-12">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base font-medium text-black leading-[150%] tracking-[-0.176px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <button className="bg-[#A39186] text-white px-8 py-4 rounded text-sm font-semibold uppercase tracking-[0.36px] hover:bg-[#8B7F73] transition-colors max-w-[402px]">
                BOOK A COMPLIMENTARY CONSULTATION
              </button>
            </div>

            {/* Trust indicators */}
            <div className="text-center">
              <p className="text-base font-medium text-black leading-[150%] tracking-[-0.176px] mb-4">
                Engagement Rings Loved by thousands worldwide
              </p>

              {/* Google Reviews as elements */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#4285F4] text-lg font-medium">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-[#FFD700]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[#4285F4] text-lg font-medium">1,171 Google reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
