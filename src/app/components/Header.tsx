import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[124px] relative shadow-lg">
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/62d49e49544a557dbad050a540b24f03f2200502?width=3840"
        alt="Header background"
        fill
        className="object-cover"
        priority
      />

      {/* Header content overlay */}
      <div className="absolute inset-0 flex items-center justify-between px-8">
        {/* Logo/Navigation area */}
        <div className="flex items-center">
          <div className="text-xl font-bold text-primary">
            Hatton Garden Jewellers
          </div>
        </div>

        {/* Book Appointment button */}
        <div className="absolute right-8 top-[63px] w-[199px] h-[41px]">
          <button className="w-full h-full btn-primary rounded text-sm">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
