import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


export default function Agenda  ()  {
    const [agenda, setAgenda] = useState([]);
    const fetchAgenda = async () => {
        try {
            const response = await fetch('/api/agendaHandler');
            const data = await response.json();
            console.log(data);
            setAgenda(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchAgenda();
      }, []);

  return (
    <div >
         {/* <h2 style={{ textAlign: 'center' }}>Agenda</h2> */}
      <Table >
        <TableHead>
          <TableRow>
          <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450"  }}>Client</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450"  }}>Phone Number</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450"  }}>Contact Time</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450"  }}>Meeting Time</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450"  }}>Event Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {agenda.map((client, index) => (
            <TableRow key={index}  style={{
              backgroundColor: index % 2 === 0 ? '#009be5c4' : '#fff',
              color:index % 2 === 0 ? "#fff" : "#000"
            }}>
               <TableCell  style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.client.firstName+' ' +client.client.lastName}</TableCell>
              <TableCell  style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.phone_Number}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}> {client.contact_Time &&
    new Date(
      (client.contact_Time._seconds * 1000) +
      Math.floor(client.contact_Time._nanoseconds / 1000000)
      ).toLocaleString()}</TableCell>
      <TableCell style={{ border: '1px solid #ddd', padding: '8px' ,  color:index % 2 === 0 ? "#fff" : "#000",fontSize:"larger",fontWeight:500}}>{client.contact_Time &&
    new Date(
      (client.meeting_Time._seconds * 1000) +
      Math.floor(client.meeting_Time._nanoseconds / 1000000)
      ).toLocaleString()}</TableCell>
      <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.event_Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
