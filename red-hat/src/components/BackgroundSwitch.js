import React from "react";
import { DAY, NIGHT } from "../config/levels";
export default class BackgroundSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { background: props.background };
  }

  render() {
    return (
      <div className="custom-control custom-switch">
        <input
          onChange={() => {
            if (this.state.background === DAY) {
              this.setState({ background: NIGHT });
              this.props.onBackgroundChanged(NIGHT);
            } else {
              this.setState({ background: DAY });
              this.props.onBackgroundChanged(DAY);
            }
          }}
          type="checkbox"
          className="custom-control-input"
          id="color"
        />
        <label className="custom-control-label" htmlFor="color">
          {this.state.background === DAY ? "Day" : "Night"}
        </label>
      </div>
    );
  }
}
