import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/images/bioearthx-logo.png"
              alt="BioEarthX Logo"
              width={120}
              height={40}
            /> */}
            <span className="text-xl font-bold">BioEarthX</span>
          </div>
          <p className="text-green-100">
            Pioneering sustainable sodium silicate solutions for a greener
            industrial future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#products"
                className="text-green-100 hover:text-white"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#applications"
                className="text-green-100 hover:text-white"
              >
                Applications
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-green-100 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-green-100 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic text-green-100 space-y-2">
            <p>123 Industrial Park, Dhaka</p>
            <p>Bangladesh</p>
            <p>Email: info@bioearthx.com</p>
            <p>Phone: +880 XXXX XXX XXX</p>
          </address>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-green-800 p-2 rounded-full hover:bg-green-700"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              className="bg-green-800 p-2 rounded-full hover:bg-green-700"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="bg-green-800 p-2 rounded-full hover:bg-green-700"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
        <p>
          © {new Date().getFullYear()} BioEarthX Limited. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
