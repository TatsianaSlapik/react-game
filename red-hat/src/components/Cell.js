import "./Cell.scss";

function Cell(props) {
  return <div className={`cell ${props.cell.className}`}></div>;
}

export default Cell;
