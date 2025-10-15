import React, { useEffect, useState } from 'react';
import { Grid, Column, SideNav, SideNavItem } from '@carbon/react';
import { ArrowLeft, Chat } from '@carbon/icons-react';
import ChatScreen from './chatScreen';
import ChatInput from './chatInput';
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");

const ChatBoard = () => {
  const [sideBar, setSideBar] = useState(false);
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentUser] = useState({ id: 1, name: "Elijah" });

  const placeholderImg = "https://www.gravatar.com/avatar/?d=mp&s=50";

  useEffect(() => {
    fetch("http://localhost:5000/api/chats")
      .then(res => res.json())
      .then(data => setPeople(data))
      .catch(err => console.error(err));
  }, []);

  // Join current user's room for private messages
  useEffect(() => {
    socket.emit('joinRoom', currentUser.id);

    socket.on('receiveMessage', (msg) => {
      if (selectedPerson && msg.senderId === selectedPerson.personId) {
        setMessages(prev => [...prev, msg]);
      }
    });

    return () => socket.off('receiveMessage');
  }, [currentUser, selectedPerson]);

  const handlePersonSelect = async (personId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/persons/${personId}`);
      const data = await res.json();
      setSelectedPerson(data);

      // Fetch messages
      const msgRes = await fetch(`http://localhost:5000/api/messages/inbox/${personId}`);
      const msgData = await msgRes.json();
      setMessages(msgData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = (msg) => {
    socket.emit('sendMessage', msg); // send via socket
    setMessages(prev => [...prev, msg]); // update local UI immediately
  };

  return (
    <Grid fullWidth>
      {/* Sidebar */}
      {sideBar && (
        <SideNav aria-label="User list" expanded>
          <div onClick={() => setSideBar(false)} style={{ cursor:"pointer", padding:"10px", borderBottom:"1px solid #ccc" }}>
            <ArrowLeft size={20} />
          </div>
          {people.map(user => (
            <SideNavItem key={user.id} onClick={() => handlePersonSelect(user.personId)}>
              <div style={{ display:"flex", alignItems:"center", padding:"5px 0", cursor:"pointer" }}>
                <img src={placeholderImg} alt={user.name} style={{ width:30, height:30, borderRadius:"50%", marginRight:10 }}/>
                <span>{user.name}</span>
              </div>
            </SideNavItem>
          ))}
        </SideNav>
      )}

      {/* Online users */}
      <Column lg={16} md={8} sm={4}>
        <h2>Online Users</h2>
        <div style={{ display:"flex", gap:10, overflowX:"auto" }}>
          {people.map(user => (
            <div key={user.id} onClick={() => handlePersonSelect(user.personId)} style={{ cursor:"pointer", border:"1px solid #ccc", borderRadius:10, padding:10 }}>
              <img src={placeholderImg} alt={user.name} style={{ width:60, height:60, borderRadius:"50%" }}/>
              <div>{user.name}</div>
              <small style={{ color:user.onLine ? "green" : "gray" }}>{user.onLine ? "Online" : `Last: ${new Date(user.lastSeen).toLocaleTimeString()}`}</small>
            </div>
          ))}
        </div>
      </Column>

      {/* Chat area */}
      {selectedPerson ? (
        <>
          <ChatScreen messages={messages} person={selectedPerson} />
          <ChatInput person={selectedPerson} currentUser={currentUser} onMessageSent={handleSendMessage} />
        </>
      ) : (
        <Column lg={16} md={8} sm={4}>
          <p>Select a person to start chatting</p>
        </Column>
      )}

      {/* Floating toggle */}
      <div style={{ position:"fixed", right:20, bottom:20, backgroundColor:"#0f62fe", color:"white", padding:14, borderRadius:"50%", cursor:"pointer", zIndex:1000 }} onClick={() => setSideBar(!sideBar)}>
        <Chat size={20} />
      </div>
    </Grid>
  );
};

export default ChatBoard;
