import React from 'react'

export default function footer() {
    return (
        <div style={{height:"20vh",width:"100vw",backgroundColor:"black",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",margin:0}}>
            <div style={{width:"calc(100vw / 3)",height:"100%",backgroundColor:"red",display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>Hello</div>
            <div style={{width:"calc(100vw / 3)",height:"100%",backgroundColor:"yellow",display:"flex"}}>Helloà</div>
            <div style={{width:"calc(100vw / 3)",height:"100%",backgroundColor:"white"}}>hellow</div>
        </div>
    )
}
