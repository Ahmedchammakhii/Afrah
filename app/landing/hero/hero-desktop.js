"use client";
import data from '@/data/landing/hero_data';
import { useEffect, useRef } from 'react';
import Slides from './slides';
import { iteration, counter } from '@/functions/landing/hero_functions';
import { Expletus_Sans } from 'next/font/google';
import Record from './record';
import Content from './content';
const font = Expletus_Sans({ subsets: ['latin'], weight: '400' })

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
        if (innerWidth > 1200) {
            loader.current.style.animation = "loading 10s linear infinite"
            subtitle.current.children[0].style.transform = "none"
            for (let i = 0; titles.current.children.length > i; i++) {
                setTimeout(() => {
                    titles.current.children[i].children[0].style.transform = "none"
                }, Number(i + 1 + "00"));
            }
        }
        // // veil.current.style.width = 0
    }, [])


    return (
        <div className={'d-hero-content-wrapper ' + font.className}>
            <div ref={wrapper} style={{
                transition: "scale 1s cubic-bezier(.69,.26,0,1), filter 1s",
                width: "100%", height: "100vh", position: "absolute", zIndex: 0,
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
            }} ref={loader} className="loading" />

            <div className='left-wrapper' style={{ display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2, textShadow: "0px 0px 15px rgba(0,0,0,0.5)", marginTop: "2vw" }}>
                <Content refs={[matta, titles, subtitle]} data={data} />
            </div>
            <div className='right-wrapper' >
                <div className='right-container' >
                    <Slides container={container} wrapper={wrapper} record={record} titles={titles} subtitle={subtitle} matta={matta} />
                    <Record record={record} />
                </div>
            </div>


            <style>{`

                .d-hero-content-wrapper {z-index: 100001; width: 100%; height: 100vh; overflow: hidden; position: relative; display: flex; background-position: center; background-size: cover;  background : black }
                .loading { height: 1%; width: 0; background: transparent; position: absolute; border-radius: 50px; margin-left: -50px;  }
                .left-wrapper { width: 45%; color: white }
                .right-wrapper { width: 55%; }
                .right-container { width: 100%; height: 32vw; position: absolute; bottom: 0;  }
                            
                @media (max-width: 1200px) { 
                    .d-hero-content-wrapper { display: none; }

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

