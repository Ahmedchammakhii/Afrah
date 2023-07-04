import Image from "next/image";
import { Jost } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
const jost = Jost({ subsets: ["latin"], weight: "600" });
const play = Playfair_Display({ subsets: ["latin"], weight: "400" });
const myFont = localFont({ src: "./BonVivant-Regular.otf" });

export default function Parallaxe() {
  useEffect(() => {
    const parallaxEffect = () => {
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset;
        const elementTopPosition = element.offsetTop - 200;
        const distance = elementTopPosition - scrollPosition;
        const parallaxSpeed = 0.5;

        element.style.backgroundPositionY = `${distance * parallaxSpeed}px`;
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
        height: "150vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        className="wholeshow"
        style={{
          width: "100%",
          height: "70%",
          zIndex: 3,
          position: "relative",
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
          }}
        ></div>
        <div
          className="text_wrapper"
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 4,
            top: "10%",
          }}
        >
          <p className={jost.className} style={{ fontSize: 25, color: "#fff" }}>
            INTRODUCING{" "}
          </p>
          <p
            style={{ fontSize: 75, color: "#fff" }}
            className={myFont.className}
          >
            Your Wedding planning Team
          </p>
        </div>
        <div
          className="laptop"
          style={{
            width: "max-content",
            height: "max-content",
            background: 'url("/assets/laptop.png") no-repeat ',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            zIndex: 5,
            top: "30%",
            left: "50%",
            transform: "translate(-45%)",
          }}
        >
          {" "}
          <video
            id="myVideo"
            autoPlay
            loop
            muted
            autoCorrect="true"
            src={"/assets/Afrah.mp4"}
            style={{
              width: "80%",
              height: "80%",
              transform: "scale(.68) translateX(-14px) translateY(-20px)",
              paddingLeft: 100,
            }}
          />
        </div>
        <div
          className="bottomText"
          style={{
            position: "absolute",
            bottom: "-20%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p
            className={jost.className}
            style={{ letterSpacing: "0.1em", fontSize: "35px" }}
          >
            #TEAMAFRAHPRODUCTION
          </p>
          <p
            className={play.className}
            style={{
              letterSpacing: "0.1em",
              width: "50%",
              textAlign: "center",
            }}
          >
            {" "}
            Notre équipe est vraiment pointue et centrée sur le style, mettant
            en œuvre des idées de concept éclectiques et très stylées
            personnalisées pour chaque événement : vous serez sûr de vous faire
            bloguer, épingler, reprogrammer et tendance. En tant qu'individus,
            nous sommes connus pour notre style unique, notre authenticité,
            notre passion, notre éthique de travail et notre expérience.
          </p>
        </div>
      </div>
    </main>
  );
}
