import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'
import localFont from "next/font/local";

const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });

const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })
// const maxMarginTop = (innerWidth > 1220 ? '85px' : '7vw')

export default function Details() {
    return (
        <div className='details_father' >
            <div className='details_content-wrapper' >
                <div className='details_wrapper' >
                    <div className='details_left'>
                        <div className='details_left-container'>
                            <h1 className={font.className + ' details_title'}>
                                LETS TALK DETAILS
                            </h1>
                            <div className='details_line' />
                            <p className={font2.className + ' details_p-one'} >
                                serving the great wild west, our teams are based in portland oregon, seattle washington and sun valley (ketchum) idaho.
                                we believe that there's not much a dance party won't cure.
                            </p>
                            <p className={font2.className + ' details_p-two'} >
                                we believe that there's not much a dance party won't cure.</p>
                            <div className={font2.className + ' details_schedule'}>
                                schedule a time to chat</div>
                        </div>
                    </div>
                    <div className='details_right' >
                        <img src='https://static.showit.co/800/7XLXwSvNQAeEId4mCn0fAQ/69014/mayaquinnwedding-33.jpg'
                            className='details_image' />
                    </div>
                </div>
            </div>


            <div className={myFont.className + " details_ready-container"} >
                You <div className='details_ready'> Ready?</div>
            </div>


            <style>{`
                    .details_father { position: relative; background: linear-gradient(to bottom, #f3f5f8, #f7f6f3); margin-top: ${maxMarginTop}}
                    .details_content-wrapper { width: 100vw; height: 65vw; max-height: 750px; display: flex; justify-content: center; background: transparent;  }
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


                    @media (max-width: 800px) {
                        .details_father {width: 100vw}
                        .details_content-wrapper { margin-top: 20vw; max-height: none; height: auto; }
                        .details_wrapper { flex-direction: column; }
                        .details_left { width: 100%; }
                        .details_left-container { width: 100%; }
                        .details_ready-container { display: none }
                        .details_line { height: 17vw; width: 2.5px;}
                        .details_title { font-size: 3.3vw;  }
                        .details_p-one { font-size: 4vw;width: 80%;  }
                        .details_p-two { font-size: 4vw;width: 80%; margin-top: 5%;  }
                        .details_right { width: 100%; display: flex; justify-content: center; align-items: center; margin-top: 9vw; }
                        .details_image { width: 78%; height: 90vw; object-fit: cover; object-position: center 0%;  }
                        .details_schedule { position: absolute; top: 185vw; z-index : 2; font-size : 3.5vw; border : 2px solid black ; padding : 2.2vw 5vw }
                    }
                    
            `}</style>
        </div>
    )
}
