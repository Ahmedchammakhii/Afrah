import localFont from "next/font/local";
import Hero from "./hero/hero";
import "../../app/globals.css";
import Slider from "./slider/slider";
import Deposit from "./deposit";
import Parallaxe from "./parallaxesection";
const myFont = localFont({ src: "./BonVivant-Regular.otf" });

export default function Planyourwedding() {
  return (
    <main style={{ overflow: "hidden" }}>
      <Hero></Hero>
      <Slider></Slider>
      <Deposit></Deposit>

      <Parallaxe></Parallaxe>
    </main>
  );
}
