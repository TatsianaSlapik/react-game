import GameField from "./GameField";
import "./Game.scss";
import { EASY, EasyLevels, HardLevels, RED_HAT } from "config/levels";
import React from "react";
import Music from "./Music";
import Counter from "./Counter";
import HeroSwitch from "./HeroSwitch";
import Win from "./Win";
import GameDifficultySwitch from "./GameDifficultySwitch";
import NewGame from "./NewGame";
import Statistics from "./Statistics";
const gameKey = "game";
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelNumber: this.props.levelNumber,
      level: EasyLevels[this.props.levelNumber],
      hero: RED_HAT,
      difficultyLevel: EASY,
    };
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleHeroChange = this.handleHeroChange.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);

    let savedGame = localStorage.getItem(gameKey);
    if (savedGame !== null) {
      this.state = JSON.parse(savedGame);
    }
    localStorage.setItem(gameKey, JSON.stringify(this.state));
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  handleLevelChange(e) {
    console.log(
      Object.keys(this.state.difficultyLevel === EASY ? EasyLevels : HardLevels)
        .length
    );
    this.setState({
      levelNumber: this.state.levelNumber + 1,
      level:
        this.state.levelNumber + 1 >
        Object.keys(
          this.state.difficultyLevel === EASY ? EasyLevels : HardLevels
        ).length
          ? null
          : (this.state.difficultyLevel === EASY ? EasyLevels : HardLevels)[
              this.state.levelNumber + 1
            ],
      hero: this.state.hero,
      difficultyLevel: this.state.difficultyLevel,
    });
    localStorage.setItem(gameKey, JSON.stringify(this.state));
    if (this.state.level === null) {
      let stats = JSON.parse(localStorage.getItem("stats"));
      if (stats === null) {
        localStorage.setItem(
          "stats",
          JSON.stringify([
            {
              hero: this.state.hero,
              difficulty: this.state.difficultyLevel,
              counter: JSON.parse(localStorage.getItem("count")).count,
            },
          ])
        );
      } else {
        stats.push({
          hero: this.state.hero,
          difficulty: this.state.difficultyLevel,
          counter: JSON.parse(localStorage.getItem("count")).count,
        });
        localStorage.setItem("stats", JSON.stringify(stats));
      }
    }
  }

  handleHeroChange(hero) {
    this.setState({
      levelNumber: this.state.levelNumber,
      level: this.state.level,
      hero: hero,
      difficultyLevel: this.state.difficultyLevel,
    });
    localStorage.setItem(gameKey, JSON.stringify(this.state));
  }

  handleDifficultyChange(difficulty) {
    this.setState({
      levelNumber: 1,
      level: difficulty === EASY ? EasyLevels[1] : HardLevels[1],
      hero: this.state.hero,
      difficultyLevel: difficulty,
    });
    localStorage.setItem(gameKey, JSON.stringify(this.state));
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }
  onKeyDown(e) {
    switch (e.keyCode) {
      case 37: //left
        localStorage.setItem(gameKey, JSON.stringify(this.state));
        break;
      case 38: //up
        localStorage.setItem(gameKey, JSON.stringify(this.state));
        break;
      case 39: // right
        localStorage.setItem(gameKey, JSON.stringify(this.state));
        break;
      case 40: //down
        localStorage.setItem(gameKey, JSON.stringify(this.state));
        break;
      default:
        return;
    }
  }
  render() {
    return (
      <div className="game">
        <h1>
          {this.state.level === null ? " " : "Level " + this.state.levelNumber}
        </h1>
        <Counter key={this.state.levelNumber}></Counter>

        <Music></Music>
        <GameDifficultySwitch
          onDifficultyChanged={this.handleDifficultyChange}
          difficulty={this.state.difficultyLevel}
        ></GameDifficultySwitch>
        <HeroSwitch
          onHeroChanged={this.handleHeroChange}
          hero={this.state.hero}
        ></HeroSwitch>
        <NewGame></NewGame>
        <Statistics></Statistics>
        {this.state.level === null ? (
          <Win hero={this.state.hero}></Win>
        ) : (
          <GameField
            onLevelChanged={this.handleLevelChange}
            level={this.state.level}
            hero={this.state.hero}
            difficulty={this.state.difficultyLevel}
          ></GameField>
        )}
      </div>
    );
  }
}
