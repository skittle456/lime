import React, { Component, Fragment } from "react";
import Message from "./Message";

export default class Chat extends Component {
  render() {
    const {
      message,
      receiverName,
      receiverImageUrl,
      senderImageUrl,
      senderName,
      handlerReceiverMessage,
      handlerSenderMessage
    } = this.props;

    return (
      <Fragment>
        <div className="container">
          <div>
            <label className="receiver" for="receiver">
              {receiverName}
            </label>
            <input
              name="receiver"
              className="message-input"
              type="text"
              placeholder="your message"
              onKeyDown={handlerReceiverMessage}
            />
          </div>
          <div className="message-container">
            {message.map((item, index) => (
              <Message
                key={index}
                receiverImageUrl={receiverImageUrl}
                senderImageUrl={senderImageUrl}
                message={item}
              />
            ))}
          </div>
          <div>
            <label className="sender" for="sender">
              {senderName}
            </label>
            <input
              name="sender"
              className="message-input"
              type="text"
              placeholder="your message"
              onKeyDown={handlerSenderMessage}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
