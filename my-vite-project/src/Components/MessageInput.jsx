import React, { useState } from "react";
import "./MessageInput.css"; // Optional: Include a CSS file for styling

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Avoid sending empty messages
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  };

  const handleKeyPress = (event) => {
    // Send message on pressing Enter
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
