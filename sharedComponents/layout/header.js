
import Link from 'next/link';
import Image from 'next/image';
import localFont from "next/font/local";
import { Jost } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '600' })
const myFont = localFont({ src: "../../pages/planyourwedding/BonVivant-Regular.otf" });


export default function header({ dark, isOpen, setIsOpen }) {

  return (
    <>
      <div className='header_nav' >
        <div className={myFont.className + ' header_afrah'} style={{ fontWeight: "600", letterSpacing: "0.3em", marginLeft: "5vw", textShadow: "0px 0px 4px black", }}>
          <Link style={{ textDecoration: "none", color: !dark ? 'white' : 'black' }} href="/" >AFRAH</Link>
        </div>
        <div className='header_links-wrapper' style={{}} >
          <ul className={font.className + ' header_links-container'} style={{ display: "flex", whiteSpace: "nowrap", width: "100%", justifyContent: "center", gap: "10%" }}>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link href="/" >HOME</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link href="/" >PLAN YOUR EVENT</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link href="/planyourwedding" >PLAN YOUR WEDDING</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link href="/" >GALLERY</Link></li>
            <li className='header_link' style={{ listStyleType: "none", fontWeight: "bold", textShadow: "0px 0px 4px black", }}><Link href="/" >BLOG</Link></li>
          </ul>
        </div>

        <div className={myFont.className + ' header_connect'}><Link href="/contact" >connect</Link></div>
        <div onClick={() => { setIsOpen(!isOpen) }}
          className='header_menu-clickable' >
          <div className='header_menu-container' >
            <div className='header_menu-lines' />
            <div className='header_menu-lines' />
            <div className='header_menu-lines' />
          </div>
        </div>
      </div>

      <menu className='header_menu'  >
        <Image alt='wave' src='/assets/layout/wave.svg' width={1920} height={1080}
          className='header_menu-wave'
        />

        <ul className='header_menu-links-container' >
          <li className={font.className + ' header_menu-links'} ><Link href='/'>HOME</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link href='/'>PLAN YOUR EVENT</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link href='/planyourwedding'>PLAN YOUR WEDDING</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link href='/'>GALLERY</Link></li>
          <li className={font.className + ' header_menu-links'} ><Link href='/'>BLOG</Link></li>
          <li className={myFont.className + ' header_menu-links'} ><Link href='/contact'>Connect</Link></li>
        </ul>

      </menu>
      <style>{`
      .header_nav { position: fixed; height: 8vh; width: 100%; z-index: 100002; display: flex; justify-content: space-between; color: white; align-items: center;  transition: 0.4s ease 0s; }
      .header_afrah { font-weight: 600; letter-spacing: 0.3em; margin-left: 5vw; text-shadow: 0px 0px 4px black;  }
      .header_links-wrapper {  }
      .header_links-container { display: flex; white-space: nowrap; width: 100%; justify-content: center; gap: 10%;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_link { list-style-type: none; font-weight: bold; text-shadow: 0px 0px 4px black;  }
      .header_connect { margin-right: 5vw; font-size: 2vw; text-shadow: 0px 0px 4px black;  }
      .header_nav a { color: ${!dark ? 'white' : 'black'} ; text-decoration : none }
      .header_connect a { text-decoration : underline }
      .header_menu {display: none}
      .header_menu-clickable {display: none}


      @media (max-width: 1200px) {
        .header_menu {pointer-events: ${isOpen ? 'all' : 'none'} ;display: block; background: black; width: 100%; height: 100vh; position: fixed; top: ${isOpen ? "calc(8vh)" : '11.5vh'}; transition: 0.4s ease 0s; opacity: ${isOpen ? 1 : 0}; z-index :100002 }
        .header_links-wrapper {display: none  }
        .header_connect { display: none  }
        .header_menu-clickable { cursor: pointer; width: 8vh; height: 8vh; display: flex; flex-direction: column; justify-content: center; align-items: center;  }
        .header_menu-container { height: 22.5%; width: 31%; position: relative; display: flex; flex-direction: column; justify-content: space-between;  }
        .header_menu-lines { transition: 0.2s ease 0s; width: 100%; height: calc(50% / 3); background: ${!dark ? 'white' : 'black'} }
        .header_menu-lines:nth-child(1){transform: ${isOpen ? 'rotate(45deg) translateY(150%) translateX(19%)' : 'none'}}
        .header_menu-lines:nth-child(2){transform: ${isOpen ? 'rotate(-45deg) translateX(4%)' : 'none'}}
        .header_menu-lines:nth-child(3){opacity: ${isOpen ? 0 : 1}}
        .header_menu-wave { position: absolute; top: -52%; pointer-events: none; z-index: -1; width: 100vw; height: 100vh }
        .header_menu-links-container { width: 100%; justify-content: center; text-align: center; margin-top: 20% }
        .header_menu-links-container a { text-decoration : none; color: white }
        .header_menu-links { margin-top: ${isOpen ? "3%" : "8%"}; font-size: ${isOpen ? '20px' : '15px'}; transition: 0.4s ease 0s; text-decoration: none;   }

      }
      
      `}</style>
    </>
  )
}
