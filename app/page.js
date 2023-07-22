"use client";

import { useEffect, useState } from "react";
import Hero from "./landing/hero/hero";
import localFont from "next/font/local";
import About from "./landing/about/about";
import Portfolio from "./landing/portfolio/portfolio";
import Partners from "./landing/testimony/testimony";
import Connect from "./landing/connect/connect";
import Blogs from "./landing/blogs/blogs";
import Instagram from "./landing/instagram/instagram";
import HeroMobile from './landing/hero/hero-mobile'
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import("./landing/hero/hero"), { ssr: false });
const DynamicHeroMobile = dynamic(() => import("./landing/hero/hero-mobile"), { ssr: false });

const myFont = localFont({ src: "../pages/planyourwedding/BonVivant-Regular.otf" });

export default function Home() {
  const [hero, setHero] = useState(null)
  useEffect(() => {
    // Perform the check inside the useEffect hook
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1200) {
        setHero(<DynamicHero />);
      } else {
        setHero(<DynamicHeroMobile />);
      }
    }
  }, []);
  return (
    <>
      <main style={{ background: "#f5f6f7" }} >
        {hero}
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
