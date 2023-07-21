import { useRef, useEffect, useState } from 'react'
import { Jost, Playfair_Display, Enriqueta } from 'next/font/google'
import testimony_data from '@/data/landing/testimony_data'
import iteration, { counter } from '@/functions/landing/testimony_functions'
import Image from 'next/image'
import { width } from '@mui/system'

const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Enriqueta({ subsets: ['latin'], weight: '400' })


export default function Partners() {
    const container = useRef(null)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {

            container.current.children[0].style.transition = "1s"
            container.current.children[1].style.transition = "1s"
            container.current.children[0].style.opacity = "0"
            container.current.children[1].style.opacity = "1"

        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <div ref={container} className='testimony_content-wrapper'>

                {testimony_data.slice(0, 2).map((e, i) => {
                    return <Component key={i} opacity={Math.abs(i - 1)} container={container} counter={counter} setCounter={setCounter} />
                })}
            </div>
            <style>{`
            .testimony_content-wrapper { width: 100%; height: clamp(300px, 31vw, 380px); display: flex; justify-content: center; position: relative; z-index: 0; position: relative }
            .testimony_wrapper { width: 100%; height: 100%; max-width: 1220px; display: flex; justify-content: center; flex-direction: column; align-items: center; position: absolute;  }
            .testimony_view-all { background: black; color: white; font-size: clamp(16px, 1.5vw, 18px); letter-spacing: 0.1em; width: 132.328px; height: 42.0781px; display: flex; justify-content: center; align-items: center;  }
            .testimony_testimony { white-space: nowrap; font-style: italic; margin-top: 5%; font-size: clamp(10px, 2vw, 25px); letter-spacing: 0.04em; margin-bottom: 2%;  }
            .testimony_identity-content { display: flex; align-items: center;  }
            .testimony_identity-img-container { width: 3.5vw; height: 3.5vw; background: red; border-radius: 50%; overflow: hidden  }
            .testimony_identity-img { width: 100%; height: 100%; object-fit: cover; object-position: center;  }
            .testimony_name { margin-left: 2vw; font-weight: bold; text-transform: uppercase;  }
            .testimony_company { text-transform: none; font-size: 85%;  }
            .testimony_company br {display: none}
            .testimony_record { display: flex; gap: 13px; width: 20%; justify-content: center; align-items: center; margin-top: 2%;  }
            .testimony_record-picked { width: clamp(9px, 0.9vw, 11px); height: clamp(9px, 0.9vw, 11px); background: red;  }
            .testimony_record-not-picked { width: clamp(9px, 0.9vw, 11px); height: clamp(9px, 0.9vw, 11px); background: black;  }


            @media (max-width:770px){
            .testimony_view-all { font-size: 2vw; width: 21%; height: 12%;}
            .testimony_testimony { font-size: 3vw; white-space: wrap; width: 80%; text-align: center; margin-top: 8%; margin-bottom : 8% }
            .testimony_name br {display: block}
            .testimony_company { text-transform: none; font-size: 75%; font-style: normal; margin-top: 5% ; text-align: center}
            .testimony_name { font-size: 2.8vw }
            .testimony_identity-img-container { width: 7vw; height: 7vw;}
            }

            `}</style>
        </>
    )
}


function Component({ opacity, container }) {
    return (<div
        onTransitionEnd={() => opacity ? iteration(container, testimony_data) : null}
        style={{ opacity }} className='testimony_wrapper' >
        <h1 className={font.className + ' testimony_view-all'} >
            VIEW ALL
        </h1>
        <p className={font2.className + ' testimony_testimony'} >
            {testimony_data[opacity].testimony}
        </p>
        <div className='testimony_identity-content' >
            <div className='testimony_identity-img-container' >
            <img src={'/landing/testimony/' + opacity + '.jpg'} className='testimony_identity-img'  />
            </div>

            <div className={font.className + ' testimony_name'} >
                <span>{testimony_data[opacity].name}  /</span><br /> <span className={font2.className + ' testimony_company'} > {testimony_data[opacity].position}</span>
            </div>
        </div>

        <div className='testimony_record' >
            <div className={opacity ? 'testimony_record-picked' : 'testimony_record-picked'} />
            <div className={opacity ? 'testimony_record-not-picked' : 'testimony_record-picked'} />
            <div className='testimony_record-not-picked' />
        </div>
    </div>)
}