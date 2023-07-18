"use client";

import { useEffect } from "react";
import Hero from "./landing/hero/hero";
import localFont from "next/font/local";
import About from "./landing/about/about";
import Portfolio from "./landing/portfolio/portfolio";
import Partners from "./landing/partners/partners";
import Connect from "./landing/connect/connect";
import Blogs from "./landing/blogs/blogs";
import Instagram from "./landing/instagram/instagram";
const myFont = localFont({ src: "../pages/planyourwedding/BonVivant-Regular.otf" });

export default function Home() {

  return (
    <main style={{ background: "#f5f6f7" }} >
      <Hero />
      <div className={myFont.className}
        style={{
          display: "flex", justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "25vh",
          fontSize: "3vw",
          overflow: "hidden"
        }}>
        Where to Begin
      </div>


      <About />
      <Portfolio />
      <Partners />
      <Connect />
      <Blogs />
      <Instagram />

      <style>{`
      *{
        *::-webkit-scrollbar {
          display: none;
        }
     }
      `}</style>
    </main>
  )
}
