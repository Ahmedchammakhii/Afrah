import React from 'react'
import Header from './header'
import Footer from './footer'
export default function layout({ children, dark }) {
    return (
        <div>
            <Header dark={dark} />
            {children}
            <Footer />
        </div>
    )
}
