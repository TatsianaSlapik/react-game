import React from "react";

let i = 1;
let time;
export default class Autoplay extends React.Component {
  constructor(props) {
    super(props);
    this.onAutoSteps = this.onAutoSteps.bind(this);
  }
  onAutoSteps(e) {
    var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 39 });
    document.dispatchEvent(keyboardEvent);

    time = setInterval(() => {
      if (i <= 2) {
        var keyboardEvent = new KeyboardEvent("keydown", { keyCode: 39 });
        document.dispatchEvent(keyboardEvent);
        i++;
      } else {
        clearInterval(time);
        localStorage.clear();
        document.location.reload();
      }
    }, 1000);
  }

  render() {
    return (
      <button className="auto btn btn-info" onClick={this.onAutoSteps}>
        Autoplay
      </button>
    );
  }
}
