import { ArrowLeft, Chat } from '@carbon/icons-react';
import { Column, Grid, Tile } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import BannerPage from '../homePage/banner';

const Persons = () => {
  const [people, setPeople] = useState([]);
  const [personTab, setPersonTab] = useState(false);
  const [personInfo, setPersonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const placeholderImg = "https://i.postimg.cc/05Hf1gM9/image.jpg";

  const getPeople = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/persons');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePersonInfo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/persons/${id}`);
      const data = await response.json();
      setPersonInfo(data);
      setPersonTab(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChat = async (id) => {
    if (!personInfo || personInfo.id !== id) return;

    try {
      const fullName = `${personInfo.firstName} ${personInfo.lastName}`;
      const lastSeen = new Date();
      const onLine = false;
      const personId = personInfo.id

      // ✅ Alert before adding
      alert(`${fullName} will be added to your chat list.`);

      const postChat = await fetch("http://localhost:5000/api/chats/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          onLine,
          lastSeen,
          personId,
        }),
      });

      if (postChat.ok) {
        console.log("Chat created for", fullName);
      } else {
        console.error("Failed to create chat");
      }
    } catch (error) {
      console.error("Error posting chat:", error);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Grid fullWidth style={{ marginTop: '3rem' }}>
      {isLoading && <BannerPage />}

      {people.map((user) => (
        <Column
          lg={3}
          md={4}
          sm={2}
          key={user.personId}
          className="person-column"
        >
          <div
            style={{ cursor: 'pointer', textAlign: 'center' }}
            onClick={() => handlePersonInfo(user.personId)}
          >
            <img
              src={placeholderImg}
              alt={`${user.firstName} ${user.lastName}`}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                marginBottom: '8px',
              }}
            />
            <p>{user.username}</p>
            <h5>{user.description}</h5>
          </div>
        </Column>
      ))}

      {personTab && personInfo && (
        <Tile
          style={{
            margin: '1rem',
            borderRadius: '8px',
            position: 'fixed',
            right: 0,
            bottom: 0,
            width: '300px',
            backgroundColor: 'darkslategrey',
            color: 'white',
            boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
            padding: '1rem',
          }}
        >
          <div>
            <ArrowLeft
              onClick={() => setPersonTab(false)}
              style={{ cursor: 'pointer' }}
            />
            <Chat
              size={20}
              style={{
                position: 'absolute',
                right: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => handleChat(personInfo.id)}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div>
              <img
                src={placeholderImg}
                alt={`${personInfo.firstName} ${personInfo.lastName}`}
                style={{ width: '60px', height: '60px', borderRadius: '50%' }}
              />
            </div>
            <div>
              <h3>{personInfo.username}</h3>
              <p>{personInfo.firstName} {personInfo.lastName}</p>
              <p>{personInfo.email}</p>
              <p>{personInfo.description}</p>
            </div>
          </div>
        </Tile>
      )}
    </Grid>
  );
};

export default Persons;
