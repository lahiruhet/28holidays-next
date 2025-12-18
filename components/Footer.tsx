import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTripadvisor, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="28 Holidays"
                width={140}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Inspiring travelers to explore Sri Lanka,
              <br />
              one tour at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-primary rounded flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-primary rounded flex items-center justify-center transition-colors"
              >
                <FaTripadvisor className="text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-primary rounded flex items-center justify-center transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-700 hover:bg-primary rounded flex items-center justify-center transition-colors"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-lora text-lg font-semibold mb-4 text-primary">CONTACT US</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>PH: 70 888 8761</p>
              <p>info@28holidays.com</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-end justify-start md:justify-end">
            <p className="text-sm text-gray-400">
              Copyright © 2024 28holidays
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
