import React from 'react'
import HeroDesk from "./hero-desktop"
import HeroMobile from "./hero-mobile"
export default function hero() {
    return (
        <div>
            <HeroDesk />
            <HeroMobile />
        </div>
    )
}
