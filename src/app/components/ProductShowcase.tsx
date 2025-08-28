import Image from "next/image";

interface ProductShowcaseProps {
  name: string;
  price: string;
  image: string;
  overlayImages?: string[];
}

export default function ProductShowcase({
  name,
  price,
  image,
  overlayImages = [],
}: ProductShowcaseProps) {
  return (
    <div className="group cursor-pointer">
      <div className="w-[346px] h-[474px] relative overflow-hidden rounded-lg bg-[#D9D9D9] mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay images for visual depth */}
        {overlayImages.map((overlayImg, imgIndex) => (
          <div
            key={imgIndex}
            className="absolute"
            style={{
              transform: `translate(${imgIndex * -25}px, ${imgIndex * -35}px)`,
              zIndex: imgIndex + 1,
              left: imgIndex * -15,
              top: imgIndex * -25,
            }}
          >
            <Image
              src={overlayImg}
              alt={`${name} detail ${imgIndex + 1}`}
              width={400}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="font-eb-garamond text-xl font-normal text-black leading-[150%] tracking-[-0.22px] mb-2">
          {name}
        </h3>
        <p className="font-helvetica text-base font-medium text-black tracking-[-0.176px]">
          {price}
        </p>
      </div>
    </div>
  );
}
