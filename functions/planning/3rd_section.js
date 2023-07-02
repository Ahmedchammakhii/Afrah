import React,{useEffect} from 'react'

export default function Fix() {
    useEffect(() => {
        const parallaxEffect = () => {
          const parallaxElement = document.getElementById('parallax1');
    
          if (parallaxElement) {
            const scrollPosition = window.scrollY;
            const distance = scrollPosition * 0.0005; // Adjust the parallax speed as needed
    
            parallaxElement.style.transform = `translateY(${distance}px)`;
          }
        };
    
        window.addEventListener('scroll', parallaxEffect);
    
        return () => {
          window.removeEventListener('scroll', parallaxEffect);
        };
      }, []);
    
    return (
        <div  style={{
            height: '100vh', width: '100vw', display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",    
            padding: 0,
            left: 0,
            top:0,  
            zIndex:-4  
        }}>
            <div  style={{
                
                backgroundAttachment:"fixed",
                height: "100%",
                width: "100%",
                display: "flex",
                backgroundImage: "url(/fix.jpg)",
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundRepeat: 'no repeat',
               filter:'sepia(0.2) brightness(90%)'
            }}
            >

            </div>
           
        </div>
    )
}
