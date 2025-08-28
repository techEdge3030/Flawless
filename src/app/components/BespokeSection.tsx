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

  const bespokeFeatures = [
    "MADE IN HATTON GARDEN, LONDON",
    "PERSONALISATION MADE EASY",
    "SUSTAINABLE & CONFLICT-FREE DIAMONDS",
    "BESPOKE JEWELLERY PROCESS",
    "YOUR VISION BROUGHT TO LIFE",
    "WARRANTY & AFTER CARE",
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

      {/* What is Bespoke Diamond Jewellery Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-secondary mb-8 tracking-[-0.44px]">
            What is Bespoke Diamond Jewellery
          </h2>

          <p className="font-helvetica text-2xl font-medium text-secondary leading-[168%] tracking-[-0.264px] mb-12">
            The term &apos; bespoke&apos; refers to jewellery designed and
            crafted from scratch. From necklaces to bracelets, engagement rings
            to anniversary gifts, milestone birthdays and more, we offer an
            intimate and personalised service, available both virtually or in
            person. Our team of jewellers in Hatton Garden, London are experts
            at working with customers all over the world to bring their bespoke
            visions to life.
          </p>

          <button className="btn-secondary px-8 py-4 rounded text-lg font-semibold mb-16">
            BOOK A FREE CONSULTATION
          </button>

          {/* Bespoke features with decorative lines */}
          <div className="space-y-8">
            {bespokeFeatures.map((feature, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-helvetica text-2xl font-medium text-secondary leading-[150%] tracking-[-0.264px]">
                      {feature}
                    </p>
                  </div>

                  <div className="flex-1 ml-8">
                    <svg
                      width="783"
                      height="3"
                      viewBox="0 0 784 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.345337 1.19385H783.345H0.345337Z"
                        fill="#806C63"
                      />
                      <path
                        d="M0.345337 1.19385H783.345"
                        stroke="#806C63"
                        strokeWidth="2.4006"
                      />
                    </svg>
                  </div>

                  <div className="ml-4">
                    <svg
                      width="42"
                      height="21"
                      viewBox="0 0 42 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.84534 1.80273L21.3326 16.4102L38.8473 1.81348L39.1647 1.54883L39.484 1.81055L40.6617 2.77344L41.1305 3.15625L40.6656 3.54395L21.652 19.3916L21.3317 19.6592L21.0114 19.3916L2.02502 3.53223L1.56018 3.14355L2.02893 2.76074L3.20862 1.79883L3.52795 1.53809L3.84534 1.80273Z"
                        fill="#806C63"
                        stroke="#806C63"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
