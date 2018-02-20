import React, { Component } from "react";
import "./assets/style.css";
import startImg from "./assets/img/start.svg";
import strictImg from "./assets/img/strict.svg";

import { Point } from "./components/Point";
import { Simon } from "./components/Simon";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ligado: false,
      strict: false
    };
  }

  ligaDesligaSimon = () => {
    this.setState({ ligado: !this.state.ligado });
  };

  ligaDesligaStrict = () => {
    let { ligado, strict } = this.state;
    if (ligado) {
      this.setState({ strict: !strict });
    }
  };

  render() {
    let { ligado, strict } = this.state;

    return (
      <div className="game">
        <div className={`board ${ligado ? "on" : "off"}`}>
          <Simon />

          <div className="menu">
            <Point />

            <div className="buttons">
              <div className="btn-start">
                <img src={startImg} alt="Start" />
                <span>START</span>
              </div>
              <div
                className="btn-strict"
                onClick={() => this.ligaDesligaStrict()}
              >
                <img src={strictImg} alt="Strict" />
                STRICT
              </div>
              <div className={`strict ${strict ? "on" : "off"}`} />
            </div>

            <div
              className={`on-off ${ligado ? "on" : "off"}`}
              onClick={() => this.ligaDesligaSimon()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
