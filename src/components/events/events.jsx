import { Button, Column } from '@carbon/react';
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setEvents(data); 
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => (
      
          <Column lg={8} md={8} sm={4}  key={event.id} style={{ margin:"5px",padding:"10px",backgroundColor:"#fff", opacity:"100%"}} >
                <Column lg={4} md={8} sm={4}>
                            <img
              src={event.image_url}
              alt={event.event_name}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '12px',
                opacity:"100%"
              }}
            />
                </Column>

             <Column lg={10} md={8} sm={4}>
            <h3 style={{color:"grey", opacity:"100%"}} >{event.event_name}</h3>
            <p  style={{color:"green", opacity:"100%"}} ><strong>{event.head_line}</strong></p>
            <p  style={{color:"black", opacity:"100%"}} >{event.description}</p>
            <p style={{color:"blue", opacity:"100%", margin:"10px"}} >By : <u>{event.event_owner}</u></p>
            </Column>
            <Column lg={2} md={8} sm={4}>
            <div className='readMore' >
                <Button  kind="ghost" >Read More</Button>
            </div>
            
            </Column>
            
          </Column>
        
      ))}
    </>
  );
};

export default Events;
