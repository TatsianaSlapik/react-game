import "./GameField.scss";
import Row from "./Row";

import React from "react";
import { HERO, TREE, EMPTY } from "../config/levels.js";

export default class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.findHero = this.findHero.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = this.findHero();
  }

  findHero() {
    for (var i = 0; i < this.props.level.length; i++) {
      for (var j = 0; j < this.props.level[i].length; j++) {
        if (this.props.level[i][j].className === HERO) {
          return { row: i, column: j };
        }
      }
    }
  }

  onKeyDown(e) {
    let heroPosition = this.findHero();
    switch (e.keyCode) {
      case 37: //left
        if (
          heroPosition.column - 1 >= 0 &&
          this.props.level[heroPosition.row][heroPosition.column - 1]
            .className !== TREE &&
          this.props.level[heroPosition.row][heroPosition.column - 1]
            .className !== EMPTY
        ) {
          this.props.onLevelChanged();
          break;
        }
        if (
          heroPosition.column - 1 >= 0 &&
          this.props.level[heroPosition.row][heroPosition.column - 1]
            .className !== TREE
        ) {
          this.props.level[heroPosition.row][
            heroPosition.column
          ].className = EMPTY;
          this.props.level[heroPosition.row][
            heroPosition.column - 1
          ].className = HERO;

          this.setState(this.findHero);
        }

        break;
      case 38: //up
        if (
          heroPosition.row - 1 >= 0 &&
          this.props.level[heroPosition.row - 1][heroPosition.column]
            .className !== TREE &&
          this.props.level[heroPosition.row - 1][heroPosition.column]
            .className !== EMPTY
        ) {
          this.props.onLevelChanged();
          break;
        }
        if (
          heroPosition.row - 1 >= 0 &&
          this.props.level[heroPosition.row - 1][heroPosition.column]
            .className !== TREE
        ) {
          this.props.level[heroPosition.row][
            heroPosition.column
          ].className = EMPTY;
          this.props.level[heroPosition.row - 1][
            heroPosition.column
          ].className = HERO;

          this.setState(this.findHero);
        }
        break;
      case 39: // right
        if (
          heroPosition.column + 1 < this.props.level.length &&
          this.props.level[heroPosition.row][heroPosition.column + 1]
            .className !== TREE &&
          this.props.level[heroPosition.row][heroPosition.column + 1]
            .className !== EMPTY
        ) {
          this.props.onLevelChanged();
          break;
        }
        if (
          heroPosition.column + 1 < this.props.level.length &&
          this.props.level[heroPosition.row][heroPosition.column + 1]
            .className !== TREE
        ) {
          this.props.level[heroPosition.row][
            heroPosition.column
          ].className = EMPTY;
          this.props.level[heroPosition.row][
            heroPosition.column + 1
          ].className = HERO;

          this.setState(this.findHero);
        }

        break;
      case 40: //down
        if (
          heroPosition.row + 1 < this.props.level.length &&
          this.props.level[heroPosition.row + 1][heroPosition.column]
            .className !== TREE &&
          this.props.level[heroPosition.row + 1][heroPosition.column]
            .className !== EMPTY
        ) {
          this.props.onLevelChanged();
          break;
        }
        if (
          heroPosition.row + 1 < this.props.level.length &&
          this.props.level[heroPosition.row + 1][heroPosition.column]
            .className !== TREE
        ) {
          this.props.level[heroPosition.row][
            heroPosition.column
          ].className = EMPTY;
          this.props.level[heroPosition.row + 1][
            heroPosition.column
          ].className = HERO;

          this.setState(this.findHero);
        }
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
      <div className={`field ${this.props.difficulty}`}>
        {this.props.level.map((row, index) => (
          <Row row={row} key={index} hero={this.props.hero}></Row>
        ))}
      </div>
    );
  }
}
