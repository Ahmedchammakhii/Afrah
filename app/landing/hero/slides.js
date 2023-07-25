"use client";
import data from '@/data/landing/hero_data';
import { useRef, useState, useEffect } from 'react';
import { iteration, animEnd } from '@/functions/landing/hero_functions';
import { Kalam } from 'next/font/google';
import { Expletus_Sans } from 'next/font/google';

const font = Expletus_Sans({ subsets: ['latin'], weight: '400' })
const font2 = Kalam({ subsets: ['latin'], weight: '300' });

export default function slides({ wrapper, container, record, titles, subtitle, matta }) {

    let items = []




    return (
        <div ref={container}
            className={font2.className + " top-right-container"}
            style={{
                width: "100%",
                display: "flex",
                overflow: "hidden",
                height: "100%",
                marginLeft: "18vw"
            }}
        >
            <div onAnimationEnd={() => animEnd(wrapper, container, data, record, titles, subtitle, matta)}
                style={{
                    width: "10vw",
                    height: "19vw",
                    overflow: "hidden",
                    cursor: "pointer",
                    marginTop: "50px",
                    transition: `1s`,
                    pointerEvents: "none",
                    position: "absolute",
                    left: "18vw",
                    // display: "none",
                    background: data[0].background,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // border: "1px solid black"
                }}
            />
            {data.map((e, i) => (
                <div
                    key={i}
                    style={{
                        width: "10vw",
                        height: "19vw",
                        background: e.background,
                        boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.7)",
                        cursor: "pointer",
                        marginTop: "50px",
                        marginLeft: i ? "2.5vw" : 0,
                        transition: `transform 0.5s`,
                        pointerEvents: "none",
                        zIndex: i + 5,
                        backgroundPosition: "30% center",
                        backgroundSize: "cover",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                        // border: "1px solid black"
                    }}
                >
                    <div style={{ width: "calc(100% - 1vw)", height: "calc(100% - 1.5vw)", border: "2px solid white", position: "relative" , }}>
                        <div style={{ color: "white", width: "100%", height: "30%", position: "absolute", bottom: 0 }}>
                            <div style={{ width: '15%', height: "3%", background: "white", marginLeft: "5%", boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.4)" }} />
                            <h3 style={{ width: "90%", marginLeft: "5%", marginTop: "5%", marginBottom: "2%", fontWeight: "normal", fontSize: "0.7vw", textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 15px' }} >{e.location}</h3>
                            <h1 className={font.className} style={{ width: "90%", marginLeft: "5%", textTransform: "uppercase", fontSize: "1vw", textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 15px' }}>{e.first_title}</h1>
                            <h1 className={font.className} style={{ width: "90%", marginLeft: "5%", textTransform: "uppercase", fontSize: "1vw", textShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 15px' }}>{e.second_title}</h1>
                        </div>
                    </div>
                </div>
            ))}





            <style>{`
            @keyframes scaler {
                0% {
                   transform: none;
                   top: 0;
                  }
               
                 100% {
                 transform: none;
                 width : 100%;
                 height: 100vh;
                 left : -45%;
                 margin-top : 0;
                 top: calc(-100vh + 32vw);
                 border-radius: 0;
                 
                         }
                 
              }`}</style>
        </div>
    )
}
