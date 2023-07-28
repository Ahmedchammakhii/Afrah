import React from 'react'
import localFont from "next/font/local";
import Link from 'next/link';
import Button from '@/sharedComponents/vawzen/button/button';
const myFont = localFont({ src: '../../pages/planyourwedding/BonVivant-Regular.otf' });
export default function footer() {
    return (
        <div className="all" style={{ height: "40vh", background: "black", width: "100%", overflowX: "hidden", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "14px" }}>
            <div className="wrapit" style={{ width: "100%", maxWidth: "1220px", height: "70%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <style>{`
        @media (max-width:770px){
            .all{
                height:max-content !important;
                
                max-width:100% !important;
               
            }
            .wrapit{
                display:flex !important;
                flex-direction:column !important;
                padding:15px !important;
            }
            #left{
                display:none !important;
            }
            .left{
                width:80% !important;
                height:100% !important;
            }
            .middle{
                width:100% !important;
                border:none !important;
            }
            .middle p{
                margin-bottom:10px !important;
            }
             .icons{
            //     transform:translateY(250px) !important;
            //     margin-bottom:10px !important;
            margin-bottom:10px !important;
             }
             .middle h1{
                font-size:20px !important;
             }
             .left button{
                height:40px !important;
                width:250px !important;
             }
        }`}</style>
                <div id="left" className='left' style={{ width: "calc(100% / 3)", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className='left' style={{ width: "80%", height: "80%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>

                        <div style={{ width: "40%", height: "90%", display: "flex", flexDirection: "column", lineHeight: "30px" }}>
                            <a>HOME</a>
                            <a>ABOUT</a>
                            <a>CONTACT</a>
                            <a>PRESS</a>
                            <a>VENUES</a>
                            <a>PORTFOLIO</a>
                        </div>
                        <div style={{ width: "40%", height: "90%", display: "flex", flexDirection: "column", lineHeight: "30px" }}>
                            <a>HOME</a>
                            <a>Weddings</a>
                            <a>Corporates </a>
                            <a>Public </a>
                            <a>Festivals </a>
                            <a style={{ fontWeight: "bold" }}>PORTFOLIO</a>
                        </div>
                    </div>
                </div>


                <div className="middle" style={{ height: "100%", width: "calc(100% / 2.2)", borderLeft: "1px solid white", borderRight: "1px solid white", display: "flex", flexDirection: "column" }} >
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <div><h1 className={myFont.className} style={{ textAlign: "center", letterSpacing: "4px", fontWeight: "400" }}>LET'S MAKE MAGIC</h1></div>
                        <p style={{ textAlign: "center", fontWeight: "400", width: "85%", lineHeight: "20px" }}>
                            Serving the great Wild West, our teams are based in Portland Oregon, Seattle Washington and Sun Valley (Ketchum) Idaho.
                            <br>
                            </br>
                            <br>
                            </br>
                            We believe that there's not much a dance party won't cure.&nbsp;
                            <br>
                            </br>
                        </p>
                        <div className='icons' style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", margin: 0 }}>
                            <Link href="https://facebook.com">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={30} height={30} fill="white"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                            </Link>
                            <Link href="https://instagram.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
                            </Link>

                            <Link href="https://twitter.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" /> </svg>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='left' style={{ height: "100%", width: "calc(100% / 3)", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }} >
                    <p style={{ textAlign: "center", fontWeight: "300", width: "80%", marginBottom: "30px", marginTop: 0, fontSize: "15px" }}> Interested? Have questions?
                        <br></br>
                        Let our 21 years of experience help guide you, How can we help?</p>
                    <button style={{ background: "transparent", color: "white", marginBottom: "3px", width: "250px", height: "45px", border: "1px solid white", padding: "auto", fontSize: "18px", fontWeight: "100" }} > <Button color={['black', 'white']}>I'm planning a wedding </Button></button>
                    <br></br>
                    <button style={{ background: "transparent", color: "white", marginBottom: "5px", width: "250px", height: "45px", border: "1px solid white", padding: "auto", fontSize: "18px", fontWeight: "100" }}><Button color={['black', 'white']}>I'm planning an event</Button></button>
                </div>
            </div>
        </div>



    )
}
