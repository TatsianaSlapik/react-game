import "./Cell.scss";

export default function Cell(props) {
  return <div className={`cell ${props.cell.className}`}></div>;
}
