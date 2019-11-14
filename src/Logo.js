import React, { PureComponent } from "react";

export default class Logo extends PureComponent {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
