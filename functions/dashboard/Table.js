import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function ClientTable() {
  const [clients, setClients] = useState([]);
 

  const fetchData = async () => {
    try {
      const response = await fetch('/api/clientsHandler', {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data);
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // fetchAgenda();
  }, []);

  return (
    <div>
      {/* <h2 style={{ textAlign: 'center' }}>All clients</h2> */}

      {/* Clients Table */}
      <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell  style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Nr</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Email</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>First Name</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Last Name</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Phone</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Reserved Venue</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Event Date</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Venue Name</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Venue Location</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Celebrating</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Guest Count</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px',fontSize:"larger",fontWeight:"450" }}>Additional Service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index}    style={{
              backgroundColor: index % 2 === 0 ? '#009be5c4' : '#fff',  
            }}>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{index + 1}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.email}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.firstName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.lastName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.phone}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.reservedVenue}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.eventDate}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.venueName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.venueLocation}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.celebrating}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.guestCount}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px',  color:index % 2 === 0 ? "#fff" : "#000" ,fontSize:"larger",fontWeight:500}}>{client.additionalService}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Agenda Table */}
     
    </div>
  );
}
