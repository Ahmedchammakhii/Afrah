import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function ClientTable() {
  const [clients, setClients] = useState([]);
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
    fetchAgenda();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>All clients</h2>

      {/* Clients Table */}
      <Table style={{ borderCollapse: 'collapse', width: '100%' ,color:"#fff"}}>
        <TableHead>
          <TableRow>
            <TableCell  style={{ border: '1px solid #ddd', padding: '8px' }}>Nr</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Email</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>First Name</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Last Name</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Reserved Venue</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Event Date</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Venue Name</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Venue Location</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Celebrating</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Guest Count</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Additional Service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow key={index}    style={{
              backgroundColor: index % 2 === 0 ? '#101f33bf' : '#fff',color:"#fff",
            }}>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.email}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.firstName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.lastName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.phone}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.reservedVenue}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.eventDate}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.venueName}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.venueLocation}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.celebrating}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.guestCount}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.additionalService}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Agenda Table */}
      <h2 style={{ textAlign: 'center' }}>Agenda</h2>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Client</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Phone Number</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Contact Time</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Meeting Time</TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>Event Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {agenda.map((client, index) => (
            <TableRow key={index}  style={{
              backgroundColor: index % 2 === 0 ? '#101f33bf' : '#fff',color:"#fff",
            }}>
               <TableCell  style={{ border: '1px solid #ddd', padding: '8px' }}>{client.client.firstName+' ' +client.client.lastName}</TableCell>
              <TableCell  style={{ border: '1px solid #ddd', padding: '8px' }}>{client.phone_Number}</TableCell>
              <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}> {client.contact_Time &&
    new Date(
      (client.contact_Time._seconds * 1000) +
      Math.floor(client.contact_Time._nanoseconds / 1000000)
      ).toLocaleString()}</TableCell>
      <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.contact_Time &&
    new Date(
      (client.meeting_Time._seconds * 1000) +
      Math.floor(client.meeting_Time._nanoseconds / 1000000)
      ).toLocaleString()}</TableCell>
      <TableCell style={{ border: '1px solid #ddd', padding: '8px' }}>{client.event_Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
