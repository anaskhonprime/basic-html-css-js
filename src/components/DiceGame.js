import React from "react";

import "../styles/dice.css"
import { dice1, dice2, dice3, dice4, dice5, dice6 } from "../assets/dice/dice.js";


function Dice() {
  return (
    <div className="dice-body">
      <div class="container">
        <h1>Refresh Me</h1>

        <div class="dice">
          <p>Player 1</p>
          <img class="img1" src={dice2} alt="" />
        </div>

        <div class="dice">
          <p>Player 2</p>
          <img class="img2" src={dice1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dice;
