import React, { Component } from "react";
import "./assets/style.css";

import startImg from "./assets/img/start.svg";
import strictImg from "./assets/img/strict.svg";

import { Point } from "./components/Point";
import { Simon } from "./components/Simon";
import { setTime, SOUNDS, playAudio } from "./components/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ligado: false,
      strict: false,
      listColors: [],
      positionColor: 0,
      turnColor: "",
      point: 0
    };
  }

  startGame = () => {
    console.log("Start game");
    let listColors = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 4)
    );
    console.log(listColors);
    this.setState(
      {
        listColors: listColors,
        point: 0,
        positionColor: 0
      },
      () => this.turnOnSequence()
    );
  };

  turnOnSequence = () => {
    let { listColors , positionColor } = this.state;
    console.log('sequence')
    for(var i = 0; i <= 5; i++ ){
      console.log(listColors[i])
      setTime(() => this.turnOn(listColors[i]));
    }
  }

  turnOn = numColor => {
    let { positionColor, listColors } = this.state;
    let turnColor = listColors[positionColor];

    console.log(`position: ${positionColor}`)
    console.log(`turnColor: ${turnColor}`)
    console.log(`numColor: ${numColor}`)

    playAudio(numColor || turnColor);
    this.setState(
      {
        turnColor: numColor || turnColor
      },
      setTime(() => this.setState({ turnColor: "" }))
    );
  };

  onClickColor = numColor => {
    this.turnOn(numColor);
    setTime(() => this.verificaColor(numColor))
  };

  verificaColor = numColor => {
    let { positionColor, listColors, strict, point } = this.state;
    if (listColors[positionColor] === numColor) {
      console.log("It's right");
      this.setState(
        {
          point: point + 1,
          positionColor: positionColor + 1
        },
        () => this.turnOn()
      );
    } else {
      alert("It's wrong!!");
      if (strict) {
        this.startGame();
      } else {
        this.turnOn(listColors[positionColor]);
      }
    }
  };

  render() {
    let { ligado, strict, turnColor, point } = this.state;

    return (
      <div className="game">
        <div className={`board ${ligado ? "on" : "off"}`}>
          <Simon colorTurnOn={turnColor} onClickColor={this.onClickColor} />

          <audio id={`audio0`} src={SOUNDS.sound0} />
          <audio id={`audio1`} src={SOUNDS.sound1} />
          <audio id={`audio2`} src={SOUNDS.sound2} />
          <audio id={`audio3`} src={SOUNDS.sound3} />

          <div className="menu">
            <Point value={point} />

            <div className="buttons">
              <div
                className="btn-start"
                onClick={ligado ? this.startGame : () => {}}
              >
                <img src={startImg} alt="Start" />
                <span>START</span>
              </div>
              <div
                className="btn-strict"
                onClick={
                  ligado ? () => this.setState({ strict: !strict }) : () => {}
                }
              >
                <img src={strictImg} alt="Strict" />
                STRICT
              </div>
              <div className={`strict ${strict ? "on" : "off"}`} />
            </div>

            <div
              className={`on-off ${ligado ? "on" : "off"}`}
              onClick={() => this.setState({ ligado: !this.state.ligado, strict: false, point: 0})}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
