import Image from "next/image";
import Link from "next/link";

interface OptionCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

function OptionCard({ title, subtitle, description, buttonText, buttonLink, imageSrc, imageAlt, badge }: OptionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-stone-600 text-white px-3 py-1 text-sm font-medium rounded">
            {badge}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 className="font-serif text-2xl lg:text-3xl text-stone-700 italic font-medium mb-3 leading-tight">
          {title}
        </h3>
        
        <h4 className="text-stone-600 font-semibold text-lg mb-4 uppercase tracking-wide">
          {subtitle}
        </h4>
        
        <p className="text-stone-800 text-base lg:text-lg leading-relaxed mb-6 font-medium">
          {description}
        </p>
        
        <Link
          href={buttonLink}
          className="inline-block bg-stone-800 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-stone-700 transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default function WhatsMoreImportantSection() {
  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight tracking-wide">
            What's more important to you?...
          </h2>
        </div>
        
        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Option 1: Customising Your Own Ring */}
          <OptionCard
            title="Customising Your Own Ring"
            subtitle="Start Designing Your Ring"
            description="Its time to build your dream ring. Start by choosing your favourite engagement ring design then pair it with your ideal diamond or gemstone. Finish by selecting your favourite metal colour. These rings are made to order within 8 weeks."
            buttonText="Start Designing"
            buttonLink="/design-ring"
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/8b413c852bea076224c73850eba9b33ec328c3f1?width=2562"
            imageAlt="Ring being designed with tweezers holding diamond"
            badge="Most Popular"
          />
          
          {/* Option 2: Receiving Your Ring Quickly */}
          <OptionCard
            title="Receiving Your Ring Quickly"
            subtitle="Shop Ready to Ship Rings"
            description="Sometimes love can't wait. These fully finished and heritage hand crafted rings are in stock and ready to ship. Receive your ring fully resized, under 2 weeks."
            buttonText="Shop Ready Rings"
            buttonLink="/ready-to-ship"
            imageSrc="https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F4893974e5ebe4cba8b48247ab973c87b?format=webp&width=800"
            imageAlt="Elegant gift boxes with ribbons and engagement ring"
            badge="Fastest"
          />
          
          {/* Option 3: Choosing a Signature Ring */}
          <OptionCard
            title="Choosing a Signature Ring"
            subtitle="Shop Rings Built by Flawless"
            description="Prefer not to make a hundred tiny decisions? We've combined our most-loved ring designs with hand-selected, exquisite diamonds, so you can entrust our team with curating your one-of-a-kind heirloom. Made to order. Crafted by experts. Completed within 8 weeks."
            buttonText="Browse Collection"
            buttonLink="/signature-rings"
            imageSrc="https://cdn.builder.io/api/v1/image/assets%2F82ac9eba2533469a871410336fa61e14%2F9e4bed91808e4c17881e731e7f64daed?format=webp&width=800"
            imageAlt="Collection of gold engagement rings with various diamond cuts"
            badge="We Select Your Diamond"
          />
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-stone-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Every piece is a testament to British craftsmanship, designed to become a cherished heirloom 
            that tells your unique love story for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}
