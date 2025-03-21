import React, { useEffect, useRef } from "react";
import "./MessageList.css";

// A sub-component to render an individual message
const MessageItem = ({ message, showSender }) => {
  const { sender, text, timestamp } = message;
  return (
    <div className={`message-item ${sender}`}>
      {showSender && <div className="message-sender">{sender}</div>}
      <div className="message-content">{text}</div>
      {timestamp && (
        <div className="message-timestamp">
          {new Date(timestamp).toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

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
      {messages.length === 0 && (
        <div className="no-messages">No messages yet.</div>
      )}
      {messages.map((message, index) => {
        // Determine if we should display the sender's name
        // If the previous message was from a different sender, show the sender.
        const previousSender = index > 0 ? messages[index - 1].sender : null;
        const showSender = message.sender !== previousSender;
        return (
          <MessageItem
            key={index}
            message={message}
            showSender={showSender}
          />
        );
      })}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
