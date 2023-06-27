"use client";
import data from '@/data/hero';
import { useRef, useState, useEffect } from 'react';
import Slides from './slides';
import { iteration } from '@/functions/landing/hero_functions';

export default function Hero() {
    const container = useRef(null);
    const wrapper = useRef(null);

    return (
        <div ref={wrapper}
            className='content-wrapper'
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                display: "flex",
                background: data[data.length - 1].background,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        >
            <div
                onAnimationIteration={(e) => {
                    iteration(container)
                }}
                className="loading"
                style={{
                    height: "1%",
                    width: "0",
                    background: "red",
                    position: "absolute",
                    animation: "loading 5s linear infinite",
                    borderRadius: "50px",
                    marginLeft: "-50px"
                }}
            >

            </div>


            <div className='left-wrapper' style={{ width: "37%" }}>

            </div>
            <div className='right-wrapper' style={{ width: "63%" }}>

                <div className='right-container' style={{ width: "100%", height: "67%", position: "absolute", bottom: 0 }}>

                    <Slides container={container} wrapper={wrapper} />


                </div>
            </div>


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
                        left : -37%;
                        top: -57%;
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

