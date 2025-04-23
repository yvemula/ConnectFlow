import React from "react";
import { Link } from "react-router-dom";
import "./Features.css"; // you can style it however you like

const Features = () => (
  <div className="features-page">
    <div className="features-content">
      <h2>Why You’ll Love ConnectFlow</h2>
      <ul className="features-list">
        <li>
          <strong>AI-Powered Suggestions:</strong> Get smart replies and topic
          ideas as you chat.
        </li>
        <li>
          <strong>Offline Persistence:</strong> Your conversations auto-save
          locally, so nothing is lost on reload.
        </li>
        <li>
          <strong>Light & Dark Themes:</strong> Switch themes to match your mood
          or environment.
        </li>
        <li>
          <strong>Fast Navigation:</strong> Jump between chats, messages, and
          settings in one click.
        </li>
        <li>
          <strong>Privacy First:</strong> All data stays in your browser—no
          server required.
        </li>
      </ul>
      <Link to="/messages" className="cta-button">
        Start Chatting
      </Link>
    </div>
  </div>
);

export default Features;
