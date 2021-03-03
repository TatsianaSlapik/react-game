import { RED_HAT } from "config/levels";
import React from "react";
import redHatFinal from "../assets/final-redhat-and-grandma.jpg";
import wolfFinal from "../assets/final-wolf.jpg";
import "./Win.scss";

export default class Win extends React.Component {
  render() {
    return (
      <div class="win card-body">
        <h1 class="card-title">You win!</h1>
        <img
          src={this.props.hero === RED_HAT ? redHatFinal : wolfFinal}
          alt="final"
        ></img>
        <button
          onClick={() => {
            document.location.reload();
            localStorage.removeItem("game");
          }}
          type="button"
          class="btn btn-primary"
        >
          New Game
        </button>
      </div>
    );
  }
}
