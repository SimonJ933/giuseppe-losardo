"use client";
import React, { useState } from "react";

function Navbar({ bioRef, contacts, home }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHome = () => {
    if (home.current) {
      home.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToBio = () => {
    if (bioRef.current) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToContacts = () => {
    if (contacts.current) {
      contacts.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-transparent shadow-l w-full fixed z-50 font-montserrat">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-white text-xl font-bold">Logo</div>
        <ul className="hidden md:flex space-x-10 text-black text-white">
          <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer text-white" onClick={scrollToHome}>
            HOME
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer text-white" onClick={scrollToBio}>
            CHI SONO
          </li>
          <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer text-white" onClick={scrollToContacts}>
            CONTATTI
          </li>
        </ul>
        <div
          className={`md:hidden text-white cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
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
        className={`flex flex-col space-y-4 items-center text-white md:hidden py-4 transition-all duration-500 transform ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" onClick={scrollToBio}>
          CHI SONO
        </li>
        <li className="hover:text-gray-300 transition-colors duration-300 cursor-pointer" onClick={scrollToContacts}>
          CONTATTI
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
