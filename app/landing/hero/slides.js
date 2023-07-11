"use client";
import data from '@/data/hero_data';
import { useRef, useState, useEffect } from 'react';
import { iteration, animEnd } from '@/functions/landing/hero_functions';
export default function slides({ wrapper, container, record, titles, subtitle, matta }) {

    let items = []





    return (
        <div ref={container}
            className="top-right-container"
            style={{
                width: "100%",
                display: "flex",
                overflow: "hidden",
                height: "100%",
                marginLeft: "18.8vw"
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
                    left: "18.8%",
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
                        overflow: "hidden",
                        boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.7)",
                        cursor: "pointer",
                        marginTop: "50px",
                        marginLeft: i ? "2.5%" : 0,
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
                    <div style={{ width: "calc(100% - 1vw)", height: "calc(100% - 1.5vw)", border: "2px solid white", }}>

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
                 width : 100vw;
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
