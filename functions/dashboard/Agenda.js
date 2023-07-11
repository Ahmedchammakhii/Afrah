import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Agenda(props) {
    const { searchDate } = props
    const [agenda, setAgenda] = useState([]);
    //   const [searchDate, setSearchDate] = useState('');
    useEffect(() => {
        fetchAgenda();
        handleSearch()
    }, [searchDate]);

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
            
            <div >
    
                <button onClick={handleSearch}>Search</button>
            </div>

            {/* Table */}
            <div style={{ textAlign: "center" }}>
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
                    {agenda.map((client, index) => (
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
