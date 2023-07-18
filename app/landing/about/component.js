import React from 'react'
import Image from 'next/image'
import { Jost, Playfair_Display } from 'next/font/google'
const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })


export default function Component({ index, element }) {
    // if (innerWidth) return
    return (
        <div style={{ display: "flex", height: "50vw", maxHeight: '600px', width: "100%", maxWidth: "1200px", background: index % 2 === 0 ? "white" : "black", flexDirection: index % 2 === 0 ? "row" : "row-reverse" }} >
            <div style={{ width: "50%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: index % 2 === 0 ? "black" : "white" }}>
                <h1 className={font.className} style={{ fontSize: "clamp(9px, 0.8vw, 11px)", letterSpacing: "0.2vw" }}>
                    {element.h1.toUpperCase()}
                </h1>
                <h2 className={font2.className} style={{ fontSize: "clamp(20px, 3vw, 35px)", marginTop: "4%", width: "50%", textAlign: "center" }}>
                    {element.h2}
                </h2>

                <div style={{ width: "1px", height: "10%", background: index % 2 === 0 ? "black" : "white", marginTop: "4%", marginBottom: "4%" }} />
                <p className={font2.className} style={{ textAlign: "center", width: index % 2 === 0 ? "50%" : "65%", fontSize: "clamp(6px, 1.6vw, 19px)" }}>
                    {element.h3} {!element.h32 ? null : <span style={{ fontStyle: "italic" }}>{element.h32}</span>}
                </p>
            </div>
            <div style={{ width: "50%", height: "100%" }}>
                <Image alt={index} priority width={innerWidth / 2} height={innerWidth / 2} style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }} src={"/landing/about/" + (index + 1) + ".jpg"} />
            </div>
        </div>)
}
