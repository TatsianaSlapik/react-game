import Cell from "./Cell";
import { HERO } from "../config/levels";

export default function Row(props) {
  return (
    <div className="row align-items-start">
      {props.row.map((cell, index) =>
        cell.className === HERO ? (
          <Cell className={props.hero} key={index}></Cell>
        ) : (
          <Cell className={cell.className} key={index}></Cell>
        )
      )}
    </div>
  );
}
