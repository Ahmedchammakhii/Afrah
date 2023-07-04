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
      <div
        className="questionPart"
        style={{
          width: "100vw",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          className={myFont.className}
          style={{
            fontSize: 36,
            letterSpacing: ".4rem",
            transform: "rotate(-1deg)",
          }}
        >
          Vous êtes à la recherche de l'excellence , par hasard ?
        </p>
      </div>
      <Parallaxe></Parallaxe>
    </main>
  );
}
