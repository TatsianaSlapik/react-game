import Cell from "./Cell";
import { HERO } from "../config/levels";
import React from "react";

export default function Row(props) {
  return (
    <div className="row_new ">
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
