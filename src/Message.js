import React, { Component } from "react";
export default class Message extends Component {
  state = {
    text: this.props.message.text
  };

  componentDidMount = () => {
    try {
      fetch(
        "https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter",
        {
          method: "POST",
          body: JSON.stringify({
            content: this.props.message.text,
            "censor-character": "*"
          }),
          headers: {
            "x-rapidapi-host": "neutrinoapi-bad-word-filter.p.rapidapi.com",
            "x-rapidapi-key":
              "eb4220e5f0msh742f66f9e0a86f3p1d4c8djsnfcc8d39c8044",

            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )
        .then(result => {
          return result.json();
        })
        .then(result => {
          console.log("result", result);
          this.setState({ text: result["censored-content"] });
        });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { receiverImageUrl, message, senderImageUrl } = this.props;
    const { text } = this.state;
    return (
      <div className={`message-outline ${message.by}-outline`}>
        {message.by == "receiver" ? (
          <img src={receiverImageUrl} />
        ) : (
          <img src={senderImageUrl} />
        )}
        <div className={`message-box ${message.by}-message`}>
          <span> {text} </span>
        </div>
      </div>
    );
  }
}
