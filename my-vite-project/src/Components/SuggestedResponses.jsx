import React, { useState, useEffect } from "react";
import "./SuggestedResponses.css";

function SuggestedResponses({ messages, onSend }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // If there are no messages, clear suggestions and skip
    if (messages.length === 0) {
      setSuggestions([]);
      return;
    }

    // Get the text from the last message
    const lastMessage = messages[messages.length - 1];
    const newSuggestions = generateAISuggestions(lastMessage.text);
    setSuggestions(newSuggestions);
  }, [messages]);

  // Dummy AI suggestion logic:
  // Replace with real AI/ML logic if you like
  const generateAISuggestions = (message) => {
    const lower = message.toLowerCase();

    if (lower.includes("hello")) {
      return ["Hi there!", "Hey!", "Hello! 😊"];
    }
    if (lower.includes("help")) {
      return [
        "What do you need help with?",
        "I can assist you!",
        "Tell me more!",
      ];
    }
    if (lower.includes("bye")) {
      return ["Goodbye! 👋", "See you later!", "Take care!"];
    }

    // Default fallback suggestions
    return ["Interesting…", "Tell me more!", "That makes sense!"];
  };

  return (
    <div className="suggested-responses">
      <h4>AI Suggestions</h4>
      <div className="suggestion-list">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-btn"
            onClick={() => onSend(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedResponses;
