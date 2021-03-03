import React from "react";
import { RED_HAT, WOLF } from "../config/levels";

export default class HeroSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hero: props.hero };
  }

  render() {
    return (
      <div className="custom-control custom-switch">
        <input
          onChange={() => {
            if (this.state.hero === RED_HAT) {
              this.setState({ hero: WOLF });
              this.props.onHeroChanged(WOLF);
            } else {
              this.setState({ hero: RED_HAT });
              this.props.onHeroChanged(RED_HAT);
            }
          }}
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          {this.state.hero === RED_HAT ? "Red hat" : "Wolf"}
        </label>
      </div>
    );
  }
}
/* red hat / wolf*/
