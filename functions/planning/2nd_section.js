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
        left:0,
    //    zIndex:3
       
           }}>
            <div
                style={{
                    height: '66.66%',
                    width: '100%',
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // transform: "translateZ(-10px) scale(2) " ,
                    // filter: "brightness(1.1) contrast(1.1)"   ,
                    zIndex:3
                }}
            ></div>
            <div style={{
                height: '33.33%',
                width: '100%',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex:3,
                flexDirection:"column"
            }}>
                <h2>Title</h2>
                <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '16px',
        marginTop: '16px',
      }}>
        <div style={{ backgroundImage: 'url("/1a.png")', height: '150px',width:"300px",backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
        <div style={{ backgroundImage: 'url("/2a.jpg")', height: '150px',width:"300px" ,backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
        <div style={{ backgroundImage: 'url("/3a.jpg")', height: '150px',width:"300px" ,backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
      </div>
            </div>
             
        </div>
    );
};

export default Gallery;
