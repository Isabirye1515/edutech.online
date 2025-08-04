import React, { useState } from 'react';
import {
  TextInput,
  TextArea,
  Button,
  Stack,
  Column
} from '@carbon/react';

const EventPage = () => {
  const [formData, setFormData] = useState({
    event_name: '',
    event_owner: '',
    head_line: '',
    description: '',
    image_url: ''
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData)=>({...prevData,[name]:value}));
  };

  const handleSubmit = async () => {

    try {
      const response = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log(result);
      alert("Event posted successfully");
    } catch (err) {
      console.error('Error posting event:', err);
    }
  };

  return (
     <>
     <Column lg={12} md={8} sm={4}   className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Event</h1>
      <Stack gap={5}>
        <TextInput
          id="event_name"
          name="event_name"
          labelText="Event Name"
          value={formData.event_name}
          onChange={handleChange}
        />
        <TextInput
          id="owner_name"
          name="event_owner"
          labelText="Owner Name Or Owners"
          value={formData.event_owner}
          onChange={handleChange}
        />

        <TextInput
          id="head_line"
          name="head_line"
          labelText="Headline"
          value={formData.head_line}
          onChange={handleChange}
        />
        <TextArea
          id="description"
          name="description"
          labelText="Description (Article)"
          placeholder="Write your article or detailed description here..."
          rows={8}
          value={formData.description}
          onChange={handleChange}
        />
        <TextInput
          id="image_url"
          name='image_url'
          labelText="Image URL"
          value={formData.image_url}
          onChange={handleChange}
        />
        <Button kind="primary" onClick={handleSubmit}>Post Event</Button>
      </Stack>
    </Column>
    <Column lg={4} md={4} sm={4} style={{ margin:"5px",padding:"10px",backgroundColor:"#fff", opacity:"100%"}}>
  <Column lg={4} md={8} sm={4}>
    <img
      src={formData.image_url}
      alt={formData.event_name}
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '12px',
      }}
    />
  </Column>

  <Column lg={10} md={8} sm={4}>
    <h3 style={{color:"grey", opacity:"100%"}} >{formData.event_name}</h3>
    <p style={{color:"green", opacity:"100%"}} ><strong>{formData.head_line}</strong></p>
    <p style={{color:"black", opacity:"100%"}} >{formData.description}</p>
    <p style={{color:"blue", opacity:"100%", margin:"10px"}} >By : <u>{formData.event_owner}</u></p>
  </Column>

  <Column lg={2} md={8} sm={4}>
    <div className='readMore'>
      <Button kind="ghost">Read More</Button>
    </div>
  </Column>

  <Column lg={16} md={8} sm={4}>

  </Column>

</Column>

                
            
             </>
  );
};

export default EventPage;
