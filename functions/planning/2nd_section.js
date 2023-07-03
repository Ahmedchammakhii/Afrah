import React,{useState,useEffect} from 'react';
import styles from './2nd.module.css';

const Gallery = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = ['/image1.jpg','/image5.jpg','/GOPR2398.jpg','/image8.jpg','/Afrah.jpg']; // Replace with your image URLs

    useEffect(() => {
        // Change the background every 10 seconds
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [backgrounds.length]);

  return (
   <> <div className={styles.wrap}>
      <div className={styles.primo} style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}></div>
      
    </div>
    <div className={styles.secundo}>
        <h2>BREAKING DOWN THE BARRIERS THAT Divide Us

</h2>
        <div className={styles.web}>
          <div className={styles.ele}></div>
          <div className={styles.ele}></div>
          <div className={styles.ele}></div>
        </div>
      </div>
    </>
  );
}

export default Gallery;