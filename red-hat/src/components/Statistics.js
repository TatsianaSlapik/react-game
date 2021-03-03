export default function Statistics() {
  let stats = JSON.parse(localStorage.getItem("stats"));

  return stats !== null ? (
    <ul>
      {stats.map((el) => (
        <li>{el.hero} </li>
      ))}
    </ul>
  ) : (
    ""
  );
}
