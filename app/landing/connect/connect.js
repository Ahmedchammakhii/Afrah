import React, { useEffect, useRef } from 'react'
import Planning from './planning';
import Details from './details';
import Collab from './collab';
import Component from '../../../functions/three/Component';
import AudioPlayer from '../../..//functions/three/AudioPlayer';
export default function Connect() {





  // 36px 2.8vw
  //  14px 1.5vw
  return (
    <div style={{width:"100%", overflow:"hidden"}}>

      <div style={{ width: "100%", height: "60vh", background: "black", overflow: "hidden" }}>
      <Component />
      {/* <AudioPlayer src="/static/sounds/slight.mp3" /> */}
      </div>

      <Planning />
      <Details />
      <Collab />


      <style>{`
    
      `}</style>
    </div>
  )
}
