import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../functions/planning/ContactForm';
import Gallery from '../functions/planning/2nd_section';
import Image from 'next/image';
import Fix from '../functions/planning/3rd_section';
import CustomButton from '@/functions/planning/CustomButton';
export default function Form() {
  const [message, setMessage] = useState('');


  const fetchData = async () => {
    try {
      const response = await fetch('/api/server');
      console.log(response);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const saveData = async (data) => {
    try {
      const response = await fetch('/api/postHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      height: "100%",
      Width: "100vw",
      left: 0,
      top: 0,
      marginTop: 0
      // position:"relative"
    }} >
      {/* <h1>Welcome to my Next.js app</h1>
      <button onClick={fetchData}>Fetch from Backend</button>
      {message && <p>{message}</p>} */}


      <ContactForm saveData={saveData} />
      <Gallery />
      <Fix />
      <div style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        left: 0,
        bottom: 0,
        background: 'linear-gradient( to bottom,  #ffffff,#d0e6e4)',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        zIndex: "2",
        marginTop: -500,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',

      }}
      >
        <h2 style={{fontSize:"larger" ,paddingBottom:"50px"}}>THE BLOG</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '100px',
          marginTop: '16px',
          textAlign: "center",

        }}>
          <div style={{ backgroundImage: "url('/1b.jpg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",  height: '500px', width: "400px" ,display:"flex",justifyContent:"center",alignItems:"center"}}> <div style={{marginTop:650,maxWidth:"350px"}}><h2 style={{fontWeight:"500"}}>top five tips for budgeting your wedding</h2><button style={{width:"150px",height:"50px",background:"black",color:"#fff"}}>read more</button></div></div>
          <div style={{ backgroundImage: "url('/2b.jpg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: '500px', width: "400px",display:"flex",justifyContent:"center",alignItems:"center"}}><div style={{marginTop:650,maxWidth:"350px"}}><h2 style={{fontWeight:"500",text:"lowercase"
        }}>
 pro wedding day timeline MADE BY PLANNERS  </h2><button style={{width:"150px",height:"50px",background:"black",color:"#fff"}}>read more</button ></div></div>

          <div style={{ backgroundImage: "url('/3b.jpg')", height: '500px', width: "400px",  backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" ,display:"flex",justifyContent:"center",alignItems:"center"}}><div style={{marginTop:650,maxWidth:"350px",maxWidth:"400px"}}><h2 style={{fontWeight:"400",fontSize:"20px"}}>
WEDDING PLANNER VS. VENUE MANAGER and what the differences are</h2><button style={{width:"150px",height:"50px",background:"black",color:"#fff"}}>read more</button></div></div>
        </div>

      </div>
      <div style={{
        display: "flex",
        height: "70vh",
        width: "100vw",
        left: 0,
        bottom: 0,
        background: 'white',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        zIndex: "2",

        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <CustomButton 
               label="YOU'RE FOLLOWING ON INSTAGRAM, RIGHT?"
              isActive={false}
              // onClick={() => fileInputRef.current.click()}
              />
        {/* <button type="button" style={{ height: "60px", width: "300px", marginTop: "-300px", backgroundColor: "grey", borderRadius: "5rem" }}>Are you following us on instagram?</button> */}
      </div>
    </div>
  );
}
