import Image from "next/image";

export default function ProductSelection() {
  return (
    <section className="py-16 px-8">
      {/* Section title */}
      <div className="text-center mb-12">
        <h2 className="font-eb-garamond text-4xl italic font-medium text-black mb-6 tracking-[0.4px]">
          What&apos;s more important to you?...
        </h2>
      </div>

      {/* Three product options */}
      <div className="flex justify-center gap-8 mb-16">
        {/* Customising Your Own Ring */}
        <div className="relative group">
          <div className="w-[610px] h-[563px] relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#D9D9D9]"></div>
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/58b0b47513c8b51c2806806e732989102fcbffa2?width=1220"
              alt="Custom ring design"
              fill
              className="object-cover"
            />

            {/* Overlapping images for depth */}
            <div className="absolute -left-[25px] -top-[131px] w-[704px] h-[793px]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/6043e00df0da2a0993738c6f4ccde7d695bae9be?width=1408"
                alt="Ring detail"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -left-[233px] -top-[608px] w-[849px] h-[1274px] transform rotate-[-1.121deg]">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/19c20a17194f2470708ffffe81ce7f94eac99aa3?width=1698"
                alt="Ring showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Most Popular badge */}
          <div className="absolute top-[21px] left-[18px] bg-black text-white px-4 py-2 rounded text-sm font-semibold">
            Most Popular
          </div>

          {/* Title and description */}
          <div className="mt-8">
            <h3 className="font-eb-garamond text-[32px] italic font-medium text-primary text-center mb-4 tracking-[0.32px]">
              Customising Your Own Ring
            </h3>
            <p className="font-helvetica-neue text-lg font-medium text-black leading-[150%] tracking-[-0.198px] max-w-[570px]">
              Its time to build your dream ring. Start by choosing your
              favourite engagement ring design then pair it with your ideal
              diamond or gemstone. Finish by selecting your favourite metal
              colour. These rings are made to order within 8 weeks.
            </p>
            <button className="mt-6 text-primary font-hiragino font-semibold text-base tracking-[-0.176px] underline">
              Start Designing Your Ring →
            </button>
          </div>
        </div>

        {/* Receiving Your Ring Quickly */}
        <div className="relative group">
          <div className="w-[610px] h-[563px] relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#D9D9D9]"></div>
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/818b025707c0f1cf194acbc1cdcdd505eb452985?width=1220"
              alt="Ready to ship rings"
              fill
              className="object-cover"
            />

            {/* Fastest badge */}
            <div className="absolute top-[22px] left-[28px] bg-black text-white px-4 py-2 rounded flex items-center gap-2">
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3692 25.9999C13.1743 25.9989 13.9717 25.9303 14.7614 25.794C15.5514 25.658 16.3201 25.457 17.0672 25.1909C17.8136 24.9248 18.5251 24.5985 19.2017 24.2121C19.8783 23.8253 20.5076 23.3855 21.0895 22.8927C21.6715 22.3999 22.1955 21.8625 22.6617 21.2807C23.1278 20.6988 23.5276 20.0833 23.8612 19.4342C24.1947 18.785 24.4561 18.1134 24.6455 17.4194C24.8349 16.7261 24.9483 16.0229 24.9859 15.3099C25.0239 14.5972 24.9851 13.8877 24.8698 13.1814C24.7547 12.4752 24.5656 11.7849 24.3022 11.1106C24.0385 10.4363 23.7051 9.79038 23.3022 9.17284C22.8997 8.55496 22.4349 7.9765 21.9078 7.43747C21.3803 6.8981 20.8003 6.40801 20.1678 5.9672C19.5352 5.52604 18.8611 5.14199 18.1454 4.81504C17.4297 4.48808 16.686 4.22417 15.9143 4.02331C15.1414 3.82177 14.3546 3.68718 13.5538 3.61955V2.03915H16.9695V-6.10352e-05H7.84378V2.03915H11.2537V3.63994C10.4632 3.71811 9.68789 3.86085 8.9277 4.06817C8.1679 4.27549 7.43646 4.54399 6.7334 4.87367C6.03071 5.20334 5.36867 5.58858 4.74725 6.02939C4.12622 6.46986 3.55714 6.95791 3.04 7.49355C2.52324 8.02884 2.06705 8.60254 1.67143 9.21465C1.27658 9.82641 0.949581 10.4657 0.690435 11.1325C0.431673 11.7994 0.245173 12.4816 0.130934 13.1794C0.0166952 13.8771 -0.0227886 14.5783 0.0124798 15.2828C0.0469814 15.987 0.156236 16.6823 0.340245 17.3685C0.52272 18.0546 0.776306 18.7196 1.101 19.3633C1.42532 20.007 1.81481 20.6181 2.26946 21.1966C2.72373 21.775 3.23531 22.311 3.80421 22.8045C4.37272 23.2973 4.988 23.7388 5.65004 24.129C6.31286 24.5195 7.01075 24.8514 7.74372 25.1246C8.47669 25.3982 9.23208 25.6086 10.0099 25.7557C10.7877 25.9026 11.5742 25.984 12.3692 25.9999Z"
                  fill="white"
                />
                <path
                  d="M19.1201 19.2653L13.5883 14.361V9.44644H11.2882V15.2072L17.4928 20.708L19.1201 19.2653Z"
                  fill="white"
                />
              </svg>
              <span className="font-helvetica font-medium text-base tracking-[-0.176px]">
                Fastest
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-eb-garamond text-[32px] italic font-medium text-primary text-center mb-4 tracking-[0.32px]">
              Receiving Your Ring Quickly
            </h3>
            <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] max-w-[552px]">
              Sometimes love can&apos;t wait. These fully finished and heritage hand
              crafted rings are in stock and ready to ship. Receive your ring
              fully resized, under 2 weeks.
            </p>
            <button className="mt-6 text-primary font-hiragino font-semibold text-base tracking-[-0.176px] underline">
              Shop Ready to Ship Rings →
            </button>
          </div>
        </div>

        {/* Choosing a Signature Ring */}
        <div className="relative group">
          <div className="w-[610px] h-[563px] relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[#D9D9D9]"></div>
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/b632da93269754de596f4b0a9dfa4f2c66f2d289?width=1520"
              alt="Signature rings"
              fill
              className="object-cover"
            />

            {/* We Select Your Diamond badge */}
            <div className="absolute top-[21px] left-[18px] bg-black text-white px-4 py-2 rounded text-sm font-semibold">
              We Select Your Diamond
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-eb-garamond text-[32px] italic font-medium text-primary text-center mb-4 tracking-[0.32px]">
              Choosing a Signature Ring
            </h3>
            <p className="font-helvetica text-lg font-medium text-black leading-[150%] tracking-[-0.198px] max-w-[566px]">
              Prefer not to make a hundred tiny decisions? We&apos;ve combined our
              most-loved ring designs with hand-selected, exquisite diamonds, so
              you can entrust our team with curating your one-of-a-kind
              heirloom.Made to order. Crafted by experts. Completed within 8
              weeks.
            </p>
            <button className="mt-6 text-primary font-hiragino font-semibold text-base tracking-[-0.176px] underline">
              Shop Rings Built by Flawless →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
