import React, { useEffect, useRef } from 'react';
import './MessageList.css';

const MessageList = ({ messages }) => {
  const messageEndRef = useRef(null);

  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          <span>{message.text}</span>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
