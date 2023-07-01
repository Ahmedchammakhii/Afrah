import Image from "next/image";
import { Jost } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
const jost = Jost({ subsets: ["latin"], weight: "600" });
const play = Playfair_Display({ subsets: ["latin"], weight: "400" });
export default function Parallaxe() {
  useEffect(() => {
    const parallaxEffect = () => {
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset;
        const elementTopPosition = element.offsetTop - 200;
        const distance = elementTopPosition - scrollPosition;
        const parallaxSpeed = 0.5;

        element.style.transform = `translateY(${distance * parallaxSpeed}px)`;
      });
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        className="wholeshow"
        style={{
          width: "100%",
          height: "90%",
          overflow: "hidden",
          position: "sticky",
          zIndex: 3,
        }}
      >
        <div
          className="parallax"
          style={{
            width: "100%",
            height: "250%",
            backgroundImage: "url('./assets/bg3.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            position: "relative",
          }}
        ></div>
      </div>
      <div
        className="text_wrapper"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 4,
        }}
      >
        <p className={jost.className} style={{ fontSize: 50, color: "#fff" }}>
          BROWSE OUR
        </p>
      </div>
    </main>
  );
}
