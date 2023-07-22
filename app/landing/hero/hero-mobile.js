import { useEffect, useRef } from 'react'
import iteration from '../../../functions/landing/hero-m_functions'
const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });
import localFont from "next/font/local";
import { Jost, Playfair_Display } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '600' })

export default function heroMobile() {

    const container = useRef(null);

    useEffect(() => {
        // console.log(container.current.children[0].style.opacity);
        const interval = setInterval(() => {

            container.current.children[0].style.transition = "4s"
            container.current.children[1].style.transition = "4s"
            container.current.children[0].style.opacity = "0"
            container.current.children[1].style.opacity = "1"

        }, 5000);
        return () => {
            clearInterval(interval);
        };

    }, [])
    const data = [0, 1, 2, 3, 4, 5]
    return (
        <div ref={container} style={{ width: "100%", height: "75vh", background: "black", zIndex: 2, position: "relative" }}>
            {data.slice(0, 2).map((e, i) => {
                return <div onTransitionEnd={() => i ? iteration(container, data) : null} key={i}
                    style={{ width: "100%", height: "100%", position: "absolute", opacity: Math.abs(i - 1), transition: "4s" }} >
                    <img alt={i} style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        objectPosition: "center", filter: 'brightness(50%)'
                    }}
                        src={i ? '/landing/hero/' + (data[data.length - 1]) + '.jpg' : '/landing/hero/' + data[data.length - 2] + '.jpg'} />
                </div>
            })}

            <div style={{
                width: "100%", height: "100%", display: "flex", flexDirection: "column",
                justifyContent: "center", alignItems: "center", position: "absolute", color: "white"
            }}>
                <h1 className={font.className}>AFRAH</h1>
                <h1 className={myFont.className} style={{ letterSpacing: "0.2em", fontSize: '7vw' }} >Event Productions</h1>

                <div style={{ position: "absolute", bottom: '10%', width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h4 className={font.className} style={{ width: "80%", textAlign: "center", fontSize: '3vw', letterSpacing:'0.2em' }}>Specifically specializing in outdoor, private property & warehouse style venues</h4>
                </div>
            </div>
        </div>
    )
}
