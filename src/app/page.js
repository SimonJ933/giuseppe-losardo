"use client";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import React from "react";
import { useRef } from "react";

export default function Home() {
  const bioRef = useRef(null);
  const contacts = useRef(null);
  const home = useRef(null);
  return (
    <>
      <div className="relative w-full h-screen ">
        <Navbar home={home} bioRef={bioRef} contacts={contacts} />
        <img src="/studio.jpg" alt="Studio" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div ref={home}>
          <Intro />
        </div>
      </div>
      <div ref={bioRef}>
        <Bio />
      </div>
    </>
  );
}
