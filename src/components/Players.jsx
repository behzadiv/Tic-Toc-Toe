import { useSelector } from "react-redux";
import { iconCreator } from "../utils/iconCreator";
import 'animate.css';
const Players = () => {
 const player = useSelector(state=>state.player.player)
 console.log(player);
  const [circle, xmark] = iconCreator();
  return (
    <div className="player-container">
      <button className={player ==="X"? "players-btn playerTurn animate__heartBeat" : "players-btn"}>{circle}</button>
      <button className="btn players" className={player ==="Y"? "players-btn playerTurn animate__heartBeat" : "players-btn"}>{xmark}</button>
    </div>
  );
};

export default Players;
