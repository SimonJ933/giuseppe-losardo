"use client";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import React, { useRef } from "react";
import Contacts from "./components/Contacts";
import About from "./components/About";

export default function Home() {
  const bioRef = useRef(null);
  const contactsRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <div className="relative w-full h-screen ">
        <Navbar homeRef={homeRef} bioRef={bioRef} contactsRef={contactsRef} aboutRef={aboutRef} />
        <img src="/office.png" alt="Studio" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div ref={homeRef}></div>
      </div>
      <div ref={bioRef}>
        <Bio />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactsRef}>
        <Contacts />
      </div>
    </>
  );
}
