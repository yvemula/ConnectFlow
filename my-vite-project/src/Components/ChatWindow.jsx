import React, { useState, useCallback } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import SuggestedResponses from "./SuggestedResponses";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback((text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: trimmedText, sender: "user" }
    ]);
  }, []);

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
      <SuggestedResponses messages={messages} onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
