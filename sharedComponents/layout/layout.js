"use client";

import { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { usePathname } from 'next/navigation'
import { navbarHandler, menuHandler, scrollEvent, handleNav } from '@/functions/layout/layout_functions';


export default function layout({ children, dark }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0)
    const pathname = usePathname()

    useEffect(scrollEvent(() => setScrollY(window.scrollY)), [])

    useEffect(() => {
        navbarHandler(isOpen, dark, pathname)
    }, [scrollY])

    useEffect(() => {
        menuHandler(isOpen, dark)
    }, [isOpen])

    return (
        <div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} dark={dark} />
            {children}
            <Footer />
        </div>
    )
}
