"use client";
import data from '@/data/hero';
import { useEffect, useRef } from 'react';
import Slides from './slides';
import { iteration, counter } from '@/functions/landing/hero_functions';
import { Roboto_Condensed } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const font = Roboto_Condensed({ subsets: ['latin'], weight: '400' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '600' })

export default function Hero() {
    const container = useRef(null);
    const wrapper = useRef(null);
    const veil = useRef(null);
    const loader = useRef(null);
    const subtitle = useRef(null);
    const titles = useRef(null);
    const record = useRef(null);





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
        <div ref={wrapper} className={'content-wrapper ' + font.className}>
            <div style={{ background: "black", width: "100vw", height: "100vh", position: "absolute", opacity: "0.2", zIndex: 0 }} />
            <div onTransitionEnd={() =>
                //  loader.current.style.animation = "loading 5s linear infinite"
                ""
            } ref={veil} className='veil'
                style={{ transition: "1s cubic-bezier(.69,.26,0,1)", position: "absolute", background: "white", width: "0", height: "100vh", zIndex: 9999999999, right: 0 }} />
            <div onAnimationIteration={() => {
                iteration(container, record);
                // animation: loading 5s linear infinite;
            }}
                ref={loader} className="loading" />

            <div className='left-wrapper' style={{ display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2, textShadow: "0px 0px 15px rgba(0,0,0,0.5)", marginTop: "2vw" }}>
                <div className='line' style={{ width: "6%", height: "9px", marginLeft: "10%", background: "white" }} />
                <h2 ref={subtitle} className={'subtitle ' + font2.className} style={{ marginLeft: "10%", marginTop: "2%", overflow: "hidden" }}>
                    <div style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                        Sahara Desert - Morocco
                    </div>
                </h2>
                <div ref={titles} style={{ transform: "translateX(-80%)", marginLeft: "50%", letterSpacing: "-.3vw" }} >
                    <h1 className='bigTitle' style={{ fontSize: "7vw", overflow: "hidden", width: "40vw" }}>
                        <div style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                            MARRAKECH
                        </div>
                    </h1>
                    <h1 className='bigTitle' style={{ fontSize: "7vw", overflow: "hidden", width: "40vw" }}>
                        <div style={{ transform: "translateY(100%)", transition: "transform 0.6s cubic-bezier(.69,.26,0,1)" }} >
                            MERZOUGA
                        </div>
                    </h1>
                </div>
            </div>
            <div className='right-wrapper' >

                <div className='right-container' >

                    <Slides container={container} wrapper={wrapper} record={record} />

                    <div style={{ width: "100%", height: "25%", position: "relative", bottom: "25%", marginLeft: "2.2%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "1.5%" }}>
                            <div style={{ width: "8vh", height: "8vh", borderRadius: "100%", border: "1px solid white", position: "relative", cursor: "pointer" }} >
                                <img style={{ width: "20%", position: "absolute", left: "45%", top: "50%", transform: "translate(-50%, -50%)" }} src='https://cdn.discordapp.com/attachments/1073737355896299542/1124656168434946048/Daco_752371.png' />
                            </div>
                            <div style={{ width: "8vh", height: "8vh", borderRadius: "100%", border: "1px solid white", position: "relative", cursor: "pointer" }} >
                                <img style={{ width: "20%", position: "absolute", left: "52%", top: "50%", transform: "translate(-50%, -50%) rotate(180deg)" }} src='https://cdn.discordapp.com/attachments/1073737355896299542/1124656168434946048/Daco_752371.png' />
                            </div>

                            <div style={{ height: "8vh", width: "35%", display: "flex", position: "relative", display: "flex", alignItems: "center" }} >
                                <div style={{ width: "100%", height: "0.26vh", position: "relative", display: "flex", background: "rgba(256,256,256,0.4)", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)" }}>
                                    {data.map((e, i) => {
                                        return <div key={i} style={{ height: "100%", width: `${100 / data.length}%`, borderRadius: "1vh", background: "transparent" }} />
                                    })}
                                </div>
                            </div>
                            <div style={{
                                color: "white", height: "100%", display: "flex",
                                alignItems: "center", fontSize: "3vw", marginTop: "-0.25vw",
                                fontWeight: "bold", overflow: "hidden", background: "red", width: "3vw"
                            }}>
                                <div ref={record} style={{ display: "flex", transition: "1s cubic-bezier(.69,.26,0,1)" }}>
                                    <div>
                                        02
                                    </div>
                                    <div>
                                        03
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <style>{`

                .content-wrapper { width: 100vw; height: 100vh; overflow: hidden; position: relative; display: flex; background-position: center; background-size: cover;  background : ${data[data.length - 1].background} }
                .loading { height: 1%; width: 0; background: red; position: absolute; border-radius: 50px; margin-left: -50px;  }
                .left-wrapper { width: 45%; color: white }
                .right-wrapper { width: 55%; }
                .right-container { width: 100%; height: 32vw; position: absolute; bottom: 0;  }
                            
                @keyframes scaler {
                    0% {
                       transform: none;
                       top: 0;
                      }
                   
                     100% {
                     animEnd(wrapper, container, data)    
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

