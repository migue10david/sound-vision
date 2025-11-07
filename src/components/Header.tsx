import React, { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Partners", path: "/partners" },
  { name: "Contact Us", path: "/contact" },
];


const primaryBg = "bg-[#003366]";
const mobileBg = "bg-[#004080]";
const hoverBg = "hover:bg-[#1976D2]"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`bg-[#333333] text-white shadow-lg sticky top-0 z-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-wider">
              <img src="/sound.jpg" alt="Miguelito Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* Menú de Escritorio (visible en pantallas grandes) */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out text-[#f6f6f6] hover:bg-[#b90504]`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Icono Hamburger (visible en móvil) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="x"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    x2="56"
                    y1="56"
                    y2="200"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></line>
                  <line
                    x1="200"
                    x2="56"
                    y1="200"
                    y2="56"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="hamburger"
                  width="32"
                  height="32"
                  x="0"
                  y="0"
                  version="1.1"
                  viewBox="0 0 32 32"
                >
                  <g fill="#1C1C1C">
                    <path d="M1 8h30a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM31 15H1a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2zM31 24H1a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2z"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable (Mobile) */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out bg-[#333333] hover:bg-[#b90504] ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out ${hoverBg}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
