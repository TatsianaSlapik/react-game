import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.countIncrement = this.countIncrement.bind(this);

    let savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      this.state = JSON.parse(savedCount);
    }
    localStorage.setItem("count", JSON.stringify(this.state));
  }
  countIncrement() {
    this.setState({ count: this.state.count + 1 });
    localStorage.setItem("count", JSON.stringify(this.state));
  }
  onKeyDown(e) {
    switch (e.keyCode) {
      case 37: //left
        this.countIncrement();
        break;
      case 38: //up
        this.countIncrement();
        break;
      case 39: // right
        this.countIncrement();
        break;
      case 40: //down
        this.countIncrement();
        break;
      default:
        return;
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }
  render() {
    return (
      <div className="count">
        <p>{this.state.count}</p>
      </div>
    );
  }
}
