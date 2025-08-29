"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "GBP",
    flag: "https://flagcdn.com/w80/gb.png"
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "GBP", flag: "https://flagcdn.com/w80/gb.png" },
    { code: "USD", flag: "https://flagcdn.com/w80/us.png" },
    { code: "JPY", flag: "https://flagcdn.com/w80/jp.png" },
    { code: "CNY", flag: "https://flagcdn.com/w80/cn.png" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="relative w-full h-[124px] shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/62d49e49544a557dbad050a540b24f03f2200502?width=3840"
          alt="Header background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Top Bar with Hatton Garden Jewellers */}
        <div className="bg-[#A39186] text-white text-center py-2 text-sm font-medium font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]">
          Hatton Garden Jewellers
        </div>

        {/* Main Navigation */}
        <div className="flex-1 flex items-center justify-between px-4 lg:px-8 bg-white">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-[20px] font-semibold text-black tracking-[6px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              FLAWLESS
            </Link>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/engagement"
              className="text-black hover:text-gray-600 font-semibold text-[12px] uppercase tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              ENGAGEMENT
            </Link>
            <Link
              href="/wedding"
              className="text-black hover:text-gray-600 font-semibold text-[12px] uppercase tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              WEDDING
            </Link>
            <Link
              href="/jewellery"
              className="text-black hover:text-gray-600 font-semibold text-[12px] uppercase tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              JEWELLERY
            </Link>
            <Link
              href="/diamonds"
              className="text-black hover:text-gray-600 font-semibold text-[12px] uppercase tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              DIAMONDS
            </Link>
            <Link
              href="/gemstone"
              className="text-black hover:text-gray-600 font-semibold text-[12px] uppercase tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              GEMSTONE
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-gray-600 font-semibold text-[12px] uppercase tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]"
            >
              ABOUT
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center">
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Search"
            >
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/05703fbdc8a4905144e22af2e571bbc6563716dc?width=64"
                alt="Search"
                width={32}
                height={27}
                className="w-8 h-[27px]"
              />
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Account */}
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/1b694fb0757a5285d91941d0420b2296fb94c9f0?width=46"
                alt="Account"
                width={23}
                height={30}
                className="w-[23px] h-[30px]"
              />
              <span className="text-[12px] text-black font-semibold tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif] hidden md:block">
                Account
              </span>
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Book Appointment */}
            <Link
              href="/book-appointment"
              className="bg-[#A39186] text-white px-4 py-2 text-[12px] font-semibold tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif] hover:bg-[#8B7F73] transition-colors hidden sm:flex items-center rounded"
            >
              Book Appointment
            </Link>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 mx-2 hidden sm:block"></div>

            {/* Wishlist */}
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/ab0b3b8045bac3bdcc44bf73f8452471a9df899b?width=54"
                alt="Wishlist"
                width={27}
                height={24}
                className="w-[27px] h-6"
              />
              <span className="text-[12px] text-black font-semibold tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif] hidden lg:block">
                Wishlist
              </span>
            </button>


            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <Image
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.code}
                  width={32}
                  height={32}
                  className="w-6 h-6 rounded-full object-cover border border-gray-200"
                  quality={95}
                />
                <span className="text-[12px] text-black font-semibold tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]">
                  {selectedLanguage.code}
                </span>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-[10px] h-[5px] transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M1.31494 0.316406L1.65381 0.636719L5.99756 4.73438L10.3481 0.639648L10.687 0.319336L11.0298 0.635742L11.3394 0.921875L11.7339 1.28613L11.3433 1.65332L6.33936 6.36426L5.99658 6.6875L5.65381 6.36328L0.657715 1.64941L0.26709 1.28125L0.661621 0.917969L0.972168 0.631836L1.31494 0.316406Z"
                    fill="#403526"
                    stroke="#403526"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] overflow-hidden">
                  {languages.map((language, index) => (
                    <div
                      key={language.code}
                      className={`
                        block w-full px-4 py-3 text-left cursor-pointer
                        hover:bg-gray-100 transition-colors duration-150 ease-in-out
                        ${index === 0 ? 'rounded-t-lg' : ''}
                        ${index === languages.length - 1 ? 'rounded-b-lg' : ''}
                      `}
                      onClick={() => {
                        setSelectedLanguage(language);
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center space-x-3 pointer-events-none">
                        <Image
                          src={language.flag}
                          alt={language.code}
                          width={32}
                          height={32}
                          className="w-6 h-6 rounded-full object-cover border border-gray-200"
                          quality={95}
                        />
                        <span className="text-[12px] text-black font-semibold tracking-[0.36px] font-[Hiragino_Sans_GB,_-apple-system,_Roboto,_Helvetica,_sans-serif]">
                          {language.code}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded ml-2"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
