import React,{useEffect} from 'react'

export default function Fix() {
    useEffect(() => {
        const parallaxEffect = () => {
          const parallaxElement = document.getElementById('parallax1');
    
          if (parallaxElement) {
            const scrollPosition = window.scrollY;
            const elementTopPosition=parallaxElement.offsetTop+ (innerHeight *  1.3)
            const distance = elementTopPosition-scrollPosition * 0.5; // Adjust the parallax speed as needed
    
            parallaxElement.style.backgroundPositionY = `${distance}px`;
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
            overflow:'hidden',
            position:"relative"
        }}>
            <div id ='parallax1' style={{
            //backgroundAttachment: "fixed",
            height: "100%",
            width: "100%",
            backgroundImage: "url(/fix.jpg)",
            backgroundPosition: "center 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "sepia(0.2) brightness(90%)",
            
}} />
        </div>
    )
}
