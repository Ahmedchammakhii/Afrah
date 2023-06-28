import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../functions/planning/ContactForm';

export default function Home() {
  const [message, setMessage] = useState('');
  const [form,setForm]=useState({})

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
    <div>
      <h1>Welcome to my Next.js app</h1>
      <button onClick={fetchData}>Fetch from Backend</button>
      {message && <p>{message}</p>}
      <ContactForm saveData={saveData} />
    </div>
  );
}
