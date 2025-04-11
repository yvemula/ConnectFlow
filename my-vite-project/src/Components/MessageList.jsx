import React from "react";
import "./MessageList.css";

// Helper component to display each message
function SingleMessage({ data, shouldDisplaySender }) {
  const { sender, text, timestamp } = data;

  return (
    <div className={`message-item ${sender}`}>
      {shouldDisplaySender && <div className="message-sender">{sender}</div>}
      <div className="message-content">{text}</div>
      {timestamp && (
        <div className="message-timestamp">
          {new Date(timestamp).toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.endOfListRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    // Check if the messages prop actually changed
    if (prevProps.messages !== this.props.messages) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    if (this.endOfListRef.current) {
      this.endOfListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  renderMessageList() {
    const { messages } = this.props;

    if (!messages || messages.length === 0) {
      return <div className="no-messages">No messages yet.</div>;
    }

    return messages.map((msg, idx) => {
      const previousSender = idx > 0 ? messages[idx - 1].sender : null;
      const shouldDisplaySender = msg.sender !== previousSender;

      return (
        <SingleMessage
          key={idx}
          data={msg}
          shouldDisplaySender={shouldDisplaySender}
        />
      );
    });
  }

  render() {
    return (
      <div className="message-list">
        {this.renderMessageList()}
        <div ref={this.endOfListRef} />
      </div>
    );
  }
}

export default MessageList;
