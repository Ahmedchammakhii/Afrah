import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../functions/planning/ContactForm';
import Gallery from '../functions/planning/2nd_section';
import Image from 'next/image';
import Fix from '../functions/planning/3rd_section';
import CustomButton from '@/functions/planning/CustomButton';
import '../app/globals.css'
import Layout from '@/sharedComponents/layout/layout';
import Instagram from '@/sharedComponents/instagram/instagram';
import localFont from "next/font/local";
import { Padding } from '@mui/icons-material';
const myFont = localFont({ src: '../pages/planyourwedding/BonVivant-Regular.otf' });
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
    <>
      <Layout dark={true}>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          height: "100%",
          Width: "100%",
          left: 0,
          top: 0,
          overflow: "hidden",
          filter: 'sepia(0.3) brightness(90%)'
        }} >
          {/* <h1>Welcome to my Next.js app</h1>
      <button onClick={fetchData}>Fetch from Backend</button>
      {message && <p>{message}</p>} */}


          <ContactForm saveData={saveData} />
          <Gallery />
          <Fix />
          <div id='father' style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
            background: 'linear-gradient( to bottom,  #ffffff,#d0e6e4)',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            zIndex: "2",
            marginTop: -400,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,

          }}
          >
            <div id="title" style={{ top: 0, left: 0, display: "flex", flexDirection: "column", marginTop: "50px", zIndex: "2", marginBottom: "50px", alignItems: "center" }}><h2 style={{ fontSize: "larger" }}>THE BLOG</h2>
              <br></br>
              <p
                className={myFont.className}
                style={{
                  fontSize: 36,
                  letterSpacing: ".4rem",
                  transform: "rotate(-2deg)",
                  marginBottom: 10,
                  alignSelf: "center",
                }}
                id="myfont"
              >
                The Latest
              </p></div>
            <div id="gallery" style={{
              display: 'flex',
              flexDirection: "row",
              height: '100%',
              gap: '100px',
              textAlign: "center",
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-200px',
              zIndex: "2",
              paddingTop: "0",
            }}>
              <div className="child" style={{ backgroundImage: "url('/1b.jpg')", backgroundPosition: "center 0;", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "500px", width: "calc(100%- 250px / 3)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
                <div className='ch' style={{ marginTop: 800, maxWidth: "350px", marginBottom: "150px" }}>
                  <p style={{ fontSize: "20px", textAlign: "center", lineHeight: "1.5", letterSpacing: "0.1em", fontStyle: "normal" }}>top five tips for budgeting your wedding</p>
                  <button style={{ width: "150px", height: "50px", background: "black", color: "#fff", marginTop: "20px", fontStyle: "italic", fontSize: "16px" }}>read more</button></div></div>
              <div className="child" style={{ backgroundImage: "url('/2b.jpg')", backgroundPosition: "center 0", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "500px", width: "calc(100%- 250px / 3)", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}><div className='ch' style={{ marginTop: 800, maxWidth: "350px", marginBottom: "150px" }}><p style={{ fontSize: "20px", lineHeight: "1.5", letterSpacing: "0.1em", fontStyle: "normal" }}> pro wedding day timeline MADE BY PLANNERS  </p><button style={{ width: "150px", height: "50px", background: "black", color: "#fff", marginTop: "20px", fontStyle: "italic", fontSize: "16px" }}>read more</button ></div></div>
              <div className="child" style={{ backgroundImage: "url('/3b.jpg')", height: "500px", width: "calc(100%- 250px / 3)", backgroundPosition: "center 0", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}><div className='ch' style={{ marginTop: 800, maxWidth: "350px", marginBottom: "150px", paddingTop: "20px" }}><p style={{ fontSize: "20px", lineHeight: "1.5", letterSpacing: "0.1em", fontStyle: "normal" }}> WEDDING PLANNER VS. VENUE MANAGER and what the differences are</p><button style={{ width: "150px", height: "50px", background: "black", color: "#fff", marginTop: "20px", fontStyle: "italic", fontSize: "16px" }}>read more</button></div></div>
            </div>

          </div>
          <Instagram />
        </div>
      </Layout>




      <style>{`
        @media  (max-width: 1350px){
          #title{
            //margin-top:20px !important;
          }
          #father{
           
          
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
            height: 500px !important; 
            width: 80% !important;
            margin-top:100px;
          }
        }
        @media  (max-width: 700px){
        
          #father{
           
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
            width: 80% !important;
            margin-top:100px;
          }
        }
        @media  (max-width: 450px){
       
          #father{
           
            height:250vh !important;  
          }
          #gallery{
            padding-top:0 important;
          }
          .child{
            height: 350px !important; 
            width: 70% !important;
            // margin-top:0 ! important;
          
          }
          .ch{
            // margin-bottom: 50px important;
            margin-top:730px !important;
          }
        }
        @media (max-height: 720px) {
          
          #father{
           
            height:310vh !important;  
          }
         
        
        }
        @media (max-height: 660px) {
          
          #father{
           
            height:330vh !important;  
          }
         
        
        }
        `}</style>
    </>
  );
}