import React, { useEffect } from 'react'
import { Jost, Playfair_Display } from 'next/font/google'

const font = Playfair_Display({ subsets: ['latin'], weight: '400' });


export default function Collab() {
    const maxTop = (window.innerWidth * 0.4 < 1220 ? "4vw" : "50px")

    return (
        <>
            <div className={font.className + ' collab_content-wrapper'} >
                <div className='collab_wrapper' >
                    <div className='collab_left' >
                        <div className='collab_left-container' >
                            <div className='collab_top-section' >
                                <div className='collab_img-container' >
                                    <img className='collab_img' src="https://static.showit.co/file/nR007NugRlW87P_eShy5nQ/69014/inshot_20230510_153432399.gif" />
                                </div>
                                <div className='collab_top-paragraphe' >
                                    You'll <span> really like </span> our team...we never take ourselves too seriously & we all love a good party!
                                </div>
                            </div>

                            <div className='collab_bottom-section' >
                                <div className='collab_bottom-paragraphe' >
                                    <div>
                                        see what people are saying
                                    </div>
                                </div>
                                <div className='collab_stop-press' >
                                    stop the presses
                                    <img className='collab_arrow'
                                        src='https://static.showit.co/200/MaO_9a5DR0KMXxg_9nA4Qg/shared/arrows_drawn-01.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='collab_right' >
                        <div className='collab_right-container' >
                            <div className='collab_right-links' >
                                let's collab!
                            </div>
                            <div className='collab_right-links' >
                                follow us on instagram
                            </div>
                            <div className='collab_right-links' >
                                plan your wedding
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <style>{`
                .collab_content-wrapper { width: 100vw; height: 32vh; display: flex; justify-content: center; background: linear-gradient(to bottom, #f3f5f8, #fdfdfe)  }
                .collab_wrapper { width: 100%; max-width: 1220px; display: flex;  }
                .collab_left { width: 50%;  }
                .collab_left-container { width: 90%; background: linear-gradient(0deg, rgba(243,245,248,1) 0%, rgba(255,255,255,1) 100%); background-origin: border-box; height: 100%; margin-left: -15%;  }
                .collab_top-section { width: 100%; height: 80%; display: flex; }
                .collab_img-container { width: 30%; height: 19.7vw; max-height: 250px; position: relative;  }
                .collab_img { width: 100%; height: 100%; position: absolute; margin-top: -20%; margin-left: 20%; object-fit: cover; object-position: center;  }
                .collab_top-paragraphe { width: 53%; height: 100%; margin-left: 12%; font-size: clamp(18px, 1.7vw, 23px); position: relative; top: ${maxTop};  }
                
                .collab_bottom-section { width: 100%; height: 10%; display: flex; position: relative;  }
                .collab_bottom-paragraphe { font-style: italic; color: rgba(109,152,156,1); margin-left: 14%; font-size: clamp(8px, 1.3vw, 15px);  }
                .collab_stop-press { font-style: italic; margin-left: 10%; display: flex; justify-content: center; align-items: center; background: #6d989c; padding: 5% 5%; color: white; font-size: clamp(8px, 1.3vw, 15px); position: relative; top: -50%;  }
                .collab_arrow { width: 40%; height: 80%; position: absolute; object-fit: cover; left: -25%; top: -20%; transform: rotate(7deg);  }
                .collab_right { width: 50%;  }
                .collab_right-container { width: 78%; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 12%; font-style: italic; font-size: clamp(18px, 1.85vw, 23px); letter-spacing: 0.2em;  }
                .collab_right-links { width: 100%; background: white; height: 16%; display: flex; justify-content: center; align-items: center;  }
               
               
               
                @media (max-width: 800px) {
                    .collab_content-wrapper { margin-top: 48vw; height: auto; }
                    .collab_wrapper { flex-direction: column ;}
                    .collab_left { width: 100%; height : auto}
                    .collab_left-container { width: 110%; margin-left: -10%;}
                    .collab_img-container { width: 45vw; height: 60vw; max-height: none; position: relative;  }
                    .collab_img { margin-top: -15%; }
                    .collab_top-section {height: auto}
                    .collab_top-paragraphe { width: 45%; margin-left: 10%; font-size: 5vw;  transform: translatey(5vw)  }

                    .collab_bottom-section { width: 110%; height: 10%; display: flex; position: relative;}
                    .collab_bottom-paragraphe { margin-left:0; width: 50%; display: flex; justify-content: center; color: black; font-size: 3.5vw;}
                    .collab_bottom-paragraphe div { width: 50%; margin-left: 30%}
                    .collab_stop-press { margin-left: 2%;  padding: 6%; font-size: 3.5vw;  top: -25%;  }
                    .collab_right { width: 100%; position: relative; display: flex; justify-content: center; height: 88vw;; background: white }
                    .collab_right-container {gap: 8%; width: 90%; font-size: 3.7vw; text-transform: uppercase; font-weight: 500; font-style: normal}
                    .collab_right-links {  background: #f7f8fa; }

                }
            `}</style>
        </>
    )
}
