"use client";
import React, { useEffect, useState } from "react";

function Navbar({ bioRef, contacts, home }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("text-white");

  const scrollToSection = (ref: { current: { scrollIntoView: (arg0: { behavior: string }) => void } }) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("rgb(255, 255, 255)"); // Colore di sfondo bianco dopo lo scroll
        setTextColor("text-black"); // Colore del testo nero
      } else {
        setBgColor("transparent");
        setTextColor("text-white"); // Colore del testo bianco
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 font-montserrat transition-colors duration-300`} style={{ backgroundColor: bgColor }}>
      <div className="flex justify-between items-center px-6 py-4">
        <div className={`font-bold ${textColor} text-xl`}>Logo</div>
        <ul className={`hidden md:flex space-x-10 ${textColor}`}>
          <li className={`hover:text-gray-300 transition-colors duration-300 cursor-pointer`} onClick={() => scrollToSection(home)}>
            HOME
          </li>
          <li className={`hover:text-gray-300 transition-colors duration-300 cursor-pointer`} onClick={() => scrollToSection(bioRef)}>
            CHI SONO
          </li>
          <li className={`hover:text-gray-300 transition-colors duration-300 cursor-pointer`} onClick={() => scrollToSection(contacts)}>
            CONTATTI
          </li>
        </ul>
        <div
          className={`md:hidden ${textColor} cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </div>
      <ul
        className={`flex flex-col space-y-4 items-center ${textColor} md:hidden py-4 transition-all duration-500 transform ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <li className={`hover:text-gray-300 transition-colors duration-300 cursor-pointer`} onClick={() => scrollToSection(home)}>
          HOME
        </li>
        <li className={`hover:text-gray-300 transition-colors duration-300 cursor-pointer`} onClick={() => scrollToSection(bioRef)}>
          CHI SONO
        </li>
        <li className={`hover:text-gray-300 transition-colors duration-300 cursor-pointer`} onClick={() => scrollToSection(contacts)}>
          CONTATTI
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
