import React from "react";
import { RED_HAT, WOLF } from "../config/levels";

export default class HeroSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hero: props.hero };
  }

  render() {
    return (
      <div class="form-check form-switch">
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
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Red hat or wolf
        </label>
      </div>
    );
  }
}
