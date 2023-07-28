import { useEffect, useRef } from 'react'
import iteration from '../../../functions/landing/hero-m_functions'
const myFont = localFont({ src: "../../../pages/planyourwedding/BonVivant-Regular.otf" });
import localFont from "next/font/local";
import { Jost, Playfair_Display } from 'next/font/google'

const font = Jost({ subsets: ['latin'], weight: '600' })

export default function heroMobile() {

    const container = useRef(null);

    useEffect(() => {
        // console.log(container.current.children[0].style.opacity);
        const interval = setInterval(() => {

            container.current.children[0].style.transition = "4s"
            container.current.children[1].style.transition = "4s"
            container.current.children[0].style.opacity = "0"
            container.current.children[1].style.opacity = "1"

        }, 5000);
        return () => {
            clearInterval(interval);
        };

    }, [])
    const data = [0, 1, 2, 3, 4, 5]
    return (
        <>
            <div ref={container} className='mhero_wrapper' >
                {data.slice(0, 2).map((e, i) => {
                    return <div onTransitionEnd={() => i ? iteration(container, data) : null} key={i}
                        className='mhero_container' style={{ opacity: i ? 0 : 1 }}  >
                        <img alt={i} className='mhero_img'
                            src={i ? '/landing/hero/' + (data[data.length - 1]) + '.jpg' : '/landing/hero/' + data[data.length - 2] + '.jpg'} />
                    </div>
                })}

                <div className='mhero_text-container' >
                    <h1 className={font.className + ' mhero_afrah'}>AFRAH</h1>
                    <h1 className={myFont.className + ' mhero_production'}  >Event Productions</h1>

                    <div className='mhero_specilisation-container' >
                        <h4 className={font.className + ' mhero_specialisation'} >Specifically specializing in outdoor, private property & warehouse style venues</h4>
                    </div>
                </div>
            </div>
            <style>{`
            .mhero_wrapper { width: 100%; height: 75vh; background: black; z-index: 100001; position: relative; display: none }
            .mhero_container { width: 100%; height: 100%; position: absolute;  transition: 4s;  }
            .mhero_img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: brightness(50%);  }
            .mhero_text-container { width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; position: absolute; color: white;  }
            .mhero_production { letter-spacing: 0.2em; font-size: 7vw;  }
            .mhero_specilisation-container { position: absolute; bottom: 10%; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;  }
            .mhero_specialisation { width: 80%; text-align: center; font-size: 3vw; letter-spacing: 0.2em;  }

            @media (max-width: 1200px) { 
                .mhero_wrapper { display: block }

            }

            `}</style>
        </>
    )
}

