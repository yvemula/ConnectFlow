// ChatPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ChatPage.css";

const ChatPage = () => {
  // Get the friend's name from the URL parameters
  const { friend } = useParams();

  // Initial conversation with some mock messages
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: friend, message: `Hi there, this is ${friend}!` },
    { id: 2, sender: "You", message: `Hello, ${friend}! How are you?` },
    { id: 3, sender: friend, message: "I'm good, thanks for asking!" },
  ]);

  // State for the new message input
  const [input, setInput] = useState("");

  // Handler to send a new message
  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: chatMessages.length + 1,
      sender: "You",
      message: input,
    };
    setChatMessages([...chatMessages, newMessage]);
    setInput("");
  };

  // Allow sending the message by pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      <h2>Chat with {friend}</h2>
      <div className="chat-container">
        {chatMessages.map((entry) => (
          <div
            key={entry.id}
            className={`chat-message ${
              entry.sender === "You" ? "sent" : "received"
            }`}
          >
            <strong>{entry.sender}:</strong> {entry.message}
          </div>
        ))}
      </div>
      {/* Message input area */}
      <div className="message-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
      {/* Link to go back to the Messages page */}
      <Link to="/messages" className="back-link">
        Back to Messages
      </Link>
    </div>
  );
};

export default ChatPage;
