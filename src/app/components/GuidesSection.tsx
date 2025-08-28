import Image from "next/image";

export default function GuidesSection() {
  const guides = [
    {
      title: "How to choose the best Engagement Ring for your partner?",
      description:
        "Choosing the perfect engagement ring is a deeply personal process, and understanding your partner's preferences, lifestyle, and values will ensure you select something they'll treasure forever.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e36a49a11f59986323acf9820705476943d3277f?width=1132",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/ad6018d920bfbaa5046e8e8c8542dfc6a47fe54a?width=1106",
        "https://api.builder.io/api/v1/image/assets/TEMP/e21986906fdc27a21a0af90afda308f23499eee7?width=1380",
        "https://api.builder.io/api/v1/image/assets/TEMP/1ee721a67f4f805e3ee9b71cbe1e737095c1d1a2?width=1878",
      ],
    },
    {
      title: "Our Lab Grown Diamond Guide",
      description:
        "Lab grown diamonds are transforming luxury in the modern era—blending advanced science with responsible elegance.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/45171c45519b839118c24eeaf26b8e8573d069ca?width=1132",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/3108f6a0f194bc91c501655eff46c53b3b1d9ce0?width=1993",
        "https://api.builder.io/api/v1/image/assets/TEMP/24cb130fe7be734bcc38522832ee785cee05c8c6?width=1132",
        "https://api.builder.io/api/v1/image/assets/TEMP/2748ff57b0395def9cbedb2a5e8ba8e7eea7ff65?width=1234",
      ],
    },
    {
      title: "How your Ring is Made",
      description:
        "There is just enough space here for several lines of text. Make sure you get your message across clearly yet concisely.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/aec9809478f8a7667904410324ba8c9669467f7c?width=1132",
      overlayImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/2e013cfbfc5521c21a2d167ce2270c011ee6e2b5?width=1284",
        "https://api.builder.io/api/v1/image/assets/TEMP/9a0cbd38e5105888f7f3af6dfbdb107a6cc7fa82?width=2253",
        "https://api.builder.io/api/v1/image/assets/TEMP/3d605a969daa1d75c58d95425fea41dde0357e7a?width=1540",
        "https://api.builder.io/api/v1/image/assets/TEMP/5dabc03b1d80098334b893a486e0dc5d826b21d4?width=1182",
      ],
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-8">
          <button className="p-2">
            <svg
              width="26"
              height="51"
              viewBox="0 0 26 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-6 transform rotate-90 fill-accent"
            >
              <path
                d="M24.3125 4.25928L5.20703 25.6196L24.2979 47.0112L24.5928 47.3413L24.3018 47.6733L23.0459 49.1079L22.6729 49.5337L22.2959 49.1118L1.625 25.9507L1.32812 25.6177L1.62598 25.2847L22.3125 2.15674L22.6895 1.73486L23.0615 2.16064L24.3164 3.59717L24.6064 3.93018L24.3125 4.25928Z"
                fill="#A39186"
              />
            </svg>
          </button>

          <button className="p-2">
            <svg
              width="26"
              height="51"
              viewBox="0 0 26 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-6 transform -rotate-90 fill-black"
            >
              <path
                d="M1.68982 47.3794L20.806 25.4722L1.70349 3.53271L1.42126 3.20752L1.70056 2.87939L2.95642 1.40869L3.33337 0.968262L3.71423 1.40576L24.3851 25.145L24.6713 25.4741L24.3842 25.8022L3.69763 49.5093L3.31677 49.9458L2.9408 49.5044L1.68591 48.0317L1.40662 47.7036L1.68982 47.3794Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.396px]">
            Browse our Expert Diamond & Jewellery Guides
          </h2>
          <p className="font-helvetica text-xl font-medium text-black leading-[150%] tracking-[-0.22px] max-w-4xl mx-auto">
            Take a quick look at our featured diamond & jewellery resources or
            go to our Complete Guides Page written and curated by our expert
            jewellers in Hatton Garden.
          </p>
        </div>

        {/* Guides grid */}
        <div className="grid grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-full h-[591px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-6">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay images for visual depth */}
                {guide.overlayImages.map((overlayImg, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="absolute opacity-90"
                    style={{
                      transform: `translate(${imgIndex * -25}px, ${imgIndex * -35}px) ${imgIndex === 2 && index === 2 ? "rotate(57.896deg)" : ""}`,
                      zIndex: imgIndex + 1,
                      left: imgIndex * -15,
                      top: imgIndex * -25,
                    }}
                  >
                    <Image
                      src={overlayImg}
                      alt={`${guide.title} detail ${imgIndex + 1}`}
                      width={
                        index === 0 && imgIndex === 0
                          ? 553
                          : index === 0 && imgIndex === 1
                            ? 690
                            : index === 0 && imgIndex === 2
                              ? 939
                              : index === 1 && imgIndex === 0
                                ? 997
                                : index === 1 && imgIndex === 1
                                  ? 566
                                  : index === 1 && imgIndex === 2
                                    ? 617
                                    : index === 2 && imgIndex === 0
                                      ? 642
                                      : index === 2 && imgIndex === 1
                                        ? 1127
                                        : index === 2 && imgIndex === 2
                                          ? 770
                                          : 591
                      }
                      height={
                        index === 0 && imgIndex === 0
                          ? 834
                          : index === 0 && imgIndex === 1
                            ? 1035
                            : index === 0 && imgIndex === 2
                              ? 669
                              : index === 1 && imgIndex === 0
                                ? 665
                                : index === 1 && imgIndex === 1
                                  ? 656
                                  : index === 1 && imgIndex === 2
                                    ? 617
                                    : index === 2 && imgIndex === 0
                                      ? 962
                                      : index === 2 && imgIndex === 1
                                        ? 862
                                        : index === 2 && imgIndex === 2
                                          ? 1155
                                          : 591
                      }
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="font-hiragino text-lg font-semibold text-black leading-[150%] tracking-[-0.198px] mb-4">
                {guide.title}
              </h3>

              <p className="font-helvetica text-xl font-medium text-black leading-[150%] tracking-[-0.22px]">
                {guide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
