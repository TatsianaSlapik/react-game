import GameField from "./GameField";
import "./Game.scss";
import { levels } from "config/levels";
import React from "react";
import Music from "./Music";
import Counter from "./Counter";
import HeroSwitch from "./HeroSwitch";

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
      hero: "red-hat",
    };
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleHeroChange = this.handleHeroChange.bind(this);
  }

  handleLevelChange(e) {
    this.setState({
      levelNumber: this.state.levelNumber + 1,
      level:
        this.state.levelNumber + 1 > Object.keys(levels).length
          ? null
          : levels[this.state.levelNumber + 1],
      hero: this.state.hero,
    });
  }

  handleHeroChange(hero) {
    this.setState({
      levelNumber: this.state.levelNumber,
      level: this.state.level,
      hero: hero,
    });
  }

  render() {
    return (
      <div className="game">
        <Counter key={this.state.levelNumber}></Counter>
        <Music></Music>
        <HeroSwitch
          onHeroChanged={this.handleHeroChange}
          hero={this.state.hero}
        ></HeroSwitch>
        {this.state.level === null ? (
          <h1>WIN!</h1>
        ) : (
          <GameField
            onLevelChanged={this.handleLevelChange}
            level={this.state.level}
            hero={this.state.hero}
          ></GameField>
        )}
      </div>
    );
  }
}
