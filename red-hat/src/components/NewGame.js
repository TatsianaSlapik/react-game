import React from "react";

export default function NewGame() {
  return (
    <button
      className="new btn btn-info"
      onClick={() => {
        localStorage.clear();
        document.location.reload();
      }}
    >
      New Game
    </button>
  );
}
