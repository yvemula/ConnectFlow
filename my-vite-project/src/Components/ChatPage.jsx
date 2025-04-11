// ChatPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ChatPage.css"; // Optionally include your styles

const ChatPage = () => {
  // Retrieve the friend's name from the URL parameters
  const { friend } = useParams();

  // A simple mock conversation
  const mockChat = [
    { id: 1, sender: friend, message: `Hi there, this is ${friend}!` },
    { id: 2, sender: "You", message: `Hello, ${friend}! How are you?` },
    { id: 3, sender: friend, message: "I'm good, thanks for asking!" },
  ];

  return (
    <div className="chat-page">
      <h2>Chat with {friend}</h2>
      <div className="chat-container">
        {mockChat.map((entry) => (
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
      {/* A link to go back to the Messages page */}
      <Link to="/" className="back-link">
        Back to Messages
      </Link>
    </div>
  );
};

export default ChatPage;
