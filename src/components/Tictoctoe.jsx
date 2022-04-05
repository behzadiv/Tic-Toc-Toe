import "../App.css";
import { useState } from "react";
import { checkWinner } from "../utils/CheckingWinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { chengePlayer } from "../redux/player/playerAction";

const Toictoctoe = () => {
  const player = useSelector((state) => state.player.player);
  const dispatch = useDispatch();
  const [selectedPlayerX, setSelectedPlayerX] = useState([]);
  const [selectedPlayerY, setSelectedPlayerY] = useState([]);

  const selectedByPlayers = (e) => {
    let selectedId = parseInt(e.target.id);
    let selectedBox = document.getElementById(selectedId);
    if (player === "X" && selectedBox.innerHTML === "") {
      selectedPlayerX.push(selectedId);
      selectedBox.innerHTML = "*";
      dispatch(chengePlayer("Y"));
      if (selectedPlayerX.length > 2) {
        checkWinner(selectedPlayerX, player);
      }
    } else if (player === "Y" && selectedBox.innerHTML === "") {
      selectedPlayerY.push(selectedId);
      selectedBox.innerHTML = "+";
      dispatch(chengePlayer("X"));
      if (selectedPlayerX.length > 2) {
        checkWinner(selectedPlayerY, player);
      }
    }
  };
  return (
    <div className="App">
      <section className="container" onClick={(e) => selectedByPlayers(e)}>
        <div className="section" id="1"></div>
        <div className="section" id="2"></div>
        <div className="section" id="3"></div>
        <div className="section" id="4"></div>
        <div className="section" id="5"></div>
        <div className="section" id="6"></div>
        <div className="section" id="7"></div>
        <div className="section" id="8"></div>
        <div className="section" id="9"></div>
      </section>
    </div>
  );
};

export default Toictoctoe;
