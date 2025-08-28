import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Left image - hands with rings */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/a56b4c3e5efe8b9c7e3cfbcf2312c4f8dd010431?width=1389"
            alt="Hands showing engagement rings"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>

        {/* Right image - additional ring showcase */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/1b9a1aee46dc43e6f0f28779037ddb8845972e29?width=1658"
            alt="Ring showcase"
            fill
            className="object-cover object-center opacity-30"
          />
        </div>

        {/* Center overlay image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/1b3e7fd22e3325ea58eaeaec5c7232fe8b232e91?width=1418"
            alt="Featured ring"
            fill
            className="object-cover object-center opacity-50"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-stone-200 mb-6 sm:mb-8 leading-tight tracking-tight">
            Love Made Visible ...
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-wide">
              <span className="font-bold">
                Handcrafted by our expert Hatton Garden Jewellers,
              </span>{" "}
              <span className="font-medium">
                our diamond engagement rings are British heritage,
                heirloom-quality pieces. Every ring is a promise: exquisitely
                designed, consciously crafted and perfected to last lifetimes.
              </span>
            </p>
            <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 font-medium">
              Time to share your love story.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/engagement"
              className="bg-white text-black px-8 py-4 text-base font-semibold uppercase tracking-wide hover:bg-stone-100 transition-colors duration-300 min-w-[280px] text-center"
            >
              Shop Engagement Rings
            </Link>

            <Link
              href="/book-appointment"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-base font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-300 min-w-[280px] text-center"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
