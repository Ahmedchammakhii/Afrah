import React, { useEffect } from 'react'
import Component from './component'
import about from '@/data/landing/about_data'
export default function Begining() {
    return (
        <div style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "calc(25vh / 2)" }}>
            {about.map((e, i) => {
                return <Component key={i} index={i} element={e} />
            })}
        </div>
    )
}
