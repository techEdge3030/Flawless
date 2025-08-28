import Image from "next/image";

export default function ColoredDiamondsSection() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
            Rare Stones for Unique Love Stories
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Fancy Coloured Diamond Rings */}
          <div>
            <div className="w-full h-[403px] relative overflow-hidden rounded-lg mb-8">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e50e9ea4bfb3a1ae6ccdb28fff6a6fda51a27b2?width=1590"
                alt="Fancy Coloured Diamond Rings"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-helvetica text-4xl font-normal text-black leading-[150%] tracking-[-0.396px] mb-6">
              Fancy Coloured Diamond Rings
            </h3>

            <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] mb-8">
              Our collection of jewellery features stunning engagement rings,
              wedding bands, pendants, bracelets and more, all crafted with the
              finest diamonds and gemstones.
            </p>

            <div className="w-full h-[70px] bg-light rounded-lg flex items-center justify-center">
              <button className="font-hiragino text-lg font-semibold text-black tracking-[-0.198px]">
                SHOP COLOURED DIAMOND RINGS
              </button>
            </div>
          </div>

          {/* Gemstone Engagement Rings */}
          <div>
            <div className="w-full h-[403px] relative overflow-hidden rounded-lg mb-8">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/893e57f960af874d2679fb2bcd37f840ea18e145?width=1588"
                alt="Gemstone Engagement Rings"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-helvetica text-4xl font-normal text-black leading-[150%] tracking-[-0.396px] mb-6">
              Gemstone Engagement Rings
            </h3>

            <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] mb-8">
              Our Hatton Garden jewellers have endeavoured to partner only with
              responsible and sustainable gemstone suppliers to help us source
              truly remarkable pieces worthy of your love story.
            </p>

            <div className="w-full h-[70px] bg-light rounded-lg flex items-center justify-center">
              <button className="font-hiragino text-lg font-semibold text-black tracking-[-0.198px]">
                SHOP GEMSTONE ENGAGEMENT RINGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
