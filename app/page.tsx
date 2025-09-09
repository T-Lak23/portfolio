"use client";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const handleOpen = () => {
    if (navRef.current) {
      navRef.current.style.right = "0";
    }
  };
  const handleClose = () => {
    if (navRef.current) {
      navRef.current.style.right = "-100%";
    }
  };

  return (
    <div>
      <Navbar
        navRef={navRef}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />

      <div className="relative top-[12vh]">
        <Header />
        <About />
        <Tools />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
