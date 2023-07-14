import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '500' });
const font3 = Jost({ subsets: ['latin'], weight: '400' });
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' });
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });

export default function blogs() {
    return (
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", background: "linear-gradient(to bottom, #fdfdfe, #d7e3e2)" }}>
            <div style={{ width: "100%", maxWidth: "1220px" }}>
                <div style={{ width: "100%", height: "22vh", display: "flex", justifyContent: "center", position: "relative", alignItems: "end", }}>
                    <div style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                        <div className={font.className} style={{
                            fontWeight: "bold",
                            color: "rgba(109,152,156,1)",
                            letterSpacing: "0.3em",
                            lineHeight: "1.6",
                            fontSize: "clamp(10px, 1.3vw, 16px)",
                            textAlign: "center"
                        }}>
                            THE BLOG
                        </div>
                        <div className={myFont.className} style={{
                            textAlign: "center",
                            letterSpacing: "0.1em",
                            lineHeight: "1.1",
                            fontSize: "clamp(30px, 4.6vw, 55px)",
                            fontWeight: "400"
                        }}>
                            The Latest
                        </div>
                    </div>

                </div>


                <div style={{ width: "100%", height: "53.6vw", maxHeight: "654px" }}>
                    <div style={{ width: "100%", height: "100%", display: "flex", gap: "5%" }}>
                        <div style={{ height: "100%", width: "calc((100% / 3) - (5% / 3))", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src='https://static.showit.co/800/XKCJnVszSBib-ZEILGMesA/69014/saraholiviaphoto-54.jpg'
                                style={{ width: "100%", height: "70%", objectFit: "cover", objectPosition: "center" }} />
                            <div className={font3.className} style={{ lineHeight: "1.5", letterSpacing: "0.1em", fontSize: "clamp(10px, 1.19vw, 15px)", width: "90%", height: "15%", textAlign: "center", display: "flex", alignItems: "center" }}>
                                TOP 5 TIPS FOR BUDGETING YOUR WEDDING
                            </div>
                            <div className={font2.className} style={{ display: "flex", justifyContent: "center" }}>
                                <div className='read' style={{ whiteSpace: "nowrap", letterSpacing: "0.3em", lineHeight: "2.8", fontSize: "clamp(10px, 1.15vw, 15px)", padding: "0.4% 10%", color: "white", fontStyle: "italic", background: "black" }} >
                                    <span style={{ color: "black", fontSize: "clamp(6px, 0.85vw, 10px)" }}>a</span>  read more <span style={{ color: "black", fontSize: "clamp(6px, 0.85vw, 10px)" }}>a</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "100%", width: "calc((100% / 3) - (5% / 3))", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src='https://static.showit.co/800/XKCJnVszSBib-ZEILGMesA/69014/saraholiviaphoto-54.jpg'
                                style={{ width: "100%", height: "70%", objectFit: "cover", objectPosition: "center" }} />
                            <div className={font3.className} style={{ lineHeight: "1.5", letterSpacing: "0.1em", fontSize: "clamp(10px, 1.19vw, 15px)", width: "90%", height: "15%", textAlign: "center", display: "flex", alignItems: "center" }}>
                                PRO WEDDING DAY TIMELINE -MADE BY PLANNERS | WEDDING DAY TIMELINES FOR FIRST LOOK AND NO FIRST LOOK
                            </div>
                            <div className={font2.className} style={{ display: "flex", justifyContent: "center" }}>
                                <div className='read' style={{ whiteSpace: "nowrap", letterSpacing: "0.3em", lineHeight: "2.8", fontSize: "clamp(10px, 1.15vw, 15px)", padding: "0.4% 10%", color: "white", fontStyle: "italic", background: "black" }} >
                                    <span style={{ color: "black", fontSize: "clamp(6px, 0.85vw, 10px)" }}>a</span>  read more <span style={{ color: "black", fontSize: "clamp(6px, 0.85vw, 10px)" }}>a</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "100%", width: "calc((100% / 3) - (5% / 3))", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src='https://static.showit.co/800/XKCJnVszSBib-ZEILGMesA/69014/saraholiviaphoto-54.jpg'
                                style={{ width: "100%", height: "70%", objectFit: "cover", objectPosition: "center" }} />
                            <div className={font3.className} style={{ lineHeight: "1.5", letterSpacing: "0.1em", fontSize: "clamp(10px, 1.19vw, 15px)", width: "90%", height: "15%", textAlign: "center", display: "flex", alignItems: "center" }}>
                                WEDDING PLANNER VS. VENUE MANAGER AND WHAT THE DIFFERENCES ARE
                            </div>
                            <div className={font2.className} style={{ display: "flex", justifyContent: "center" }}>
                                <div className='read' style={{ whiteSpace: "nowrap", letterSpacing: "0.3em", lineHeight: "2.8", fontSize: "clamp(10px, 1.15vw, 15px)", padding: "0.4% 10%", color: "white", fontStyle: "italic", background: "black" }} >
                                    <span style={{ color: "black", fontSize: "clamp(6px, 0.85vw, 10px)" }}>a</span>  read more <span style={{ color: "black", fontSize: "clamp(6px, 0.85vw, 10px)" }}>a</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}
