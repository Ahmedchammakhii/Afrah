import React from 'react'
import { Kalam } from 'next/font/google';

const font2 = Kalam({ subsets: ['latin'], weight: '300' });

export default function Content({ refs, data }) {
    const [matta, titles, subtitle] = refs
    return (
        <>
            <div ref={matta} className="line-container" style={{ overflow: "hidden" }} >
                <div className='line' style={{ width: "6%", height: "9px", marginLeft: "10%", background: "white" }} />
            </div>
            <h2 ref={subtitle} className={'subtitle ' + font2.className} style={{ marginLeft: "10%", marginTop: "2%", overflow: "hidden" }}>
                <div style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)", textShadow: "0px 0px 15px rgba(0,0,0,0.5)" }} >
                    {data[0].location}
                </div>
            </h2>
            <div ref={titles} style={{ transform: "translateX(-80%)", marginLeft: "50%" }} >
                <div className='bigTitle' style={{ overflow: "hidden", width: "40vw" }}>
                    <h1 style={{ fontSize: "5vw", transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)", textShadow: "0px 0px 15px rgba(0,0,0,0.5)" }} >
                        {data[0].first_title}
                    </h1>
                </div>
                <div className='bigTitle' style={{ overflow: "hidden", width: "40vw" }}>
                    <h1 style={{ fontSize: "5vw", transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)", textShadow: "0px 0px 15px rgba(0,0,0,0.5)" }} >
                        {data[0].second_title}
                    </h1>
                </div>
                <div className='bigTitle' style={{ fontSize: "0.8vw", overflow: "hidden", width: "30vw", position: "relative" }}>
                    {/* <div style={{ background: "rgba(255, 255, 255, 0.2)", width: '100%', height: '100%', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', position: "absolute" }} /> */}
                    <p style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)", textShadow: "0px 0px 15px rgba(0,0,0,0.5)" }} >
                        {data[0].desc}
                    </p>
                </div>
                <div className='bigTitle' style={{ fontSize: "0.8vw", width: "30vw", marginTop: "10%" }}>
                    <div style={{ transition: "transform 0.6s cubic-bezier(.69,.26,0,1)", display: "flex" }}>
                        <div style={{ cursor: "pointer", width: "50%", height: "3vw", borderRadius: "20px", border: "1px solid white", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)", position: "relative" }} >
                            <div style={{ width: "100%", height: "100%", background: "white", borderRadius: "20px", opacity: "0.3", filter: "blur(5px)", position: "absolute" }} />
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ fontSize: "1vw", color: "white", textShadow: "0px 0px 4px rgba(255, 239, 0, 0.75)", zIndex: 2 }}>
                                    Contactez nous
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "3vw",
                                height: "3vw",
                                background: "white",
                                borderRadius: "1vw",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)", cursor: "pointer", marginLeft: "2vw"
                            }}
                        >
                            <svg fill="black" height="50%" width="50%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 384.97 384.97" xmlSpace="preserve">
                                <g>
                                    <g id="Fullscreen_1_">
                                        <path d="M372.939,216.545c-6.123,0-12.03,5.269-12.03,12.03v132.333H24.061V24.061h132.333c6.388,0,12.03-5.642,12.03-12.03
                                                S162.409,0,156.394,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848
                                                c13.293,0,24.061-10.767,24.061-24.061V228.395C384.97,221.731,380.085,216.545,372.939,216.545z" />
                                        <path d="M372.939,0H252.636c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h91.382L99.635,268.432
                                                c-4.668,4.668-4.668,12.235,0,16.903c4.668,4.668,12.235,4.668,16.891,0L360.909,40.951v91.382c0,6.641,5.39,12.03,12.03,12.03
                                                s12.03-5.39,12.03-12.03V12.03l0,0C384.97,5.558,379.412,0,372.939,0z" />
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div
                            style={{
                                marginLeft: "2vw",
                                width: "3vw",
                                height: "3vw",
                                background: "white",
                                borderRadius: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)", cursor: "pointer"
                            }}
                        >
                            <img style={{ width: "40%", marginLeft: "10%" }} src="https://cdn.discordapp.com/attachments/1073737355896299542/1125802685027856454/play-button-svgrepo-com.png" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
