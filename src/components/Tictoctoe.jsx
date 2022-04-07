import "../App.css";
import { useState } from "react";
import { CheckWinner } from "../utils/CheckingWinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chengePlayer } from "../redux/player/playerAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOMServer from "react-dom/server";
import { gameAlert } from "../utils/gameAlert";
const Toictoctoe = () => {
  const player = useSelector((state) => state.player.player);
  const dispatch = useDispatch();
  const [selectedPlayerX, setSelectedPlayerX] = useState([]);
  const [selectedPlayerY, setSelectedPlayerY] = useState([]);
  //my svg icons
  const circle = <FontAwesomeIcon icon={faCircle} className="iconCircle" />;
  const xmark = <FontAwesomeIcon icon={faXmark} className="iconXmark" />;

 
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
        const result = CheckWinner(selectedPlayerX, player);
        console.log(result);
        if (result !== "playing") gameAlert(result);
      }
    } else if (player === "Y" && selectedBox.innerHTML === "") {
      selectedPlayerY.push(selectedId);
      dispatch(chengePlayer("X"));
      selectedBox.innerHTML = ReactDOMServer.renderToString(xmark);
      if (selectedPlayerY.length > 2) {
        const result = CheckWinner(selectedPlayerY, player);
        console.log(result);
        if (result !== "playing") gameAlert(result);
      }
    }
  };
  const resetGame = () => {
    dispatch(chengePlayer("X"));
    setSelectedPlayerX([]);
    setSelectedPlayerY([]);
    let myBoxs = document.getElementsByClassName("container")[0].childNodes;
    Array.from(myBoxs).map((div) => (div.innerHTML = ""));
    console.log(typeof myBoxs, myBoxs);
  };
  return (
    <div className="App">
      <div className="App">
        <section className="container" onClick={(e) => selectedByPlayers(e)}>
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
            Play again!
          </button>
        </section> 
      </div>
    </div>
  );
};

export default Toictoctoe;
