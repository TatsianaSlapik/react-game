import GameField from "./GameField";
import "./Game.scss";
import { levels } from "config/levels";
import React from "react";

/*export default function Game(props) {
  return (
    <div className="game">
      <GameField  level={levels[props.levelNumber]}></GameField>
    </div>
  );
}*/
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelNumber: this.props.levelNumber,
      level: levels[this.props.levelNumber],
    };
    this.handleLevelChange = this.handleLevelChange.bind(this);
  }

  handleLevelChange(e) {
    this.setState({
      levelNumber: this.state.levelNumber + 1,
      level: levels[this.state.levelNumber + 1],
    });
  }

  render() {
    return (
      <div className="game">
        <GameField
          onLevelChanged={this.handleLevelChange}
          level={this.state.level}
        ></GameField>
      </div>
    );
  }
}
