import "./GameField.scss";
import Row from "./Row";
/*const rows = [
  [{row:1, colum:1, text:"hat"},
   {row:1, colum:2, text:" "},
   {row:1, colum:3, text:" "}, 
   {row:1, colum:4, text:"house"}],
 /* [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];*/
export default function GameField(props) {
  return (
    <div className="field">
      {props.level.map((row, index) => (
        <Row row={row} key={index}></Row>
      ))}
    </div>
  );
}
