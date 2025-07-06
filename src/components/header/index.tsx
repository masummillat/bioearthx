import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#e6f2ed]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/bioearthx-logo.png"
            alt="BioEarthX Logo"
            width={120}
            height={40}
          />
          {/* <span className="text-xl font-bold text-green-800">BioEarthX</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#products"
            className="text-green-900 hover:text-green-700 font-medium"
          >
            Products
          </Link>
          <Link
            href="#applications"
            className="text-green-900 hover:text-green-700 font-medium"
          >
            Applications
          </Link>
          <Link
            href="#about"
            className="text-green-900 hover:text-green-700 font-medium"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-green-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
    </header>
  );
};

export default Header;
