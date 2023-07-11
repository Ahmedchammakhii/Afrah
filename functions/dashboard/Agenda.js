import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Agenda() {
  const [agenda, setAgenda] = useState([]);
  const [searchDate, setSearchDate] = useState('');

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

  const compareDateOnly = (date1, date2) => {
    const formattedDate1 = new Date(date1).toLocaleDateString();
    const formattedDate2 = new Date(date2).toLocaleDateString();
    return formattedDate1 === formattedDate2;
  };

  const handleSearch = () => {
    const filteredAgenda = agenda.filter((client) => {
      if (client.meeting_Time) {
        const meetingDate = new Date(client.meeting_Time._seconds * 1000);
        return compareDateOnly(meetingDate, searchDate);
      }
      return false;
    });
    setAgenda(filteredAgenda);
  };

  return (
    <div>
      {/* Search */}
      <div>
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Contact Time</TableCell>
            <TableCell>Meeting Time</TableCell>
            <TableCell>Event Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agenda.map((client, index) => (
            <TableRow
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? '#009be5c4' : '#fff',
                color: index % 2 === 0 ? '#fff' : '#000',
              }}
            >
              <TableCell>
                {client.client.firstName + ' ' + client.client.lastName}
              </TableCell>
              <TableCell>{client.phone_Number}</TableCell>
              <TableCell>
                {client.contact_Time &&
                  new Date(
                    (client.contact_Time._seconds * 1000) +
                      Math.floor(client.contact_Time._nanoseconds / 1000000)
                  ).toLocaleString()}
              </TableCell>
              <TableCell>
                {client.meeting_Time &&
                  new Date(
                    (client.meeting_Time._seconds * 1000) +
                      Math.floor(client.meeting_Time._nanoseconds / 1000000)
                  ).toLocaleString()}
              </TableCell>
              <TableCell>{client.event_Date  &&
                  new Date(client.event_Date).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
