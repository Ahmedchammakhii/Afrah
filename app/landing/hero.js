"use client";
import { useRef, useState } from 'react';
import data from '@/data/hero';
export default function Hero() {
    const container = useRef(null);
    const [items, setItems] = useState([...data.slice(1), data[0]])

    return (
        <div
            className='content-wrapper'
            style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                display: "flex",
            }}
        >
            <div
                onLoad={() => {
                    setTimeout(() => {
                        console.log("fired")
                    }, 5000 * 0.6);
                }}
                onAnimationIteration={(e) => {
                    // setTimeout(() => {

                    //     container.current.children[0].style.background = "transparent";
                    //     container.current.children[0].style.boxShadow = "none";

                    //     for (let i = 0; container.current.children.length > i; i++) {
                    //         setTimeout(() => {
                    //             container.current.children[i].style.transform = "translatex(-102%)"
                    //         }, Number((i * 1) + "00"));
                    //     }
                    //     // container.current.children[0].style.flex = "0";

                    // }, 5000 * 0.6);
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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
        const element = document.querySelector('.loading');
        element.addEventListener('animationstart', () => {

            setTimeout(() => {
                console.log("fired")
            }, 5000 * 0.6);

            });
      `,
                    }}
                />
            </div>


            <div className='left-wrapper' style={{ width: "41%" }}>

            </div>
            <div className='right-wrapper' style={{ width: "60%" }}>
                <div className='right-container' style={{ width: "100%", height: "67%", position: "absolute", bottom: 0 }}>
                    <div ref={container} onClick={(e) => {
                        setItems([...items.slice(1), items[0]])
                    }}
                        className="top-right-container"
                        style={{
                            width: "100%",
                            display: "flex",
                            overflow: "hidden",
                            height: "100%",

                        }}
                    >

                        <div
                            style={{
                                width: "15%",
                                height: "67%",
                                background: "gray",
                                overflow: "hidden",
                                borderRadius: "5%",
                                boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.7)",
                                cursor: "pointer",
                                marginTop: "50px",
                                marginLeft: "2%",
                                transition: `transform 0.5s`,
                                pointerEvents: "none",
                                zIndex: 50,
                                position: "absolute"
                            }}
                        />
                        {/* {items.map((e, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: "0 0 15%",
                                    height: "67%",
                                    background: e.background,
                                    overflow: "hidden",
                                    borderRadius: "5%",
                                    boxShadow: "10px 10px 40px 0px rgba(0,0,0,0.7)",
                                    cursor: "pointer",
                                    marginTop: "50px",
                                    marginLeft: "2%",
                                    transition: `transform 0.5s`,
                                    pointerEvents: "none",
                                }}
                            />
                        ))} */}
                    </div>

                </div>
            </div>


            <style>{`
        

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

