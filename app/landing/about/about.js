import React, { useEffect } from 'react'
import Component from './component'
import about from '@/data/landing/about_data'
export default function About() {
    return (
        <>
            <div className='about_wrapper' >
                {about.map((e, i) => {
                    return <Component key={i} index={i} element={e} />
                })}
            </div>

            <style>{`
            .about_wrapper { width: 100%; height: auto; display: flex; flex-direction: column; align-items: center; padding-bottom: calc(25vh / 2);  }
            @media (max-width: 800px) { 
                .about_wrapper { width: 95%; margin-left: 2.5% }

            }

            `}</style>
        </>
    )
}
