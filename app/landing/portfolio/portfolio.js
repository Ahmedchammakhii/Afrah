import React, { useEffect, useRef } from 'react'
import portfolio from '@/data/landing/portfolio_data'
import iteration from '@/functions/landing/portfolio_functions';
import { Jost, Playfair_Display } from 'next/font/google'
const font = Jost({ subsets: ['latin'], weight: '600' })
const font2 = Playfair_Display({ subsets: ['latin'], weight: '400' })
export default function Portfolio() {

  const container = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {

      container.current.children[0].style.transition = "1s"
      container.current.children[1].style.transition = "1s"
      container.current.children[0].style.opacity = "0"
      container.current.children[1].style.opacity = "1"

    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={container} className='wrapper' >
      <img alt="img" src={"/landing/portfolio/" + portfolio[portfolio.length - 1] + ".jpg"}
        className='firstImg' />
      <img onTransitionEnd={() => iteration(container, portfolio)} alt="img" src={"/landing/portfolio/" + portfolio[0] + ".jpg"}
        className='secondImg' />
      <div className='container' >
        <h1 className={font.className + " title"} >
          BROWSE OUR
        </h1>
        <h2 className={font2.className + " titleTwo"} >
          Portfolio
        </h2>

        <div className='vertical-line' />
        <p className={font2.className + "p"} style={{ textAlign: "center" }} >
          From Portland to Seattle to gorgeous Sun Valley Idaho, our diverse team of uber style-centric creatives implement eclectic and highly-styled concept ideas personalized for each event: sure to get you blogged, pinned, regrammed and trending.
          {/* {!element.h32 ? null : <span >{element.h32}</span>} */}
        </p>
      </div>

      <style>{`
                 .wrapper { height: 75vh; width: 100%; position: relative; display: flex; justify-content: center; align-items: center; background: black  }
                 .firstImg { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: brightness(50%); position: absolute; transition: 1s; opacity: 1;  }
                 .secondImg { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: brightness(50%); position: absolute; transition: 1s; opacity: 0;  }
                 .container { z-index: 1; color: white; display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%; height: 100%; max-width: 1000px;  }
                 .title { font-size: clamp(9px, 0.8vw, 11px); letter-spacing: 0.2vw;  }
                 .titleTwo { font-size: 35px; margin-top: 1.5%; width: 50%; text-align: center; letter-spacing: 5px;  }
                 .vertical-line { width: 1px; height: 10%; background: white; margin-top: 0.8%; margin-bottom: 0.8%;  }
                 .p { text-align: center; width: 65%; font-size: clamp(13px, 1.6vw, 19px);  }


                  @media (max-width: 700px) {
                  .wrapper {
                    height : 58vh;
                  }
                  title {
                    font-size : 15px;
                    width: 80vw;
                    text-align: center;
                  }
                  titleTwo {
                    font-size : 50px;
                    width: 80vw;
                    text-align: center;

                  }
                  .p {
                    font-size : 16px;
                    width: 80vw;
                    text-align: center;

                  }
              
      `}</style>
    </div>
  )
}
