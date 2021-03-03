import React from "react";
import music from "../assets/sounds/gameMusic.mp3";
import sound from "../assets/sounds/stepSound.mp3";
import "./Music.scss";
import musicOn from "../assets/music_on.png";
import musicOff from "../assets/music_off.png";
import soundOn from "../assets/sound_on.png";
import soundOff from "../assets/sound_off.png";
export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playMusic: false,
      playSound: true,
    };
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  gameMusic = new Audio(music);
  stepSound = new Audio(sound);

  componentDidMount() {
    this.gameMusic.addEventListener("ended", () =>
      this.setState({ playMusic: false, playSound: true })
    );
    this.stepSound.addEventListener("ended", () =>
      this.setState({ playMusic: this.state.playMusic, playSound: true })
    );
    document.addEventListener("keydown", this.onKeyDown);
    this.gameMusic.loop = true;
  }

  componentWillUnmount() {
    this.gameMusic.removeEventListener("ended", () =>
      this.setState({ playMusic: false, playSound: true })
    );
    this.stepSound.removeEventListener("ended", () =>
      this.setState({ playMusic: false, playSound: true })
    );
    document.removeEventListener("keydown", this.onKeyDown);
  }

  togglePlayMusic = () => {
    this.setState(
      { playMusic: !this.state.playMusic, playSound: this.state.playSound },
      () => {
        this.state.playMusic ? this.gameMusic.play() : this.gameMusic.pause();
      }
    );
  };
  togglePlaySound = () => {
    this.setState(
      { playMusic: this.state.playMusic, playSound: !this.state.playSound },
      () => {
        this.state.playMusic ? this.stepSound.play() : this.stepSound.pause();
      }
    );
  };

  onKeyDown(e) {
    switch (e.keyCode) {
      case 37: //left
        this.stepSound.play();
        break;
      case 38: //up
        this.stepSound.play();
        break;
      case 39: // right
        this.stepSound.play();
        break;
      case 40: //down
        this.stepSound.play();
        break;
      case 32: //space
        this.stepSound.muted = !this.stepSound.muted;
        this.gameMusic.muted = !this.gameMusic.muted;
        this.setState({
          playMusic: !this.state.playMusic,
          playSound: !this.state.playSound,
        });

        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <fieldset>
          <img
            src={this.state.playMusic ? musicOn : musicOff}
            alt="music"
            onClick={this.togglePlayMusic}
          />
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            className=""
            id="gameMusic"
            onChange={(e) => {
              this.gameMusic.volume = e.target.value / 100;
            }}
          />
        </fieldset>
        <fieldset className="form-group">
          <img
            src={this.state.playSound ? soundOn : soundOff}
            alt="sound"
            onClick={this.togglePlaySound}
          />
          <input
            min="0"
            max="100"
            step="10"
            type="range"
            className=" custom custom-range"
            id="stepSound"
            onChange={(e) => {
              this.stepSound.volume = e.target.value / 100;
            }}
          />
        </fieldset>
      </div>
    );
  }
}
