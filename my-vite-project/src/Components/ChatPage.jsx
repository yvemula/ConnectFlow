import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ChatPage.css";

const ChatPage = () => {
  // Get the friend's name from the URL parameters
  const { friend } = useParams();
  const storageKey = `chat-${friend}`;

  // Load messages from localStorage or initialize with mock data
  const [chatMessages, setChatMessages] = useState([]);
  const [input, setInput] = useState("");

  // On mount or when friend changes, load stored messages
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setChatMessages(JSON.parse(saved));
    } else {
      setChatMessages([
        { id: 1, sender: friend, message: `Hi there, this is ${friend}!` },
        { id: 2, sender: "You", message: `Hello, ${friend}! How are you?` },
        { id: 3, sender: friend, message: "I'm good, thanks for asking!" },
      ]);
    }
  }, [friend, storageKey]);

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(chatMessages));
    }
  }, [chatMessages, storageKey]);

  // Handler to send a new message
  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: Date.now(),
      sender: "You",
      message: input.trim(),
    };
    setChatMessages(prev => [...prev, newMessage]);
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
