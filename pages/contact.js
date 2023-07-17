import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../functions/planning/ContactForm';
import Gallery from '../functions/planning/2nd_section';
import Image from 'next/image';
import Fix from '../functions/planning/3rd_section';
import CustomButton from '@/functions/planning/CustomButton';
import '../app/globals.css'
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
      filter:'sepia(0.3) brightness(90%)'
    }} >
      {/* <h1>Welcome to my Next.js app</h1>
      <button onClick={fetchData}>Fetch from Backend</button>
      {message && <p>{message}</p>} */}


      <ContactForm saveData={saveData} />
      <Gallery />
      <Fix />
      <div id='father'style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        background: 'linear-gradient( to bottom,  #ffffff,#d0e6e4)',
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        zIndex: "2",
        marginTop: -400,
        justifyContent: 'center',
        alignItems: 'center',

      }}
      >
        <div id="title" style={{top:0,left:0,display:"flex",marginTop:"50px",zIndex: "2",marginBottom:"50px"}}><h2 style={{ fontSize: "larger" }}>THE BLOG</h2></div>
        <div id="gallery" style={{
          display: 'flex',
        flexDirection:"row",
          height: '100%' ,
          gap: '100px',
          textAlign: "center",
          justifyContent: 'center',
          alignItems: 'center',
           marginTop: '-200px',
           zIndex: "2"
     
        }}><style>{`
        @media  (max-width: 1350px){
          #title{
            margin-top:20px !important;
          }
          #father{
           
            height:120vh !important;
             padding-bottom:20px !important;
            
          }
          #gallery{
            display: flex !important;
            flex-direction: row !important;
            justify-content: center;
            align-items: center;
            width:80% ;
          }
          .child{
            height: 400px !important; 
            width: 80% !important;
            margin-top:100px;
          }
        }
        @media  (max-width: 700px){
          #title{
            margin-top:0 !important;
          }
          #father{
           
            height:300vh !important;
             padding-bottom:20px !important;
            
          }
          #gallery{
            display: flex !important;
            flex-direction: column !important;
            justify-content: center;
            align-items: center;
            width:100% ;
          }
          .child{
            height: 400px !important; 
            width: 80% !important;
            margin-top:100px;
          }
        }
        @media  (max-width: 450px){
          #father{
            marginTop: -3000 !important;
            height:300vh !important;
          
            
          }
         
          #gallery{
            display: flex !important;
            flex-direction: column !important;
            justify-content: center;
            align-items: center;
            width:100% ;
            
          }
          .child{
            height: 400px !important; 
            width: 70% !important;
            
          }
        }
        `}</style>
          <div className="child"style={{ backgroundImage: "url('/1b.jpg')", backgroundPosition: "center 0;", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "500px", width: "calc(100vw- 250px / 3)", display: "flex", justifyContent: "center", alignItems: "center" ,marginBottom:"50px"}}><div style={{ marginTop: 800, maxWidth: "350px",marginBottom:"150px"}}><h2 style={{ fontWeight: "500" }}>top five tips for budgeting your wedding</h2><button style={{ width: "150px", height: "50px", background: "black", color: "#fff" ,marginTop:"20px"}}>read more</button></div></div>
          <div className="child" style={{ backgroundImage: "url('/2b.jpg')", backgroundPosition: "center 0", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "500px", width: "calc(100vw- 250px / 3)", display: "flex", justifyContent: "center", alignItems: "center" ,marginBottom:"50px"}}><div style={{ marginTop: 800, maxWidth: "350px",marginBottom:"150px" }}><h2 style={{ fontWeight: "500", text: "lowercase" }}> pro wedding day timeline MADE BY PLANNERS  </h2><button style={{ width: "150px", height: "50px", background: "black", color: "#fff" ,marginTop:"20px"}}>read more</button ></div></div>
          <div className="child" style={{ backgroundImage: "url('/3b.jpg')", height: "500px", width: "calc(100vw- 250px / 3)", backgroundPosition: "center 0", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" ,marginBottom:"50px"}}><div style={{ marginTop: 800, maxWidth: "350px",marginBottom:"150px" }}><h2 style={{ fontWeight: "400", fontSize: "20px" }}> WEDDING PLANNER VS. VENUE MANAGER and what the differences are</h2><button style={{ width: "150px", height: "50px", background: "black", color: "#fff" ,marginTop:"20px"}}>read more</button></div></div>
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
      </div>
    </div>
  );
}
