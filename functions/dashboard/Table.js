import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function ClientTable(props) {
  const { searchTerm } = props
  const [clients, setClients] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('/api/clientsHandler', {
        method: 'GET',
      });
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const filteredClients =clients &&  clients.filter((client) => {
    const { firstName, lastName, email, phone } = client;
    const search = searchTerm.toLowerCase();
    return (
      firstName.toLowerCase().includes(search) ||
      lastName.toLowerCase().includes(search) ||
      email.toLowerCase().includes(search) ||
      phone.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {/* Search Input */}
      {/* <input
        type="text"
        placeholder="Search clients"
        value={searchTerm}
        onChange={handleSearch}
      /> */}

      {/* Clients Table */}
      <h2 style={{textAlign:"center"}}>{clients && filteredClients .length+ " clients"}</h2>
      <Table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Nr
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Email
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              First Name
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Last Name
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Phone
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Reserved Venue
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 ,width:"200px"}}>
              Event Date
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Venue Name
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Venue Location
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Celebrating
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Guest Count
            </TableCell>
            <TableCell style={{ border: '1px solid #ddd', padding: '10px', fontSize: 'larger', fontWeight: 700 }}>
              Additional Service
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredClients.map((client, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#009be5c4' : '#fff',
              }}
            >
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.email}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: "larger",
                  fontWeight: 700,
                }}
              >
                {client.firstName}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.lastName}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.phone}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.reservedVenue}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.eventDate  &&
                  new Date(client.eventDate).toLocaleString()}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.venueName}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.venueLocation}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.celebrating}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.guestCount}
              </TableCell>
              <TableCell
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: index % 2 === 0 ? '#fff' : '#000',
                  fontSize: 'larger',
                  fontWeight: 700,
                }}
              >
                {client.additionalService}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Agenda Table */}
    </div>
  );
}
