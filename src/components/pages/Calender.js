import React, { useState } from 'react';

import { Button, TextField, Typography } from '@mui/material';

import { Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format, parse, startOfWeek, getDay, locales
})

const events = [
  {
    title: "Physics Assignment",
    start: new Date(2023,2,20),
    end: new Date(2023,2,25)
  }
]

const Calender = () => {

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div style={{ textAlign: 'center' }}>

      <Typography variant='h1' mt={4} mb={3} > Calendar </Typography>
      <Typography variant='h4' mb={2} > Add New Event </Typography>
      <div>

        <TextField label="Add Event Title" variant="outlined" value={newEvent.title} style={{ width: '20%', marginRight: '10px', marginBottom: '10px' }} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />

        {/* <input 
          type="text" 
          placeholder='Add Event Title' 
          style={{ width: '20%', marginRight: '10px' }} 
          value={newEvent.title} 
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} /> */}

        <DatePicker 
          placeholderText="Start Date" 
          style={{ marginRight: '10px' }} 
          selected={newEvent.start} 
          onChange={(start) => setNewEvent({...newEvent, start})} />

        <DatePicker 
          placeholderText="End Date" 
          selected={newEvent.end} 
          onChange={(end) => setNewEvent({...newEvent, end})} />

        <Button 
          variant="outlined"
          color="inherit"
          sx={{ mt: '15px' }} 
          onClick={handleAddEvent}> 
          Add Event 
        </Button>
      </div>

      <Calendar 
      localizer={localizer} 
      events={allEvents} 
      startAccessor="start" 
      endAccessor="end" 
      style={{ height: 500, margin: '50px' }} />

    </div>
  )
}

export default Calender