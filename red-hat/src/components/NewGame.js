export default function NewGame() {
  return (
    <button
      className="new"
      onClick={() => {
        localStorage.clear();
        document.location.reload();
      }}
    >
      New Game
    </button>
  );
}
