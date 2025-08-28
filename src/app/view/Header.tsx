import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
        <div className="bg-stone-600 text-white text-center py-3 text-sm font-medium">
          Hatton Garden Jewellers
        </div>

        {/* Main Navigation */}
        <div className="flex-1 flex items-center justify-between px-4 lg:px-8 bg-white">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-black tracking-wider"
            >
              FLAWLESS
            </Link>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/engagement"
              className="text-black hover:text-gray-600 font-medium text-sm uppercase tracking-wide"
            >
              ENGAGEMENT
            </Link>
            <Link
              href="/wedding"
              className="text-black hover:text-gray-600 font-medium text-sm uppercase tracking-wide"
            >
              WEDDING
            </Link>
            <Link
              href="/jewellery"
              className="text-black hover:text-gray-600 font-medium text-sm uppercase tracking-wide"
            >
              JEWELLERY
            </Link>
            <Link
              href="/diamonds"
              className="text-black hover:text-gray-600 font-medium text-sm uppercase tracking-wide"
            >
              DIAMONDS
            </Link>
            <Link
              href="/gemstone"
              className="text-black hover:text-gray-600 font-medium text-sm uppercase tracking-wide"
            >
              GEMSTONE
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-gray-600 font-medium text-sm uppercase tracking-wide"
            >
              ABOUT
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Account */}
            <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm text-black hidden md:block">
                Account
              </span>
            </button>

            {/* Book Appointment */}
            <Link
              href="/book-appointment"
              className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors hidden sm:block"
            >
              Book Appointment
            </Link>

            {/* Wishlist */}
            <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm text-black hidden lg:block">
                Wishlist
              </span>
            </button>

            {/* Cart */}
            <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded relative">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 004 16h12M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4z"
                />
              </svg>
              <span className="text-sm text-black hidden lg:block">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
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
