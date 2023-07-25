import React, { useEffect, useRef } from 'react'
import connect_data from '@/data/landing/connect_data'
import iteration from '@/functions/landing/connect_functions';
import Button from '@/sharedComponents/vawzen/button/button';
import { Jost, Playfair_Display } from 'next/font/google'
import localFont from "next/font/local";

const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });

const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })

export default function planning() {
    const container = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            container.current.children[0].style.transition = "none";
            container.current.children[1].style.transition = "0.8s";
            container.current.children[0].style.opacity = "0";
            const timeoutId = setTimeout(() => {
                container.current.children[1].style.opacity = "1";
            }, 50);

            return () => {
                clearInterval(interval);
                clearTimeout(timeoutId);
            };
        }, 4000);
    }, []);

    return (
        <div className='plan_content-wrapper' >
            <div className='plan_wrapper' >
                <div ref={container} className='plan_left' >
                    <img className='plan_firstImg' src={"/landing/connect/" + (connect_data.length - 1) + ".jpg"} />
                    <img className='plan_secondImg' onTransitionEnd={() => iteration(container, connect_data)} src={"/landing/connect/" + 1 + ".jpg"} />

                    <div className={myFont.className + " plan_signature-container"} >
                        <div className='plan_signature-one'  >You</div>
                        <div className='plan_signature-two'  >Ready?</div>
                    </div>
                </div>

                <div className='plan_right' >
                    <div className='plan_right-container' >
                        <h3 className={font.className + " plan_h3"}  >LET'S CONNECT</h3>
                        <h1 className={font2.className + " plan_h1"} >what are you celebrating?</h1>
                        <p className='plan_p' >INTERESTED? HAVE QUESTIONS?
                            LET OUR 14 YEARS OF EXPERIENCE HELP GUIDE YOU, HOW CAN WE HELP?</p>
                    </div>
                    <div className='plan_button-container'  >
                        <div className='plan_wedding'  >
                            <Button color={['white', 'black']}>
                                I'M PLANING A WEDDING
                            </Button>
                        </div>
                        <div className='plan_event'  >
                        <Button color={['white', 'black']}>
                                I'M PLANING A WEDDING
                            </Button>
                        </div>
                    </div>
                </div>
            </div>



            <style>{`
        .plan_content-wrapper { width: 100vw;  display: flex; flex-direction: row; justify-content: center; position: relative; background : background: linear-gradient(to bottom, white, #f3f5f8) }
        .plan_wrapper { max-width: 1220px; width: 100%; height: 100vh; max-height: 350px; display: flex; }
        .plan_left { width: 32%; height: 40vw; max-height: 440px; background: white; transform: rotate(-5deg); margin-top: -13%; position: relative; z-index: 1;  }
        .plan_firstImg { width: 100%; height: 100%; object-fit: cover; object-position: center; position: absolute; transition: none; opacity: 1;  }
        .plan_secondImg { width: 100%; height: 100%; object-fit: cover; object-position: center; position: absolute; transition: 0.8s; opacity: 0;  }
        .plan_right { width: 68%; position: relative;  }
        .plan_right-container { width: 100%; height: 85%; display: flex; justify-content: center; align-items: center; flex-direction: column;  }
        .plan_h3 { font-size: clamp(10px, 1.1vw, 14px); letter-spacing: 0.3em;  }
        .plan_h1 { font-size: clamp(25px, 2.8vw, 36px); font-style: italic; margin-bottom: 4%; margin-top: 1%;  }
        .plan_p { font-size: clamp(12px, 1.2vw, 16px); width: 40%; line-height: 1.5; text-align: center; }
        .plan_button-container { width: 100%; height: 12%; display: flex; gap: 4%; margin-left: -15%;  }
        .plan_wedding { width: calc(38%); height: 100%; display: flex; align-items: center; text-align: center; justify-content: center; border: 1px solid; font-size: 13px; letter-spacing: 1.5px;  }
        .plan_event { width: calc(38%); height: 100%; display: flex; align-items: center; text-align: center; justify-content: center; border: 1px solid; font-size: 13px; letter-spacing: 1.5px;  }
        .plan_signature-container { display: none }



        @media (max-width: 800px) {
            .plan_content-wrapper { height: 180vw; width: 100vw; }
            .plan_left{width: 50vw;max-height: none;height:62vw;position: relative;}
            .plan_wrapper{flex-direction : column;max-height: none;}
            .plan_signature-container {pointer-events:none;  width: 50vw; height: 100%; position: absolute; left: 50vw; transform: rotate(-5deg); margin-top: 60%; display: block }
            .plan_signature-one { font-size: 17.7vw;  }
            .plan_signature-two { font-size: 17.7vw; margin-top: -15vw; margin-left: -8vw;  }
            .plan_right-container {  width: 100vw; margin-top: 25vw; height: 100vh; position: absolute; display: flex; justify-content: start; flex-direction: column;  }
            .plan_h3 {font-size: 3vw; letter-spacing: 1.5vw}
            .plan_h1 {font-size: 7vw; line-height: 2}
            .plan_p {font-size: 4.5vw; width: 85vw; text-align:center;line-height:1.7}
            .plan_button-container { width: 100vw; height: 30vw; display: flex; gap: 8vw; margin-left: -15%; margin-top: 90vw; flex-direction: column; margin-left:0; align-items: center; position: absolute }
            .plan_wedding { width: 85%;  border: 0.5vw solid; font-size: 4vw; letter-spacing: 1.5px; font-weight: 500  }
            .plan_event { width: 85%;  border: 0.5vw solid; font-size: 4vw; letter-spacing: 1.5px; font-weight: 500  }
        }
        `}</style>
        </div>
    )
}
