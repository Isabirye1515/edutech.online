import {  Modal, TextInput } from '@carbon/react';
import React, { useState } from 'react';

const AddStreamModal = ({isOpen,onClose}) => {
    const [streams,setStreams] = useState({
        classRoom:"",
        streamName:""
    })
    const handleChange = (event)=>{
        const {name,value} = event.target
        setStreams((prevData)=>({...prevData,[name]:value}))
    }
    const handleSubmit = async ()=>{
        try{
            const response = await fetch("http://localhost:8080/edutech/api/attendance-streams",{
                "method":"POST",
                "headers":{
                    "Content-type":"application/json"
                },
                "body": JSON.stringify(streams)

            })
            if(response.ok){
                alert("Stream Submit")
                setStreams({
                            classRoom:"",
        streamName:""
                })
            }

        }catch(error){
            console.log(error)
        }
    }

    return (
        <Modal 
        open={isOpen}
        onRequestClose={onClose}
    modalHeading="Add Classroom Stream"
      primaryButtonText="Save"
      secondaryButtonText="Cancel"
      onRequestSubmit={handleSubmit}
        
        >
            <TextInput
            id="class-rooms"
            lableText="Class Room"
            name="classRoom"
            value={streams.classRoom}
            placeholder="Enter Class Room"
            onChange={handleChange}
            style={{margin:"5px"}}
            />
             <TextInput
            id="streams"
            name='streamName'
            lableText="Class Room Stream "
            value={streams.streamName}
            placeholder="Enter Class Room Stream"
            onChange={handleChange}
            style={{margin:"5px"}}
            />

            
        </Modal>
    );
}

export default AddStreamModal;
