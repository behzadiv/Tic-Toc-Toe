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
import { addXWinner, addYWinner, resetResult } from "../redux/winnerCounter/winnerQtyAction";
import Swal from "sweetalert2";
const Toictoctoe = () => {
  const player = useSelector((state) => state.player.player);
  const {numberOfXWinner, numberOfYWinner}  = useSelector((state)=> state.winnerQty)
  //console.log(numberOfXWinner,numberOfYWinner);
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
    if (selectedBox.innerHTML === "") {
      switch (player) {
        case "X":
          selectedPlayerX.push(selectedId);
          dispatch(chengePlayer("Y"));
          selectedBox.innerHTML = ReactDOMServer.renderToString(circle);
          if (selectedPlayerX.length > 2) {
            const [result, winnerLine] = CheckWinner(selectedPlayerX, player);
            //console.log(winnerLine,result);
            winnerLine.map((item) =>
              document.getElementById(`B${item}`).classList.add("animate")
            );
            calculateResult(result);
          }
          break;
        case "Y":
          selectedPlayerY.push(selectedId);
          dispatch(chengePlayer("X"));
          selectedBox.innerHTML = ReactDOMServer.renderToString(xmark);
          if (selectedPlayerY.length > 2) {
            const [result, winnerLine] = CheckWinner(selectedPlayerY, player);
            //console.log(winnerLine,result);
            winnerLine.map((item) =>
              document.getElementById(`B${item}`).classList.add("animate")
            );
            calculateResult(result);
          }
          break;
        default:
          return;
      }
    }
  };
  const calculateResult = (result) => {
    console.log(result);
    switch (result) {
      case "X":
        return dispatch(addXWinner()), gameAlert(result), setAllow(false);
        break;
      case "Y":
        return dispatch(addYWinner()), gameAlert(result), setAllow(false);
        break;
      case "Draw":
        return gameAlert(result), setAllow(false);
      default:
        break;
    }
  };
  const resetGame = () => {
    dispatch(chengePlayer("X"));
    setSelectedPlayerX([]);
    setSelectedPlayerY([]);
    setAllow(true);
    let myBoxs = document.getElementsByClassName("container")[0].childNodes;
    Array.from(myBoxs).map((div) => {
      div.innerHTML = "";
      div.classList.remove("animate");
    });
  };
  const resetingResults = ()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset!'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(resetResult())
            resetGame()
          Swal.fire(
            'Deleted!',
            'Reset successfully',
            'success'
          )
        }
      })
  }
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
      <section className="reset-btn-container">
        <button className="btn play-again" onClick={() => resetGame()}>
          Play again
        </button>
        <button className="btn reset" onClick={() => resetingResults()}disabled ={numberOfXWinner||numberOfYWinner ? "":true}>
          Reset
        </button>
      </section>
    </div>
  );
};

export default Toictoctoe;
