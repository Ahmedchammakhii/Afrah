"use client";
import { Jost, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const play = Jost({ subsets: ["latin"], weight: "700" });
const playa = Poppins({
  subsets: ["latin"],
  weight: ["300", "200", "700", "500"],
});
export default function Aboutus() {
  const refce = useRef(null);
  useEffect(() => {
    const lines = refce.current.querySelectorAll("span");

    gsap.from(lines, {
      opacity: 0,
      y: 30,
      stagger: 1,
      scrollTrigger: {
        trigger: refce.current,
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.from(".arrow", {
      opacity: 0,
      y: 50,
      delay: 2,
      scrollTrigger: {
        trigger: refce.current,
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
      transition: "all ease 1s",
    });
    gsap.from(".about p", {
      opacity: 0,
      scrollTrigger: {
        trigger: refce.current,
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
      },
      transition: "all ease 1s",
    });
  }, []);
  return (
    <article
      className="about"
      style={{
        height: "100vh",
        width: "100vw",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 200,
        color: "#878787",
      }}
      ref={refce}
    >
      <p
        className={playa.className}
        style={{ fontWeight: "200", fontSize: "2rem", marginBottom: 50 }}
      >
        AFRAH
      </p>
      <h5
        style={{
          width: "70%",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "300",
        }}
        className={playa.className}
      >
        <span>
          {" "}
          En tant qu'agence spécialisée dans{" "}
          <em style={{ color: "#fff" }}> l'événementiel d'entreprise</em>, nous{" "}
        </span>{" "}
        <span>
          adoptons une approche personnalisée pour créer des expériences
          uniques.
        </span>{" "}
        <span>
          Notre équipe dédiée travaille en étroite collaboration avec vous pour
        </span>{" "}
        <span>
          comprendre{" "}
          <em style={{ color: "#fff" }}> vos objectifs et votre identité </em>
          d'entreprise, afin de concevoir des{" "}
        </span>{" "}
        <span>
          événements qui reflètent votre vision et engagent votre public cible.
          Avec
        </span>{" "}
        <span>
          notre expertise et notre souci du détail, nous assurons une exécution
        </span>{" "}
        <span>
          {" "}
          impeccable pour faire de
          <em style={{ color: "#fff" }}> chaque événement</em> une réussite
          inoubliable.
        </span>
      </h5>

      <div
        className="arrow"
        style={{
          width: 50,
          height: 50,
          background: "url(/R.png)",
          backgroundRepeat: "no-repeat",
          marginTop: 100,
          backgroundSize: "contain",
          animation: "floating 2s linear",
          animationIterationCount: "infinite",
        }}
      >
        <style>
          {`
                @keyframes floating {
                    0% {
                      transform: translate(0, 0px);
                    }
                    50% {
                      transform: translate(0, 15px);
                    }
                    100% {
                      transform: translate(0, -0px);
                    }
                  }
                  `}
        </style>
      </div>
    </article>
  );
}
