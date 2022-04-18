import { useSelector } from "react-redux";
import { iconCreator } from "../utils/iconCreator";
import "animate.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeThemeToDark, changeThemeToLight } from "../redux/theme/themeAction";
const Players = () => {
  const player = useSelector((state) => state.player.player);
  console.log(player);
  const [circle, xmark] = iconCreator();
  const numberOfXWinner = useSelector(
    (state) => state.winnerQty.numberOfXWinner
  );
  const numberOfYWinner = useSelector(
    (state) => state.winnerQty.numberOfYWinner
  );
 const theme= useSelector(state=>state.theme.theme)
 const dispatch = useDispatch()
console.log(theme);
  return (
    <div className="player-container">
      <div className="title-container">
        <h2 className={theme==="light"? "game-title light" : "game-title dark"}>Tic Toc Toe</h2>
        <div className={`theme-container-${theme}`} onClick={theme==="light"? ()=>dispatch(changeThemeToDark()):()=>dispatch(changeThemeToLight())}>
          <p>Light</p>
          <p>Dark</p>
          <span className={theme==="light"? "toggle dark" :"toggle light"}></span>
        </div>
      </div>
      <div className="btn-container">
        <div
          className={
            player === "X"
              ? `players-btn-${theme} playerTurn-${theme} animate__bounceIn`
              : `players-btn-${theme}`
          }
        >
          <span>{circle}</span>
          <span className={theme==="light"? "winnerQty dark" :"winnerQty light"}>{numberOfXWinner}</span>
        </div>
        <div
          className={
            player === "Y"
              ? `players-btn-${theme} playerTurn-${theme} animate__bounceIn`
              : `players-btn-${theme}`
          }
        >
          <span>{xmark}</span>
          <span className={theme==="light"? "winnerQty dark" :"winnerQty light"}>{numberOfYWinner}</span>
        </div>
      </div>
    </div>
  );
};

export default Players;
