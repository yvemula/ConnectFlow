import React from "react";
import "./MessageInput.css";

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: "",
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  updateMessage(e) {
    this.setState({ currentMessage: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.submitMessage();
    }
  }

  submitMessage() {
    const messageTrimmed = this.state.currentMessage.trim();
    if (!messageTrimmed) return;
    this.props.onSend(messageTrimmed);
    this.setState({ currentMessage: "" });
  }

  render() {
    return (
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={this.state.currentMessage}
          onChange={this.updateMessage}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.submitMessage}>Send</button>
      </div>
    );
  }
}

export default MessageInput;
