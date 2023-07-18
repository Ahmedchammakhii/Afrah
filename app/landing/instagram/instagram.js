import React from 'react'
import { Jost, Playfair_Display } from 'next/font/google'
const font = Jost({ subsets: ['latin'], weight: '500' });

export default function instagram() {

    return (
        <>
            <div className={font.className + ' instagram_wrapper'} >
                <div className='instagram' >
                    you're following on instagram, right?
                </div>
            </div>

            <style>{`
        .instagram_wrapper { width: 100vw; height: 21.5vw; max-height: 265px; display: flex; justify-content: center; align-items: center; position: relative;  }
        .instagram { background: #505152; color: white; text-align: center; text-transform: uppercase; padding: 1.2% 3%; font-size: clamp(14px, 1.5vw, 19px); letter-spacing: 1.5px;  }
        @media (max-width: 1220px) {
            .instagram { padding: 1.8% 3%; }

        }

        @media (max-width: 800px) {
            .instagram_wrapper { height: 130vw; max-height: none; };
            .instagram { width: 58%; height: 15%; padding: none; display:flex; align-items:center; justify-content:center };
        }

        `}</style>
        </>
    )
}
