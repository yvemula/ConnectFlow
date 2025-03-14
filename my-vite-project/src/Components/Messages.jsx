import React, { useState } from "react";
import "./Messages.css"; // optional CSS for styling

const Messages = () => {
  // State to track which tab is active: "friends" or "chats"
  const [activeTab, setActiveTab] = useState("friends");

  // Function to render the tab content based on activeTab
  const renderContent = () => {
    if (activeTab === "friends") {
      return (
        <div className="tab-content">
          <h2>Friends</h2>
          <ul>
            <li>Alice</li>
            <li>Bob</li>
            <li>Charlie</li>
          </ul>
        </div>
      );
    } else if (activeTab === "chats") {
      return (
        <div className="tab-content">
          <h2>Chats</h2>
          <ul>
            <li>Chat with Alice</li>
            <li>Chat with Bob</li>
            <li>Chat with Charlie</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="message-page">
      <div className="tabs">
        <button
          className={activeTab === "friends" ? "active" : ""}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
        <button
          className={activeTab === "chats" ? "active" : ""}
          onClick={() => setActiveTab("chats")}
        >
          Chats
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Messages;
