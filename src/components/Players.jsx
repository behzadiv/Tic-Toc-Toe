import { useSelector } from "react-redux";
import { iconCreator } from "../utils/iconCreator";
import 'animate.css';
const Players = () => {
 const player = useSelector(state=>state.player.player)
 console.log(player);
  const [circle, xmark] = iconCreator();
  const numberOfXWinner = useSelector((state)=>state.winnerQty.numberOfXWinner)
  const numberOfYWinner = useSelector((state)=>state.winnerQty.numberOfYWinner)
  
  return (
    <div className="player-container">
        <h2 className="game-title">Tic Toc Toe</h2>
      <div className="btn-container">
      <div className={player ==="X"? "players-btn playerTurn animate__heartBeat" : "players-btn"}><span>{circle}</span><span className="winnerQty">{numberOfXWinner}</span></div>
      <div className={player ==="Y"? "players-btn playerTurn animate__heartBeat" : "players-btn"}><span>{xmark}</span><span className="winnerQty">{numberOfYWinner}</span></div>
    
      </div>
      </div>
  );
};

export default Players;
