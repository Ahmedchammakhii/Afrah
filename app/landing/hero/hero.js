"use client";
import data from '@/data/hero';
import { useEffect, useRef } from 'react';
import Slides from './slides';
import { iteration, counter } from '@/functions/landing/hero_functions';
import { Expletus_Sans } from 'next/font/google';
import { Kalam } from 'next/font/google';

const font = Expletus_Sans({ subsets: ['latin'], weight: '400' })
const font2 = Kalam({ subsets: ['latin'], weight: '300' })

export default function Hero() {
    const container = useRef(null);
    const wrapper = useRef(null);
    const veil = useRef(null);
    const loader = useRef(null);
    const subtitle = useRef(null);
    const titles = useRef(null);
    const record = useRef(null);
    const matta = useRef(null);





    useEffect(() => {
        console.log(loader.current.style.animation = "loading 5s linear infinite")
        subtitle.current.children[0].style.transform = "none"
        for (let i = 0; titles.current.children.length > i; i++) {
            setTimeout(() => {
                titles.current.children[i].children[0].style.transform = "none"
            }, Number(i + 1 + "00"));
        }
        // veil.current.style.width = 0
    }, [])


    return (
        <div className={'content-wrapper ' + font.className}>
            <div ref={wrapper} style={{
                transition: "scale 1s cubic-bezier(.69,.26,0,1), filter 1s",
                width: "100vw", height: "100vh", position: "absolute", zIndex: 0,
                background: data[data.length - 1].background,
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }} />

            <div onTransitionEnd={() =>
                //  loader.current.style.animation = "loading 5s linear infinite"
                ""
            } ref={veil} className='veil'
                style={{ transition: "1s cubic-bezier(.69,.26,0,1)", position: "absolute", background: "white", width: "0", height: "100vh", zIndex: 9999999999, right: 0 }} />
            <div onAnimationIteration={() => {
                iteration(container, record, wrapper);
                // animation: loading 5s linear infinite;
            }}
                ref={loader} className="loading" />

            <div className='left-wrapper' style={{ display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2, textShadow: "0px 0px 15px rgba(0,0,0,0.5)", marginTop: "2vw" }}>
                <div ref={matta} className="line-container" style={{ overflow: "hidden" }} >
                    <div className='line' style={{ width: "6%", height: "9px", marginLeft: "10%", background: "white" }} />
                </div>
                <h2 ref={subtitle} className={'subtitle ' + font2.className} style={{ marginLeft: "10%", marginTop: "2%", overflow: "hidden" }}>
                    <div style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                        Sahara Desert - Morocco
                    </div>
                </h2>
                <div ref={titles} style={{ transform: "translateX(-80%)", marginLeft: "50%" }} >
                    <div className='bigTitle' style={{ overflow: "hidden", width: "40vw" }}>
                        <h1 style={{ fontSize: "5vw", transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                            MARRAKECH
                        </h1>
                    </div>
                    <div className='bigTitle' style={{ overflow: "hidden", width: "40vw" }}>
                        <h1 style={{ fontSize: "5vw", transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                            MERZOUGA
                        </h1>
                    </div>
                    <div className='bigTitle' style={{ fontSize: "0.8vw", overflow: "hidden", width: "30vw" }}>
                        <p style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                            Hello, my name is Ahmed and im gay, my name is Ahmed and im gay, my name is Ahmed and im gay, my name is Ahmed and im gay,
                        </p>
                    </div>
                    <div className='bigTitle' style={{ fontSize: "0.8vw", width: "30vw", marginTop: "10%" }}>
                        <div style={{ transition: "transform 0.6s cubic-bezier(.69,.26,0,1)", display: "flex" }}>
                            <div
                                style={{
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
                                </svg>                            </div>

                            <div style={{ cursor: "pointer", width: "50%", marginLeft: "2vw", height: "3vw", borderRadius: "20px", border: "1px solid white", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)", position: "relative" }} >
                                <div style={{ width: "100%", height: "100%", background: "white", borderRadius: "20px", opacity: "0.3", filter: "blur(5px)", position: "absolute" }} />
                                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ fontSize: "1vw", color: "white", textShadow: "0px 0px 4px rgba(255, 239, 0, 0.75)", zIndex: 2 }}>
                                        Contactez nous
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <div className='right-wrapper' >

                <div className='right-container' >

                    <Slides container={container} wrapper={wrapper} record={record} titles={titles} subtitle={subtitle} matta={matta} />

                    <div style={{ width: "100%", height: "25%", position: "relative", bottom: "25%", marginLeft: "2.2%", display: "flex", justifyContent: "center", flexDirection: "column", zIndex: 99 }}>
                        <div style={{ display: "flex", gap: "1.5%" }}>
                            <div style={{ width: "8vh", height: "8vh", borderRadius: "100%", border: "1px solid white", position: "relative", cursor: "pointer" }} >
                                <img style={{ width: "20%", position: "absolute", left: "45%", top: "50%", transform: "translate(-50%, -50%)" }} src='https://cdn.discordapp.com/attachments/1073737355896299542/1124656168434946048/Daco_752371.png' />
                            </div>
                            <div style={{ width: "8vh", height: "8vh", borderRadius: "100%", border: "1px solid white", position: "relative", cursor: "pointer" }} >
                                <img style={{ width: "20%", position: "absolute", left: "52%", top: "50%", transform: "translate(-50%, -50%) rotate(180deg)" }} src='https://cdn.discordapp.com/attachments/1073737355896299542/1124656168434946048/Daco_752371.png' />
                            </div>

                            <div style={{ height: "8vh", width: "35%", display: "flex", position: "relative", display: "flex", alignItems: "center" }} >
                                <div id="tracker" style={{ width: "100%", height: "0.26vh", position: "relative", display: "flex", background: "rgba(256,256,256,0.4)", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)" }}>
                                    {data.map((e, i) => {
                                        return <div key={i} style={{ height: "100%", width: `${100 / data.length}%`, borderRadius: "1vh", background: "transparent" }} >
                                            <div style={{ width: "0%", height: "100%", background: "#e4ad32", transition: "width 1s cubic-bezier(.69,.26,0,1)" }} />
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div style={{
                                color: "white", height: "100%", display: "flex",
                                alignItems: "center", fontSize: "3vw", marginTop: "-0.25vw",
                                fontWeight: "bold", overflow: "hidden", width: "4vw"
                            }}>
                                <div ref={record} style={{ display: "flex", transition: "1s cubic-bezier(.69,.26,0,1)" }}>
                                    <div>
                                        02
                                    </div>
                                    <div style={{ transform: "translateX(100%)", transition: "1s cubic-bezier(.69,.26,0,1)" }}>
                                        03
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <style>{`

                .content-wrapper {width: 100vw; height: 100vh; overflow: hidden; position: relative; display: flex; background-position: center; background-size: cover;  background : black }
                .loading { height: 1%; width: 0; background: transparent; position: absolute; border-radius: 50px; margin-left: -50px;  }
                .left-wrapper { width: 45%; color: white }
                .right-wrapper { width: 55%; }
                .right-container { width: 100%; height: 32vw; position: absolute; bottom: 0;  }
                            
                @keyframes scaler {
                    0% {
                       transform: none;
                       top: 0;
                      }
                   
                     100% {
                     transform: none;
                     width : 100vw;
                     height: 100vh;
                     left : -45%;
                     margin-top : 0;
                     top: calc(-100vh + 32vw);
                     border-radius: 0;
                     
                             }
                     
                  }




              @keyframes loading {
                0% {
                  width:0;
                  left :0;
                  right : auto;  
                }
                49%{
                    width:100%;
                    left :0;
                    right : auto;  

                }
                50%{
                    width:100%;
                    left :auto;
                    right : 0;  
                    margin-right: -50px

                }
                60% {
                    width: 0%;
                    left :auto;
                    right : 0;  

                  } 
                100% {
                    width: 0%;
                }
              }
              
            `}</style>
        </div >
    );
}

