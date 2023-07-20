"use client";

import { useEffect } from 'react'


export const scrollTrigger = (ref, f, values, customStart, customEnd) => {
  return () => {
    let start = customStart || ref.current.offsetTop - window.innerHeight
    let end = customEnd || start + window.innerHeight + ref.current.clientHeight;
    const percentages = []


    if (start > window.scrollY && ref.current.store) {
      for (let i = 0; values.length > i; i++) {
        percentages.push(values[i][0])
      }
      f(percentages, ref.current)
      ref.current.store = false
    } else if (window.scrollY > end && ref.current.store) {
      for (let i = 0; values.length > i; i++) {
        percentages.push(values[i][1])
      }
      f(percentages, ref.current);
      ref.current.store = false
    }
    if (window.scrollY <= end && start <= window.scrollY) {
      for (let i = 0; values.length > i; i++) {
        percentages.push((((window.scrollY - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
      }
      f(percentages, ref.current)
      if (!ref.current.store) {
        ref.current.store = true
      }
    }
  }
};

export const scrollEvent = (f) => {

  return () => {
    window.addEventListener('scroll', () => {
      if (Array.isArray(f)) {
        for (let i = 0; f.length > i; i++) {
          f[i]()
        }
      } else {
        f()
      }
    });
  }
}

const myFont = localFont({ src: "../../pages/planyourwedding/BonVivant-Regular.otf" });
import localFont from "next/font/local";
import { Jost, Playfair_Display } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '600' })


export default function header() {


  useEffect(
    scrollEvent(() => {
      if (window.scrollY >= (innerHeight - (innerHeight * 0.08))) {
        document.querySelector('.nav').style.background = "black"
        document.querySelector('.nav').style.zIndex = "0"
        document.querySelector('.nav').style.position = "fixed"

      } else {
        document.querySelector('.nav').style.background = "transparent"
        document.querySelector('.nav').style.position = "absolute"
        document.querySelector('.nav').style.zIndex = "6"

      }
    }
    ))

  return (
    <>
      <div className='nav' style={{ position: "fixed", height: "8vh", width: "100vw", zIndex: "0", display: "flex", justifyContent: "space-between", color: "white", alignItems: "center", }}>
        <div className={myFont.className} style={{ fontWeight: "600", letterSpacing: "0.3em", marginLeft: "5vw",textShadow: "0px 0px 4px black", }}>
          AFRAH
        </div>
        <div style={{}} >
          <ul className={font.className} style={{ display: "flex", whiteSpace: "nowrap", width: "100%", justifyContent: "center", gap: "10%" }}>
            <li style={{ listStyleType: "none", fontWeight: "bold",textShadow: "0px 0px 4px black", }}>HOME</li>
            <li style={{ listStyleType: "none", fontWeight: "bold",textShadow: "0px 0px 4px black", }}>PLAN YOUR EVENT</li>
            <li style={{ listStyleType: "none", fontWeight: "bold",textShadow: "0px 0px 4px black", }}>PLAN YOUR WEDDING</li>
            <li style={{ listStyleType: "none", fontWeight: "bold",textShadow: "0px 0px 4px black", }}>GALLERY</li>
            <li style={{ listStyleType: "none", fontWeight: "bold",textShadow: "0px 0px 4px black", }}>BLOG</li>
          </ul>
        </div>

        <div className={myFont.className} style={{ marginRight: "5vw", fontSize: "2vw", textDecoration: "underline",textShadow: "0px 0px 4px black", }}>connect</div>
      </div>

    </>
  )
}
