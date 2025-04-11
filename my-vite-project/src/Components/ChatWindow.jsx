// Example: ChatWindow.jsx
import React, { useState } from "react";
import MessageList from "./MessageList";

function ChatWindow() {
  // Example messages array, with each message having sender, text, and a timestamp
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?", timestamp: Date.now() - 60000 },
    { sender: "user", text: "I'm looking for product information.", timestamp: Date.now() - 30000 },
    { sender: "bot", text: "Sure, what product are you interested in?", timestamp: Date.now() - 15000 },
  ]);

  const handleSend = (text) => {
    const newMessage = { sender: "user", text, timestamp: Date.now() };
    setMessages([...messages, newMessage]);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Chat Window</h2>
      <MessageList messages={messages} />
      <button onClick={() => handleSend("This is a new message!")}>
        Send a new message
      </button>
    </div>
  );
}

export default ChatWindow;
