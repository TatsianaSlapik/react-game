import GameField from "./GameField";
import "./Game.scss";
import { levels } from "config/levels";

export default function Game(props) {
  return (
    <div className="game">
      <GameField level={levels[props.levelNumber]}></GameField>
    </div>
  );
}
