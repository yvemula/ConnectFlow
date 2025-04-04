import React, { useState } from "react";
import "./Messages.css";

const Messages = () => {
  // Keep track of which tab is currently active
  const [activeTab, setActiveTab] = useState("friends");

  // A simple helper function to handle switching tabs
  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Render content based on the activeTab state
  const renderContent = () => {
    if (activeTab === "friends") {
      return (
        <div className="tab-content">
          <h2>Friends</h2>
          <ul>
            <li>Alice</li>
            <li>Bob</li>
            <li>Charlie</li>
            <li>Dave</li>
            <li>Emily</li>
            <li>Fiona</li>
            <li>Greg</li>
            <li>Hannah</li>
          </ul>
        </div>
      );
    } else if (activeTab === "chats") {
      return (
        <div className="tab-content">
          <h2>Chats</h2>
          <ul>
            <li>Chat with Alice about project updates</li>
            <li>Chat with Bob regarding weekend plans</li>
            <li>Chat with Charlie about the new gaming console</li>
            <li>Chat with Dave about dinner reservations</li>
            <li>Chat with Emily about her upcoming trip</li>
          </ul>
        </div>
      );
    } else if (activeTab === "requests") {
      return (
        <div className="tab-content">
          <h2>Requests</h2>
          <ul>
            <li>New friend request from Irene</li>
            <li>New friend request from Jake</li>
            <li>Group chat invite from “Weekend Warriors”</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="message-page">
      {/* Simple header for the page */}
      <header>
        <h1>My Messages</h1>
      </header>

      {/* Tab buttons */}
      <div className="tabs">
        <button
          className={activeTab === "friends" ? "active" : ""}
          onClick={() => switchTab("friends")}
        >
          Friends
        </button>
        <button
          className={activeTab === "chats" ? "active" : ""}
          onClick={() => switchTab("chats")}
        >
          Chats
        </button>
        <button
          className={activeTab === "requests" ? "active" : ""}
          onClick={() => switchTab("requests")}
        >
          Requests
        </button>
      </div>

      {/* Dynamically render the appropriate content */}
      {renderContent()}
    </div>
  );
};

export default Messages;
