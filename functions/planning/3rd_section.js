import React from 'react'

export default function Fix() {
    return (
        <div style={{
            height: '100vh', width: '100vw', display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",    
            padding: 0,
            left: 0,
            // top:0,    
        }}>
            <div style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                height: "100%",
                width: "100%",
                display: "flex",
                backgroundImage: "url(/cupra.jpeg)",
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundRepeat: 'no repeat',
            }}
            >

            </div>
           
        </div>
    )
}
