import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
export default function Agenda(props) {
    const { searchDate ,searchTerms} = props
    const [agenda, setAgenda] = useState([]);
    //   const [searchDate, setSearchDate] = useState('');
    useEffect(() => {
        fetchAgenda();
        handleSearch()
    }, [searchDate,searchTerms]);

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
    const filteredClients =agenda &&  agenda.filter((client) => {
        const { firstName, lastName, email, phone } = client.client;
        const search = searchTerms.toLowerCase();
        return (
          firstName?.toLowerCase().includes(search) ||
          lastName?.toLowerCase().includes(search) ||
          email?.toLowerCase().includes(search) ||
          phone?.toLowerCase().includes(search)
        );
      });
    const compareDateOnly = (date1, date2) => {
        const formattedDate1 = new Date(date1).toLocaleDateString();
        const formattedDate2 = new Date(date2).toLocaleDateString();
        console.log(formattedDate1, formattedDate2);
        return formattedDate1 === formattedDate2;
    };

    const handleSearch = () => {
        const filteredAgenda = agenda.filter((client) => {
            if (client) {
                const meetingDate = new Date(
                    (client.meeting_Time._seconds * 1000) +
                    Math.floor(client.meeting_Time._nanoseconds / 1000000)
                )
                // console.log("meetingDate ",meetingDate,"Search ",searchDate)
                return compareDateOnly(meetingDate, searchDate);
            }
            return false;
        });
        setAgenda(filteredAgenda);

    };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US');
    console.log(formattedDate);
    return (
        <div>
            {/* Search */}
            
            <div style={{display:"flex",justifyContent:"right",alignItems:"right"}}>
            <Button variant="contained" sx={{ mr: 1 }} onClick={handleSearch}>
                Search by date
              </Button>
            </div>

            {/* Table */}
            <div style={{ textAlign: "center" ,color:"red",height:"100px",fontWeight:"500",fontSize:"25px"}}>
                {agenda && !searchDate
                    ? `${agenda.filter((client) =>
                        new Date(
                            (client.meeting_Time._seconds * 1000) +
                            Math.floor(client.meeting_Time._nanoseconds / 1000000)
                        ).toLocaleDateString() === formattedDate
                    ).length} meetings for ${formattedDate}`
                    : `${agenda.filter((client) =>
                        new Date(
                            (client.meeting_Time._seconds * 1000) +
                            Math.floor(client.meeting_Time._nanoseconds / 1000000)
                        ).toLocaleDateString() === new Date(searchDate).toLocaleDateString()
                    ).length} meetings for ${new Date(searchDate).toLocaleDateString()}`}
            </div>
            <Table>
                <TableHead>
                    <TableRow style={{
                        border: '1px solid #ddd',
                        padding: '8px',
                        //   color: index % 2 === 0 ? '#fff' : '#000',
                        fontSize: 'larger',
                        fontWeight: 700,
                    }}>
                        <TableCell style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            //   color: index % 2 === 0 ? '#fff' : '#000',
                            fontSize: 'larger',
                            fontWeight: 700,
                        }}>NR</TableCell>
                        <TableCell style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            //   color: index % 2 === 0 ? '#fff' : '#000',
                            fontSize: 'larger',
                            fontWeight: 700,
                        }}>Client</TableCell>
                        <TableCell style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            //   color: index % 2 === 0 ? '#fff' : '#000',
                            fontSize: 'larger',
                            fontWeight: 700,
                        }}>Phone Number</TableCell>
                        <TableCell style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            //   color: index % 2 === 0 ? '#fff' : '#000',
                            fontSize: 'larger',
                            fontWeight: 700,
                        }}>Contact Time</TableCell>
                        <TableCell style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            //   color: index % 2 === 0 ? '#fff' : '#000',
                            fontSize: 'larger',
                            fontWeight: 700,
                        }}>Meeting Time</TableCell>
                        <TableCell style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            //   color: index % 2 === 0 ? '#fff' : '#000',
                            fontSize: 'larger',
                            fontWeight: 700,
                        }}  >Event Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {filteredClients.map((client, index) => (
                        <TableRow
                            key={index}
                            style={{
                                backgroundColor: index % 2 === 0 ? '#009be5c4' : '#fff',
                                // color: index % 2 === 0 ? '#fff' : '#000',
                            }}
                        >
                            <TableCell style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                  color: index % 2 === 0 ? '#fff' : '#000',
                                fontSize: 'larger',
                                fontWeight: 700,
                            }}>{index + 1}</TableCell>
                            <TableCell style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                color: index % 2 === 0 ? '#fff' : '#000',
                                fontSize: 'larger',
                                fontWeight: 700,
                            }}>
                                {client.client.firstName + ' ' + client.client.lastName}
                            </TableCell >
                            <TableCell style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                color: index % 2 === 0 ? '#fff' : '#000',
                                fontSize: 'larger',
                                fontWeight: 700,
                            }}>{client.phone_Number}</TableCell>
                            <TableCell style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                color: index % 2 === 0 ? '#fff' : '#000',
                                fontSize: 'larger',
                                fontWeight: 700,
                            }}>
                                {client.contact_Time &&
                                    new Date(
                                        (client.contact_Time._seconds * 700) +
                                        Math.floor(client.contact_Time._nanoseconds / 1000000)
                                    ).toLocaleString()}
                            </TableCell>
                            <TableCell style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                color: index % 2 === 0 ? '#fff' : '#000',
                                fontSize: 'larger',
                                fontWeight: 700,
                            }}>
                                {client.meeting_Time &&
                                    new Date(
                                        (client.meeting_Time._seconds * 1000) +
                                        Math.floor(client.meeting_Time._nanoseconds / 1000000)
                                    ).toLocaleString()}
                            </TableCell>
                            <TableCell style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                color: index % 2 === 0 ? '#fff' : '#000',
                                fontSize: 'larger',
                                fontWeight: 700,
                            }}>{client.event_Date &&
                                new Date(client.event_Date).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
    
}
Agenda.propTypes={
    handleSearch: PropTypes.func.isRequired,

}