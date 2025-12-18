"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTripadvisor, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+94708888761" className="flex items-center gap-2 text-gray-700 hover:text-primary">
              <FaPhoneAlt className="text-xs" />
              <span>(94) 70 888 8761</span>
            </a>
            <a href="mailto:info@28holidays.com" className="flex items-center gap-2 text-gray-700 hover:text-primary">
              <FaEnvelope className="text-xs" />
              <span>info@28holidays.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a href="#" className="text-gray-600 hover:text-primary text-xs">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary text-xs">
                <FaTripadvisor />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary text-xs">
                <FaInstagram />
              </a>
            </div>
            <a
              href="https://wa.me/94708888761"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <IoLogoWhatsapp className="text-base" />
              WHATSAPP US
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="28 Holidays"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-800 hover:text-primary font-medium transition-colors">
                Home
              </Link>
              <Link href="/itinerary" className="text-gray-800 hover:text-primary font-medium transition-colors">
                Itinerary
              </Link>
              <Link href="/car-rental" className="text-gray-800 hover:text-primary font-medium transition-colors">
                Car Rental
              </Link>
              <Link href="/shop" className="text-gray-800 hover:text-primary font-medium transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-primary font-medium transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="text-gray-800 hover:text-primary font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-primary font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-800 text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  Home
                </Link>
                <Link href="/itinerary" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  Itinerary
                </Link>
                <Link href="/car-rental" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  Car Rental
                </Link>
                <Link href="/shop" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  Shop
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  About Us
                </Link>
                <Link href="/gallery" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  Gallery
                </Link>
                <Link href="/contact" className="text-gray-800 hover:text-primary font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
