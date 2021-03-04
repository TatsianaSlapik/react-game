import React from "react";

export default function Statistics() {
  let stats = JSON.parse(localStorage.getItem("stats"));

  return stats !== null ? (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Hero</th>
          <th>Difficulty</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((el, index) => (
          <tr key={index}>
            <td>{el.hero}</td>
            <td>{el.difficulty}</td>
            <td>{el.counter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    ""
  );
}
