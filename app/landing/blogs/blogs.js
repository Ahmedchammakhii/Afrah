import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '500' });
const font3 = Jost({ subsets: ['latin'], weight: '400' });
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' });
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });

export default function blogs() {
    return (
        <div className='blogs_content-wrapper' >
            <div className='blogs_wrapper' >
                <div className='blogs_top-section' >
                    <div className='blogs_top-container' >

                        <div className={font.className + ' blogs_the-blog'} >
                            THE BLOG
                        </div>
                        <div className={myFont.className + ' blogs_the-leatest'} >
                            The Latest
                        </div>
                    </div>

                </div>


                <div className='blogs_bottom-section' >
                    <div className='blogs_bottom-container' >
                        <div className='blogs_img-container' >
                            <img className='blogs_img' src='https://static.showit.co/800/XKCJnVszSBib-ZEILGMesA/69014/saraholiviaphoto-54.jpg'
                            />
                            <div className={font3.className + ' blogs_paragraphe'} >
                                TOP 5 TIPS FOR BUDGETING YOUR WEDDING
                            </div>
                            <div className={font2.className + ' blogs_button-container'} >
                                <div className='blogs_read'  >
                                    <span className='blogs_span' >a</span>  read more <span className='blogs_span' >a</span>
                                </div>
                            </div>
                        </div>
                        <div className='blogs_img-container' >
                            <img className='blogs_img' src='https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                            />
                            <div className={font3.className + ' blogs_paragraphe'} >
                                PRO WEDDING DAY TIMELINE -MADE BY PLANNERS | WEDDING DAY TIMELINES FOR FIRST LOOK AND NO FIRST LOOK
                            </div>
                            <div className={font2.className + ' blogs_button-container'} >
                                <div className='blogs_read'  >
                                    <span className='blogs_span' >a</span>  read more <span className='blogs_span' >a</span>
                                </div>
                            </div>
                        </div>
                        <div className='blogs_img-container' >
                            <img className='blogs_img' src='https://static.showit.co/800/p_jZcFNRRMyZId9yerIdKw/69014/7g8a9796.jpg'
                            />
                            <div className={font3.className + ' blogs_paragraphe'} >
                                WEDDING PLANNER VS. VENUE MANAGER AND WHAT THE DIFFERENCES ARE
                            </div>
                            <div className={font2.className + ' blogs_button-container'} >
                                <div className='blogs_read'  >
                                    <span className='blogs_span' >a</span>  read more <span className='blogs_span' >a</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <style>{`
            .blogs_content-wrapper { width: 100%; display: flex; justify-content: center; background: linear-gradient(to bottom, #fdfdfe, #d7e3e2); }
            .blogs_wrapper { width: 100%; max-width: 1220px;  }
            .blogs_top-section { width: 100%; height: 18vw; max-height: 219.6px; display: flex; justify-content: center; position: relative; align-items: end;  }
            .blogs_top-container { height: 70%; display: flex; flex-direction: column; justify-content: center;  }
            .blogs_the-blog { font-weight: bold; color: rgba(109,152,156,1); letter-spacing: 0.3em; line-height: 1.6; font-size: clamp(10px, 1.3vw, 16px); text-align: center;  }
            .blogs_the-leatest { text-align: center; letter-spacing: 0.1em; line-height: 1.1; font-size: clamp(30px, 4.6vw, 55px); font-weight: 400;  }
            .blogs_bottom-section { width: 100%; height: 53.6vw; max-height: 654px;  }
            .blogs_bottom-container { width: 100%; height: 100%; display: flex; gap: 5%;  }
            .blogs_img-container { height: 100%; width: calc((100% / 3) - (5% / 3)); display: flex; flex-direction: column; align-items: center;  }
            .blogs_img { width: 100%; height: 70%; object-fit: cover; object-position: center;  }
            .blogs_paragraphe { line-height: 1.5; letter-spacing: 0.1em; font-size: clamp(10px, 1.19vw, 15px); width: 90%; height: 15%; text-align: center; display: flex; align-items: center;  }
            .blogs_button-container { display: flex; justify-content: center;  }
            .blogs_read { white-space: nowrap; letter-spacing: 0.3em; line-height: 2.8; font-size: clamp(10px, 1.15vw, 15px); padding: 0.4% 10%; color: white; font-style: italic; background: black;  }
            .blogs_span { color: black; font-size: clamp(6px, 0.85vw, 10px);  }
            

            @media (max-width: 800px) {
                .blogs_wrapper {height: 448vw}
                .blogs_top-section { display: none }
                .blogs_bottom-section { width: 100%; height: auto; max-height: none;  }
                .blogs_bottom-container { width: 100%; height: 100%; display: flex; gap: 0%; flex-direction: column  }
                .blogs_img-container:nth-child(1) { height: 200vw}
                .blogs_img-container:nth-child(2) { height: 90vw; margin-top: -4vw}
                .blogs_img-container:nth-child(3) { height: 90vw; margin-top: 40vw}

                .blogs_img-container { height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center;  }
                .blogs_paragraphe { width: 80%; font-size: 4vw; height: auto; padding: 8vw 0vw; }
                .blogs_read {  padding: 1vw 5vw; font-size: 4vw;}

            }

            `}</style>
        </div>
    )
}
