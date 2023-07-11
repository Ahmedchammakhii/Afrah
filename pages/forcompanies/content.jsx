"use client";
import { Jost, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const myFont = localFont({ src: "../planyourwedding/BonVivant-Regular.otf" });

gsap.registerPlugin(ScrollTrigger);

const play = Jost({ subsets: ["latin"], weight: "700" });
const playa = Poppins({
  subsets: ["latin"],
  weight: ["300", "200", "700", "500"],
});
export default function Content() {
  return (
    <div
      className="content"
      style={{
        height: "100vh",
        width: "100vw",
        background: "#c5c5c5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#181818",
        paddingTop: 50,
        fontSize: "clamp(2rem,2vw,10rem)",
      }}
    >
      <div
        className="top"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <p className={play.className}>
          PROUDLY FEATURED OVER 100X...{" "}
          <span
            className={myFont.className}
            style={{
              rotate: "5deg",
              position: "absolute",
              transform: "translateX(-30px) translateY(-10px)",
            }}
          >
            And counting
          </span>
        </p>
        <p>
          LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO LOGO
          LOGO LOGO{" "}
        </p>
      </div>
      <div
        className="secondsection"
        style={{ marginTop: 100, width: "100%", display: "flex" }}
      >
        <div className="secondleft" style={{ width: "40%" }}>
          <div
            className="hr"
            style={{ height: "3px", width: "40%", background: "#b5b5b5" }}
          ></div>
          <h1
            className={playa.className}
            style={{
              color: "#fff",
              width: "40%",
              transform: "scale(.9)",
              opacity: 0.5,
            }}
          >
            EVENT PRODUCTION SERVICES
          </h1>
        </div>
        <div
          className="secondright"
          style={{ width: "60%", display: "flex", gap: 10 }}
        >
          <div
            className="img"
            style={{
              height: "40rem",
              width: "60%",
              background: "url(/image1.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="img"
            style={{
              height: "40rem",
              width: "60%",
              background: "url(/image1.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="img"
            style={{
              height: "40rem",
              width: "60%",
              background: "url(/image1.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
