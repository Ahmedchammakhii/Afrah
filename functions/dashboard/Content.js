import * as React from 'react';
import {useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Table from "./Table";
import Agenda from './Agenda';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { InputLabel,MenuItem ,Select } from '@mui/material';
export default function Content(props) {
  const {  selectedChildId } = props;  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchDate=(value)=>{
    setSearchDate(value)
    console.log(searchDate);
  }
  const handleClick = () => {
    
    setSearchDate("");
  };
  return (
    <Paper sx={{ maxWidth: 1450, margin:"auto", overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        // sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                onChange={handleSearch}
                placeholder="Search by email address, phone number, first name or last name"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
                
              />
            </Grid>
            <Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      
    <DatePicker  sx={{ my: 2, mx: 2 }} value={searchDate} onChange={handleSearchDate}/>
    </LocalizationProvider>
            </Grid>
           
            {/* <Grid >
            <Button variant="contained"  onClick={handleSearch}>
                Search by date
              </Button>
            </Grid> */}
            <Grid item>
              
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} onClick={handleClick} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
      </Typography> */}
     {selectedChildId  ==="Clients" && <Table searchTerm={searchTerm}/>}
     {selectedChildId ==="Agenda" && <Agenda agendasearchTerm={searchTerm} searchDate={searchDate} searchTerms={searchTerm}/>}
     
      
    </Paper>
  );
  
  
}
/* <Grid>
            { <InputLabel id="label">filter</InputLabel> }
<Select labelId="label" id="select" value="20" >
  <MenuItem value="10">meeting_time</MenuItem>
  <MenuItem value="20">event_date</MenuItem>
</Select>
            </Grid> */