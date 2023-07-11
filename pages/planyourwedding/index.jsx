import localFont from "next/font/local";
import Hero from "./hero/hero";
import "../../app/globals.css";
import Slider from "./slider/slider";
import Deposit from "./deposit";
import Parallaxe from "./parallaxesection";
import { useEffect, useState } from "react";
import Hero2 from "./hero/hero2";
const myFont = localFont({ src: "./BonVivant-Regular.otf" });

export default function Planyourwedding() {
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
      {windowWidth > 1100 ? <Hero></Hero> : <Hero2></Hero2>}
      <Slider mbottom={windowWidth > 1100 ? false : true}></Slider>
      <Deposit></Deposit>

      <Parallaxe></Parallaxe>
    </main>
  );
}
