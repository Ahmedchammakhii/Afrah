"use client";
import data from '@/data/hero';
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
                // marginLeft:"20vw"
            }}
        >
            <div onAnimationEnd={() => animEnd(wrapper, container, data, record, titles, subtitle, matta)}
                style={{
                    width: "13vw",
                    height: "19vw",
                    overflow: "hidden",
                    cursor: "pointer",
                    marginTop: "50px",
                    transition: `1s`,
                    pointerEvents: "none",
                    position: "absolute",
                    left: "2.5%",
                    display: "none",
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
                        width: "13vw",
                        height: "19vw",
                        background: e.background,
                        overflow: "hidden",
                        boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.7)",
                        cursor: "pointer",
                        marginTop: "50px",
                        marginLeft: "2.5%",
                        transition: `transform 0.5s`,
                        pointerEvents: "none",
                        zIndex: i + 5,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        // border: "1px solid black"
                    }}
                />
            ))}
        </div>
    )
}
