import { Column, TextArea, Button } from '@carbon/react';
import { Send } from '@carbon/icons-react';
import React, { useState } from 'react';

const ChatInput = ({ person, currentUser, onMessageSent }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    const newMessage = {
      senderId: currentUser.id,
      receiverId: person.personId,
      senderName: currentUser.name,
      receiverName: person.firstName + " " + (person.lastName || ""),
      content: text,
      timestamp: new Date(),
      isRead: false
    };

    onMessageSent(newMessage); // update UI
    setText(""); // clear input
  };

  return (
    <Column lg={16} md={8} sm={4} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", border:"1px solid #ccc", borderRadius:10, padding:10, marginTop:10 }}>
      <TextArea
        aria-label="Chat Input"
        placeholder={`Message ${person.firstName}...`}
        rows={2}
        style={{ resize:"none", border:"none", outline:"none", width:"100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleSend}><Send size={20} /></Button>
    </Column>
  );
};

export default ChatInput;
