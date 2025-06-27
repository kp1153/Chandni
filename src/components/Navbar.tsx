"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", color: "text-red-500 hover:text-red-600" },
  { href: "/about", label: "About", color: "text-orange-500 hover:text-orange-600" },
  { href: "/education", label: "Education", color: "text-yellow-500 hover:text-yellow-600" },
  { href: "/upbringing", label: "Upbringing", color: "text-green-500 hover:text-green-600" },
  { href: "/contact", label: "Contact", color: "text-blue-500 hover:text-blue-600" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Brand Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 leading-tight">
              Chandni Tiwari
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium mt-1">
              Interior Designer
            </p>
          </Link>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-all duration-300 transform hover:scale-105 ${
                  pathname === link.href
                    ? `${link.color} underline underline-offset-4 decoration-2`
                    : link.color
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mx-auto"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-50 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-semibold transition-all duration-300 text-center py-2 ${
                  pathname === link.href
                    ? `${link.color} underline underline-offset-4 decoration-2`
                    : link.color
                }`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
