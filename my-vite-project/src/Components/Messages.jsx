// Messages.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.css";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("friends");

  const renderContent = () => {
    if (activeTab === "friends") {
      return (
        <div className="tab-content">
          <h2>Friends</h2>
          <ul>
            <li>
              <Link to="/chat/Alice">Alice</Link>
            </li>
            <li>
              <Link to="/chat/Bob">Bob</Link>
            </li>
            <li>
              <Link to="/chat/Charlie">Charlie</Link>
            </li>
          </ul>
        </div>
      );
    } else if (activeTab === "chats") {
      return (
        <div className="tab-content">
          <h2>Chats</h2>
          <ul>
            <li>
              <Link to="/chat/Alice">Chat with Alice</Link>
            </li>
            <li>
              <Link to="/chat/Bob">Chat with Bob</Link>
            </li>
            <li>
              <Link to="/chat/Charlie">Chat with Charlie</Link>
            </li>
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
