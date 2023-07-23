"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import About from "./landing/about/about";
import Portfolio from "./landing/portfolio/portfolio";
import Partners from "./landing/testimony/testimony";
import Connect from "./landing/connect/connect";
import Blogs from "./landing/blogs/blogs";
import Instagram from "./landing/instagram/instagram";
import Hero from "./landing/hero/hero"

const myFont = localFont({ src: "../pages/planyourwedding/BonVivant-Regular.otf" });

export default function Home() {
  return (
    <>
      <main style={{ background: "#f5f6f7" }} >
        <Hero />
        <div
          className={myFont.className + ' where-to-begin'} >
          Where to Begin
        </div>

        <About />
        <Portfolio />
        <Partners />
        <Connect />
        <Blogs />
        <Instagram />

      </main>

      <style>{`
      .where-to-begin { display: flex; justify-content: center; align-items: center; width: 100%; height: 25vh; font-size: 3vw; overflow: hidden;  }
      @media (max-width: 700px) {
        .where-to-begin { font-size: 7vw;   }

      }

      `}</style>
    </>
  )
}
