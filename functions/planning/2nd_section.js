import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = ['/image1.jpg', '/image2.jpg', '/image3.jpg']; // Replace with your image URLs

    useEffect(() => {
        // Change the background every 10 seconds
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [backgrounds.length]);

    return (
        <div style={{ height: '100vh', width: '100vw' ,display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 0,
        left:0,position:"relative",
        marginTop:3000,
        //  paddingBottom:1000,
        //  background:"transparent",
           }}>
            <div
                style={{
                    height: '70%',
                    width: '100%',
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'inline-block',
                    
                }}
            ></div>
            <div style={{
                height: '30%',
                width: '100%',
                background: 'white',
                display: 'inline-block',
                
                
            }}></div>
        </div>
    );
};

export default Gallery;
