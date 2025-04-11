// Messages.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/chat/Alice">Alice</Link>
            </li>
            <li>
              <Link to="/chat/Bob">Bob</Link>
            </li>
            <li>
              <Link to="/chat/Charlie">Charlie</Link>
            </li>
            <li>
              <Link to="/chat/Dave">Dave</Link>
            </li>
            <li>
              <Link to="/chat/Emily">Emily</Link>
            </li>
            <li>
              <Link to="/chat/Fiona">Fiona</Link>
            </li>
            <li>
              <Link to="/chat/Greg">Greg</Link>
            </li>
            <li>
              <Link to="/chat/Hannah">Hannah</Link>
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
              <Link to="/chat/Alice">
                Chat with Alice about project updates
              </Link>
            </li>
            <li>
              <Link to="/chat/Bob">Chat with Bob regarding weekend plans</Link>
            </li>
            <li>
              <Link to="/chat/Charlie">
                Chat with Charlie about the new gaming console
              </Link>
            </li>
            <li>
              <Link to="/chat/Dave">
                Chat with Dave about dinner reservations
              </Link>
            </li>
            <li>
              <Link to="/chat/Emily">
                Chat with Emily about her upcoming trip
              </Link>
            </li>
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
