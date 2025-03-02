import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import SuggestedResponses from "./SuggestedResponses";

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
      <SuggestedResponses messages={messages} onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
