import React, { useEffect, useRef } from 'react'
import Planning from './planning';
import Details from './details';
import Collab from './collab';
import Component from '../../../functions/three/Component';

export default function Connect() {





  // 36px 2.8vw
  //  14px 1.5vw
  return (
    <div style={{width:"100vw", overflow:"hidden"}}>

      <div style={{ width: "100vw", height: "60vh", background: "black", overflow: "hidden" }}>
      {/* <Component /> */}
      </div>

      <Planning />
      <Details />
      <Collab />


      <style>{`
    
      `}</style>
    </div>
  )
}
