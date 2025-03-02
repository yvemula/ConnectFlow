import React, { useState, useEffect } from "react";
import "./SuggestedResponses.css";

function SuggestedResponses({ messages, onSend }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // clear suggestions or skip if there are no messages, clear suggestions or skip
    if (messages.length === 0) {
      setSuggestions([]);
      return;
    }

    // recieves text from the last message
    const lastMessage = messages[messages.length - 1];
    const newSuggestions = generateAISuggestions(lastMessage.text);

    setSuggestions(newSuggestions);
  }, [messages]);

  //dummy AI suggestion logic:
  //will need to replace with real AI api logic soon

  const generateAISuggestions = (message) => {
    // Basic examples:
    if (message.toLowerCase().includes("hello")) {
      return ["Hi there!", "Hey!", "Hello! 😊"];
    }
    if (message.toLowerCase().includes("help")) {
      return [
        "What do you need help with?",
        "I can assist you!",
        "Tell me more!",
      ];
    }
    if (message.toLowerCase().includes("bye")) {
      return ["Goodbye! 👋", "See you later!", "Take care!"];
    }

    // default fallback suggestions
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
