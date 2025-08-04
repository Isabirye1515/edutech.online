import { Modal, NumberInput, TextInput } from '@carbon/react';
import React, { useState } from 'react';

const AddBook = ({isOpen,onClose}) => {
  const [book,setBook] = useState({
    book_name:"",
    book_id:"",
    author:"",
    level:"",
    cover:"",
    pages:0,
    web_url:""
  })
  const handleChange = (event)=>{
    const {name, value} = event.target
    setBook((prevData)=>({...prevData,[name]:value}))
  }

  const handleSubmit = async ()=>{
    const response = await fetch("http://localhost:5000/library",{
      "method":"POST",
      "headers":{
        "Content-type":"application/json"
      },
      "body":JSON.stringify(book)
    })
    if(response.ok){
      alert("Book submitted successfully")
    }

  }
  return (
    <Modal
    open={isOpen}
    onRequestClose={onClose}
    secondaryButtonText="Cancle"
    primaryButtonText="Submit"
    onRequestSubmit={handleSubmit}
    >
      <TextInput
      id="book-name"
      labelText='Book Name'
      placeholder='Enter book name.'
      name='book_name'
      onChange={handleChange}
      value={book.book_name}
       />
       <TextInput
      id="book-id"
      labelText='Book ID'
      placeholder='Enter book number'
      name='book_id'
      onChange={handleChange}
      value={book.book_id}
      />
      <TextInput
      id="author"
      labelText='Author'
      placeholder='Enter Author'
      name='author'
      onChange={handleChange}
      value={book.author}
      />

      <TextInput
      id="level"
      labelText='Level'
      placeholder='Enter Education Level'
      name='level'
      onChange={handleChange}
      value={book.level}

      />
       <TextInput
      id="cover"
      labelText='Book Cover'
      placeholder='Enter Book Cover'
      name='cover'
      onChange={handleChange}
      value={book.cover}

      />
      <NumberInput 
      id='pages'
      labelText='Pages'
      name='pages'
      value={book.pages}
      onChange={handleChange}
      />
      <TextInput
      id="weburl"
      labelText='Download Url'
      placeholder='Enter download url'
      name='web_url'
      onChange={handleChange}
      value={book.web_url}
      />
      
    </Modal>
  );
}

export default AddBook;
