"use client";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import React, { useRef } from "react";

export default function Home() {
  const bioRef = useRef(null);
  const contactsRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <div className="relative w-full h-screen ">
        <Navbar home={homeRef} bioRef={bioRef} contacts={contactsRef} />
        <img src="/studio.jpg" alt="Studio" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div ref={homeRef}>
          <Intro />
        </div>
      </div>
      <div ref={bioRef}>
        <Bio />
      </div>
      <div ref={contactsRef}></div>
    </>
  );
}
