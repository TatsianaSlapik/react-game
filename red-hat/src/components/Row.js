import Cell from "./Cell";

export default function Row(props) {
  return (
    <div className="row align-items-start">
      {props.row.map((cell, index) => (
        <Cell cell={cell} key={index}></Cell>
      ))}
    </div>
  );
}
