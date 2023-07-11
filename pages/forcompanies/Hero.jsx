"use client";
import { Jost, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const play = Jost({ subsets: ["latin"], weight: "700" });
const playa = Poppins({ subsets: ["latin"], weight: "300" });
export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.from(".heroofcompanies h1", { paddingTop: 200 });
    const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "end end",
        end: () => "+=" + ref.current.clientHeight / 10,
        scrub: true,
        pin: true,
      },
    });
    trigger.fromTo(
      ".banner",
      {
        backgroundSize: "100%",
        backgroundPosition: "center",
        transition: "all ease 2s",
      },
      {
        backgroundSize: "150%",
        transition: "all ease 5s",

        backgroundPosition: "center",
      }
    );
  }, []);

  return (
    <header
      style={{
        height: "100vh",
        width: "100vw",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="heroofcompanies"
      ref={ref}
    >
      <h1
        className={play.className}
        style={{
          color: "#c5c5c5",
          fontSize: "clamp(5rem,13.5vw,18rem)",
          textAlign: "center",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        CONFERENCE
      </h1>

      <div
        className="banner"
        style={{
          height: "55%",
          background: "url(/events.jpg)",
          width: "95%",
          backgroundSize: "cover",
          position: "relative",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="herobotoom"
          style={{
            display: "flex",
            width: "100%",
            position: "absolute",
            bottom: -40,
            color: "#c5c5c5",
            overflow: "hidden",
          }}
        >
          <div
            className="left"
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
              color: "#c5c5c5",
              left: 0,
            }}
          >
            <p className={play.className}>INSATGRAM</p>
          </div>
          <div
            className="right"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#c5c5c5",
              width: "30%",
            }}
          >
            <p className={play.className}>10/20/2022</p>
            <p className={play.className}>EVENT NAME</p>
          </div>
        </div>
      </div>
    </header>
  );
}
