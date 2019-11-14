import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfile from "./Profile";
import defaultImage from "./defaultImage.png";

import Chat from "./Chat";

export default class Main extends Component {
  state = {
    senderImageUrl: defaultImage,
    senderName: "",
    receiverImageUrl: defaultImage,
    receiverName: "",
    message: []
    // message: [
    //   {
    //     text: "สวัสดีจ้า",
    //     by: "receiver"
    //   },
    //   {
    //     text: "หิวข้าวจังเลยจ้า",
    //     by: "sender"
    //   },
    //   {
    //     text: "กระเป๋า whiteboard กระเป๋าตัง",
    //     by: "receiver"
    //   }
    // ]
  };

  handlerSetSenderProfile = senderImageUrl => {
    this.setState({ senderImageUrl: senderImageUrl });
  };

  handlerSenderName = name => {
    this.setState({ senderName: name });
  };
  handlerSetReceiverProfile = receiverImageUrl => {
    this.setState({
      receiverImageUrl: receiverImageUrl
    });
  };
  handlerReceiverName = name => {
    this.setState({ receiverName: name });
  };
  handlerReceiverMessage = e => {
    //e.preventDefault();
    if (e.key === "Enter") {
      console.log(" enter!");
      const arry = this.state.message;
      arry.push({ text: e.target.value, by: "receiver" });

      this.setState({ message: arry });
      e.target.value = "";
    }
  };

  handlerSenderMessage = e => {
    //e.preventDefault();

    if (e.key === "Enter") {
      console.log(" enter!");
      const arry = this.state.message;
      arry.push({ text: e.target.value, by: "sender" });

      this.setState({ message: arry });
      e.target.value = "";
    }
  };
  render() {
    const {
      receiverImageUrl,
      receiverName,
      message,
      senderImageUrl,
      senderName
    } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <Router>
          <Route exact path="/">
            <Link to="/receiver_profile">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </Route>

          <Route exact path="/receiver_profile">
            <UserProfile
              setProfile={this.handlerSetReceiverProfile}
              setName={this.handlerReceiverName}
              receiverImageUrl={receiverImageUrl}
              senderImageUrl={senderImageUrl}
              defaultImage={defaultImage}
              placeholder="receiver name"
            />
            <Link to="/sender_profile">
              <button className="btn"> Next </button>
            </Link>
          </Route>

          <Route exact path="/sender_profile">
            <UserProfile
              setProfile={this.handlerSetSenderProfile}
              setName={this.handlerSenderName}
              receiverImageUrl={receiverImageUrl}
              senderImageUrl={senderImageUrl}
              defaultImage={defaultImage}
              placeholder="sender name"
            />
            <Link to="/message">
              <button className="btn"> Next </button>
            </Link>
          </Route>

          <Route exact path="/message">
            <Chat
              receiverImageUrl={receiverImageUrl}
              message={message}
              receiverName={receiverName}
              senderName={senderName}
              senderImageUrl={senderImageUrl}
              handlerSenderMessage={this.handlerSenderMessage}
              handlerReceiverMessage={this.handlerReceiverMessage}
            />
          </Route>
        </Router>
      </Fragment>
    );
  }
}
