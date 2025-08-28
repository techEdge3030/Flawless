import Image from 'next/image';

export default function DiamondShapesSection() {
  const diamondShapes = [
    { name: 'Princess', image: 'https://api.builder.io/api/v1/image/assets/TEMP/e3d1bb81fa85289460b8aebab192735c269412ba?width=284' },
    { name: 'Round', image: 'https://api.builder.io/api/v1/image/assets/TEMP/3b4dafc2710104af8156637db913a023a22ebe98?width=278' },
    { name: 'Emerald', image: 'https://api.builder.io/api/v1/image/assets/TEMP/7bf7eee2190a787ca7c6018118b484761c89d46e?width=283' },
    { name: 'Oval', image: 'https://api.builder.io/api/v1/image/assets/TEMP/dd49b988c09e91a15e14def700456b9bc01bff39?width=284' },
    { name: 'Radiant', image: 'https://api.builder.io/api/v1/image/assets/TEMP/a9bcd636bd52fef806b92c60267cf9fee9535d92?width=276' },
    { name: 'Pear', image: 'https://api.builder.io/api/v1/image/assets/TEMP/11937282582d2c8f59acb5ae2455f4c0e5351c04?width=270' },
    { name: 'Cushion', image: 'https://api.builder.io/api/v1/image/assets/TEMP/cfa39929805c97c42fc67c08f487924284daccb7?width=280' },
    { name: 'Marquise', image: 'https://api.builder.io/api/v1/image/assets/TEMP/6495eb8bfce1c089ba39bdbd67a0a5d68bc0ebfe?width=286' },
    { name: 'Asscher', image: 'https://api.builder.io/api/v1/image/assets/TEMP/f1148c0a38258bc9d07567e9c8119f1bad7c0048?width=284' },
    { name: 'Elongated Cushion', image: 'https://api.builder.io/api/v1/image/assets/TEMP/e575cdb7afeda888cb28fcf850781a2c2f263a7c?width=284' }
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[-0.44px]">
            Shop by Diamond Shape
          </h2>
        </div>

        {/* Diamond shapes grid */}
        <div className="grid grid-cols-5 gap-12 justify-items-center">
          {diamondShapes.map((shape) => (
            <div key={shape.name} className="group cursor-pointer text-center">
              <div className="w-[140px] h-[140px] relative mb-4 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={shape.image}
                  alt={shape.name}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="font-helvetica text-lg font-medium text-black tracking-[-0.198px]">
                {shape.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
