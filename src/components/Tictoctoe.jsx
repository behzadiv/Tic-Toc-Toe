import "../App.css";
import { useState } from "react";
import { CheckWinner } from "../utils/CheckingWinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chengePlayer } from "../redux/player/playerAction";
import ReactDOMServer from "react-dom/server";
import { gameAlert } from "../utils/gameAlert";
import { iconCreator } from "../utils/iconCreator";
import Players from "./Players";
import "animate.css";
const Toictoctoe = () => {
  const player = useSelector((state) => state.player.player);
  const dispatch = useDispatch();
  const [selectedPlayerX, setSelectedPlayerX] = useState([]);
  const [selectedPlayerY, setSelectedPlayerY] = useState([]);
  //permit players to play
  const [allow, setAllow] = useState(true);
  //bring my icons
  const [circle, xmark] = iconCreator();
  const selectedByPlayers = (e) => {
    //pop number from my Id to select which box selected and push that number to selectedPlayer Arrays
    const myId = e.target.id;
    const idToArray = myId.split("");
    let selectedId = parseInt(idToArray[1]);
    let selectedBox = document.getElementById(myId);

    if (player === "X" && selectedBox.innerHTML === "") {
      selectedPlayerX.push(selectedId);
      dispatch(chengePlayer("Y"));
      selectedBox.innerHTML = ReactDOMServer.renderToString(circle);
      if (selectedPlayerX.length > 2) {
        const [result,winnerLine] = CheckWinner(selectedPlayerX, player);
       //console.log(winnerLine,result);
       winnerLine.map((item)=>document.getElementById(`B${item}`).classList.add("animate"))
       if (result !== "playing") {
           gameAlert(result);
           setAllow(false);
        }
      }
    } else if (player === "Y" && selectedBox.innerHTML === "") {
      selectedPlayerY.push(selectedId);
      dispatch(chengePlayer("X"));
      selectedBox.innerHTML = ReactDOMServer.renderToString(xmark);
      if (selectedPlayerY.length > 2) {
        const [result,winnerLine] = CheckWinner(selectedPlayerY, player);
        //console.log(winnerLine,result);
        winnerLine.map((item)=>document.getElementById(`B${item}`).classList.add("animate"))
        if (result !== "playing") {
          gameAlert(result);
          setAllow(false);
        }
      }
    }
  };
  const resetGame = () => {
    dispatch(chengePlayer("X"));
    setSelectedPlayerX([]);
    setSelectedPlayerY([]);
    setAllow(true);
    let myBoxs = document.getElementsByClassName("container")[0].childNodes;
    Array.from(myBoxs).map((div) => {(div.innerHTML = "");div.classList.remove("animate")});
  };
  return (
    <div className="App">
      <Players />
      <section
        className="container"
        onClick={(e) => (allow ? selectedByPlayers(e) : null)}
      >
        <div className="section" id="B1"></div>
        <div className="section" id="B2"></div>
        <div className="section" id="B3"></div>
        <div className="section" id="B4"></div>
        <div className="section" id="B5"></div>
        <div className="section" id="B6"></div>
        <div className="section" id="B7"></div>
        <div className="section" id="B8"></div>
        <div className="section" id="B9"></div>
      </section>
      <section>
        <button className="btn reset" onClick={() => resetGame()}>
          Restart Game
        </button>
      </section>
    </div>
  );
};

export default Toictoctoe;
