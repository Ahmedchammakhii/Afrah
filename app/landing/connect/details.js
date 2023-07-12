import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'
import localFont from "next/font/local";

const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });

const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })


export default function Details() {
    return (
        <div className='details_father' style={{ position: "relative" }}>
            <div className='details_content-wrapper' style={{ width: "100vw", height: "65vw", maxHeight: "750px", marginTop: "10vh", display: "flex", justifyContent: "center", background: "transparent" }}>
                <div className='details_wrapper' style={{ width: "100%", maxWidth: "1220px", display: "flex", height: "100%" }}>
                    <div className='details_left' style={{ width: "45%", position: "relative" }}>
                        <div className='details_left-container' style={{
                            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                            width: "93%", position: "relative", float: "right", height: "100%"
                        }}>
                            <h1 className={font.className + ' details_title'} style={{ fontSize: "14px", letterSpacing: "0.3em" }}>
                                LETS TALK DETAILS
                            </h1>
                            <div className='details_line' style={{ height: "100px", width: '2px', background: "#6d989c", marginTop: "7%", marginBottom: "7%" }} />
                            <p className={font2.className + ' details_p-one'} style={{ fontSize: "clamp(16px, 1.7vw, 22px)", letterSpacing: "0.1em", textAlign: "center", width: "85%" }}>
                                serving the great wild west, our teams are based in portland oregon, seattle washington and sun valley (ketchum) idaho.
                                we believe that there's not much a dance party won't cure.
                            </p>
                            <p className={font2.className + ' details_p-two'} style={{ fontSize: "clamp(16px, 1.7vw, 22px)", letterSpacing: "0.1em", textAlign: "center", width: "85%", marginTop: "5%" }}>
                                we believe that there's not much a dance party won't cure.                             </p>
                            <div className={font2.className + ' details_schedule'} style={{ marginTop: "13%", fontStyle: "italic", fontSize: "clamp(16px, 1.7vw, 22px)", color: "rgba(54,54,54,1)" }}>
                                schedule a time to chat</div>
                        </div>
                    </div>
                    <div className='details_right' style={{ width: "55%", height: "100%", position: "relative" }}>
                        <img src='https://static.showit.co/800/7XLXwSvNQAeEId4mCn0fAQ/69014/mayaquinnwedding-33.jpg'
                            className='details_image' style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 0%" }} />
                    </div>
                </div>
            </div>


            <div className={myFont.className + " details_ready-container"} style={{ fontSize: "100px", position: "absolute", left: "45%", display: "flex", top: "-15%", color: "#d9e4e3", transform: "rotate(-10deg)" }}>
                You <div className='details_ready' style={{ marginTop: "-0", marginLeft: "20px", marginTop: "-5px" }}> Ready?</div>
            </div>


            <style>{`
                    .details_father { position: relative;  }
                    .details_content-wrapper { width: 100vw; height: 65vw; max-height: 750px; margin-top: 10vh; display: flex; justify-content: center; background: transparent;  }
                    .details_wrapper { width: 100%; max-width: 1220px; display: flex; height: 100%;  }
                    .details_left { width: 45%; position: relative;  }
                    .details_left-container { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 93%; position: relative; float: right; height: 100%;  }
                    .details_title { font-size: 14px; letter-spacing: 0.3em;  }
                    .details_line { height: 100px; width: 2px; background: #6d989c; margin-top: 7%; margin-bottom: 7%;  }
                    .details_p-one { font-size: clamp(16px, 1.7vw, 22px); letter-spacing: 0.1em; text-align: center; width: 85%;  }
                    .details_p-two { font-size: clamp(16px, 1.7vw, 22px); letter-spacing: 0.1em; text-align: center; width: 85%; margin-top: 5%;  }
                    .details_schedule { margin-top: 13%; font-style: italic; font-size: clamp(16px, 1.7vw, 22px); color: rgba(54,54,54,1);  }
                    .details_right { width: 55%; height: 100%; position: relative;  }
                    .details_image { width: 100%; height: 100%; object-fit: cover; object-position: center 0%;  }
                    .details_ready-container { font-size: 100px; position: absolute; left: 45%; display: flex; top: -15%; color: #d9e4e3; transform: rotate(-10deg);  }
                    .details_ready { margin-top: -5px; margin-left: 20px;  }
                    
            `}</style>
        </div>
    )
}
