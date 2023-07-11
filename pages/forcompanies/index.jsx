import localFont from "next/font/local";

import "../../app/globals.css";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Aboutus from "./aboutus";
import Content from "./content";

export default function Forcompanies() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <main style={{ overflow: "hidden" }}>
      <Hero></Hero>
      <Aboutus></Aboutus>
      <Content></Content>
    </main>
  );
}
