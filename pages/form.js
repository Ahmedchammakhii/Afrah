import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../functions/planning/ContactForm';
import Gallery from '../functions/planning/2nd_section';
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: "100%",
      width: "100%",
      left: 0,top:0,position:"absolute"}} >
      {/* <h1>Welcome to my Next.js app</h1>
      <button onClick={fetchData}>Fetch from Backend</button>
      {message && <p>{message}</p>} */}


      <ContactForm saveData={saveData} />
      <Gallery />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "100%",
        left: 0,
        // top:0,
        backgroundImage: "url(/cupra.jpeg)",
        backgroundPosition:"center",
        backgroundSize:'cover',
        backgroundRepeat:'no repeat',
        zIndex: "-3",
        position: "fixed",
      
      }}
      >

      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
        width: "100%",
        left: 0,
        // top:0,
        background: "white",
        backgroundPosition:"center",
        backgroundSize:'cover',
        zIndex: "3",
        position: "absolute",
      marginTop:6000
      }}
      >

      </div>
    </div>
  );
}
