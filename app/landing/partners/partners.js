import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })

export default function Partners() {
    return (
        <div className={font.className}
            style={{ width: "100%", height: "clamp(300px, 31vw, 380px",  display: "flex", justifyContent: "center", position: "relative" }}
        >
            <div style={{ width: "100%", height: "100%", maxWidth: "1220px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ background: "black", color: "white", fontSize: "clamp(16px, 1.5vw, 18px)", letterSpacing: "0.1em", width: "132.328px", height: "42.0781px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    VIEW ALL
                </h1>
                <p className={font2.className} style={{ whiteSpace: "nowrap", fontStyle: "italic", marginTop: "5%", fontWeight: "bold", fontSize: "clamp(10px, 2vw, 25px)", letterSpacing: "0.04em", marginBottom: "4%" }}>“I’ve been in 3 startups. That was the best creative I’ve ever received.”</p>
                <div>qsd</div>
            </div>
        </div>
    )
}
