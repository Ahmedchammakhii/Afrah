import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'
import localFont from "next/font/local";

const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });

const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })


export default function Details() {
    return (
        <div style={{ position: "relative" }}>
            <div className='content-wrapper' style={{ width: "100vw", height: "65vw", maxHeight: "750px", marginTop: "10vh", display: "flex", justifyContent: "center", background: "transparent" }}>
                <div className='wrapper' style={{ width: "100%", maxWidth: "1220px", display: "flex", height: "100%" }}>
                    <div style={{ width: "45%", position: "relative" }}>
                        <div style={{
                            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                            width: "93%", position: "relative", float: "right", height: "100%"
                        }}>
                            <h1 className={font.className} style={{ fontSize: "14px", letterSpacing: "0.3em" }}>
                                LETS TALK DETAILS
                            </h1>
                            <div style={{ height: "100px", width: '2px', background: "#6d989c", marginTop: "7%", marginBottom: "7%" }} />
                            <p className={font2.className} style={{ fontSize: "clamp(16px, 1.7vw, 22px)", letterSpacing: "0.1em", textAlign: "center", width: "85%" }}>
                                serving the great wild west, our teams are based in portland oregon, seattle washington and sun valley (ketchum) idaho.
                                we believe that there's not much a dance party won't cure.
                            </p>
                            <p className={font2.className} style={{ fontSize: "clamp(16px, 1.7vw, 22px)", letterSpacing: "0.1em", textAlign: "center", width: "85%", marginTop: "5%" }}>
                                we believe that there's not much a dance party won't cure.                             </p>
                            <div className={font2.className} style={{ marginTop: "13%", fontStyle: "italic", fontSize: "clamp(16px, 1.7vw, 22px)", color: "rgba(54,54,54,1)" }}>
                                schedule a time to chat</div>
                        </div>
                    </div>
                    <div style={{ width: "55%", height: "100%", position: "relative" }}>
                        <img src='https://static.showit.co/800/7XLXwSvNQAeEId4mCn0fAQ/69014/mayaquinnwedding-33.jpg'
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 0%" }} />
                    </div>
                </div>
            </div>


            <div className={myFont.className} style={{ fontSize: "100px", position: "absolute", left: "45%", display: "flex", top: "-15%", color: "#d9e4e3", transform: "rotate(-10deg)" }}>
                You <div style={{ marginTop: "-0", marginLeft: "20px", marginTop: "-5px" }}> Ready?</div>
            </div>


            <style>{`

            `}</style>
        </div>
    )
}
