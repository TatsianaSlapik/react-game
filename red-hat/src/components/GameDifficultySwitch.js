import React from "react";

import { EASY, HARD } from "../config/levels";

export default class GameDifficultySwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { difficulty: props.difficulty };
  }

  render() {
    return (
      <div className="difficulty custom-control custom-switch">
        <input
          onChange={() => {
            if (this.state.difficulty === EASY) {
              this.setState({ difficulty: HARD });
              this.props.onDifficultyChanged(HARD);
            } else {
              this.setState({ difficulty: EASY });
              this.props.onDifficultyChanged(EASY);
            }
          }}
          type="checkbox"
          className="custom-control-input"
          id="difficultySwitch"
        />
        <label className="custom-control-label" htmlFor="difficultySwitch">
          {this.state.difficulty === EASY ? "Easy" : "Hard"}
        </label>
      </div>
    );
  }
}
