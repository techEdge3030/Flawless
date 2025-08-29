import Image from "next/image";
import Link from "next/link";

export default function WhatsMoreImportantSection() {
  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-700 font-normal leading-tight tracking-wide">
            What&apos;s more important to you?...
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Option 1: Customising Your Own Ring */}
          <div className="relative">
            {/* Title at top */}
            <h3 className="font-serif text-2xl lg:text-3xl text-stone-700 italic font-medium mb-6 leading-tight text-center">
              Customising Your Own Ring
            </h3>

            {/* Image Container */}
            <div className="relative h-80 lg:h-96 overflow-hidden mb-6">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/c9bdf79053068b38353e3c89632fed61bae9f5ae?width=1124"
                alt="Ring being designed with tweezers holding diamond"
                fill
                className="object-cover object-center"
                style={{ transform: 'rotate(10.994deg)' }}
              />
              {/* Most Popular Badge */}
              <div 
                className="absolute top-4 left-4 text-white px-4 py-2 text-sm font-medium rounded"
                style={{ backgroundColor: 'rgba(153, 129, 118, 0.9)' }}
              >
                Most Popular
              </div>
            </div>

            {/* Content */}
            <div className="text-left">
              <p className="text-black text-sm lg:text-base leading-relaxed mb-8 font-medium">
                Its time to build your dream ring. Start by choosing your favourite
                engagement ring design then pair it with your ideal diamond or
                gemstone. Finish by selecting your favourite metal colour. These rings
                are made to order within 8 weeks.
              </p>

              <Link
                href="/design-ring"
                className="inline-flex items-center text-stone-700 font-semibold text-lg hover:text-stone-800 transition-colors duration-300"
              >
                Start Designing Your Ring
                <svg
                  className="ml-2 w-3 h-4"
                  fill="currentColor"
                  viewBox="0 0 9 13"
                >
                  <path d="M0.224965 11.6535L0.680433 11.2741L6.41482 6.50947L0.695125 1.72429L0.239461 1.34394L0.692005 0.959639L1.09275 0.61923L1.41431 0.346123L1.73728 0.616962L8.32635 6.12764L8.78689 6.5119L8.32556 6.89522L1.71933 12.3845L1.39581 12.6547L0.675741 12.0387L0.224965 11.6535Z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Option 2: Receiving Your Ring Quickly */}
          <div className="relative">
            {/* Title at top */}
            <h3 className="font-serif text-2xl lg:text-3xl text-stone-700 italic font-medium mb-6 leading-tight text-center">
              Receiving Your Ring Quickly
            </h3>

            {/* Image Container */}
            <div className="relative h-80 lg:h-96 overflow-hidden mb-6">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F4893974e5ebe4cba8b48247ab973c87b?format=webp&width=800"
                alt="Elegant gift boxes with ribbons and engagement ring"
                fill
                className="object-cover object-center"
              />
              {/* Fastest Badge */}
              <div 
                className="absolute top-4 left-4 text-white px-4 py-2 text-sm font-medium rounded"
                style={{ backgroundColor: 'rgba(153, 129, 118, 0.9)' }}
              >
                Fastest
              </div>
            </div>

            {/* Content */}
            <div className="text-left">
              <p className="text-black text-sm lg:text-base leading-relaxed mb-8 font-medium">
                Sometimes love can&apos;t wait. These fully finished and heritage hand
                crafted rings are in stock and ready to ship. Receive your ring fully
                resized, under 2 weeks.
              </p>

              <Link
                href="/ready-to-ship"
                className="inline-flex items-center text-stone-700 font-semibold text-lg hover:text-stone-800 transition-colors duration-300"
              >
                Shop Ready to Ship Rings
                <svg
                  className="ml-2 w-3 h-4"
                  fill="currentColor"
                  viewBox="0 0 9 13"
                >
                  <path d="M0.224965 11.6535L0.680433 11.2741L6.41482 6.50947L0.695125 1.72429L0.239461 1.34394L0.692005 0.959639L1.09275 0.61923L1.41431 0.346123L1.73728 0.616962L8.32635 6.12764L8.78689 6.5119L8.32556 6.89522L1.71933 12.3845L1.39581 12.6547L0.675741 12.0387L0.224965 11.6535Z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Option 3: Choosing a Curated Ring */}
          <div className="relative">
            {/* Title at top */}
            <h3 className="font-serif text-2xl lg:text-3xl text-stone-700 italic font-medium mb-6 leading-tight text-center">
              Choosing a Curated Ring
            </h3>

            {/* Image Container */}
            <div className="relative h-80 lg:h-96 overflow-hidden mb-6">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F9e4bed91808e4c17881e731e7f64daed?format=webp&width=800"
                alt="Collection of gold engagement rings with various diamond cuts"
                fill
                className="object-cover object-center"
              />
              {/* We Select Your Diamond Badge */}
              <div 
                className="absolute top-4 left-4 text-white px-4 py-2 text-sm font-medium rounded"
                style={{ backgroundColor: 'rgba(153, 129, 118, 0.9)' }}
              >
                We Select Your Diamond
              </div>
            </div>

            {/* Content */}
            <div className="text-left">
              <p className="text-black text-sm lg:text-base leading-relaxed mb-8 font-medium">
                Prefer not to make a hundred tiny decisions? We&apos;ve combined our
                most-loved ring designs with hand-selected, exquisite diamonds, so
                you can entrust our team with curating your one-of-a-kind heirloom.
                Made to order. Crafted by experts. Completed within 8 weeks.
              </p>

              <Link
                href="/signature-rings"
                className="inline-flex items-center text-stone-700 font-semibold text-lg hover:text-stone-800 transition-colors duration-300"
              >
                Shop Curated Collection
                <svg
                  className="ml-2 w-3 h-4"
                  fill="currentColor"
                  viewBox="0 0 9 13"
                >
                  <path d="M0.224965 11.6535L0.680433 11.2741L6.41482 6.50947L0.695125 1.72429L0.239461 1.34394L0.692005 0.959639L1.09275 0.61923L1.41431 0.346123L1.73728 0.616962L8.32635 6.12764L8.78689 6.5119L8.32556 6.89522L1.71933 12.3845L1.39581 12.6547L0.675741 12.0387L0.224965 11.6535Z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
