import { Button, Column } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import AddBook from './addBook';

const LibraryPage = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [books,setBooks] = useState([])
    const handleBook = ()=>{
        setIsOpen(!isOpen)
    }
    const fetchBooks = async ()=>{
        const response = await fetch("http://localhost:5000/api/library")
        const data = await response.json()
        setBooks(data)
    }
    useEffect(()=>{
        fetchBooks()
    },[])
    return (
        <>
        <Column lg={16} md={8} sm={4} >
        <h2 style={{color:"white"}} >Libray</h2>
        <Button onClick={handleBook} >Add Book</Button>
       
        </Column>
   

        {books.map((book)=>(
            <Column lg={5} md={8} sm={4}  key={book.id} style={{display:"flex", boxShadow:"0.01rem 0.01rem white", backgroundColor:"blue",margin:"10px" }} >
                              <img
              src={book.cover}
              alt={book.book_name}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '100%',
                opacity:"100%",
                margin:"10px"
              }}
            />
            <div>
                <h4>{book.book_name}</h4>{book.author}
                <p>{book.level}</p>
                <p>{book.pages}pages</p>
                <a  style={{color:"yellow"}} href={book.web_url} >Download free</a>

            </div>
                

            </Column>
        ))}
             <AddBook isOpen={isOpen} onClose={handleBook}  />
        </>
    );
}

export default LibraryPage;

