import React, { useEffect, useRef } from 'react'
import Planning from './planning';
import Details from './details';
import Collab from './collab';
import Component from '../../../functions/three/Component';
import lottie from 'lottie-web';

export default function Connect() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./loading.json')
    })
  }, [])



  // 36px 2.8vw
  //  14px 1.5vw
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>

      <div style={{ width: "100%", height: "60vh", background: "black", overflow: "hidden", position: "relative" }}>
        <div ref={container} style={{ width: "100%", height: "100%", position: "absolute" }} />

        <div className='three-container' style={{ width: "100%", height: "100%", display: "none", position: "relative" }}>
          <Component />
        </div>


      </div>

      <Planning />
      <Details />
      <Collab />


      <style>{`
    
      `}</style>
    </div>
  )
}
