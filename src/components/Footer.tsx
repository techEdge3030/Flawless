import Image from "next/image";

export default function Footer() {
  const customerServiceLinks = [
    "Terms and Conditions",
    "Delivery and Returns",
    "Tax and Duty",
    "Novuna Finance",
    "General FAQs",
    "Privacy Policy",
    "Diamond Education",
  ];

  const aboutLinks = [
    "Our Story",
    "Our Showroom",
    "The Journal",
    "Book a Consultation",
    "Flawless London",
    "Flawless Manchester",
  ];

  const contactInfo = [
    "+44 7518021455",
    "sales@flawlessfinejewelry.com",
    "Mon-Sat | 10:00am - 05:30pm",
    "Sun | 11:00am - 3:30pm",
    "107 Hatton Garden, London EC1N8LY",
  ];

  const socialIcons = [
    {
      name: "Instagram",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a205b472165b65b9119351174452c54abfc06627?width=99",
    },
    {
      name: "TikTok",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/52a032fcb1774b090f3e1965d14574b8a1fb8ee8?width=98",
    },
    {
      name: "X",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/6230645559ebd1539162ef0aa559db972db73069?width=86",
    },
    {
      name: "YouTube",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/420ccfe9839f540f39252a3bf1ffcc63e5dcaece?width=90",
    },
    {
      name: "Facebook",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/83020e919ff4253733c11236f403d33a2813a38d?width=98",
    },
    {
      name: "Pinterest",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/98841c0fb25904db0f143a991c12b5aba664c41c?width=99",
    },
  ];

  const paymentMethods = [
    {
      name: "Visa",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/754df5fd7ce480dc40f58e5fc82f8fa11b6e7263?width=86",
    },
    {
      name: "Mastercard",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/037f5912fe98345ec93350a36df07692afea7a9f?width=85",
    },
    {
      name: "Apple Pay",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7eb081ff2c891acedba54d341922fe283a548fa1?width=85",
    },
    {
      name: "Diners Club",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d6334331b1c47d6909e090cee07bbe3aa2c7ca28?width=112",
    },
    {
      name: "American Express",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/8c424f0ecc03cdabdae24c407e60c834d8281f06?width=81",
    },
    {
      name: "PayPal",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/70717e61dab0df21606bd525fbd5614f33556736?width=94",
    },
  ];

  const certifications = [
    {
      name: "NAJ",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a220ac57efbf83b478188a2afaf79afa57cead01?width=420",
    },
    {
      name: "GIA",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/3e8432fdf02e60c5e10facb60ddb308c148c987e?width=348",
    },
    {
      name: "IGI",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/6027b8334f3ca03d8794ca601bc6a6012d46453e?width=300",
    },
  ];

  return (
    <footer className="bg-accent text-white">
      {/* Useful Tools & Information Section */}
      <div className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {/* Accessibility */}
            <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg">
              <svg className="w-8 h-8 fill-secondary" viewBox="0 0 35 33">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.8661 0.301758C8.41625 0.301758 0.744019 7.53224 0.744019 16.438C0.744019 25.3438 8.41625 32.5743 17.8661 32.5743C27.3164 32.5743 34.9883 25.3438 34.9883 16.438C34.9883 7.53224 27.3164 0.301758 17.8661 0.301758Z"
                />
              </svg>
              <div>
                <span className="text-black font-medium text-sm tracking-[-0.132px]">
                  ACCESSIBILITY
                </span>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg">
              <svg className="w-8 h-8 fill-secondary" viewBox="0 0 38 36">
                <path d="M18.5843 0.552734C8.39132 0.552734 0.119629 8.34816 0.119629 17.9542C0.119629 27.5602 8.39132 35.3556 18.5843 35.3556C28.7773 35.3556 37.0488 27.5602 37.0488 17.9542C37.0343 8.34816 28.7773 0.552734 18.5843 0.552734Z" />
              </svg>
              <div>
                <span className="text-black font-medium text-sm tracking-[-0.132px]">
                  EMAIL US
                </span>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg">
              <svg className="w-8 h-8 fill-secondary" viewBox="0 0 34 32">
                <path d="M17.1327 0.489258C7.95726 0.489258 0.557739 7.53245 0.557739 16.1098C0.557739 24.7569 8.03124 31.7304 17.1327 31.7304C26.308 31.7304 33.7076 24.6872 33.7076 16.1098C33.7076 7.53245 26.308 0.489258 17.1327 0.489258Z" />
              </svg>
              <div>
                <span className="text-black font-medium text-sm tracking-[-0.132px]">
                  CALL US
                </span>
              </div>
            </div>

            {/* Find Us */}
            <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg">
              <svg className="w-8 h-8 fill-secondary" viewBox="0 0 33 32">
                <path d="M16.5434 0.584961C7.50911 0.584961 0.184326 7.488 0.184326 16.0021C0.184326 24.5174 7.50911 31.4193 16.5434 31.4193C25.579 31.4193 32.9025 24.5174 32.9025 16.0021C32.9025 7.488 25.579 0.584961 16.5434 0.584961Z" />
              </svg>
              <div>
                <span className="text-black font-medium text-sm tracking-[-0.132px]">
                  FIND US
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4">
              <span className="font-hiragino text-sm font-semibold text-white tracking-[-0.132px] uppercase">
                BEFORE YOUR APPOINTMENT
              </span>
            </div>
            <h3 className="font-eb-garamond text-3xl italic font-medium text-white tracking-[-0.352px]">
              Useful Tools & Information
            </h3>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
          {/* Customer Service */}
          <div>
            <h4 className="font-hiragino text-base font-semibold text-white tracking-[-0.176px] mb-6 uppercase">
              Customer Service
            </h4>
            <ul className="space-y-4">
              {customerServiceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-helvetica text-sm font-medium text-white leading-[200%] tracking-[-0.154px] hover:text-opacity-80 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-hiragino text-base font-semibold text-white tracking-[-0.176px] mb-6 uppercase">
              About Us
            </h4>
            <ul className="space-y-4">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-helvetica text-sm font-medium text-white leading-[200%] tracking-[-0.154px] hover:text-opacity-80 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-hiragino text-base font-semibold text-white tracking-[-0.176px] mb-6 uppercase">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <p
                  key={info}
                  className="font-helvetica text-sm font-medium text-white leading-[200%] tracking-[-0.154px]"
                >
                  {info}
                </p>
              ))}
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div>
            <h4 className="font-hiragino text-base font-semibold text-white tracking-[-0.176px] mb-6 uppercase">
              Follow Us
            </h4>

            {/* Social Icons */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="font-helvetica text-base font-medium text-white leading-[200%] tracking-[-0.176px] mb-4">
                Join the Community and stay up to date
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 rounded text-black font-medium text-base tracking-[-0.176px]"
                />
                <button className="bg-white text-black px-6 py-3 rounded font-medium text-base tracking-[-0.176px]">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 mt-12 pt-8 border-t border-white border-opacity-20">
          {certifications.map((cert) => (
            <Image
              key={cert.name}
              src={cert.src}
              alt={cert.name}
              width={
                cert.name === "NAJ" ? 210 : cert.name === "GIA" ? 174 : 150
              }
              height={cert.name === "NAJ" ? 118 : cert.name === "GIA" ? 64 : 62}
              className="rounded-lg"
            />
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 mt-8">
          {paymentMethods.map((payment) => (
            <Image
              key={payment.name}
              src={payment.src}
              alt={payment.name}
              width={payment.name === "Diners Club" ? 56 : 43}
              height={payment.name === "Diners Club" ? 26 : 29}
              className="rounded border border-black border-opacity-30"
            />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="font-medium text-xs text-white leading-[150%] tracking-[-0.099px]">
            © 2025 Flawless Fine Jewellery LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
