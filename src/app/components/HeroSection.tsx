import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Hero background images */}
      <div className="relative w-full h-[597px] overflow-hidden">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/dfff33730379307c87037c1d8e296f0a2e7787fe?width=3848"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlapping decorative images */}
        <div className="absolute -left-[34px] -top-[1134px] w-[1974px] h-[2891px] transform rotate-[-179.599deg]">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/c5173894e9d42215ad22688ad40e6aeebc33903c?width=3948"
            alt="Decorative element"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute -left-[11px] -top-[379px] w-[1281px] h-[1934px] transform rotate-[-90.054deg]">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/8b413c852bea076224c73850eba9b33ec328c3f1?width=2562"
            alt="Product showcase"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute top-[585px] left-1/2 transform -translate-x-1/2 flex gap-8">
        <button className="w-[346px] h-[55px] btn-primary rounded">
          <span className="font-hiragino font-semibold text-base tracking-[0.16px]">
            SHOP ENGAGEMENT RINGS
          </span>
        </button>

        <button className="w-[345px] h-[57px] btn-secondary rounded">
          <span className="font-hiragino font-semibold text-base tracking-[0.16px]">
            BOOK YOUR APPOINTMENT
          </span>
        </button>
      </div>
    </section>
  );
}
