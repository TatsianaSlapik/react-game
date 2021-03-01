import "./GameField.scss";
import Row from "./Row";

import React from "react";
import { size, heroName, HOUSE, TREE, EMPTY } from "config/levels";

export default class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.findHero = this.findHero.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = this.findHero();
  }

  findHero() {
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (this.props.level[i][j].className === heroName) {
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
            .className === HOUSE
        ) {
          console.log("Win1");
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
          ].className = heroName;

          this.setState(this.findHero);
        }

        break;
      case 38: //up
        if (
          heroPosition.row - 1 >= 0 &&
          this.props.level[heroPosition.row - 1][heroPosition.column]
            .className === HOUSE
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
          ].className = heroName;

          this.setState(this.findHero);
        }
        break;
      case 39: // right
        if (
          heroPosition.column + 1 <= size &&
          this.props.level[heroPosition.row][heroPosition.column + 1]
            .className === HOUSE
        ) {
          this.props.onLevelChanged();
          break;
        }
        if (
          this.props.level[heroPosition.row][heroPosition.column + 1]
            .className !== TREE &&
          heroPosition.column + 1 <= size
        ) {
          this.props.level[heroPosition.row][
            heroPosition.column
          ].className = EMPTY;
          this.props.level[heroPosition.row][
            heroPosition.column + 1
          ].className = heroName;

          this.setState(this.findHero);
        }

        break;
      case 40: //down
        if (
          heroPosition.row + 1 <= size &&
          this.props.level[heroPosition.row + 1][heroPosition.column]
            .className === HOUSE
        ) {
          this.props.onLevelChanged();
          break;
        }
        if (
          this.props.level[heroPosition.row + 1][heroPosition.column]
            .className !== TREE &&
          heroPosition.row + 1 <= size
        ) {
          this.props.level[heroPosition.row][
            heroPosition.column
          ].className = EMPTY;
          this.props.level[heroPosition.row + 1][
            heroPosition.column
          ].className = heroName;

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
      <div className="field">
        {this.props.level.map((row, index) => (
          <Row row={row} key={index}></Row>
        ))}
      </div>
    );
  }
}

/*export default function GameField(props) {
  let [level] = useState(props.level);
  let [heroPosition, setHeroPosition] = useState(findHero());

  function findHero() {
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (level[i][j].className === heroName) {
          return { row: i, column: j };
        }
      }
    }
  }

  function onKeyDown(e) {
    switch (e.keyCode) {
      case 37: //left
        if (
          heroPosition.column - 1 >= 0 &&
          level[heroPosition.row][heroPosition.column - 1].className === HOUSE
        ) {
          console.log("Win1");
        }
        if (
          heroPosition.column - 1 >= 0 &&
          level[heroPosition.row][heroPosition.column - 1].className !== TREE
        ) {
          level[heroPosition.row][heroPosition.column].className = " ";
          level[heroPosition.row][heroPosition.column - 1].className = heroName;

          setHeroPosition(findHero());
        }

        break;
      case 38: //up
        if (
          heroPosition.row - 1 >= 0 &&
          level[heroPosition.row - 1][heroPosition.column].className === HOUSE
        ) {
          console.log("Win1");
        }
        if (
          heroPosition.row - 1 >= 0 &&
          level[heroPosition.row - 1][heroPosition.column].className !== TREE
        ) {
          level[heroPosition.row][heroPosition.column].className = " ";
          level[heroPosition.row - 1][heroPosition.column].className = heroName;

          setHeroPosition(findHero());
        }
        break;
      case 39: // right
        if (
          heroPosition.column + 1 <= size &&
          level[heroPosition.row][heroPosition.column + 1].className === HOUSE
        ) {
          this.props.onLevelChanged();
        }
        if (
          level[heroPosition.row][heroPosition.column + 1].className !== TREE &&
          heroPosition.column + 1 <= size
        ) {
          level[heroPosition.row][heroPosition.column].className = " ";
          level[heroPosition.row][heroPosition.column + 1].className = heroName;
          setHeroPosition(findHero());
        }

        break;
      case 40: //down
        if (
          heroPosition.row + 1 <= size &&
          level[heroPosition.row + 1][heroPosition.column].className === HOUSE
        ) {
          console.log("Win1");
        }
        if (
          level[heroPosition.row + 1][heroPosition.column].className !== TREE &&
          heroPosition.row + 1 <= size
        ) {
          level[heroPosition.row][heroPosition.column].className = " ";
          level[heroPosition.row + 1][heroPosition.column].className = heroName;
          setHeroPosition(findHero());
        }
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <div className="field">
      {level.map((row, index) => (
        <Row row={row} key={index}></Row>
      ))}
    </div>
  );
}*/
