"use client";

import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

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
import { Jost } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '600' })


export default function header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(scrollEvent(() => setScrollY(window.scrollY)))

  useEffect(() => {
    if (!isOpen) {
      if (innerWidth > 1200) {

        if (window.scrollY >= (innerHeight - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "transparent") {
          document.querySelector('.header_nav').style.background = "black"
          document.querySelector('.header_nav').style.zIndex = "1"
          document.querySelector('.header_nav').style.position = "fixed"
          if (pathname.length < 2) {
            document.querySelector('.three-container').style.display = "block"
          }
        } else if (window.scrollY < (innerHeight - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "black") {
          if (pathname.length < 2) {
            document.querySelector('.three-container').style.display = "none"
            document.querySelector('.header_nav').style.background = "transparent"
            document.querySelector('.header_nav').style.position = "absolute"
            document.querySelector('.header_nav').style.zIndex = "6"

          } else {
            document.querySelector('.header_nav').style.background = "transparent"
            document.querySelector('.header_nav').style.opacity = "0"
            setTimeout(() => {
              document.querySelector('.header_nav').style.opacity = "1"
              document.querySelector('.header_nav').style.position = "absolute"
              document.querySelector('.header_nav').style.zIndex = "6"
            }, 400);
          }
        }
      } else {
        if (window.scrollY >= ((innerHeight * 0.75) - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "transparent") {
          document.querySelector('.header_nav').style.background = "black"
          document.querySelector('.header_nav').style.zIndex = "1"
          document.querySelector('.header_nav').style.position = "fixed"
          if (pathname.length < 2) {
            document.querySelector('.three-container').style.display = "block"
          }
        } else if (window.scrollY < (innerHeight - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "black") {
          if (pathname.length < 2) {
            document.querySelector('.three-container').style.display = "none"
            document.querySelector('.header_nav').style.background = "transparent"
            document.querySelector('.header_nav').style.position = "absolute"
            document.querySelector('.header_nav').style.zIndex = "6"

          } else {
            document.querySelector('.header_nav').style.background = "transparent"
            document.querySelector('.header_nav').style.opacity = "0"
            setTimeout(() => {
              document.querySelector('.header_nav').style.opacity = "1"
              document.querySelector('.header_nav').style.position = "absolute"
              document.querySelector('.header_nav').style.zIndex = "6"
            }, 400);
          }
        }
      }
    }
  }, [scrollY])

  useEffect(() => {
    if (isOpen) {
      document.querySelector('.header_nav').style.background = "black"
      document.querySelector('.header_nav').style.zIndex = "6"
      document.querySelector('.header_nav').style.position = "fixed"

    } else {
      if (window.scrollY >= ((innerHeight * 0.75) - (innerHeight * 0.08))) {
        document.querySelector('.header_nav').style.background = "black"
        document.querySelector('.header_nav').style.zIndex = "1"
        document.querySelector('.header_nav').style.position = "fixed"

      } else {
        document.querySelector('.header_nav').style.background = "transparent"
        document.querySelector('.header_nav').style.position = "absolute"
        document.querySelector('.header_nav').style.zIndex = "6"

      }
    }
  }, [isOpen])

  return (
    <>
      <div className='header_nav' >
        <div className={myFont.className + ' header_afrah'} style={{ fontWeight: "600", letterSpacing: "0.3em", marginLeft: "5vw", textShadow: "0px 0px 4px black", }}>
          <Link style={{ textDecoration: "none", color: "white" }} href="/" >AFRAH</Link>
        </div>
        <div className='header_links-wrapper' style={{}} >
          <ul className={font.className + ' header_links-container'} style={{ display: "flex", whiteSpace: "nowrap", width: "100%", justifyContent: "center", gap: "10%" }}>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link style={{ textDecoration: "none", color: "white" }} href="/" >HOME</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link style={{ textDecoration: "none", color: "white" }} href="/" >PLAN YOUR EVENT</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link style={{ textDecoration: "none", color: "white" }} href="/planyourwedding" >PLAN YOUR WEDDING</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link style={{ textDecoration: "none", color: "white" }} href="/" >GALLERY</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link style={{ textDecoration: "none", color: "white" }} href="/" >BLOG</Link></li>
          </ul>
        </div>

        <div className={myFont.className + ' header_connect'} style={{ marginRight: "5vw", fontSize: "2vw", textDecoration: "underline", textShadow: "0px 0px 4px black", }}><Link style={{ textDecoration: "none", color: "white" }} href="/contact" >connect</Link></div>
        <div onClick={() => { setIsOpen(!isOpen) }}
          className='header_menu-clickable' >
          <div className='header_menu-container' >
            <div className='header_menu-lines' />
            <div className='header_menu-lines' />
            <div className='header_menu-lines' />
          </div>
        </div>
      </div>

      <menu className='header_menu' style={{ position: "fixed", zIndex: 3 }}  >
        <Image alt='wave' src='/assets/layout/wave.svg' width={1920} height={1080}
          className='header_menu-wave'
        />

        <ul className='header_menu-links-container' >
          <li className={font.className + ' header_menu-links'} ><Link style={{ textDecoration: "none", color: "white" }} href='/'>HOME</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link style={{ textDecoration: "none", color: "white" }} href='/'>PLAN YOUR EVENT</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link style={{ textDecoration: "none", color: "white" }} href='/planyourwedding'>PLAN YOUR WEDDING</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link style={{ textDecoration: "none", color: "white" }} href='/'>GALLERY</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link style={{ textDecoration: "none", color: "white" }} href='/'>BLOG</Link></li>
          <li className={myFont.className + ' header_menu-links'} ><Link style={{ textDecoration: "none", color: "white" }} href='/contact'>Connect</Link></li>
        </ul>

      </menu>
      <style>{`
      .header_nav { position: fixed; height: 8vh; width: 100%; z-index: 1; display: flex; justify-content: space-between; color: white; align-items: center;  transition: 0.4s ease 0s; }
      .header_afrah { font-weight: 600; letter-spacing: 0.3em; margin-left: 5vw; text-shadow: 0px 0px 4px black;  }
      .header_links-wrapper {  }
      .header_links-container { display: flex; white-space: nowrap; width: 100%; justify-content: center; gap: 10%;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_connect { margin-right: 5vw; font-size: 2vw; text-decoration: underline; text-shadow: 0px 0px 4px black;  }
      .header_menu{display: none}
      .header_menu-clickable {display: none}


      @media (max-width: 1200px) {
        .header_links-wrapper {display: none  }
        .header_connect { display: none  }
        .header_menu-clickable { cursor: pointer; width: 8vh; height: 8vh; display: flex; flex-direction: column; justify-content: center; align-items: center;  }
        .header_menu-container { height: 22.5%; width: 31%; position: relative; display: flex; flex-direction: column; justify-content: space-between;  }
        .header_menu-lines { transition: 0.2s ease 0s; width: 100%; height: calc(50% / 3); background: white }
        .header_menu-lines:nth-child(1){transform: ${isOpen ? 'rotate(45deg) translateY(150%) translateX(19%)' : 'none'}}
        .header_menu-lines:nth-child(2){transform: ${isOpen ? 'rotate(-45deg) translateX(4%)' : 'none'}}
        .header_menu-lines:nth-child(3){opacity: ${isOpen ? 0 : 1}}
        .header_menu {display: block; background: black; width: 100%; height: 100vh; position: absolute; top: ${isOpen ? "calc(8vh)" : '11.5vh'}; transition: 0.4s ease 0s; opacity: ${isOpen ? 1 : 0}; z-index :0 }
        .header_menu-wave { position: absolute; top: -52%; pointer-events: none; z-index: -1; width: 100vw; height: 100vh }
        .header_menu-links-container { width: 100%; justify-content: center; text-align: center;  }
        .header_menu-links { margin-top: ${isOpen ? "3%" : "8%"}; font-size: ${isOpen ? '20px' : '15px'}; transition: 0.4s ease 0s; text-decoration: none;   }

      }
      
      `}</style>
    </>
  )
}
