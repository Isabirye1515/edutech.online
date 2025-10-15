import { Column } from '@carbon/react';
import React, { useEffect, useState } from 'react';

const ChatScreen = ({ person, messages: initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages || []);

  // Fetch initial messages from backend
  useEffect(() => {
    if (!person) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/messages/inbox/${person.personId}`);
        const data = await res.json();

        const mappedMessages = data.map(msg => ({
          id: msg.id,
          senderId: msg.senderId,
          receiverId: msg.receiverId,
          senderName: msg.senderName,
          receiverName: msg.receiverName,
          content: msg.content,
          timestamp: new Date(msg.timestamp),
          isRead: msg.isRead
        }));

        setMessages(mappedMessages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [person]);

  // Update messages if props change (after sending a new message)
  useEffect(() => {
    if (initialMessages) setMessages(initialMessages);
  }, [initialMessages]);

  return (
    <Column lg={16} md={8} sm={4}>
      <div style={{ border:"1px solid #ccc", borderRadius:"10px", height:"400px", overflowY:"auto", padding:"10px", backgroundColor:"#fafafa" }}>
        {messages.length === 0 ? (
          <p>No messages yet. Say hi to {person.firstName}!</p>
        ) : (
          messages.map(msg => (
            <p key={msg.id || Math.random()}>
              <strong>{msg.senderName}:</strong> {msg.content}
            </p>
          ))
        )}
      </div>
    </Column>
  );
};

export default ChatScreen;
