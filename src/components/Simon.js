import React from "react";

export const Simon = ({colorTurnOn, onClickColor}) => (
  <div className="simon">
    <div onClick={() => onClickColor(0)} className={`green ${colorTurnOn === 0 && "on" }`} />
    <div onClick={() => onClickColor(1)} className={`red ${colorTurnOn === 1 && "on" }`} />
    <div onClick={() => onClickColor(2)} className={`yellow ${colorTurnOn === 2 && "on" }`} />
    <div onClick={() => onClickColor(3)} className={`blue ${colorTurnOn === 3 && "on" }`} />
  </div>
);
